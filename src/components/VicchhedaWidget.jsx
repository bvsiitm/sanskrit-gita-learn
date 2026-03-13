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

// ─── Tab data — each tab goes FROM fused form TO separated words ──────────────
//
// Note on rule references: Pāṇini sūtra numbers are intentionally omitted —
// please verify before adding them. Descriptions follow Kielhorn / Whitney.
//
const TABS = [
  {
    id: "lopa",
    tabLabel: "Lopa Viccheda",
    ruleSummary: "∅ → ः  (restore lopa)",
    note: "Open junction before a non-a vowel signals a dropped visarga.",

    // The fused / post-sandhi form the student sees first
    fused:      "धृतराष्ट्र उवाच",
    fusedRoman: "dhṛtarāṣṭra uvāca",

    // Where the seam sits — rendered as [left | seam | right]
    seamLeft:   "धृतराष्ट्र",   // part before the seam
    seamMark:   "∅",            // what is visible at the seam (nothing — lopa)
    seamRight:  "उवाच",        // part after the seam

    // The restored visarga
    restored:   "ः",
    restoredLabel: "ः restored",

    // Final separated words
    word1:      "धृतराष्ट्रः",
    word1roman: "dhṛtarāṣṭraḥ",
    word2:      "उवाच",
    word2roman: "uvāca",

    steps: [
      {
        label: "The fused form",
        desc:  "We see धृतराष्ट्र उवाच in the text. The junction is open — no audible consonant between the two words. This openness is itself the clue.",
      },
      {
        label: "Identify the seam",
        desc:  "उवाच begins with उ — a non-a vowel. A word ending before a non-a vowel in sandhi context is a candidate for visarga lopa: the ः was elided here.",
      },
      {
        label: "Restore the visarga",
        desc:  "We insert ः back at the seam: धृतराष्ट्र + ः = धृतराष्ट्रः. The restoration is clean — no other phoneme was affected, so lopa is the simplest case to reverse.",
      },
      {
        label: "Viccheda complete",
        desc:  "धृतराष्ट्रः · उवाच. Two words, each intact. The visarga is the nominative singular ending of the a-stem — confirming the form is dhṛtarāṣṭraḥ, subject of the sentence.",
      },
    ],

    ruleBox:
      "Lopa viccheda: an open junction before a non-a vowel signals a dropped visarga. Since lopa is deletion — not transformation — the restoration is direct: add ः back. No phoneme in either word changed. Contrast with aḥ + a → o + ʼ, where the restoration requires reading the avagraha (ʼ) as the marker of the absorbed a.",
  },

  {
    id: "satva",
    tabLabel: "Śatva Viccheda",
    ruleSummary: "श् → ः  (restore śatva)",
    note: "श् before च/छ is the telltale mark of visarga śatva.",

    fused:      "पाण्डवाश्चैव",
    fusedRoman: "pāṇḍavāścaiva",

    seamLeft:   "पाण्डवा",
    seamMark:   "श्",           // the sibilant that replaced ः
    seamRight:  "चैव",

    restored:   "ः",
    restoredLabel: "श् → ः",

    word1:      "पाण्डवाः",
    word1roman: "pāṇḍavāḥ",
    word2:      "चैव",
    word2roman: "caiva",

    steps: [
      {
        label: "The fused form",
        desc:  "We see पाण्डवाश्चैव in the text. A long ā-stem ending in श्च — this cluster is the recognisable fingerprint of visarga śatva.",
      },
      {
        label: "Identify the seam",
        desc:  "The pattern ā + श् + च is the seam: श् before the palatal stop च tells us a visarga was assimilated here. The ā belongs to the first word; the च begins the second.",
      },
      {
        label: "Restore the visarga",
        desc:  "Replace श् with ः: पाण्डवा + ः = पाण्डवाः. The च is untouched — it began the second word and was never altered by sandhi.",
      },
      {
        label: "Viccheda complete",
        desc:  "पाण्डवाः · चैव. The nominative plural of pāṇḍava, followed by the emphatic particle caiva. The grammatical structure — subject + emphatic — is now transparent.",
      },
    ],

    ruleBox:
      "Śatva viccheda: whenever श् appears immediately before च or छ at a word boundary, suspect visarga śatva. Restore ः to the first word and begin the second word with च/छ. The same logic applies to ष् before ट/ठ (ṣatva) and स् before त/थ — three assimilation patterns, one reversal strategy: identify the sibilant, restore ः, split.",
  },
];

// ─── Step dot indicator ───────────────────────────────────────────────────────
function StepDots({ total, current }) {
  return (
    <div style={{ display: "flex", gap: 7, justifyContent: "center", margin: "14px 0 0" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          width: 8, height: 8, borderRadius: "50%",
          background: i <= current ? T.sage : T.border,
          transition: "background 0.35s",
        }} />
      ))}
    </div>
  );
}

// ─── Single-tab viccheda panel ────────────────────────────────────────────────
function VicchhedaPanel({ tab }) {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    setStep(0);
    setPlaying(false);
    clearTimeout(timerRef.current);
  }, [tab.id]);

  useEffect(() => {
    if (!playing) return;
    if (step >= tab.steps.length - 1) { setPlaying(false); return; }
    timerRef.current = setTimeout(() => setStep(s => s + 1), 1400);
    return () => clearTimeout(timerRef.current);
  }, [playing, step, tab.steps.length]);

  const handlePlay = () => {
    if (step >= tab.steps.length - 1) { setStep(0); setTimeout(() => setPlaying(true), 80); }
    else setPlaying(true);
  };
  const handleStep  = () => { setPlaying(false); setStep(s => Math.min(s + 1, tab.steps.length - 1)); };
  const handleReset = () => { setPlaying(false); clearTimeout(timerRef.current); setStep(0); };

  // ── Visual state ──────────────────────────────────────────────────────────
  // step 0: fused form shown as a whole, neutral
  // step 1: seam phonemes highlighted within the fused string
  // step 2: seam mark transforms to ः (restoration), split begins
  // step 3: two separated words displayed

  const highlightSeam  = step >= 1;
  const showRestored   = step >= 2;
  const showSplit      = step >= 3;
  const showRuleBox    = step >= 1;

  return (
    <div style={{ padding: "0 2px" }}>

      {/* ── Animation stage ─────────────────────────────────────────── */}
      <div style={{
        background: T.card,
        border: `1px solid ${T.border}`,
        borderRadius: 12,
        padding: "28px 16px 22px",
        marginBottom: 14,
        minHeight: 190,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}>

        {/* Category label */}
        <div style={{
          fontFamily: "Cinzel, serif",
          fontSize: 10,
          letterSpacing: "0.16em",
          color: T.muted,
          textTransform: "uppercase",
          marginBottom: 6,
        }}>
          {tab.ruleSummary}
        </div>

        {/* ── Fused display (steps 0–2) ── */}
        {!showSplit && (
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 0,
            transition: "opacity 0.4s",
            opacity: showSplit ? 0 : 1,
          }}>
            {/* Left part */}
            <span style={{
              fontFamily: "'Noto Sans Devanagari', serif",
              fontSize: "clamp(22px, 4.5vw, 36px)",
              color: T.ink,
              letterSpacing: "0.02em",
            }}>
              {tab.seamLeft}
            </span>

            {/* Seam mark box */}
            <span style={{
              fontFamily: "'Noto Sans Devanagari', serif",
              fontSize: "clamp(22px, 4.5vw, 36px)",
              padding: "2px 8px",
              borderRadius: 6,
              border: `2px solid ${highlightSeam ? T.gold : "transparent"}`,
              background: highlightSeam
                ? (showRestored ? "rgba(74,94,74,0.15)" : "rgba(181,119,13,0.12)")
                : "transparent",
              color: highlightSeam
                ? (showRestored ? T.sage : T.gold)
                : T.ink,
              transition: "all 0.4s",
              minWidth: 36,
              textAlign: "center",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 1px",
            }}>
              {showRestored
                ? tab.restored
                : (tab.seamMark === "∅"
                  ? <span style={{ opacity: highlightSeam ? 0.4 : 0 }}>∅</span>
                  : tab.seamMark)
              }
            </span>

            {/* Right part */}
            <span style={{
              fontFamily: "'Noto Sans Devanagari', serif",
              fontSize: "clamp(22px, 4.5vw, 36px)",
              color: T.ink,
              letterSpacing: "0.02em",
            }}>
              {tab.seamRight}
            </span>
          </div>
        )}

        {/* ── Split result (step 3) ── */}
        {showSplit && (
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
            animation: "vc-appear 0.5s ease-out both",
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Noto Sans Devanagari', serif",
                fontSize: "clamp(22px, 4.5vw, 36px)",
                color: T.sage,
                fontWeight: 600,
              }}>
                {tab.word1}
              </div>
              <div style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: 13,
                color: T.muted,
                fontStyle: "italic",
                marginTop: 2,
              }}>
                {tab.word1roman}
              </div>
            </div>

            {/* Separator */}
            <div style={{
              fontSize: 22,
              color: T.border,
              fontWeight: 300,
              lineHeight: 1,
            }}>
              ·
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Noto Sans Devanagari', serif",
                fontSize: "clamp(22px, 4.5vw, 36px)",
                color: T.sage,
                fontWeight: 600,
              }}>
                {tab.word2}
              </div>
              <div style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: 13,
                color: T.muted,
                fontStyle: "italic",
                marginTop: 2,
              }}>
                {tab.word2roman}
              </div>
            </div>
          </div>
        )}

        {/* Source romanisation (steps 0–2) */}
        {!showSplit && (
          <div style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: 13,
            fontStyle: "italic",
            color: T.muted,
            opacity: 0.8,
            marginTop: 2,
          }}>
            {tab.fusedRoman}
          </div>
        )}

        {/* Restoration label (step 2 only) */}
        {showRestored && !showSplit && (
          <div style={{
            fontFamily: "Cinzel, serif",
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: T.sage,
            opacity: 0.85,
            animation: "vc-appear 0.35s ease-out both",
          }}>
            {tab.restoredLabel}
          </div>
        )}

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
      }}>
        <div style={{
          fontFamily: "Cinzel, serif",
          fontSize: 11,
          letterSpacing: "0.12em",
          color: T.sage,
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

      {/* ── Rule box (from step 1) ───────────────────────────────────── */}
      <div style={{
        background: "rgba(74,94,74,0.07)",
        border: `1px solid rgba(74,94,74,0.25)`,
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
          color: T.sage,
          marginBottom: 6,
          textTransform: "uppercase",
        }}>
          The Reversal
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
              border: `1.5px solid ${btn.primary ? T.sage : T.border}`,
              background: btn.primary ? T.sage : "transparent",
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
export default function VicchhedaWidget() {
  const [activeTab, setActiveTab] = useState(0);

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

      <style>{`
        @keyframes vc-appear {
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
            onClick={() => { setActiveTab(i); }}
            style={{
              flex: 1,
              padding: "13px 10px",
              fontFamily: "Cinzel, serif",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              border: "none",
              borderBottom: activeTab === i ? `2.5px solid ${T.sage}` : "2.5px solid transparent",
              background: "transparent",
              color: activeTab === i ? T.sage : T.muted,
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
          color: T.sage,
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
          activeTab === i
            ? <VicchhedaPanel key={tab.id} tab={tab} />
            : null
        )}
      </div>
    </div>
  );
}
