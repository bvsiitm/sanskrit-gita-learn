import { useState, useEffect, useRef } from "react";

// ─── Design tokens (matches Sanskrit Gita app palette) ────────────────────────
const T = {
  bg:      "#e8ead8",
  gold:    "#b5770d",
  sage:    "#4a5e4a",
  saffron: "#c17f24",
  card:    "rgba(255,255,255,0.60)",
  cardAlt: "rgba(232,234,216,0.65)",
  border:  "rgba(74,94,74,0.22)",
  ink:     "#2c2c1e",
  muted:   "#6b6b55",
};

// ─── Tab data ─────────────────────────────────────────────────────────────────
// Note: Pāṇini sūtra numbers are intentionally omitted — verify references
// before adding them. Sandhi rule descriptions follow Kielhorn / Whitney.
const TABS = [
  {
    id: "lopa",
    tabLabel: "Visarga Lopa",
    ruleSummary: "ः + non-a vowel → ∅",
    note: "Applies before non-a vowels (i, u, ṛ…). Before a, a different rule applies.",
    word1:       "धृतराष्ट्रः",
    word1roman:  "dhṛtarāṣṭraḥ",
    word1stem:   "धृतराष्ट्र",
    visarga:     "ः",
    word2:       "उवाच",
    word2roman:  "uvāca",
    word2contact:"उ",
    result:      "धृतराष्ट्र उवाच",
    resultRoman: "dhṛtarāṣṭra uvāca",
    steps: [
      {
        label: "At rest",
        desc:  "Two words sit apart. The visarga ः ends the first word — a breathy glottal fricative poised at the boundary.",
      },
      {
        label: "Contact",
        desc:  "The visarga ः meets the vowel उ — a non-a vowel — that opens the next word. This environment triggers lopa, not merger.",
      },
      {
        label: "Lopa — elision",
        desc:  "Before a non-a vowel, the visarga is simply elided: it neither transforms nor merges — it disappears. (Before short a, a different rule would apply instead.)",
      },
      {
        label: "Result",
        desc:  "धृतराष्ट्र उवाच. The ः is gone; उवाच begins intact. The boundary is felt as a slight open pause, not a sandhi fusion.",
      },
    ],
    ruleBox:
      "Visarga lopa before non-a vowels: when ः precedes a vowel other than a/ā, it is elided entirely — deletion, not transformation. Contrast: before short a, visarga-preceded aḥ produces o + avagraha (rāmo'pi). The three environments — non-a vowel (lopa), short a (aḥ→o+ʼ), and voiced consonant — each yield a distinct resolution.",
  },
  {
    id: "satva",
    tabLabel: "Visarga Śatva",
    ruleSummary: "ः + च → श्च",
    note: "Visarga assimilates in place to the following palatal stop.",
    word1:       "पाण्डवाः",
    word1roman:  "pāṇḍavāḥ",
    word1stem:   "पाण्डवा",
    visarga:     "ः",
    word2:       "चैव",
    word2roman:  "caiva",
    word2contact:"च",
    result:      "पाण्डवाश्चैव",
    resultRoman: "pāṇḍavāścaiva",
    steps: [
      {
        label: "At rest",
        desc:  "Two words sit apart. The visarga ः ends पाण्डवाः — historically a descendant of final -s.",
      },
      {
        label: "Contact",
        desc:  "The visarga ः meets the palatal stop च that opens चैव. Glottal meets palatal — the grammar must resolve this gap.",
      },
      {
        label: "Śatva — palatal shift",
        desc:  "The visarga assimilates to the palate: ः → श्. Before च or छ, the glottal breath becomes the palatal sibilant श्.",
      },
      {
        label: "Result",
        desc:  "पाण्डवाश्चैव. The श् and च flow together smoothly — point of articulation is now uniform across the junction.",
      },
    ],
    ruleBox:
      "Śatva sandhi: before a palatal consonant (च, छ), visarga shifts to the palatal sibilant श् — assimilation of place of articulation. The same principle extends: before retroflex ट/ठ it becomes ष् (ṣatva); before dental त/थ it becomes स्. Three parallel rules, one governing idea: the sibilant matches the following stop's place.",
  },
];

// ─── Step dot indicator ───────────────────────────────────────────────────────
function StepDots({ total, current }) {
  return (
    <div style={{ display: "flex", gap: 7, justifyContent: "center", margin: "14px 0 0" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 8, height: 8, borderRadius: "50%",
            background: i <= current ? T.gold : T.border,
            transition: "background 0.35s",
          }}
        />
      ))}
    </div>
  );
}

// ─── Single-tab animation panel ───────────────────────────────────────────────
function SandhiPanel({ tab, isActive }) {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timerRef = useRef(null);

  // Reset when tab switches
  useEffect(() => {
    setStep(0);
    setPlaying(false);
    clearInterval(timerRef.current);
  }, [tab.id, isActive]);

  // Auto-play: advance one step every 1.4 s
  useEffect(() => {
    if (!playing) return;
    if (step >= tab.steps.length - 1) {
      setPlaying(false);
      return;
    }
    timerRef.current = setTimeout(() => setStep(s => s + 1), 1400);
    return () => clearTimeout(timerRef.current);
  }, [playing, step, tab.steps.length]);

  const handlePlay = () => {
    if (step >= tab.steps.length - 1) {
      setStep(0);
      setTimeout(() => setPlaying(true), 80);
    } else {
      setPlaying(true);
    }
  };
  const handleStep = () => {
    setPlaying(false);
    setStep(s => Math.min(s + 1, tab.steps.length - 1));
  };
  const handleReset = () => {
    setPlaying(false);
    clearTimeout(timerRef.current);
    setStep(0);
  };

  // ── Derived visual state ──────────────────────────────────────────────────
  // step 0: neutral — both words shown normally, no highlight
  // step 1: highlight the junction phonemes (ः and first char of word2)
  // step 2: ः transforms / disappears — show the change
  // step 3: result word shown, source words fade

  const visargaHighlight  = step >= 1;
  const contactHighlight  = step >= 1;
  const visargaTransform  = step >= 2;  // ः → श् or ः disappears
  const showResult        = step >= 3;
  const sourceFade        = step >= 3;
  const showRuleBox       = step >= 1;

  const isLopa  = tab.id === "lopa";
  const isSatva = tab.id === "satva";

  // What does the visarga slot show in step 2–3?
  const visargaDisplay =
    visargaTransform
      ? (isLopa  ? null : "श्")   // lopa → gone; śatva → श्
      : tab.visarga;              // step 0–1 → ः

  return (
    <div style={{ padding: "0 2px" }}>

      {/* ── Animation stage ─────────────────────────────────────────── */}
      <div
        style={{
          background: T.card,
          border: `1px solid ${T.border}`,
          borderRadius: 12,
          padding: "28px 16px 22px",
          marginBottom: 14,
          minHeight: 180,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Category label */}
        <div style={{
          fontFamily: "Cinzel, serif",
          fontSize: 10,
          letterSpacing: "0.16em",
          color: T.muted,
          textTransform: "uppercase",
          marginBottom: 4,
        }}>
          {tab.ruleSummary}
        </div>

        {/* Main phoneme display */}
        {!showResult && (
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            flexWrap: "wrap",
            justifyContent: "center",
            transition: "opacity 0.4s",
            opacity: sourceFade ? 0.25 : 1,
          }}>

            {/* Word 1 stem */}
            <span style={{
              fontFamily: "'Noto Sans Devanagari', serif",
              fontSize: "clamp(24px, 5vw, 38px)",
              color: T.ink,
              letterSpacing: "0.02em",
              transition: "opacity 0.4s",
            }}>
              {tab.word1stem}
            </span>

            {/* Visarga box */}
            <span style={{
              fontFamily: "'Noto Sans Devanagari', serif",
              fontSize: "clamp(24px, 5vw, 38px)",
              padding: "2px 8px",
              borderRadius: 6,
              border: `2px solid ${visargaHighlight ? T.gold : "transparent"}`,
              background: visargaHighlight
                ? (visargaTransform ? (isLopa ? "rgba(181,119,13,0.08)" : "rgba(74,94,74,0.15)") : "rgba(181,119,13,0.12)")
                : "transparent",
              color: visargaHighlight
                ? (visargaTransform && isSatva ? T.sage : T.gold)
                : T.ink,
              transition: "all 0.4s",
              minWidth: 36,
              textAlign: "center",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {visargaDisplay ?? <span style={{ opacity: 0.18 }}>∅</span>}
            </span>

            {/* + separator */}
            <span style={{
              fontSize: 18,
              color: T.muted,
              margin: "0 4px",
              opacity: visargaHighlight ? 1 : 0.5,
              transition: "opacity 0.4s",
            }}>
              {step === 0 ? "+" : step === 2 ? "→" : "+"}
            </span>

            {/* Word 2 contact phoneme */}
            <span style={{
              fontFamily: "'Noto Sans Devanagari', serif",
              fontSize: "clamp(24px, 5vw, 38px)",
              padding: "2px 8px",
              borderRadius: 6,
              border: `2px solid ${contactHighlight ? T.saffron : "transparent"}`,
              background: contactHighlight ? "rgba(193,127,36,0.10)" : "transparent",
              color: contactHighlight ? T.saffron : T.ink,
              transition: "all 0.4s",
            }}>
              {tab.word2contact}
            </span>

            {/* Rest of word 2 (if longer than one char) */}
            {tab.word2.length > 1 && (
              <span style={{
                fontFamily: "'Noto Sans Devanagari', serif",
                fontSize: "clamp(24px, 5vw, 38px)",
                color: T.ink,
              }}>
                {tab.word2.slice(tab.word2contact.length)}
              </span>
            )}
          </div>
        )}

        {/* Result display (step 3) */}
        {showResult && (
          <div style={{
            textAlign: "center",
            animation: "sw-appear 0.5s ease-out both",
          }}>
            <div style={{
              fontFamily: "'Noto Sans Devanagari', serif",
              fontSize: "clamp(28px, 5.5vw, 44px)",
              color: T.sage,
              letterSpacing: "0.02em",
              fontWeight: 600,
            }}>
              {tab.result}
            </div>
            <div style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: 14,
              color: T.muted,
              fontStyle: "italic",
              marginTop: 4,
            }}>
              {tab.resultRoman}
            </div>
          </div>
        )}

        {/* Romanisation for source words */}
        {!showResult && (
          <div style={{
            display: "flex",
            gap: 24,
            opacity: sourceFade ? 0 : 0.7,
            transition: "opacity 0.4s",
          }}>
            <span style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: 13,
              fontStyle: "italic",
              color: T.muted,
            }}>
              {tab.word1roman}
            </span>
            <span style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: 13,
              fontStyle: "italic",
              color: T.muted,
            }}>
              {tab.word2roman}
            </span>
          </div>
        )}

        {/* Step dots */}
        <StepDots total={tab.steps.length} current={step} />
      </div>

      {/* ── Step description ─────────────────────────────────────────── */}
      <div style={{
        background: T.cardAlt,
        border: `1px solid ${T.border}`,
        borderRadius: 10,
        padding: "14px 16px",
        marginBottom: 14,
        minHeight: 72,
        transition: "background 0.3s",
      }}>
        <div style={{
          fontFamily: "Cinzel, serif",
          fontSize: 11,
          letterSpacing: "0.12em",
          color: T.gold,
          marginBottom: 6,
          textTransform: "uppercase",
        }}>
          Step {step + 1} — {tab.steps[step].label}
        </div>
        <p style={{
          fontFamily: "Cormorant Garamond, Georgia, serif",
          fontSize: 15,
          lineHeight: 1.65,
          color: T.ink,
          margin: 0,
        }}>
          {tab.steps[step].desc}
        </p>
      </div>

      {/* ── Rule box (visible from step 1) ──────────────────────────── */}
      <div style={{
        background: "rgba(181,119,13,0.07)",
        border: `1px solid rgba(181,119,13,0.28)`,
        borderRadius: 10,
        padding: "14px 16px",
        marginBottom: 18,
        opacity: showRuleBox ? 1 : 0,
        transform: showRuleBox ? "translateY(0)" : "translateY(6px)",
        transition: "opacity 0.4s, transform 0.4s",
        pointerEvents: showRuleBox ? "auto" : "none",
      }}>
        <div style={{
          fontFamily: "Cinzel, serif",
          fontSize: 10,
          letterSpacing: "0.14em",
          color: T.gold,
          marginBottom: 6,
          textTransform: "uppercase",
        }}>
          The Rule
        </div>
        <p style={{
          fontFamily: "Cormorant Garamond, Georgia, serif",
          fontSize: 14,
          lineHeight: 1.7,
          color: T.ink,
          margin: 0,
        }}>
          {tab.ruleBox}
        </p>
      </div>

      {/* ── Controls ────────────────────────────────────────────────── */}
      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        {[
          {
            label: playing ? "Playing…" : step === tab.steps.length - 1 ? "↺ Replay" : "▶ Play",
            action: handlePlay,
            disabled: playing,
            primary: true,
          },
          {
            label: "Next step →",
            action: handleStep,
            disabled: playing || step >= tab.steps.length - 1,
            primary: false,
          },
          {
            label: "Reset",
            action: handleReset,
            disabled: step === 0 && !playing,
            primary: false,
          },
        ].map(btn => (
          <button
            key={btn.label}
            onClick={btn.action}
            disabled={btn.disabled}
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 11,
              letterSpacing: "0.1em",
              padding: "8px 18px",
              borderRadius: 20,
              border: `1.5px solid ${btn.primary ? T.gold : T.border}`,
              background: btn.primary ? T.gold : "transparent",
              color: btn.primary ? "#fff" : T.muted,
              cursor: btn.disabled ? "default" : "pointer",
              opacity: btn.disabled ? 0.45 : 1,
              transition: "opacity 0.2s, background 0.2s",
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Main widget ──────────────────────────────────────────────────────────────
export default function SandhiWidget({ defaultTab = 'lopa' }) {
  const defaultIdx = TABS.findIndex(t => t.id === defaultTab)
  const [activeTab, setActiveTab] = useState(defaultIdx >= 0 ? defaultIdx : 0);

  return (
    <div style={{
      background: T.bg,
      borderRadius: 14,
      border: `1px solid ${T.border}`,
      overflow: "hidden",
      maxWidth: 640,
      margin: "0 auto",
      fontFamily: "Cormorant Garamond, Georgia, serif",
    }}>

      {/* CSS for result animation */}
      <style>{`
        @keyframes sw-appear {
          from { opacity: 0; transform: translateY(8px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
      `}</style>

      {/* ── Tab bar ───────────────────────────────────────────────────── */}
      <div style={{
        display: "flex",
        borderBottom: `1px solid ${T.border}`,
        background: "rgba(255,255,255,0.35)",
      }}>
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(i)}
            style={{
              flex: 1,
              padding: "13px 10px",
              fontFamily: "Cinzel, serif",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              border: "none",
              borderBottom: activeTab === i ? `2.5px solid ${T.gold}` : "2.5px solid transparent",
              background: "transparent",
              color: activeTab === i ? T.gold : T.muted,
              cursor: "pointer",
              transition: "color 0.2s, border-color 0.2s",
            }}
          >
            {tab.tabLabel}
          </button>
        ))}
      </div>

      {/* ── Rule headline ─────────────────────────────────────────────── */}
      <div style={{
        textAlign: "center",
        padding: "14px 16px 6px",
        background: "rgba(255,255,255,0.20)",
      }}>
        <span style={{
          fontFamily: "'Noto Sans Devanagari', Cinzel, serif",
          fontSize: 22,
          color: T.gold,
          letterSpacing: "0.05em",
        }}>
          {TABS[activeTab].ruleSummary}
        </span>
        <span style={{
          display: "block",
          fontFamily: "Cormorant Garamond, Georgia, serif",
          fontSize: 12,
          color: T.muted,
          marginTop: 4,
          fontStyle: "italic",
        }}>
          {TABS[activeTab].note}
        </span>
      </div>

      {/* ── Panel ─────────────────────────────────────────────────────── */}
      <div style={{ padding: "16px 18px 22px" }}>
        {TABS.map((tab, i) =>
          activeTab === i ? (
            <SandhiPanel key={tab.id} tab={tab} isActive={true} />
          ) : null
        )}
      </div>
    </div>
  );
}
