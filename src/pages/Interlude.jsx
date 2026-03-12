import { useState } from 'react'
import { Link } from 'react-router-dom'
import { T } from '../theme'
import Reveal from '../components/Reveal'

const SAGE        = '#4a5e4a'
const BG          = '#e8ead8'
const PROSE_COLOR = '#5c5e38'

// ── Lightweight MCQ card — no SRS, try-again on wrong ─────────────────────────
function InterludeCard({ eyebrow, question, options }) {
  const [selected, setSelected] = useState(null)

  const answered     = selected !== null
  const chosenOption = answered ? options[selected] : null
  const correct      = chosenOption?.correct
  const borderColor  = !answered ? SAGE : correct ? T.color.correct : T.color.wrong

  return (
    <div style={{ ...cs.card, borderLeftColor: borderColor }}>
      <div style={cs.eyebrow}>{eyebrow}</div>
      <p style={cs.question}>{question}</p>

      <div style={cs.optionList}>
        {options.map((opt, idx) => {
          const isSelected = selected === idx
          let bg = '#f0f1e4', border = 'rgba(74,94,74,0.2)', color = T.color.ink3

          if (answered && isSelected) {
            if (opt.correct) { bg = 'rgba(46,125,79,0.12)'; border = T.color.correct; color = '#1a5c34' }
            else             { bg = 'rgba(192,57,43,0.10)'; border = T.color.wrong;   color = '#8b1a1a' }
          } else if (answered && opt.correct) {
            bg = 'rgba(46,125,79,0.07)'; border = 'rgba(46,125,79,0.4)'
          }

          return (
            <div key={idx}>
              <button
                onClick={() => { if (!answered) setSelected(idx) }}
                disabled={answered}
                style={{ ...cs.option, backgroundColor: bg, borderColor: border, color, cursor: answered ? 'default' : 'pointer' }}
              >
                <span style={cs.optLabel}>{String.fromCharCode(65 + idx)}.</span>
                <span>{opt.label}</span>
              </button>

              {isSelected && answered && (
                <div style={{ ...cs.feedback, borderLeftColor: opt.correct ? T.color.correct : T.color.wrong, color: opt.correct ? '#1a5c34' : '#7a2020' }}>
                  {opt.feedback}
                  {!opt.correct && (
                    <button onClick={() => setSelected(null)} style={cs.tryAgain}>
                      ↺ try again
                    </button>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── Fixed top nav ──────────────────────────────────────────────────────────────
function InterludeNav() {
  return (
    <nav style={n.nav}>
      <Link to="/" style={n.side}>← Lesson 1</Link>
      <span style={n.center}>भगवद्गीतासंस्कृतशिक्षकः</span>
      <Link to="/lesson/2" style={n.side}>Lesson 2 →</Link>
    </nav>
  )
}

// ── "Begin Lesson 2" button ────────────────────────────────────────────────────
function BeginButton() {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to="/lesson/2"
      style={{
        ...cs.beginBtn,
        background: hovered ? SAGE : 'transparent',
        color:      hovered ? '#fff' : SAGE,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Begin Lesson 2 &nbsp;→
    </Link>
  )
}

// ── Main page ──────────────────────────────────────────────────────────────────
export default function Interlude() {
  return (
    <div style={{ background: BG, minHeight: '100vh' }}>
      <InterludeNav />

      {/* ── SECTION A — Image hero ─────────────────────────────────────────── */}
      <div style={{ position: 'relative', height: '70vh', overflow: 'hidden', marginTop: '52px' }}>
        <img
          src={`${import.meta.env.BASE_URL}krishna-arjuna.jpg`}
          alt="Krishna and Arjuna at Kurukshetra"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', filter: 'saturate(0.85) sepia(0.12)' }}
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
        {/* Gradient overlay: fades into parchment-green at bottom */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(to bottom, rgba(20,28,15,0.25) 0%, transparent 40%, rgba(232,234,216,0.97) 100%)',
        }} />
      </div>

      {/* ── SECTION B — Parchment text ─────────────────────────────────────── */}
      <div style={{ background: BG, padding: '4rem 2rem 6rem', maxWidth: '680px', margin: '0 auto' }}>

        {/* Badge with ruled lines either side */}
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', justifyContent: 'center' }}>
            <div style={{ flex: 1, height: '1px', background: SAGE, opacity: 0.25 }} />
            <span style={{ fontFamily: T.font.label, fontSize: '0.55rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: SAGE, whiteSpace: 'nowrap', border: `1px solid rgba(74,94,74,0.4)`, padding: '0.4rem 1rem', opacity: 0.8 }}>
              On learning · Between Lesson 1 and Lesson 2
            </span>
            <div style={{ flex: 1, height: '1px', background: SAGE, opacity: 0.25 }} />
          </div>
        </Reveal>

        {/* Drop-cap paragraph 1 */}
        <Reveal>
          <p style={p.prose}>
            <span style={p.dropCap}>E</span>
            very act of learning happens inside a context — a background of hunches, half-formed
            theories, and borrowed intuitions that the learner brings to the table before a single
            new fact arrives. Karl Popper put it sharply:
          </p>
        </Reveal>

        {/* Pull quote */}
        <Reveal>
          <blockquote style={p.blockquote}>
            <p style={p.quoteText}>"All observation is theory-laden."</p>
            <cite style={p.quoteCite}>— Karl Popper</cite>
          </blockquote>
        </Reveal>

        {/* Paragraph 2 — split for readability */}
        <Reveal>
          <p style={p.prose}>
            The brain does not receive the world passively; it projects a model onto it, then corrects.
            Learning is not filling an empty vessel. It is the ongoing refinement of a guess.
          </p>
        </Reveal>
        <Reveal>
          <p style={p.prose}>
            This matters for how you should approach what follows. You already know something about how
            languages work — from Hindi, Tamil, English, or wherever you come from. You have instincts
            about what a verb is, what a subject does, what it means for a word to 'belong' to another.
            Sanskrit will feel strange in places and eerily familiar in others. Both feelings are data.
            Trust them. Guess freely.
          </p>
        </Reveal>
        <Reveal>
          <p style={{ ...p.prose, marginBottom: '2rem' }}>
            When a card appears and you are not sure, do not wait for certainty before choosing. Pick
            the answer that feels most plausible given what you know so far. If you are wrong, the
            feedback will tell you exactly why — and the spaced repetition system will bring that card
            back until the correct understanding has settled in. Wrong answers are not failures here.
            They are the system working exactly as intended.
          </p>
        </Reveal>

        {/* ── MCQ Card 1 ── */}
        <Reveal>
          <InterludeCard
            eyebrow="✦ GUESS FREELY · CARD 1 OF 2"
            question="What is the meaning of उलूकः (ulūkaḥ)?"
            options={[
              {
                label: 'Rabbit', correct: false,
                feedback: "Close — but not quite. The Sanskrit for rabbit is शशः (śaśaḥ). The correct answer is owl: उलूकः.",
              },
              {
                label: 'Owl', correct: true,
                feedback: "Yes! उलूकः = owl. Notice how close it sounds to the English word 'owl' — both descend from the Proto-Indo-European root *ul-, an ancient onomatopoeia for the hooting sound. Sanskrit and English parted ways over 4,000 years ago, yet the owl kept its name in both. This is the Indo-European family at work.",
              },
              {
                label: 'Mouse', correct: false,
                feedback: "Not quite. Mouse in Sanskrit is मूषकः (mūṣakaḥ) — notice how that word echoes in English 'mouse' and Latin 'mus'. The correct answer is owl: उलूकः.",
              },
              {
                label: 'Serpent', correct: false,
                feedback: "Not this one. Serpent in Sanskrit is सर्पः (sarpaḥ) from the root √sṛp, to creep, which gives Latin serpens and English 'serpent.' उलूकः is the owl.",
              },
            ]}
          />
        </Reveal>

        {/* ── MCQ Card 2 ── */}
        <Reveal>
          <InterludeCard
            eyebrow="✦ GUESS FREELY · CARD 2 OF 2"
            question="What is the meaning of दुहितृ (duhitṛ)?"
            options={[
              {
                label: 'Son', correct: false,
                feedback: "Son in Sanskrit is पुत्रः (putraḥ). दुहितृ is daughter — say it slowly: du-hi-tṛ.",
              },
              {
                label: 'Father', correct: false,
                feedback: "Father is पितृ (pitṛ) — itself a remarkable cognate: Latin pater, Greek patēr, English 'father', all from PIE *ph₂tḗr. But दुहितृ is daughter.",
              },
              {
                label: 'Brother', correct: false,
                feedback: "Brother is भ्रातृ (bhrātṛ) — note the -tṛ suffix, identical to दुहितृ. Sanskrit uses -tṛ for kinship terms. दुहितृ means daughter.",
              },
              {
                label: 'Daughter', correct: true,
                feedback: "Exactly. दुहितृ = daughter. Say them side by side: duhitṛ — daughter. The match runs across the whole Indo-European family: Greek thugátēr, German Tochter, Old English dohtor, all from Proto-Indo-European *dʰugh₂tḗr. The word has not changed its meaning in four thousand years.",
              },
            ]}
          />
        </Reveal>

        {/* Paragraph 3 */}
        <Reveal>
          <p style={{ ...p.prose, marginTop: '1.5rem', marginBottom: '3rem' }}>
            Fluency — and genuine enjoyment — come when you begin to feel that Sanskrit is predictable.
            That its rules follow from something. You are building a mental model of how the language
            works, and that model will be corrected, sharpened, and extended lesson by lesson. You do
            not need to remember everything said here on first reading. The programme is designed for
            forgetting. Keep guessing, keep correcting, and the rest will follow.
          </p>
        </Reveal>

        {/* Ornament divider */}
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 0 3rem' }}>
            <div style={{ flex: 1, height: '1px', background: SAGE, opacity: 0.2 }} />
            <span style={{ color: SAGE, opacity: 0.45, fontSize: '1.4rem', lineHeight: 1 }}>❧</span>
            <div style={{ flex: 1, height: '1px', background: SAGE, opacity: 0.2 }} />
          </div>
        </Reveal>

        {/* Three summary cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))', gap: '1rem', marginBottom: '4.5rem' }}>
          {[
            { num: 'I',   title: 'Guess freely',    body: 'Use whatever language you know. Intuition is data.',                                             delay: 0   },
            { num: 'II',  title: 'Wrong = Learning', body: 'The SRS brings missed cards back. Every wrong answer is the system doing its job.',              delay: 80  },
            { num: 'III', title: "Don't memorise",  body: 'You do not need to remember everything now. The programme is designed for forgetting.',           delay: 160 },
          ].map(c => (
            <Reveal key={c.num} delay={c.delay}>
              <div style={{ padding: '1.4rem 1.2rem', background: '#f0f1e4', border: `1px solid rgba(74,94,74,0.2)`, borderTop: `3px solid ${SAGE}`, borderRadius: '0 0 6px 6px' }}>
                <div style={{ fontFamily: T.font.label, fontSize: '0.65rem', color: SAGE, opacity: 0.5, marginBottom: '0.3rem', letterSpacing: '0.2em' }}>{c.num}</div>
                <div style={{ fontFamily: T.font.label, fontSize: '0.6rem', color: SAGE, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.6rem' }}>{c.title}</div>
                <div style={{ fontFamily: T.font.prose, fontSize: '0.92rem', color: PROSE_COLOR, lineHeight: 1.65, fontStyle: 'italic' }}>{c.body}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Continue to Lesson 2 */}
        <Reveal>
          <div style={{ textAlign: 'center', borderTop: `1px solid rgba(74,94,74,0.18)`, paddingTop: '3rem' }}>
            <div style={{ fontFamily: T.font.label, fontSize: '0.52rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: SAGE, opacity: 0.5, marginBottom: '0.8rem' }}>
              Continue to
            </div>
            <div style={{ fontFamily: T.font.prose, fontStyle: 'italic', fontSize: '1.8rem', color: PROSE_COLOR, marginBottom: '0.5rem' }}>
              Lesson 2 — The Locative
            </div>
            <div style={{ fontFamily: T.font.devanagari, fontSize: '1.4rem', color: T.color.gold, letterSpacing: '0', marginBottom: '2rem' }}>
              सप्तमी विभक्ति
            </div>
            <BeginButton />

            {/* Return to Lesson 1 */}
            <div style={{ marginTop: '1.5rem' }}>
              <Link to="/" style={bt.back}>← Return to Lesson 1</Link>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  )
}

// ── Styles ─────────────────────────────────────────────────────────────────────
const p = {
  prose: {
    fontFamily: T.font.prose,
    fontSize: '1.1rem',
    lineHeight: 1.95,
    color: PROSE_COLOR,
    marginBottom: '1.4rem',
    overflow: 'hidden', // clear float from drop cap
  },
  dropCap: {
    float: 'left',
    fontSize: '4.2rem',
    lineHeight: 0.75,
    fontFamily: T.font.prose,
    fontWeight: 600,
    color: SAGE,
    marginRight: '0.08rem',
    marginTop: '0.1em',
  },
  blockquote: {
    borderLeft: `3px solid ${SAGE}`,
    paddingLeft: '1.5rem',
    margin: '2rem 0',
  },
  quoteText: {
    fontFamily: T.font.prose,
    fontSize: '1.3rem',
    fontStyle: 'italic',
    color: PROSE_COLOR,
    lineHeight: 1.6,
    marginBottom: '0.5rem',
  },
  quoteCite: {
    fontFamily: T.font.label,
    fontSize: '0.55rem',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: SAGE,
    opacity: 0.65,
    fontStyle: 'normal',
  },
}

const cs = {
  card: {
    background: `rgba(74,94,74,0.07)`,
    border: `1px solid rgba(74,94,74,0.18)`,
    borderLeft: '4px solid',
    borderRadius: '0 6px 6px 0',
    padding: '1.5rem 1.75rem',
    margin: '2rem 0',
    transition: 'border-left-color 0.35s ease',
  },
  eyebrow: {
    fontFamily: T.font.label,
    fontSize: '0.5rem',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    color: SAGE,
    opacity: 0.7,
    marginBottom: '0.8rem',
  },
  question: {
    fontFamily: T.font.prose,
    fontSize: '1.1rem',
    fontWeight: 500,
    color: '#3d2a10',
    lineHeight: 1.65,
    marginBottom: '1.1rem',
  },
  optionList: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  option: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    padding: '0.6rem 0.85rem',
    border: '1px solid',
    borderRadius: '4px',
    textAlign: 'left',
    fontFamily: T.font.prose,
    fontSize: '1rem',
    lineHeight: 1.5,
    transition: 'all 0.25s',
  },
  optLabel: {
    fontFamily: T.font.label,
    fontSize: '0.65rem',
    letterSpacing: '0.05em',
    color: SAGE,
    flexShrink: 0,
    minWidth: '1.1rem',
  },
  feedback: {
    marginTop: '0.35rem',
    marginLeft: '1.75rem',
    padding: '0.6rem 0.8rem',
    borderLeft: '3px solid',
    borderRadius: '0 4px 4px 0',
    background: 'rgba(0,0,0,0.03)',
    fontFamily: T.font.prose,
    fontSize: '0.93rem',
    lineHeight: 1.7,
    fontStyle: 'italic',
  },
  tryAgain: {
    display: 'block',
    marginTop: '0.6rem',
    background: 'none',
    border: 'none',
    fontFamily: T.font.label,
    fontSize: '0.52rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: SAGE,
    cursor: 'pointer',
    padding: 0,
    opacity: 0.7,
  },
  beginBtn: {
    display: 'inline-block',
    padding: '0.85rem 2.5rem',
    border: `1px solid ${SAGE}`,
    borderRadius: '3px',
    fontFamily: T.font.label,
    fontSize: '0.68rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'background 0.25s ease, color 0.25s ease',
  },
}

const bt = {
  back: {
    fontFamily: T.font.label,
    fontSize: '0.52rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: SAGE,
    opacity: 0.6,
    textDecoration: 'none',
    transition: 'opacity 0.2s ease',
  },
}

const n = {
  nav: {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 2rem',
    height: '52px',
    background: 'rgba(30,32,16,0.75)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  },
  side: {
    fontFamily: T.font.label,
    fontSize: '0.55rem',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: 'rgba(212,175,55,0.5)',
    textDecoration: 'none',
  },
  center: {
    fontFamily: T.font.devanagari,
    fontSize: '0.9rem',
    color: 'rgba(212,175,55,0.28)',
    letterSpacing: '0',
  },
}
