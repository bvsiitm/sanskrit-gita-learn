import Reveal from './Reveal'
import { T } from '../theme'

const skt = { fontFamily: "'Noto Serif Devanagari', serif", color: '#f0d978' }

const steps = [
  {
    n: '0',
    title: 'Anchor — What you already know',
    body: 'Character names you recognise from the Mahābhārata. Arjuna, Krishna, Dhritarashtra. Now see them in Devanāgarī. Zero grammar load. Pure recognition. Confidence builder.',
  },
  {
    n: '1',
    title: '+1 · Vibhakti — The nominative ending',
    body: <>Sanskrit encodes grammatical role in the word itself — not word order. The subject takes Prathamā Vibhakti. Masculine singular = <span style={skt}>-ः</span>. One rule. Every subject in the Gita.</>,
  },
  {
    n: '2',
    title: '+1 · Lakāra — The verb tense',
    body: <>Sanskrit modifies the root itself for tense — no auxiliary words. <span style={skt}>उवाच</span> = Liṭ Lakāra, perfect tense, third person singular. He said. Already done. Complete.</>,
  },
  {
    n: '3',
    title: '+1 · Dhātu — The root',
    body: <>Every verb descends from a dhātu. <span style={skt}>उवाच</span> comes from <span style={skt}>√वच्</span> — to speak. Know the root, and nine other forms across the Gita become instantly recognisable family members.</>,
  },
  {
    n: '4',
    title: '+1 · Sandhi — Sound combination rules',
    body: <>Now you know <span style={skt}>धृतराष्ट्रः</span> should have a <span style={skt}>ः</span>. So where did it go? Visarga Lopa — Pāṇini 8.3.17. The <span style={skt}>ः</span> disappears before <span style={skt}>उ</span>. One rule, every speaker, every chapter.</>,
  },
]

export default function MethodBand() {
  return (
    <div style={s.band}>
      <div style={s.inner}>
        <Reveal>
          <div style={s.label}>The Method</div>
        </Reveal>
        <Reveal>
          <h2 style={s.h2}>Known → +1 → Drill → +1 → Drill → SRS</h2>
        </Reveal>
        <Reveal>
          <p style={s.prose}>
            The learning sequence is built on one principle:{' '}
            <em style={{ color: 'rgba(212,175,55,0.85)', fontStyle: 'italic' }}>
              always start from what the student already knows
            </em>
            , then add exactly one new idea. Drill on that. Then add one more.
            After a few ideas, spaced repetition. The exit condition at every
            stage is mastery, not time spent.
          </p>
        </Reveal>

        {/* Sequence steps */}
        <div style={s.sequence}>
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 60}>
              <div style={s.step}>
                <div style={s.dot}>{step.n}</div>
                <div style={s.stepContent}>
                  <div style={s.stepTitle}>{step.title}</div>
                  <p style={s.stepBody}>{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={s.pullQuote}>
            <p style={s.pullText}>
              Sandhi makes no sense until you know what the original form should be.
              That is why Sandhi comes last — not first.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

const s = {
  band: {
    width: '100%',
    padding: '5rem 2rem',
    background: '#1e2d5a',
  },
  inner: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  label: {
    fontFamily: "'Cinzel', serif",
    fontSize: '0.58rem',
    letterSpacing: '0.4em',
    textTransform: 'uppercase',
    color: 'rgba(212,175,55,0.7)',
    marginBottom: '1rem',
  },
  h2: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 400,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 1.25,
    marginBottom: '1.5rem',
  },
  prose: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '1.15rem',
    lineHeight: 1.9,
    color: 'rgba(255,255,255,0.6)',
    marginBottom: '2rem',
    maxWidth: '65ch',
  },
  sequence: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    margin: '2.5rem 0',
  },
  step: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-start',
    padding: '1.4rem 0',
    borderBottom: '1px solid rgba(181,119,13,0.2)',
  },
  dot: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: '#c17f24',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Cinzel', serif",
    fontSize: '0.75rem',
    flexShrink: 0,
    marginTop: '3px',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontFamily: "'Cinzel', serif",
    fontSize: '0.78rem',
    letterSpacing: '0.15em',
    color: 'rgba(212,175,55,0.85)',
    textTransform: 'uppercase',
    marginBottom: '0.3rem',
  },
  stepBody: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '1rem',
    lineHeight: 1.8,
    color: 'rgba(255,255,255,0.5)',
    margin: 0,
  },
  pullQuote: {
    padding: '2.5rem 3rem',
    borderLeft: '4px solid rgba(212,175,55,0.5)',
    margin: '3rem 0 0',
    background: 'rgba(255,255,255,0.04)',
  },
  pullText: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '1.35rem',
    fontStyle: 'italic',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.7,
    margin: 0,
  },
}
