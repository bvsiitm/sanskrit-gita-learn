import { T } from '../theme'

export default function Lesson2() {
  return (
    <div style={s.page}>
      <div style={s.center}>
        <div style={s.label}>Lesson 2</div>
        <h1 style={s.title}>Coming Soon</h1>
        <p style={s.sub}>The next two words of the Gita await.</p>
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
  },
  center: {
    textAlign: 'center',
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
    fontFamily: T.font.prose,
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: 400,
    color: T.color.gold,
    marginBottom: '1rem',
  },
  sub: {
    fontFamily: T.font.prose,
    fontSize: '1.15rem',
    fontStyle: 'italic',
    color: T.color.ink4,
  },
}
