/* Question bank and model answers (original practice material). [Brackets] = replace with your own experience. */
export const BANK = [
  // Motivation
  {c:"Motivation", q:"Why do you want to become a veterinarian, and why at JCU specifically?",
   t:["A personal, specific reason (not just 'I love animals')","Shows awareness of what vets actually do day to day","Links to JCU: tropical, rural/regional, biosecurity, One Health focus","Ends with where you see yourself contributing"]},
  {c:"Motivation", q:"Tell us about your animal-related experience and one thing it taught you that you didn't expect.",
   t:["Names a real placement or job","A genuine insight (e.g. how much of the job is talking with owners)","Shows reflection, not just a list of tasks"]},
  {c:"Motivation", q:"What do you think will be the hardest part of veterinary work for you personally, and how will you prepare for it?",
   t:["Honest and specific (e.g. euthanasia, long hours, client conflict)","A realistic plan to prepare or cope","Avoids a fake weakness"]},
  {c:"Motivation", q:"Many veterinary graduates leave the profession within a few years. Why do you think that happens, and what would keep you in it?",
   t:["Mentions known pressures: workload, finances, client expectations, wellbeing","Balanced, not cynical","Personal strategies and support networks"]},

  // Teamwork
  {c:"Teamwork", q:"Tell us about a time you worked in a team that wasn't getting along. What did you do?",
   t:["Clear situation, your role, what you did, the result","Shows listening and fairness, not blaming others","What you learned about teamwork"]},
  {c:"Teamwork", q:"Describe a time you had to rely on someone else to get something done. How did you handle it?",
   t:["Trust, communication and checking in","Handled delays respectfully","Reflection"]},
  {c:"Teamwork", q:"A classmate in your practical group keeps leaving the work to others. The assignment is due in three days. What do you do?",
   t:["Talk privately first, find out why","Practical plan to finish on time","Escalate to the tutor only if needed","Fair to everyone involved"]},

  // Ethics
  {c:"Ethics", q:"An owner asks you to euthanise a healthy young dog because they are moving overseas. How do you respond?",
   t:["Stays calm and non-judgemental","Explores alternatives: rehoming, rescue groups, transport options","Knows the vet can decline on welfare grounds","Animal welfare at the centre, with respect for the owner"]},
  {c:"Ethics", q:"During a placement you notice a senior staff member skipping a hygiene step before surgery. What do you do?",
   t:["Recognises the patient-safety risk","Raises it respectfully and promptly, through the right person","Doesn't ignore it, doesn't publicly shame anyone","Thinks about their own position as a student"]},
  {c:"Ethics", q:"A farmer can't afford treatment for a sick animal that would likely recover with it. How would you approach the conversation?",
   t:["Empathy for the farmer's financial reality","Lays out options: cheaper treatment, payment plans, humane euthanasia","Animal welfare can't be ignored","Clear, respectful communication"]},
  {c:"Ethics", q:"A friend asks you to sign a placement logbook for hours they didn't actually complete. What do you do?",
   t:["Says no clearly","Explains why: honesty, professional standards, patient safety","Supports the friend to find a fair solution","Considers whether to report it"]},
  {c:"Ethics", q:"Should animals be used in research that could improve human or animal health? Discuss.",
   t:["Presents more than one view","Mentions welfare safeguards (e.g. the 3Rs: replace, reduce, refine)","Reaches a reasoned personal position"]},

  // Communication
  {c:"Communication", q:"An elderly owner is upset and confused about their cat's diagnosis. How would you explain it to them?",
   t:["Plain language, no jargon","Checks understanding and invites questions","Patience and empathy","Practical next steps, maybe written down"]},
  {c:"Communication", q:"An angry client is shouting in the waiting room about how long they've been waiting. What do you do?",
   t:["Stays calm and acknowledges their frustration","Explains honestly (e.g. an emergency came in)","Offers options","Thinks about other clients and staff"]},
  {c:"Communication", q:"Explain something you know well to us as if we had never heard of it.",
   t:["Simple structure: what it is, why it matters, an example","Checks the level of detail","Clear and engaging delivery"]},

  // Resilience
  {c:"Resilience", q:"Describe a time you failed at something. What did you change afterwards?",
   t:["A real failure, owned honestly","Specific changes made","Evidence the change worked"]},
  {c:"Resilience", q:"How do you look after your own wellbeing when you're under pressure?",
   t:["Concrete habits: sleep, exercise, people, time out","Knows when to ask for help","Links to the demands of vet study and work"]},
  {c:"Resilience", q:"You've just received a much lower mark than you expected on an important exam. Walk us through what you'd do next.",
   t:["Manages the initial emotion","Seeks feedback and works out what went wrong","Makes a study plan","Uses support (tutors, peers)"]},
  {c:"Resilience", q:"Tell us about a time you had too many commitments at once. How did you prioritise?",
   t:["Clear method: urgency, importance, deadlines","Communicated with others affected","Outcome and lesson"]},

  // Current issues / One Health
  {c:"Current issues", q:"What do you think is the biggest challenge facing vets in regional and rural Australia today?",
   t:["Specific issues: workforce shortages, distance, after-hours load, finances","Impact on animals, farmers and communities","Possible solutions"]},
  {c:"Current issues", q:"Should vets have a role in human public health, for example with zoonotic diseases? Why?",
   t:["Understands One Health","Examples: Hendra, Q fever, rabies risk, antimicrobial resistance","Collaboration with doctors and government"]},
  {c:"Current issues", q:"Why is biosecurity important to northern Australia, and what role do vets play?",
   t:["Northern borders and exotic disease risk (e.g. foot-and-mouth disease, lumpy skin disease)","Economic impact on livestock industries","Surveillance, reporting, community education"]},
  {c:"Current issues", q:"Antibiotics are sometimes overused in animals. Why does that matter, and what can vets do?",
   t:["Explains antimicrobial resistance simply","Links to human health","Responsible prescribing and client education"]},

  // Animal welfare
  {c:"Animal welfare", q:"What does good animal welfare mean to you?",
   t:["Goes beyond 'not suffering': positive experiences, natural behaviour","Could mention a framework (e.g. the Five Domains)","Practical example"]},
  {c:"Animal welfare", q:"A client's dog is significantly overweight, but the owner says the dog is 'just big-boned' and happy. How do you handle it?",
   t:["Tactful, non-judgemental wording","Explains health risks clearly","Realistic plan the owner can follow","Follow-up"]},
  {c:"Animal welfare", q:"Is it ever acceptable to keep wild animals in zoos? Explain your view.",
   t:["Balanced: conservation, education and research vs welfare and freedom","Reasoned personal position","Respects other views"]},
];

/* Model answers, in the same order as BANK. [Brackets] = replace with your own experience. */
const MODELS = [
// 1 Why vet / why JCU
`My interest started with [a specific experience, e.g. helping on a family member's cattle property, or volunteering with a wildlife carer]. What drew me in wasn't just being around animals. It was watching the vet work through a problem: examining the animal, explaining the options to a worried owner, and making a decision with limited information.

Since then I've spent time at [placement], and I saw that a vet's day is as much about communication, teamwork and difficult conversations as clinical skill. That made me more certain, not less.

JCU appeals to me specifically because of its focus on tropical, rural and production-animal practice, and its One Health approach linking animal, human and environmental health. Northern Australia has real vet shortages and biosecurity risks, and I want to train somewhere that prepares me for exactly that. Long term, I can see myself in mixed or rural practice, where a vet makes a direct difference to animals, farmers and whole communities.`,

// 2 Animal experience / unexpected lesson
`Over the past [time period] I've [volunteered at a vet clinic / worked at a boarding kennel / helped on a dairy farm], mostly [cleaning, restraining animals, observing consults].

What I didn't expect was how much of the work is about people. One day an owner brought in an elderly dog, and the vet spent more time talking with the owner than examining the dog: listening, explaining things in plain language, and helping them reach a decision they could live with.

I'd assumed the hardest part of the job would be the medicine. I realised it's often the conversation. Since then I've paid close attention to how vets communicate, such as the questions they ask and how they deliver bad news. It's changed my idea of what makes a good vet.`,

// 3 Hardest part personally
`I think the hardest part for me will be euthanasia. Not just the procedure, but supporting an owner who's losing a companion, sometimes several times in one week. I feel things quite deeply. I think that's a strength in caring for animals, but it could wear me down if I don't manage it.

To prepare, I've [asked vets on placement how they cope / observed a euthanasia consult]. The advice was consistent: focus on giving the animal a peaceful end and the owner a respectful experience, and debrief with colleagues afterwards.

I'm also building habits now, like regular exercise, time with friends, and being willing to talk when something affects me. That way they're already in place when the pressure increases at uni and in practice.`,

// 4 Why vets leave
`From what I've read and heard from vets, it's a combination of things: long and unpredictable hours, after-hours on-call, emotionally hard work like euthanasia, pay that doesn't always match the years of training, and sometimes difficult clients. Moral stress seems to be a big one, where you know what an animal needs but the owner can't or won't pay for it.

I don't think the answer is to avoid the profession. I think it's to go in with realistic expectations. What would keep me in it is choosing workplaces with a supportive team and good mentoring, setting boundaries where I can, and staying connected to people outside work.

The profession is also paying more attention to wellbeing and workforce shortages now. I'd like to be part of supporting colleagues, not just getting through it myself.`,

// 5 Team not getting along
`In Year 11 I was in a group of four for a [science research project]. Two members disagreed about the direction, and it reached the point where they weren't talking and the work stalled.

I suggested we meet and let each person explain their idea without interruption. It turned out both ideas could fit: one was about the experiment design, the other about how we presented the results. We agreed a plan that used both, split tasks by people's strengths, and set check-in dates.

We submitted on time and [got a good result]. The bigger lesson was that conflict often comes from people not feeling heard. Giving everyone space, and focusing on the shared goal rather than on who's right, usually moves things forward. I'll need that in a clinic, where vets, nurses and reception staff all depend on each other.`,

// 6 Relying on someone
`When I was organising [a fundraiser for a local animal shelter], a friend was arranging the venue while I handled promotion. A week out, I realised the booking hadn't been confirmed.

Instead of taking over or getting frustrated, I asked how it was going. They'd been swamped with exams and it had slipped. We worked out what was left: I made the phone call while they finished the form, and the event went ahead.

I learned to agree clear deadlines and check in early rather than assume everything's fine. I also learned that a calm conversation works better than blame. In a vet team you rely on others constantly, such as a nurse monitoring an anaesthetic, so clear communication and trust both matter.`,

// 7 Classmate not contributing
`First, I'd talk to them privately, not in front of the group, and ask how they're going. There might be something behind it, like illness, family issues or long work shifts. I'd explain that the group needs their section and ask what they can realistically finish, and by when.

Then I'd make a plan with the group: clear tasks, a check-in tomorrow, and a backup if their part isn't done. With three days left, the priority is a good submission.

If they still didn't contribute, I'd tell the tutor honestly and factually. That's not to get them in trouble, but so marking is fair and they can get support if they need it. I think that's fair to the group and to them.`,

// 8 Euthanise healthy dog
`I'd stay calm and try to understand their situation without judging. Moving overseas is stressful, and they may feel they have no options. I'd explain that euthanising a healthy young dog is something many vets aren't comfortable doing, and that there are usually better alternatives.

I'd talk through those options: rehoming with friends or family, a rescue group or breed club that could find a new home, or looking into pet transport so the dog can go with them. I could offer contacts and help with the dog's records.

If they still insisted, I understand a vet can decline on welfare grounds, and as a student I'd involve the supervising vet. The dog's welfare comes first. But I'd want the owner to leave feeling respected, because that makes them more likely to choose a good alternative.`,

// 9 Hygiene step skipped
`This is a patient-safety issue, so I wouldn't ignore it. A missed hygiene step could cause a surgical infection.

As a student, I'd think about how I raise it. If surgery is about to start, I'd speak up politely there and then, something like, "Sorry, I might have missed it. Did you want to scrub again before you start?" That gives them a chance to fix it without embarrassment.

If it isn't urgent, I'd raise it privately with them, or with my placement supervisor if that felt more appropriate. I wouldn't gossip or make it public. I'd also stay open to the possibility that I'd misunderstood the protocol, and treat it as a chance to learn. But the animal's safety matters more than an awkward conversation.`,

// 10 Farmer can't afford treatment
`I'd start by acknowledging that farming is a business and money is often tight, so the farmer isn't being uncaring by raising cost. I'd explain clearly what's wrong, what treatment would involve, the likely outcome and the cost.

Then I'd look for options that work for the animal and the farmer: a cheaper treatment plan, a staged approach, treating on-farm to reduce costs, or a payment arrangement if the practice offers one.

If treatment truly isn't possible, the animal can't be left to suffer, so I'd discuss humane euthanasia honestly as an option. The aim is a decision the farmer can afford that still protects the animal's welfare. I'd also want a relationship where the farmer trusts me enough to call early next time.`,

// 11 Logbook hours
`I'd say no, kindly but clearly. Signing for hours they didn't do would be dishonest. Placement hours exist because they build skills that later affect animal welfare and safety. It could also get us both into serious trouble with the university.

I'd try to help instead. I'd ask why they're short, and suggest they talk to the placement coordinator about making the hours up or getting an extension. There's usually a solution if you ask early.

If I found out they'd falsified it anyway, I'd think seriously about reporting it. Vets are trusted on their records and their word, so honesty is a professional responsibility. But my first step would be to help them do the right thing.`,

// 12 Animal research
`I think it's a complex issue, and there are reasonable arguments on both sides. Animal research has contributed to vaccines and treatments for both people and animals. On the other hand, animals can feel pain and distress, and they can't consent.

My view is that it can be justified when the potential benefit is significant, there's no suitable alternative, and strict welfare safeguards are in place. In Australia, research using animals needs approval from an animal ethics committee and follows the "3Rs": replace animals where possible, reduce the numbers used, and refine methods to minimise suffering.

So I support research that meets those standards. I'd also support more investment in alternatives like cell cultures and computer modelling, so fewer animals are needed over time.`,

// 13 Elderly owner, explaining diagnosis
`I'd find a quiet space, sit down at their level, and start by asking what they've understood so far and what's worrying them most. That tells me where to begin.

I'd explain the diagnosis in plain language. For example, "Her kidneys aren't filtering her blood as well as they used to," rather than medical terms. I'd go slowly, pause for questions, and check their understanding by asking them to tell me the next steps in their own words.

I'd also write down the key points: medication, food changes, when to come back, and who to call with questions. When someone is upset it's hard to take information in, so patience and empathy matter as much as the explanation itself.`,

// 14 Angry client in waiting room
`I'd stay calm and go over to them, ideally moving the conversation a little aside so other clients aren't affected. I'd acknowledge their frustration, for example "I understand, you've been waiting a long time and that's really frustrating," without arguing.

Then I'd explain honestly what's happening. Often an emergency has come in, and if their pet were critically ill, we'd do the same for them. I'd give a realistic time estimate and offer options: keep waiting, rebook, or have a nurse check their pet now if they're worried.

If they became abusive or threatening, I'd get a senior staff member, because staff safety matters too. But most people calm down once they feel heard and get honest information.`,

// 15 Explain something you know well
`[Pick something you genuinely know well, such as a sport, a hobby, or how to train a puppy. Here is an example using the heart.]

Think of the heart as two pumps side by side. The right side receives blood that's been around the body and sends it to the lungs to pick up oxygen. The left side receives that oxygen-rich blood and pumps it out to the whole body. That's why the left side is more muscular.

Between the chambers are valves that act like one-way doors, so blood only moves forward. The "lub-dub" you hear is those doors closing.

Why it matters: if a valve starts leaking, as often happens in older small-breed dogs, blood flows backwards and the heart has to work harder. A vet can hear that as a murmur.

Does that make sense, or would you like more detail on any part?`,

// 16 Failure
`In Year 11 I [did badly on my first Chemistry exam. I got a C when I expected an A]. I'd studied by re-reading my notes and thought I understood it, but I couldn't apply the ideas to unfamiliar questions.

I asked my teacher for feedback and changed how I studied. I did practice questions under timed conditions, explained concepts out loud, and properly reviewed my mistakes instead of just marking them. I also started earlier instead of cramming.

By the end of the year [my results had improved to an A]. The main lesson was that feeling prepared and being prepared aren't the same thing, and that asking for feedback quickly beats protecting my pride. I'll need both in a course as demanding as vet science.`,

// 17 Wellbeing under pressure
`I've learned I need a few non-negotiables. Exercise is a big one: [running / swimming / my team sport] clears my head. I protect my sleep, especially before exams, because I think worse when I'm tired. And I make time for friends and family, even briefly, because talking things through keeps things in perspective.

I also try to notice early signs that I'm getting overloaded, like getting irritable or procrastinating. Then I adjust by replanning my week or asking for help, rather than just pushing through.

Vet science is known for high stress, so I want these habits to be solid before I start. I'd use university support services too if I needed them. I see asking for help as a professional skill, not a weakness.`,

// 18 Low exam mark
`First, I'd let myself be disappointed for a little while, because that's normal, but I wouldn't let it turn into "I'm not good enough."

Then I'd go through the paper properly. Where did I lose marks, and why? Was it content I didn't know, misreading questions, or running out of time? I'd ask the lecturer or tutor for feedback, because they can see patterns I might miss.

From that, I'd make a specific plan. For example, more timed practice questions, or a study group for the topics I found hard. I'd also check whether something else was affecting me, like sleep or workload.

One mark doesn't define me, but it is useful information. If I respond well, it can make me stronger for the next assessment.`,

// 19 Too many commitments
`In Year 12 I had [exams, a part-time job, volunteering at a vet clinic and sport] all landing in the same few weeks, and I couldn't do everything at full effort.

I listed every commitment with its deadline and how important it was. Exams and assessments came first. I kept my clinic volunteering because it mattered for my goals. I spoke to my manager early to reduce my shifts for three weeks, and told my coach I'd miss some training.

It worked. I [met all my deadlines and got good results] without burning out. I learned that telling people early is much better than letting them down at the last minute, and that saying no to some things is part of doing the important things well.`,

// 20 Regional/rural challenges
`I think the biggest challenge is workforce shortages. Many regional and rural areas struggle to attract and keep vets. The vets who are there carry heavy workloads, including after-hours on-call, which feeds into burnout.

That has real effects. Animals may not get timely care, farmers wait longer for help, and biosecurity is weakened, because vets are often the first to notice an unusual disease in livestock. Distance adds to it: clients may drive hours to a clinic, and vets travel long distances to farms.

Possible solutions include training more vets in the regions, which is part of JCU's purpose, plus incentives and mentoring for new graduates, shared after-hours services, and telehealth for some consults. I'm genuinely interested in regional practice myself.`,

// 21 Vets and public health / One Health
`Yes, definitely. A large share of emerging infectious diseases in people are zoonotic, meaning they can spread between animals and humans. That's the idea behind One Health: animal, human and environmental health are linked.

A clear Queensland example is Hendra virus, which spreads from flying foxes to horses and then occasionally to people. Vets are on the front line there: diagnosing horses, protecting themselves and owners, and promoting vaccination. Q fever from livestock is another example.

Vets also matter for antimicrobial resistance, through responsible antibiotic use in animals, and for food safety and biosecurity. So I think vets should work closely with doctors and public health authorities. Preventing disease in animals is often one of the best ways to protect people.`,

// 22 Biosecurity in northern Australia
`Northern Australia is close to countries where serious animal diseases we don't have, like foot-and-mouth disease and lumpy skin disease, have been found, including Indonesia. The north has a long, sparsely populated coastline, so it's an important frontline.

An outbreak of something like foot-and-mouth disease would be devastating. It could halt livestock exports and cost the economy billions, hitting farmers and regional communities hardest.

Vets are central to surveillance: recognising unusual signs and reporting them early, because early detection makes a huge difference. They also teach farmers what to look for and how to keep good on-farm biosecurity, support government programs, and help respond if an outbreak happens. That public-good side of vet work really interests me, and it's part of why JCU appeals to me.`,

// 23 Antibiotic overuse
`When antibiotics are used too often or incorrectly, bacteria can become resistant, so the drugs stop working. That's antimicrobial resistance. It matters for animals and people, because resistant bacteria can spread between them through close contact, food or the environment, and many of the same types of antibiotics are used in both.

Vets can help by prescribing antibiotics only when they're actually needed, and by choosing the right drug, dose and length of treatment, using tests to identify the bacteria where possible. Prevention matters too: vaccination, hygiene and good husbandry reduce infections in the first place.

Client education is part of it as well. That means explaining why antibiotics won't help a viral infection, and why the medicine should be given exactly as prescribed.`,

// 24 What is good welfare
`For me, good welfare is more than an animal not suffering. It's about the animal having a good life overall: good physical health, but also positive experiences.

A useful framework is the Five Domains model. Nutrition, physical environment, health and behavioural interactions together shape the fifth domain, the animal's mental state. So an animal should have the right food and water, a comfortable environment, good health care, the chance to behave naturally, and ideally positive experiences like play, comfort and curiosity.

For example, a dog that's well fed but left alone in a small yard all day might be physically fine but bored and stressed. Good welfare would include exercise, company and mental stimulation. As a vet, I'd want to actively promote welfare, not just meet a minimum.`,

// 25 Overweight dog
`I'd be careful not to make the owner feel judged, because they clearly love their dog. I'd start by asking about the dog's routine: meals, treats and exercise. Then I'd show them rather than just tell them, using a body condition chart and feeling for the ribs together.

I'd connect the risks to what they care about. Extra weight can lead to arthritis, diabetes and a shorter life, so a healthier weight means their dog stays active and comfortable for longer.

Then I'd suggest a realistic plan: measured meals, lower-calorie treats, and gradually longer walks. I'd book a follow-up weigh-in so we can track and celebrate progress. Small, achievable changes are more likely to last than a dramatic diet.`,

// 26 Zoos
`I think it can be acceptable, but only under certain conditions. Good zoos contribute to conservation through breeding programs for endangered species, research, and funding for habitat protection. They also educate the public, which builds support for wildlife. Zoo vets gain knowledge that can help wild populations too.

On the other hand, captivity can restrict natural behaviour. Some species, especially those that roam huge distances in the wild, may struggle to have good welfare in an enclosure.

So my view is that zoos are justified when they're accredited, put welfare first, give animals enriching, species-appropriate environments, and play a real conservation role. Species that can't thrive in captivity probably shouldn't be kept for display. I respect that some people disagree, and I think standards should keep rising.`,
];
BANK.forEach((b,i)=>{ b.m = MODELS[i] || ""; });
