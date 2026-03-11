import { T } from '../theme'

const concepts = ['Vibhakti — who speaks', 'Lakāra — tense', 'Dhātu — root', 'Sandhi — sound rules']

export default function BeginDivider() {
  return (
    <div style={s.wrapper}>
      {/* Gradient fade from method-band indigo to parchment */}
      <div style={s.fade} />

      <div style={s.inner}>
        <div style={s.ornament}>✦</div>
        <div style={s.label}>Lesson I</div>

        {/* The phrase we will spend the whole lesson on */}
        <h2 style={s.title}>धृतराष्ट्र उवाच</h2>
        <p style={s.sub}>Dhṛtarāṣṭra uvāca · Chapter 1, Verse 1</p>

        {/* Word breakdown — moved from hero */}
        <div style={s.breakdown}>
          <div style={s.word}>धृतराष्ट्रः</div>
          <div style={s.plus}>+</div>
          <div style={s.word}>उवाच</div>
          <div style={s.plus}>=</div>
          <div style={s.equals}>
            {concepts.map(c => (
              <div key={c} style={s.concept}>{c}</div>
            ))}
          </div>
        </div>

        <div style={s.rule} />
      </div>
    </div>
  )
}

const s = {
  wrapper: {
    position: 'relative',
    background: T.color.parchment,
  },
  fade: {
    height: '120px',
    background: `linear-gradient(to bottom, #1e2d5a, ${T.color.parchment})`,
  },
  inner: {
    textAlign: 'center',
    padding: '2rem 2rem 4rem',
  },
  ornament: {
    color: T.color.parchment3,
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
  },
  label: {
    fontFamily: T.font.label,
    fontSize: '0.6rem',
    letterSpacing: '0.45em',
    textTransform: 'uppercase',
    color: T.color.saffron,
    marginBottom: '1rem',
  },
  title: {
    fontFamily: T.font.devanagari,
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    color: T.color.ink2,
    fontWeight: 400,
    letterSpacing: '0',
    marginBottom: '0.5rem',
  },
  sub: {
    fontFamily: T.font.prose,
    fontSize: '1rem',
    fontStyle: 'italic',
    color: T.color.ink4,
    marginBottom: '2.5rem',
  },
  breakdown: {
    display: 'flex',
    gap: '1.2rem',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '2.5rem',
  },
  word: {
    padding: '0.5rem 1.2rem',
    border: `1px solid ${T.color.border}`,
    borderRadius: '4px',
    background: T.color.parchment2,
    fontFamily: T.font.devanagari,
    fontSize: '1.3rem',
    color: T.color.gold,
    letterSpacing: '0',
  },
  plus: {
    color: T.color.parchment3,
    fontSize: '1.1rem',
    fontFamily: T.font.prose,
  },
  equals: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  concept: {
    fontFamily: T.font.label,
    fontSize: '0.58rem',
    letterSpacing: '0.2em',
    color: T.color.ink4,
    textTransform: 'uppercase',
    borderLeftWidth: '2px',
    borderLeftStyle: 'solid',
    borderLeftColor: T.color.border,
    paddingLeft: '0.7rem',
  },
  rule: {
    width: '60px',
    height: '1px',
    background: T.color.border,
    margin: '0 auto',
  },
}
