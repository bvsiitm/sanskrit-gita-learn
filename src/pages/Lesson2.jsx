import { useState } from 'react'
import { Link } from 'react-router-dom'
import { T } from '../theme'

const SAGE = '#4a5e4a'

function BackButton() {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to="/interlude"
      style={{
        display: 'inline-block',
        padding: '0.7rem 2rem',
        border: `1px solid ${SAGE}`,
        borderRadius: '3px',
        fontFamily: T.font.label,
        fontSize: '0.6rem',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        transition: 'background 0.25s ease, color 0.25s ease',
        background: hovered ? 'rgba(74,94,74,0.08)' : 'transparent',
        color: SAGE,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      ← Return to Interlude
    </Link>
  )
}

export default function Lesson2() {
  return (
    <div style={s.page}>
      <div style={s.center}>

        {/* Lesson number */}
        <div style={s.label}>Lesson 2</div>

        {/* Sanskrit title */}
        <div style={s.devanagari}>सप्तमी विभक्ति</div>

        {/* English title */}
        <h1 style={s.title}>The Locative — Coming Soon</h1>

        {/* Divider */}
        <div style={s.rule} />

        {/* Teaser */}
        <p style={s.sub}>
          Where does the battle take place? The second verse answers with
          the locative case — <span style={s.skt}>धर्मक्षेत्रे</span>,{' '}
          <span style={s.skt}>कुरुक्षेत्रे</span>. In the field of Dharma,
          in the field of Kuru. Two words, one case, one suffix.
        </p>

        <BackButton />
      </div>
    </div>
  )
}

const s = {
  page: {
    minHeight: '100vh',
    background: T.color.parchment,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 2rem',
  },
  center: {
    textAlign: 'center',
    maxWidth: '520px',
  },
  label: {
    fontFamily: T.font.label,
    fontSize: '0.55rem',
    letterSpacing: '0.45em',
    textTransform: 'uppercase',
    color: SAGE,
    opacity: 0.7,
    marginBottom: '1.2rem',
  },
  devanagari: {
    fontFamily: T.font.devanagari,
    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
    color: T.color.gold,
    letterSpacing: '0',
    marginBottom: '1rem',
  },
  title: {
    fontFamily: T.font.prose,
    fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
    fontWeight: 400,
    fontStyle: 'italic',
    color: T.color.ink3,
    marginBottom: '1.5rem',
  },
  rule: {
    width: '40px',
    height: '1px',
    background: SAGE,
    opacity: 0.3,
    margin: '0 auto 1.8rem',
  },
  sub: {
    fontFamily: T.font.prose,
    fontSize: '1.05rem',
    fontStyle: 'italic',
    color: T.color.ink4,
    lineHeight: 1.8,
    marginBottom: '2.5rem',
  },
  skt: {
    fontFamily: T.font.devanagari,
    color: T.color.gold,
    letterSpacing: '0',
    fontSize: '1.05em',
  },
}
