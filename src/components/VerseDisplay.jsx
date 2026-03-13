import { T } from '../theme'

// Words in verse order — hi:true = word studied this lesson
const WORDS = [
  { skt: 'धर्मक्षेत्रे',   en: 'in the field of dharma', hi: true  },
  { skt: 'कुरुक्षेत्रे',   en: 'in Kurukṣetra',         hi: true  },
  { skt: 'समवेता',          en: 'having assembled',      hi: false },
  { skt: 'युयुत्सवः',      en: 'eager to fight',        hi: false },
  { skt: 'मामकाः',          en: 'my sons',               hi: false },
  { skt: 'पाण्डवाश्चैव',   en: 'and the Pāṇḍavas',     hi: true  },
  { skt: 'किमकुर्वत',       en: 'what did they do?',    hi: false },
  { skt: 'सञ्जय',           en: 'O Sañjaya',            hi: true  },
]

// Maroon underline — marks words this lesson will analyse
function Hi({ children }) {
  return (
    <span style={{
      borderBottom: '2px solid #7a1e1e',
      paddingBottom: '2px',
    }}>
      {children}
    </span>
  )
}

// Softer maroon underline for matching English words
function TrHi({ children }) {
  return (
    <span style={{
      borderBottom: '1.5px solid rgba(122,30,30,0.5)',
      paddingBottom: '1px',
    }}>
      {children}
    </span>
  )
}

export default function VerseDisplay() {
  return (
    <div style={s.wrapper}>
      {/* Speaker — already studied in Lesson 1 */}
      <div style={s.speaker}>धृतराष्ट्र उवाच</div>

      {/* Verse — four words highlighted */}
      <div style={s.verse}>
        <div style={s.line}>
          <Hi>धर्मक्षेत्रे</Hi>{' '}
          <Hi>कुरुक्षेत्रे</Hi>{' '}
          समवेता युयुत्सवः ।
        </div>
        <div style={s.line}>
          मामकाः{' '}
          <Hi>पाण्डवाश्चैव</Hi>{' '}
          किमकुर्वत{' '}
          <Hi>सञ्जय</Hi>{' '}
          ॥
        </div>
      </div>

      {/* Reference */}
      <div style={s.ref}>Bhagavad Gītā · 1.1</div>

      {/* Translation with matching highlights */}
      <p style={s.translation}>
        Dhṛtarāṣṭra said: <TrHi>O Sañjaya</TrHi>, after assembling{' '}
        <TrHi>in the holy field of Kurukṣetra</TrHi>, eager to fight{' '}
        — what did my sons and <TrHi>the Pāṇḍavas</TrHi> do?
      </p>

      {/* Word-by-word breakdown */}
      <div style={s.wordGrid}>
        {WORDS.map(w => (
          <div key={w.skt} style={s.wordItem}>
            <span style={{
              ...s.wordSkt,
              borderBottom: w.hi ? '2px solid #7a1e1e' : 'none',
              paddingBottom: w.hi ? '2px' : '0',
            }}>
              {w.skt}
            </span>
            <span style={s.wordEn}>{w.en}</span>
          </div>
        ))}
      </div>

      {/* Lesson scope */}
      <p style={s.note}>
        Four words underlined — this lesson is about all four.
      </p>
    </div>
  )
}

const s = {
  wrapper: {
    textAlign: 'center',
    padding: '3rem 2rem 3.5rem',
    margin: '0 0 3.5rem',
    background: T.color.parchment2,
    border: `1px solid ${T.color.border}`,
    borderRadius: '6px',
  },
  speaker: {
    fontFamily: T.font.devanagari,
    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
    color: T.color.saffron,
    letterSpacing: '0',
    marginBottom: '1.4rem',
    fontWeight: 300,
    opacity: 0.7,
  },
  verse: {
    marginBottom: '1.5rem',
  },
  line: {
    fontFamily: T.font.devanagari,
    fontSize: 'clamp(1.4rem, 3.5vw, 2.3rem)',
    color: T.color.ink2,
    letterSpacing: '0',
    lineHeight: 1.85,
    fontWeight: 400,
  },
  ref: {
    fontFamily: T.font.label,
    fontSize: '0.54rem',
    letterSpacing: '0.42em',
    textTransform: 'uppercase',
    color: T.color.saffron,
    marginBottom: '1.4rem',
  },
  translation: {
    fontFamily: T.font.prose,
    fontSize: '1.05rem',
    fontStyle: 'italic',
    color: T.color.ink4,
    maxWidth: '52ch',
    margin: '0 auto 0.8rem',
    lineHeight: 1.75,
  },
  wordGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '0.5rem 1.4rem',
    margin: '1.6rem auto 1.4rem',
    maxWidth: '58ch',
    borderTop: `1px solid ${T.color.border}`,
    paddingTop: '1.4rem',
  },
  wordItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.2rem',
  },
  wordSkt: {
    fontFamily: T.font.devanagari,
    fontSize: '1.05rem',
    color: T.color.gold,
    letterSpacing: 0,
  },
  wordEn: {
    fontFamily: T.font.prose,
    fontSize: '0.72rem',
    fontStyle: 'italic',
    color: T.color.ink4,
    textAlign: 'center',
    lineHeight: 1.3,
  },
  note: {
    fontFamily: T.font.label,
    fontSize: '0.5rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: T.color.parchment3,
    margin: 0,
  },
}
