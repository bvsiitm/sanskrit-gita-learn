import { T } from '../theme'

// Full text of BG 1.1 — the verse this entire lesson is built around
export default function ShlokaDisplay() {
  return (
    <div style={s.wrapper}>
      {/* Speaker label */}
      <div style={s.speaker}>धृतराष्ट्र उवाच</div>

      {/* The verse itself */}
      <div style={s.verse}>
        <div style={s.line}>धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।</div>
        <div style={s.line}>मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥</div>
      </div>

      {/* Reference */}
      <div style={s.ref}>Bhagavad Gītā · 1.1</div>

      {/* Translation */}
      <p style={s.translation}>
        Dhṛtarāṣṭra said: O Sañjaya, after assembling in the holy field of
        Kurukṣetra, eager to fight — what did my sons and the Pāṇḍavas do?
      </p>

      {/* Subtle note */}
      <p style={s.note}>
        This lesson unpacks the first two words of this verse.
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
    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
    color: T.color.saffron,
    letterSpacing: '0',
    marginBottom: '1.4rem',
    fontWeight: 300,
  },
  verse: {
    marginBottom: '1.5rem',
  },
  line: {
    fontFamily: T.font.devanagari,
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    color: T.color.ink2,
    letterSpacing: '0',
    lineHeight: 1.8,
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
  note: {
    fontFamily: T.font.label,
    fontSize: '0.5rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: T.color.parchment3,
    margin: 0,
  },
}
