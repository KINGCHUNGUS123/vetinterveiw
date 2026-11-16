import "./style.css";
import { BANK } from "./content.js";
const CHECKLIST = [
  "Answered the question that was actually asked",
  "Clear structure (point → example → what I learned)",
  "Used a specific, real example",
  "Showed empathy and considered others' (and the animal's) view",
  "Finished on time without rushing or trailing off",
  "Good delivery: eye contact with lens, steady pace, few 'ums'",
];

const $ = id => document.getElementById(id);
const fmt = s => { s=Math.max(0,Math.ceil(s||0)); return Math.floor(s/60)+":"+String(s%60).padStart(2,"0"); };
function escapeHtml(s){ return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function fmtModel(s){ return escapeHtml(s).replace(/\[([^\]]+)\]/g,'<mark>[$1]</mark>'); }
const modelFor = q => (BANK.find(b=>b.q===q)||{}).m || "";
let toastT; function toast(msg){ const t=$("toast"); t.textContent=msg; t.classList.remove("hidden"); clearTimeout(toastT); toastT=setTimeout(()=>t.classList.add("hidden"),3200); }

/* ---------- storage (IndexedDB, optional) ---------- */
let db=null;
function openDB(){ return new Promise(res=>{ try{ const r=indexedDB.open("vetKiraPractice",1);
  r.onupgradeneeded=()=>r.result.createObjectStore("answers",{keyPath:"id"});
  r.onsuccess=()=>{db=r.result;res();}; r.onerror=()=>res(); }catch(e){res();} }); }
function dbPut(o){ try{ db && db.transaction("answers","readwrite").objectStore("answers").put(o);}catch(e){} }
function dbDel(id){ try{ db && db.transaction("answers","readwrite").objectStore("answers").delete(id);}catch(e){} }
function dbAll(){ return new Promise(res=>{ try{ if(!db) return res([]); const r=db.transaction("answers").objectStore("answers").getAll();
  r.onsuccess=()=>res(r.result||[]); r.onerror=()=>res([]);}catch(e){res([]);} }); }

/* ---------- state ---------- */
let answers=[], stream=null, mode="native";   // "live" (getUserMedia) or "native" (iPhone camera app)
let queue=[], qi=0, sessionId=null, recorder=null, chunks=[], tickT=null, phase=null, phaseEnd=0, phaseLen=0, recStart=0;
const cats=[...new Set(BANK.map(b=>b.c))];
const selCats=new Set(cats);

/* ---------- navigation ---------- */
function show(v){
  ["viewSetup","viewInterview","viewStudy","viewReview"].forEach(x=>$(x).classList.toggle("hidden",x!==v));
  $("tabSetup").classList.toggle("active",v==="viewSetup"||v==="viewInterview");
  $("tabStudy").classList.toggle("active",v==="viewStudy");
  $("tabReview").classList.toggle("active",v==="viewReview");
  $("tabs").classList.toggle("locked",v==="viewInterview");
  $("topSub").textContent = {viewSetup:"Kira-style mock interview",viewInterview:"Interview in progress",viewStudy:"Study model answers",viewReview:"Review your answers"}[v];
  if(v==="viewStudy") renderStudy();
  if(v==="viewReview") renderReview();
  window.scrollTo(0,0);
}
$("tabSetup").onclick=()=>show("viewSetup");
$("tabStudy").onclick=()=>show("viewStudy");
$("tabReview").onclick=()=>show("viewReview");

$("catChips").innerHTML = cats.map(c=>`<button class="chip on" data-c="${c}">${c}</button>`).join("");
$("catChips").querySelectorAll(".chip").forEach(ch=>ch.onclick=()=>{
  const c=ch.dataset.c; if(selCats.has(c)) selCats.delete(c); else selCats.add(c); ch.classList.toggle("on",selCats.has(c)); });

/* ---------- camera ---------- */
function pickMime(){
  if(!window.MediaRecorder) return null;
  for(const m of ["video/mp4;codecs=avc1,mp4a","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"]){
    try{ if(MediaRecorder.isTypeSupported(m)) return m; }catch(e){} }
  return "";
}
function useNative(reason){
  mode="native";
  $("camStatus").innerHTML = "📱 "+(reason||"Live recording isn't available here.")+" No problem: when it's time to answer, tap <strong>Record answer</strong> and your iPhone's camera app will open. Use the front camera and keep to the time shown.";
  $("camBtn").classList.add("hidden");
}
$("camBtn").onclick = async ()=>{
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || pickMime()===null){ useNative(); return; }
  try{
    stream = await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:720},height:{ideal:960}},audio:true});
    mode="live";
    $("preview").srcObject=stream; $("previewWrap").classList.remove("hidden");
    $("camStatus").innerHTML="✅ Camera and mic are working. Check your framing, then start.";
    $("camBtn").classList.add("hidden");
  }catch(e){
    if(e && e.name==="NotAllowedError" && window.isSecureContext && !inFrame()){
      $("camStatus").innerHTML="⚠️ Camera permission was blocked. In Settings › Safari › Camera (and Microphone), choose Ask or Allow, then reload. Or just start, and the iPhone camera app will be used instead.";
      mode="native";
    } else useNative();
  }
};
function inFrame(){ try{ return window.self!==window.top; }catch(e){ return true; } }

/* ---------- interview flow ---------- */
$("startBtn").onclick = ()=>{
  let pool=BANK.filter(b=>selCats.has(b.c));
  if(!pool.length){ toast("Pick at least one question type."); return; }
  if($("order").value==="random") pool=pool.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
  const n=$("numQ").value==="all"?pool.length:Math.min(+$("numQ").value,pool.length);
  startSession(pool.slice(0,n));
};
function startSession(list){
  if(mode!=="live") mode="native";
  queue=list; qi=0; sessionId=new Date().toISOString();
  $("liveCard").classList.toggle("hidden",mode!=="live");
  $("nativeCard").classList.toggle("hidden",mode!=="native");
  if(mode==="live") $("live").srcObject=stream;
  show("viewInterview"); nextQuestion();
}
function practiseOne(item){
  if(mode==="native" && !$("camBtn").classList.contains("hidden")) useNative("Using your iPhone camera app for this one.");
  startSession([item]);
}
function nextQuestion(){
  if(qi>=queue.length){ endSession(); return; }
  const it=queue[qi];
  $("progressText").textContent=`Question ${qi+1} of ${queue.length}`;
  const c=$("qcard"); c.classList.remove("pop"); void c.offsetWidth; c.classList.add("pop");
  $("qTag").textContent=it.c; $("qText").textContent=it.q;
  startPhase("prep",+$("prepT").value);
}
function startPhase(p,secs){
  phase=p; phaseLen=secs; phaseEnd=performance.now()+secs*1000;
  const lab=$("phaseLabel");
  lab.className="phase "+(p==="prep"?"prep":"rec");
  lab.innerHTML = p==="prep" ? "Thinking time" : (mode==="live" ? '<span class="dot"></span>Recording' : "Answer now");
  $("bar").classList.toggle("rec",p!=="prep");
  if(mode==="live"){
    $("skipPrepBtn").classList.toggle("hidden",p!=="prep");
    $("stopBtn").classList.toggle("hidden",p!=="rec");
    $("recBadge").classList.toggle("hidden",p!=="rec");
    if(p==="rec") beginRecording();
  } else {
    if(p==="prep"){
      $("nativeMsg").innerHTML="Think about your answer. When the timer ends (or you tap <strong>I'm ready</strong>), tap <strong>Record answer</strong>.";
      $("nativeReadyBtn").classList.remove("hidden"); $("nativeRecBtn").classList.add("hidden");
    } else {
      $("nativeMsg").innerHTML=`Tap <strong>Record answer</strong>, use the front camera, and aim to finish within <strong>${fmt(+$("ansT").value)}</strong>. Then tap <strong>Use Video</strong>.`;
      $("nativeReadyBtn").classList.add("hidden"); $("nativeRecBtn").classList.remove("hidden");
    }
  }
  clearInterval(tickT); tick(); tickT=setInterval(tick,200);
}
function tick(){
  if(phase!=="prep" && phase!=="rec") return;
  const left=(phaseEnd-performance.now())/1000;
  if(mode==="native" && phase==="rec"){
    $("timer").textContent = fmt(+$("ansT").value);  // target time; real length measured from the video
    $("barFill").style.width="100%";
    return;
  }
  $("timer").textContent=fmt(left);
  $("barFill").style.width=Math.min(100,100*(1-left/phaseLen))+"%";
  if(left<=0){
    clearInterval(tickT);
    if(phase==="prep") startPhase("rec",+$("ansT").value);
    else if(phase==="rec") stopRecording();
  }
}
$("skipPrepBtn").onclick=()=>{ if(phase==="prep"){ clearInterval(tickT); startPhase("rec",+$("ansT").value);} };
$("nativeReadyBtn").onclick=()=>{ if(phase==="prep"){ clearInterval(tickT); startPhase("rec",+$("ansT").value);} };
$("stopBtn").onclick=()=>{ if(phase==="rec"){ clearInterval(tickT); stopRecording(); } };

/* live recording */
function beginRecording(){
  chunks=[]; const m=pickMime();
  try{ recorder = m ? new MediaRecorder(stream,{mimeType:m}) : new MediaRecorder(stream); }catch(e){ recorder=new MediaRecorder(stream); }
  recorder.ondataavailable=e=>{ if(e.data&&e.data.size) chunks.push(e.data); };
  recorder.onstop=()=>{ const mime=recorder.mimeType||"video/mp4"; storeAnswer(new Blob(chunks,{type:mime}),mime,Math.round((performance.now()-recStart)/1000)); advance(); };
  recStart=performance.now(); recorder.start(1000);
}
function stopRecording(){
  phase="saving"; $("stopBtn").classList.add("hidden"); $("recBadge").classList.add("hidden");
  $("phaseLabel").className="phase"; $("phaseLabel").textContent="Saving…";
  if(recorder&&recorder.state!=="inactive") recorder.stop();
}

/* native (iPhone camera app) recording */
$("nativeInput").onchange = e=>{
  const f=e.target.files && e.target.files[0]; e.target.value="";
  if(!f||phase!=="rec") return;
  phase="saving"; $("nativeRecBtn").classList.add("hidden");
  $("nativeMsg").textContent="Saving…";
  const v=document.createElement("video"); v.preload="metadata"; v.muted=true; v.playsInline=true;
  const url=URL.createObjectURL(f); let done=false;
  const finish=d=>{ if(done) return; done=true; URL.revokeObjectURL(url); storeAnswer(f,f.type||"video/quicktime",isFinite(d)?Math.round(d):0); advance(); };
  v.onloadedmetadata=()=>finish(v.duration); v.onerror=()=>finish(0); setTimeout(()=>finish(0),4000);
  v.src=url;
};

function storeAnswer(blob,mime,dur){
  const it=queue[qi];
  const a={id:sessionId+"#"+qi+"#"+Math.random().toString(36).slice(2,7),session:sessionId,at:new Date().toISOString(),
    cat:it.c,q:it.q,tips:it.t,blob,mime,dur,checks:CHECKLIST.map(()=>false),rating:0,notes:""};
  answers.push(a); dbPut(a);
  if(mode==="native" && dur > +$("ansT").value + 5) toast(`That answer ran ${fmt(dur)}. The limit was ${fmt(+$("ansT").value)}.`);
}
function advance(){
  qi++; phase="between";
  $("phaseLabel").className="phase"; $("phaseLabel").textContent="Saved ✓"; $("timer").textContent=""; $("barFill").style.width="0%";
  setTimeout(nextQuestion,1500);
}
$("quitBtn").onclick=()=>{
  clearInterval(tickT);
  if(mode==="live" && phase==="rec" && recorder && recorder.state!=="inactive"){
    recorder.onstop=()=>{ const mime=recorder.mimeType||"video/mp4"; storeAnswer(new Blob(chunks,{type:mime}),mime,Math.round((performance.now()-recStart)/1000)); endSession(); };
    recorder.stop();
  } else endSession();
};
function endSession(){ phase=null; clearInterval(tickT); show("viewReview"); }

/* ---------- study ---------- */
$("studyCat").innerHTML=`<option value="all">All types</option>`+cats.map(c=>`<option>${c}</option>`).join("");
$("studyCat").onchange=renderStudy; $("studyHide").onchange=renderStudy;
function renderStudy(){
  const cat=$("studyCat").value, hide=$("studyHide").checked;
  const items=BANK.map((b,i)=>({...b,i})).filter(b=>cat==="all"||b.c===cat);
  $("studyList").innerHTML=items.map((b,n)=>`<div class="card" data-i="${b.i}">
    <span class="pill">${b.c}</span>
    <h3 style="margin-top:8px">${n+1}. ${escapeHtml(b.q)}</h3>
    <details><summary>Key points to cover</summary><ul class="tips">${b.t.map(t=>`<li>${t}</li>`).join("")}</ul></details>
    <div class="btnrow"><button class="btn secondary" data-act="reveal">${hide?"Show model answer":"Hide model answer"}</button>
      <button class="btn secondary" data-act="practise">🎥 Practise</button></div>
    <div class="model ${hide?"hidden":""}"><div class="model-h">Model answer · about ${Math.round(b.m.split(/\s+/).length/150*60)} sec spoken</div>${fmtModel(b.m)}</div>
  </div>`).join("");
  document.querySelectorAll("#studyList .card").forEach(card=>{
    const b=BANK[+card.dataset.i], box=card.querySelector(".model"), rb=card.querySelector('[data-act="reveal"]');
    rb.onclick=()=>{ box.classList.toggle("hidden"); rb.textContent=box.classList.contains("hidden")?"Show model answer":"Hide model answer"; };
    card.querySelector('[data-act="practise"]').onclick=()=>practiseOne(b);
  });
}

/* ---------- review ---------- */
const urlCache=new Map();
function urlFor(a){ if(!urlCache.has(a.id)) urlCache.set(a.id,URL.createObjectURL(a.blob)); return urlCache.get(a.id); }
function renderReview(){
  const list=$("reviewList");
  if(!answers.length){ list.innerHTML=`<div class="card empty"><h2>No answers yet</h2><p>Do a practice session and your answers will appear here.</p></div>`; return; }
  const ses={}; answers.forEach(a=>(ses[a.session]=ses[a.session]||[]).push(a));
  list.innerHTML=Object.keys(ses).sort().reverse().map(k=>{
    const it=ses[k], r=it.filter(a=>a.rating), avg=r.length?(r.reduce((s,a)=>s+a.rating,0)/r.length).toFixed(1):"–", d=new Date(k);
    return `<div class="card"><h3 style="margin:0">${d.toLocaleDateString()} · ${d.toLocaleTimeString([],{hour:'numeric',minute:'2-digit'})}</h3>
      <span class="pill">${it.length} answer${it.length>1?"s":""} · avg ${avg}/5</span></div>`+it.map(answerCard).join("");
  }).join("");
  bindReview();
}
function answerCard(a){
  const m=modelFor(a.q);
  return `<div class="card" data-id="${a.id}">
    <span class="pill">${a.cat}</span>
    <h3 style="margin-top:8px">${escapeHtml(a.q)}</h3>
    <p class="muted small score" style="margin:0 0 8px">Length ${fmt(a.dur)} · Checklist ${a.checks.filter(Boolean).length}/${CHECKLIST.length}</p>
    <video controls playsinline preload="metadata" src="${urlFor(a)}"></video>
    <div style="margin-top:12px"><strong>Self-review</strong>
      ${CHECKLIST.map((c,i)=>`<label class="check"><input type="checkbox" data-chk="${i}" ${a.checks[i]?"checked":""}><span>${c}</span></label>`).join("")}</div>
    <div style="margin-top:8px"><strong>Overall rating</strong>
      <div class="stars">${[1,2,3,4,5].map(n=>`<button data-rate="${n}" class="${a.rating>=n?"on":""}">${n}</button>`).join("")}</div></div>
    <div style="margin-top:12px"><strong>Notes for next time</strong>
      <textarea data-notes placeholder="e.g. Got to my example too slowly; forgot the animal's welfare.">${escapeHtml(a.notes)}</textarea></div>
    <details><summary>Key points to cover</summary><ul class="tips">${(a.tips||[]).map(t=>`<li>${t}</li>`).join("")}</ul></details>
    ${m?`<details><summary>Compare with the model answer</summary><div class="model">${fmtModel(m)}</div></details>`:""}
    <div class="btnrow"><button class="btn secondary" data-act="retry">↻ Try again</button><button class="btn secondary" data-act="save">⬆︎ Save</button></div>
    <button class="btn ghost" data-act="del">Delete this answer</button>
  </div>`;
}
function bindReview(){
  document.querySelectorAll("#reviewList .card[data-id]").forEach(card=>{
    const a=answers.find(x=>x.id===card.dataset.id); if(!a) return;
    const score=card.querySelector(".score");
    card.querySelectorAll("[data-chk]").forEach(cb=>cb.onchange=()=>{ a.checks[+cb.dataset.chk]=cb.checked; dbPut(a);
      score.textContent=`Length ${fmt(a.dur)} · Checklist ${a.checks.filter(Boolean).length}/${CHECKLIST.length}`; });
    card.querySelectorAll("[data-rate]").forEach(b=>b.onclick=()=>{ a.rating=+b.dataset.rate; dbPut(a);
      card.querySelectorAll("[data-rate]").forEach(x=>x.classList.toggle("on",+x.dataset.rate<=a.rating)); });
    const ta=card.querySelector("[data-notes]"); ta.oninput=()=>{ a.notes=ta.value; dbPut(a); };
    card.querySelector('[data-act="retry"]').onclick=()=>practiseOne(BANK.find(b=>b.q===a.q)||{c:a.cat,q:a.q,t:a.tips||[],m:""});
    card.querySelector('[data-act="save"]').onclick=()=>saveVideo(a);
    const del=card.querySelector('[data-act="del"]');
    del.onclick=()=>{ if(del.dataset.c){ answers=answers.filter(x=>x.id!==a.id); dbDel(a.id); renderReview(); }
      else{ del.dataset.c="1"; del.textContent="Tap again to delete"; setTimeout(()=>{ if(del.isConnected){ del.textContent="Delete this answer"; delete del.dataset.c; } },3000); } };
  });
}
async function saveVideo(a){
  const ext=a.mime.includes("mp4")?"mp4":a.mime.includes("quicktime")?"mov":"webm";
  const name=`vet-practice-${a.cat.replace(/\s+/g,"-").toLowerCase()}-${a.at.slice(0,10)}.${ext}`;
  try{
    const file=new File([a.blob],name,{type:a.mime});
    if(navigator.canShare && navigator.canShare({files:[file]})){ await navigator.share({files:[file],title:"Practice answer"}); return; }
  }catch(e){ if(e && e.name==="AbortError") return; }
  try{ const l=document.createElement("a"); l.href=urlFor(a); l.download=name; document.body.appendChild(l); l.click(); l.remove();
    toast("If nothing downloaded, saving isn't allowed in this view. The answer is still kept here in the app.");
  }catch(e){ toast("Saving isn't allowed in this view. The answer is still kept here in the app."); }
}

/* ---------- init ---------- */
(async()=>{
  await openDB();
  const saved=await dbAll();
  if(saved.length) answers=saved.sort((x,y)=>x.at.localeCompare(y.at));
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.isSecureContext) useNative();
})();
