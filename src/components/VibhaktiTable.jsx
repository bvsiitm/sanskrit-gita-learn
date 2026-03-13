import { T } from '../theme'

const SAGE  = '#4a5e4a'
const GOLD  = T.color.gold   // '#b5770d'

// 8 standard vibhaktis — row 0 = header
const CASES = [
  { roman: 'Prathamā',   skt: 'प्रथमा',    form: 'रामः',  meaning: 'subject',   hi: 'gold' },
  { roman: 'Dvitīyā',   skt: 'द्वितीया',   form: '',      meaning: '',          hi: null   },
  { roman: 'Tṛtīyā',    skt: 'तृतीया',    form: '',      meaning: '',          hi: null   },
  { roman: 'Caturthī',  skt: 'चतुर्थी',   form: '',      meaning: '',          hi: null   },
  { roman: 'Pañcamī',   skt: 'पञ्चमी',    form: '',      meaning: '',          hi: null   },
  { roman: 'Ṣaṣṭhī',    skt: 'षष्ठी',     form: '',      meaning: '',          hi: null   },
  { roman: 'Saptamī',   skt: 'सप्तमी',    form: 'रामे',  meaning: 'in Rāma',  hi: 'sage' },
  { roman: 'Sambodh.',   skt: 'सम्बोधन',  form: '',      meaning: '',          hi: null   },
]

// Per-column head/cell colour helpers
function colBg(hi, opacity = 0.07) {
  if (hi === 'gold') return `rgba(181,119,13,${opacity})`
  if (hi === 'sage') return `rgba(74,94,74,${opacity})`
  return 'transparent'
}
function colText(hi) {
  if (hi === 'gold') return GOLD
  if (hi === 'sage') return SAGE
  return T.color.ink3
}
function colBorder(hi) {
  if (hi === 'gold') return `rgba(181,119,13,0.35)`
  if (hi === 'sage') return `rgba(74,94,74,0.30)`
  return `rgba(181,119,13,0.12)`
}

export default function VibhaktiTable() {
  return (
    <div style={s.outer}>
      {/* Caption above */}
      <div style={s.topLabel}>
        <span style={{ fontFamily: T.font.devanagari, fontSize: '1.05rem', color: GOLD, letterSpacing: 0 }}>
          राम-शब्दः
        </span>
        {' '}
        <span style={{ fontFamily: T.font.prose, fontStyle: 'italic' }}>
          · a-stem masculine declension (singular)
        </span>
      </div>

      {/* Scrollable wrapper for narrow screens */}
      <div style={{ overflowX: 'auto' }}>
        <table style={s.table}>
          <thead>
            {/* Row 1: case labels */}
            <tr>
              {/* Row-label header cell */}
              <th style={{ ...s.th, ...s.rowHeader }}></th>
              {CASES.map(c => (
                <th
                  key={c.roman}
                  style={{
                    ...s.th,
                    background: colBg(c.hi, 0.11),
                    color: colText(c.hi),
                    borderBottom: `2px solid ${colBorder(c.hi)}`,
                  }}
                >
                  <div style={s.caseRoman}>{c.roman}</div>
                  <div style={{ ...s.caseSkt, color: colText(c.hi), opacity: 0.7 }}>{c.skt}</div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* Row 2: rāma forms */}
            <tr>
              <td style={{ ...s.td, ...s.rowHeader }}>Form</td>
              {CASES.map(c => (
                <td
                  key={c.roman}
                  style={{
                    ...s.td,
                    background: colBg(c.hi, 0.07),
                    fontFamily: c.form ? T.font.devanagari : T.font.prose,
                    fontSize: c.form ? '1.1rem' : '1rem',
                    color: c.form ? colText(c.hi) : 'rgba(181,119,13,0.2)',
                    letterSpacing: 0,
                    fontWeight: c.hi ? 500 : 400,
                  }}
                >
                  {c.form || '—'}
                </td>
              ))}
            </tr>

            {/* Row 3: meanings */}
            <tr>
              <td style={{ ...s.td, ...s.rowHeader }}>Meaning</td>
              {CASES.map(c => (
                <td
                  key={c.roman}
                  style={{
                    ...s.td,
                    background: colBg(c.hi, 0.05),
                    fontFamily: T.font.prose,
                    fontSize: '0.88rem',
                    fontStyle: c.meaning ? 'italic' : 'normal',
                    color: c.meaning ? colText(c.hi) : 'rgba(181,119,13,0.18)',
                  }}
                >
                  {c.meaning || '—'}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Caption below */}
      <p style={s.caption}>
        We will fill this table across lessons — one or two cases at a time.
      </p>
    </div>
  )
}

const s = {
  outer: {
    margin: '2rem 0 2.5rem',
    background: T.color.parchment2,
    border: `1px solid ${T.color.border}`,
    borderRadius: '6px',
    padding: '1.2rem 1rem 1rem',
  },
  topLabel: {
    fontFamily: T.font.label,
    fontSize: '0.62rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: T.color.ink4,
    marginBottom: '0.9rem',
    textAlign: 'center',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    tableLayout: 'fixed',
  },
  th: {
    paddingTop: '0.55rem',
    paddingBottom: '0.55rem',
    paddingLeft: '0.3rem',
    paddingRight: '0.3rem',
    textAlign: 'center',
    verticalAlign: 'bottom',
    border: `1px solid rgba(181,119,13,0.12)`,
    fontWeight: 400,
    wordBreak: 'break-word',
  },
  td: {
    paddingTop: '0.55rem',
    paddingBottom: '0.55rem',
    paddingLeft: '0.4rem',
    paddingRight: '0.4rem',
    textAlign: 'center',
    verticalAlign: 'middle',
    border: `1px solid rgba(181,119,13,0.12)`,
  },
  rowHeader: {
    width: '4.5rem',
    fontFamily: T.font.label,
    fontSize: '0.47rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: T.color.ink4,
    opacity: 0.6,
    background: 'rgba(181,119,13,0.04)',
    textAlign: 'right',
    paddingTop: '0.55rem',
    paddingBottom: '0.55rem',
    paddingLeft: '0.3rem',
    paddingRight: '0.6rem',
  },
  caseRoman: {
    fontFamily: T.font.label,
    fontSize: '0.52rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '0.2rem',
  },
  caseSkt: {
    fontFamily: T.font.devanagari,
    fontSize: '0.82rem',
    letterSpacing: 0,
    fontWeight: 400,
  },
  caption: {
    fontFamily: T.font.label,
    fontSize: '0.48rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: T.color.parchment3,
    textAlign: 'center',
    marginTop: '0.8rem',
    marginBottom: 0,
  },
}
