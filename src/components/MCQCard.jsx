import { useState } from 'react'
import { T } from '../theme'

// States: 'unanswered' | 'answered'
export default function MCQCard({ card, color = T.color.saffron }) {
  const [selected, setSelected] = useState(null) // index of chosen option
  const [rating, setRating]     = useState(null) // 'got' | 'unsure' | 'missed'

  const answered = selected !== null
  const chosenOption = answered ? card.options[selected] : null

  // Left border color
  let borderColor = color
  if (answered) {
    borderColor = chosenOption.correct ? T.color.correct : T.color.wrong
  }

  function handleSelect(idx) {
    if (answered) return
    setSelected(idx)
  }

  function handleRating(r) {
    setRating(r)
    // SRS update will be wired in a later session
  }

  return (
    <div style={{
      ...styles.card,
      borderLeftColor: borderColor,
      background: `${color}35`,
    }}>
      {/* Question */}
      <p style={styles.question}>{card.question}</p>

      {/* Options */}
      <div style={styles.optionList}>
        {card.options.map((opt, idx) => {
          const isSelected = selected === idx
          const showResult = answered && isSelected

          let optBg   = T.color.parchment2
          let optBorder = 'rgba(181,119,13,0.2)'
          let optColor  = T.color.ink3

          if (showResult) {
            if (opt.correct) {
              optBg     = 'rgba(46,125,79,0.12)'
              optBorder = T.color.correct
              optColor  = '#1a5c34'
            } else {
              optBg     = 'rgba(192,57,43,0.10)'
              optBorder = T.color.wrong
              optColor  = '#8b1a1a'
            }
          } else if (answered && opt.correct) {
            // highlight the correct answer in green even if not selected
            optBg     = 'rgba(46,125,79,0.07)'
            optBorder = 'rgba(46,125,79,0.4)'
          }

          return (
            <div key={idx}>
              <button
                onClick={() => handleSelect(idx)}
                disabled={answered}
                style={{
                  ...styles.option,
                  backgroundColor: optBg,
                  borderColor: optBorder,
                  color: optColor,
                  cursor: answered ? 'default' : 'pointer',
                }}
              >
                <span style={styles.optionLabel}>
                  {String.fromCharCode(65 + idx)}.
                </span>
                <span style={{
                  fontFamily: containsDevanagari(opt.label)
                    ? T.font.devanagari
                    : T.font.prose,
                  fontSize: containsDevanagari(opt.label) ? '1.05rem' : '1rem',
                  color: containsDevanagari(opt.label) && !showResult
                    ? T.color.gold
                    : 'inherit',
                }}>
                  {opt.label}
                </span>
              </button>

              {/* Feedback appears below the selected option */}
              {isSelected && answered && (
                <div style={{
                  ...styles.feedback,
                  borderLeftColor: opt.correct ? T.color.correct : T.color.wrong,
                  color: opt.correct ? '#1a5c34' : '#7a2020',
                }}>
                  {opt.feedback}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Self-rating buttons — appear after answering */}
      {answered && rating === null && (
        <div style={styles.ratingRow}>
          <span style={styles.ratingLabel}>How did you do?</span>
          <div style={styles.ratingButtons}>
            <button
              style={{ ...styles.ratingBtn, ...styles.ratingGot }}
              onClick={() => handleRating('got')}
            >
              Got it
            </button>
            <button
              style={{ ...styles.ratingBtn, ...styles.ratingUnsure }}
              onClick={() => handleRating('unsure')}
            >
              Unsure
            </button>
            <button
              style={{ ...styles.ratingBtn, ...styles.ratingMissed }}
              onClick={() => handleRating('missed')}
            >
              Missed
            </button>
          </div>
        </div>
      )}

      {/* Confirmation after rating */}
      {rating !== null && (
        <div style={styles.ratedConfirm}>
          {rating === 'got'    && '✓ Marked as known — see you in a few days.'}
          {rating === 'unsure' && '↺ Coming back soon.'}
          {rating === 'missed' && '↺ Back tomorrow.'}
        </div>
      )}
    </div>
  )
}

// Detect Devanagari characters (Unicode block U+0900–U+097F)
function containsDevanagari(str) {
  return /[\u0900-\u097F]/.test(str)
}

const styles = {
  card: {
    background: '#f2e8ce',
    border: '1px solid rgba(181,119,13,0.2)',
    borderLeft: '4px solid',          // color set inline
    borderRadius: '0 6px 6px 0',
    padding: '1.5rem 1.75rem',
    margin: '2rem 0',
    transition: 'border-left-color 0.35s ease',
  },

  question: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '1.1rem',
    fontWeight: 500,
    color: '#3d2a10',
    lineHeight: 1.65,
    marginBottom: '1.1rem',
  },

  optionList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },

  option: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    padding: '0.6rem 0.85rem',
    border: '1px solid',
    borderRadius: '4px',
    background: 'transparent',
    textAlign: 'left',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '1rem',
    lineHeight: 1.5,
    transition: 'background-color 0.25s, border-color 0.25s, color 0.25s',
  },

  optionLabel: {
    fontFamily: "'Cinzel', serif",
    fontSize: '0.65rem',
    letterSpacing: '0.05em',
    color: '#9a7040',
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
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '0.93rem',
    lineHeight: 1.7,
    fontStyle: 'italic',
  },

  ratingRow: {
    marginTop: '1.1rem',
    paddingTop: '0.85rem',
    borderTop: '1px solid rgba(181,119,13,0.15)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },

  ratingLabel: {
    fontFamily: "'Cinzel', serif",
    fontSize: '0.6rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: '#9a7040',
  },

  ratingButtons: {
    display: 'flex',
    gap: '0.5rem',
  },

  ratingBtn: {
    padding: '0.35rem 0.9rem',
    border: '1px solid',
    borderRadius: '3px',
    fontFamily: "'Cinzel', serif",
    fontSize: '0.6rem',
    letterSpacing: '0.12em',
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s',
  },

  ratingGot: {
    borderColor: '#2e7d4f',
    color: '#2e7d4f',
    background: 'rgba(46,125,79,0.06)',
  },

  ratingUnsure: {
    borderColor: '#b5770d',
    color: '#b5770d',
    background: 'rgba(181,119,13,0.06)',
  },

  ratingMissed: {
    borderColor: '#c0392b',
    color: '#c0392b',
    background: 'rgba(192,57,43,0.06)',
  },

  ratedConfirm: {
    marginTop: '0.7rem',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: '0.88rem',
    fontStyle: 'italic',
    color: '#9a7040',
  },
}
