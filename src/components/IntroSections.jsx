import Reveal from './Reveal'
import { T } from '../theme'

// ─── shared styles used by both sections ─────────────────────────────────────
const prose  = { fontFamily: T.font.prose,  fontSize: '1.15rem', lineHeight: 1.9,  color: T.color.ink3, marginBottom: '1.2rem', maxWidth: '65ch' }
const skt    = { fontFamily: T.font.devanagari, color: T.color.gold, fontSize: '1.05em' }
const label  = { fontFamily: T.font.label, fontSize: '0.58rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: T.color.saffron, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }
const h2     = { fontFamily: T.font.prose, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: T.color.ink2, lineHeight: 1.25, marginBottom: '1.5rem' }
const section = { padding: '6rem 2rem', maxWidth: '900px', margin: '0 auto' }
const divider = { display: 'flex', alignItems: 'center', gap: '1.2rem', margin: '3rem 0' }
const dividerLine = { flex: 1, height: '1px', background: T.color.border }
const pullQuote = {
  padding: '2.5rem 3rem', borderLeftWidth: '4px', borderLeftStyle: 'solid',
  borderLeftColor: T.color.saffron, margin: '3rem 0', background: T.color.parchment2,
  position: 'relative',
}
const pullQuoteText = { fontFamily: T.font.prose, fontSize: '1.35rem', fontStyle: 'italic', color: T.color.ink2, lineHeight: 1.7 }

// ─── THE PROBLEM ─────────────────────────────────────────────────────────────
export function ProblemSection() {
  return (
    <div style={{ background: T.color.parchment }}>
      <div style={section}>
        <Reveal><div style={label}>The Problem</div></Reveal>
        <Reveal><h2 style={h2}>Sanskrit is not hard.<br />The way it is taught is.</h2></Reveal>

        <Reveal><p style={prose}>
          Most students encounter Sanskrit in one of three ways: rote-learning of
          shlokas in school with no understanding, an intimidating grammar textbook
          with thousands of rules before a single sentence, or a translation they
          can read but cannot parse.
        </p></Reveal>

        <Reveal><p style={prose}>
          The Bhagavad Gita sits on millions of shelves. But reading it in Sanskrit —
          really reading it, knowing what each word is doing — remains out of reach
          for nearly everyone who wants to.
        </p></Reveal>

        <Reveal>
          <div style={pullQuote}>
            <p style={pullQuoteText}>
              The Gita teaches Sanskrit grammar simply by existing. Every verse is a
              worked example. The question is how to use it.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div style={divider}>
            <div style={dividerLine} />
            <span style={{ color: T.color.parchment3, fontSize: '1.1rem' }}>✦</span>
            <div style={dividerLine} />
          </div>
        </Reveal>
      </div>
    </div>
  )
}

// ─── THE INSIGHT ─────────────────────────────────────────────────────────────
const conceptCards = [
  { number: '192', name: 'Dhātus',   desc: 'Most frequent verbal roots in Classical Sanskrit, ranked by corpus frequency' },
  { number:  '95%', name: 'Coverage', desc: 'Of Bhagavad Gita roots are in the top-192 list. The overlap is not coincidence — it is linguistic reality.' },
  { number:   '#2', name: '√वच्',    desc: 'The root of उवाच is the second most frequent dhātu in all of Classical Sanskrit' },
  { number: '700',  name: 'Verses',  desc: 'The Bhagavad Gita. The target. Every lesson points toward reading it unaided.' },
]

export function InsightSection() {
  return (
    <div style={{ background: T.color.parchment }}>
      <div style={{ ...section, paddingTop: 0 }}>
        <Reveal><div style={label}>The Insight</div></Reveal>
        <Reveal><h2 style={h2}>The top 192 dhātus unlock nearly everything</h2></Reveal>

        <Reveal><p style={prose}>
          A corpus analysis of Classical Sanskrit reveals that just{' '}
          <strong>192 verbal roots</strong> account for the vast majority of verb
          usage across the Gita, Upanishads, and Mahābhārata. More strikingly:{' '}
          <strong>95% of the dhātus needed to read the Bhagavad Gita</strong> are
          in this top-192 list.
        </p></Reveal>

        <Reveal><p style={prose}>
          This is the Sanskrit equivalent of learning the 1,000 most common English
          words to unlock 85% of spoken conversation. Frequency-first learning is
          not a shortcut — it is the most direct path.
        </p></Reveal>

        {/* Concept grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', margin: '2.5rem 0' }}>
          {conceptCards.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <ConceptCard {...c} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

function ConceptCard({ number, name, desc }) {
  return (
    <div style={{
      padding: '1.5rem',
      background: T.color.parchment2,
      border: `1px solid ${T.color.border}`,
      borderTopWidth: '3px',
      borderTopStyle: 'solid',
      borderTopColor: T.color.saffron,
      borderRadius: '0 0 8px 8px',
    }}>
      <div style={{ fontFamily: T.font.label, fontSize: '2rem', fontWeight: 400, color: T.color.parchment3, lineHeight: 1, marginBottom: '0.5rem' }}>{number}</div>
      <div style={{ fontFamily: T.font.label, fontSize: '0.75rem', letterSpacing: '0.2em', color: T.color.saffron, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
        {name.includes('√') || /[\u0900-\u097F]/.test(name)
          ? <span style={skt}>{name}</span>
          : name}
      </div>
      <div style={{ fontSize: '0.88rem', color: T.color.ink4, lineHeight: 1.6, fontStyle: 'italic' }}>{desc}</div>
    </div>
  )
}
