import { useEffect, useRef } from 'react'
import { T } from '../theme'

export default function Hero() {
  const starsRef = useRef(null)

  useEffect(() => {
    const container = starsRef.current
    if (!container) return
    for (let i = 0; i < 80; i++) {
      const star = document.createElement('div')
      const size = Math.random() < 0.15 ? 2.5 : 1.2
      star.style.cssText = `
        position:absolute; border-radius:50%;
        background:rgba(255,220,120,0.7);
        width:${size}px; height:${size}px;
        top:${Math.random() * 100}%; left:${Math.random() * 100}%;
        opacity:${0.2 + Math.random() * 0.5};
        animation: pulse ${2 + Math.random() * 4}s ease-in-out infinite;
        animation-delay:${Math.random() * 4}s;
      `
      container.appendChild(star)
    }
    return () => { container.innerHTML = '' }
  }, [])

  return (
    <section style={s.hero}>
      <div ref={starsRef} style={s.stars} />

      {/* OM */}
      <div className="anim-float" style={s.om}>ॐ</div>

      {/* Two scripts, one insight */}
      <div className="anim-fadeUp-1" style={s.twoTexts}>
        <span style={s.scriptLeft}>संस्कृतम्</span>
        <span style={s.arrow}>↔</span>
        <span style={s.scriptRight}>भगवद्गीता</span>
      </div>

      {/* Tagline */}
      <div className="anim-fadeUp-2" style={s.tagline}>
        Learn Sanskrit through the Gita · Understand the Gita through Sanskrit
      </div>

      {/* Sub-tagline */}
      <div className="anim-fadeUp-3" style={s.sub}>
        Each illuminates the other. Neither can be fully read without the other.
      </div>

      {/* Scroll hint */}
      <div className="anim-fadeIn-slow" style={s.scrollHint}>
        <span style={s.scrollLabel}>Scroll</span>
        <div className="anim-pulse" style={s.scrollArrow} />
      </div>
    </section>
  )
}

const s = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '4rem 2rem',
    position: 'relative',
    background: 'radial-gradient(ellipse at 50% 60%, #1e1840 0%, #0d0c24 100%)',
    overflow: 'hidden',
  },
  stars: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
  },
  om: {
    fontFamily: T.font.devanagari,
    fontSize: '3rem',
    color: 'rgba(212,175,55,0.3)',
    marginBottom: '2.5rem',
  },
  twoTexts: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  scriptLeft: {
    fontFamily: T.font.devanagari,
    fontSize: 'clamp(2rem, 6vw, 4.5rem)',
    color: '#f0d978',
    letterSpacing: '0',
    textShadow: '0 0 60px rgba(212,175,55,0.3), 0 2px 4px rgba(0,0,0,0.5)',
  },
  arrow: {
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    color: 'rgba(212,175,55,0.3)',
    fontFamily: T.font.prose,
  },
  scriptRight: {
    fontFamily: T.font.devanagari,
    fontSize: 'clamp(2rem, 6vw, 4.5rem)',
    color: '#f0d978',
    letterSpacing: '0',
    textShadow: '0 0 60px rgba(212,175,55,0.3), 0 2px 4px rgba(0,0,0,0.5)',
  },
  tagline: {
    fontFamily: T.font.label,
    fontSize: 'clamp(0.55rem, 1.5vw, 0.72rem)',
    color: 'rgba(255,255,255,0.35)',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    marginBottom: '1.2rem',
  },
  sub: {
    fontFamily: T.font.prose,
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: 'rgba(212,175,55,0.4)',
    fontStyle: 'italic',
    maxWidth: '520px',
  },
  scrollHint: {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.4rem',
  },
  scrollLabel: {
    fontFamily: T.font.label,
    fontSize: '0.55rem',
    letterSpacing: '0.3em',
    color: 'rgba(255,255,255,0.2)',
    textTransform: 'uppercase',
  },
  scrollArrow: {
    width: '1px',
    height: '30px',
    background: 'linear-gradient(to bottom, rgba(212,175,55,0.4), transparent)',
  },
}
