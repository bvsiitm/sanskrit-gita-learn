\# Gita Sanskrit Teacher

\#\# Stack  
React \+ Vite. No external UI libraries. All styles inline.

\#\# Design  
Parchment bg: \#faf4e8 · Gold Sanskrit: \#b5770d · Saffron accent: \#c17f24  
Prose font: Cormorant Garamond · Label font: Cinzel  
Sanskrit: Noto Sans Devanagari (Google Fonts)

\#\# Architecture  
\- src/data/cardSets.js — all 21 MCQ cards, SRS seed state  
\- One MCQ component: left border \= saffron → green (correct) / red (wrong)  
\- Wrong answers show specific corrective feedback (already written in cardSets.js)  
\- SRS stored in localStorage key: "gita-srs-state"

\#\# Rules  
\- Never use Tailwind, MUI, or any component library  
\- Every new component follows the same inline style pattern  
\- Sanskrit text always uses the Noto Sans Devanagari font  
\- Keep cardSets.js as the single source of truth for all card content

\#\# UI Pattern — Quantum Country Style  
\- Prose and cards are interleaved — reading and drilling are one flow, not two modes  
\- Cards appear inline immediately after the concept they test  
\- Cards are not a separate "quiz section" — they live inside the essay  
\- After answering, feedback appears below the selected option (not in a modal or new page)  
\- Wrong answers show specific corrective explanation, not just "incorrect"  
\- A subtle visual marker (left border color change) signals right/wrong — no loud animations  
\- The reader always feels like they are reading an essay, not taking a test  
