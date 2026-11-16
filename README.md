# Vet Interview Practice

Kira-style mock interview practice for veterinary science applicants: timed questions, video recording, self-review checklist and model answers. Optimised for iPhone.

## Files (flat layout, no folders)
- index.html - page shell and iPhone home-screen settings
- style.css - styles
- main.js - app logic (camera, timers, review, study)
- content.js - the 26 practice questions, key points and model answers
- package.json, vite.config.js - Vite setup

## Run
npm install
npm run dev     # local dev server
npm run build   # production build into dist/

## Notes
- Live camera recording needs HTTPS (the published .bolt.host link is fine). Inside Bolt's preview pane the camera may be blocked; the app then falls back to the phone's own camera app.
- Recordings, ratings and notes are stored in the browser (IndexedDB) on the device used, not on a server.
- To add or edit questions, edit content.js: BANK holds the questions and MODELS holds the model answers in the same order.
