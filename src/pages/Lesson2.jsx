import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cardSets2 } from '../data/cardSets2'
import MCQCard from '../components/MCQCard'
import Reveal from '../components/Reveal'
import VerseDisplay from '../components/VerseDisplay'
import VibhaktiTable from '../components/VibhaktiTable'
import SandhiWidget from '../components/SandhiWidget'
import { T } from '../theme'

// ── Map cardSets2 shape → MCQCard shape ────────────────────────────────────────
// cardSets2 uses { q, opts:[{t, c, fb}] }; MCQCard expects { question, options:[{label,correct,feedback}] }
function adapt(raw) {
  return {
    ...raw,
    question: raw.q,
    options: raw.opts.map(o => ({ label: o.t, correct: o.c, feedback: o.fb })),
  }
}

const set1 = cardSets2[0].cards.map(adapt) // Saptamī Vibhakti
const set2 = cardSets2[1].cards.map(adapt) // Word Order
const set3 = cardSets2[2].cards.map(adapt) // Sambodhana
const set4 = cardSets2[3].cards.map(adapt) // Śatva Sandhi

// Color palette — shifted from Lesson 1 so lessons feel visually distinct
const C = T.setColor
const PALETTE = [C[2], C[3], C[4], C[5], C[1]] // indigo, crimson, teal, plum, saffron
let ci = 0
const cc = Array.from({ length: 17 }, () => PALETTE[ci++ % 5])

// Per-set label colours
const SC = { 1: C[2], 2: C[3], 3: C[4], 4: C[5] }

const SAGE = '#4a5e4a'

// ── Top nav ────────────────────────────────────────────────────────────────────
function Lesson2Nav() {
  return (
    <nav style={n.nav}>
      <Link to="/" style={n.side}>← Lesson 1</Link>
      <span style={n.center}>भगवद्गीतासंस्कृतशिक्षकः</span>
      <span style={{ ...n.side, opacity: 0.28, cursor: 'default' }}>Lesson 3 →</span>
    </nav>
  )
}

// ── End-of-lesson button ───────────────────────────────────────────────────────
function EndButton() {
  return (
    <div style={end.wrapper}>
      <div style={end.endLabel}>End of Lesson 2</div>
      <p style={end.comingSoon}>
        Lesson 3 — <span style={{ fontFamily: T.font.devanagari, color: T.color.gold, letterSpacing: 0 }}>तृतीया विभक्ति</span> — coming soon.
      </p>
      <Link to="/" style={end.btn}>← Return to Lesson 1</Link>
    </div>
  )
}

// ── Main page ──────────────────────────────────────────────────────────────────
export default function Lesson2() {
  return (
    <div style={s.page}>
      <Lesson2Nav />

      <main style={s.main}>

        {/* ── Opening verse display ── */}
        <VerseDisplay />

        {/* ── Intro prose ── */}
        <Reveal><p style={s.prose}>
          Lesson 1 built two words — <span style={s.skt}>धृतराष्ट्र उवाच</span>. This lesson
          turns to what he says. The first question in the Bhagavad Gītā is Dhṛtarāṣṭra's,
          and it contains four words worth lingering on. Two are place names whose endings
          tell you <em>where</em>. One is a compound noun whose form tells you <em>who</em>.
          One is a name of address that tells you <em>to whom</em>.
        </p></Reveal>

        <Reveal><p style={s.prose}>
          The verse also conceals new sandhi. You know lopa — the vanishing visarga before
          <span style={s.skt}> उवाच</span>. This verse introduces a different operation: the
          visarga that does not vanish but changes shape. By the end of this lesson the compound
          <span style={s.skt}> पाण्डवाश्चैव</span> will be completely transparent.
        </p></Reveal>

        <Reveal><div style={s.divider}>✦</div></Reveal>

        {/* ══════════ SET 1 — SAPTAMĪ VIBHAKTI ══════════ */}
        <div id="set-1">
          <Reveal><p style={{ ...s.setLabel, color: SC[1], background: `${SC[1]}18` }}>Set 1 — Saptamī Vibhakti</p></Reveal>
          <Reveal><h2 style={s.h2}>Where does the battle take place?</h2></Reveal>

          <Reveal><p style={s.prose}>
            The verse opens with two place names:{' '}
            <span style={s.skt}>धर्मक्षेत्रे</span> and{' '}
            <span style={s.skt}>कुरुक्षेत्रे</span>. Both end in{' '}
            <strong>-e</strong>. That ending is the{' '}
            <strong>Saptamī Vibhakti</strong> — the seventh case — and it answers a
            single question: where? English handles this with a preposition: <em>in</em>{' '}
            Kurukṣetra. Sanskrit embeds the same information in the word itself.
            The stem is <span style={s.skt}>कुरुक्षेत्र</span>; add -e and you have
            <span style={s.skt}> कुरुक्षेत्रे</span> — <em>in</em> Kurukṣetra.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            For a-stem nouns — masculine and neuter nouns whose bare stem ends in the vowel{' '}
            <span style={s.skt}>अ</span> — the singular locative ending is always{' '}
            <strong>-e</strong> (written{' '}
            <span style={s.skt}>-े</span> in Devanagari). The table below shows where
            the Saptamī sits in the full declension. Only two cells are filled; the rest
            will come lesson by lesson.
          </p></Reveal>

          <Reveal><VibhaktiTable /></Reveal>

          <Reveal><p style={s.prose}>
            The Prathamā (nominative, Lesson 1) marks the subject. The Saptamī (locative)
            marks the scene. Together they describe the simplest Sanskrit clause imaginable:
            someone, somewhere. The Gītā opens with exactly that.
          </p></Reveal>

          <Reveal><MCQCard card={set1[0]} color={cc[0]} /></Reveal>

          <Reveal><p style={s.prose}>
            The locative marks where something <em>is</em> — not where it is going, not where
            it came from. Motion toward uses the Dvitīyā (-am); origin uses the Pañcamī (-āt).
            When you see -e on a place name, read it simply as <em>in</em>.
          </p></Reveal>

          <Reveal><MCQCard card={set1[1]} color={cc[1]} /></Reveal>

          <Reveal><p style={s.prose}>
            The Rāmāyaṇa is full of locatives — Citrakūṭa, the Daṇḍaka forest, the palace of
            Laṅkā. Any Sanskrit narrative that places a character somewhere uses this ending.
          </p></Reveal>

          <Reveal><MCQCard card={set1[2]} color={cc[2]} /></Reveal>

          <Reveal><p style={s.prose}>
            The same pattern holds for any proper noun with an a-stem. Sañjaya reports from
            the court; the king's court would itself be in the locative when named as a location.
          </p></Reveal>

          <Reveal><MCQCard card={set1[3]} color={cc[3]} /></Reveal>

          <Reveal><p style={s.prose}>
            The Saptamī marks location. The a-stem locative singular is -e. Two locatives open
            the first verse — placing the scene before any characters are named.
          </p></Reveal>

          <Reveal><div style={s.divider}>✦</div></Reveal>
        </div>

        {/* ══════════ SET 2 — WORD ORDER ══════════ */}
        <div id="set-2">
          <Reveal><p style={{ ...s.setLabel, color: SC[2], background: `${SC[2]}18` }}>Set 2 — Word Order</p></Reveal>
          <Reveal><h2 style={s.h2}>Does the order of words matter?</h2></Reveal>

          <Reveal><p style={s.prose}>
            English sentences follow a rigid Subject-Verb-Object order. Change the order and
            you change the meaning — or lose it entirely. Sanskrit is different. Because case
            endings encode grammatical role, the words are free to appear in almost any sequence.
            <span style={s.skt}> कुरुक्षेत्रे कृष्णः</span> and{' '}
            <span style={s.skt}>कृष्णः कुरुक्षेत्रे</span> say exactly the same thing:
            Kṛṣṇa is in Kurukṣetra. The endings, not the positions, carry the meaning.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            This matters for reading. Do not assume that the first word of a Sanskrit sentence
            is the subject. Look for the nominative ending — <strong>-aḥ</strong> for a-stems.
            Whatever word carries it is the subject, wherever it sits in the line.
          </p></Reveal>

          <Reveal><MCQCard card={set2[0]} color={cc[4]} /></Reveal>

          <Reveal><p style={s.prose}>
            The same two words, the same surface order — but the endings have swapped.
            The subject is now determined by which word ends in -aḥ.
          </p></Reveal>

          <Reveal><MCQCard card={set2[1]} color={cc[5]} /></Reveal>

          <Reveal><p style={s.prose}>
            Place names can be compounds. The ending still determines meaning, regardless
            of how long the word is or where it sits in the sentence.
          </p></Reveal>

          <Reveal><MCQCard card={set2[2]} color={cc[6]} /></Reveal>

          <Reveal><p style={s.prose}>
            And once more with the endings reversed. Position unchanged; meaning inverted.
            This is the proof that Sanskrit word order is a matter of emphasis, not grammar.
          </p></Reveal>

          <Reveal><MCQCard card={set2[3]} color={cc[7]} /></Reveal>

          <Reveal><p style={s.prose}>
            A sentence that opens with the locative places the scene before the actor — a
            natural narrative strategy. The Gītā does exactly this: the fields first, the
            warriors after.
          </p></Reveal>

          <Reveal><div style={s.divider}>✦</div></Reveal>
        </div>

        {/* ══════════ SET 3 — SAMBODHANA ══════════ */}
        <div id="set-3">
          <Reveal><p style={{ ...s.setLabel, color: SC[3], background: `${SC[3]}18` }}>Set 3 — Sambodhana</p></Reveal>
          <Reveal><h2 style={s.h2}>Who is being addressed?</h2></Reveal>

          <Reveal><p style={s.prose}>
            The verse ends with a single word:{' '}
            <span style={s.skt}>सञ्जय</span>. Dhṛtarāṣṭra is asking a
            question — and directing it at someone. That someone's name, at the end of
            the line, is in the <strong>Sambodhana</strong> — the vocative — the case of
            direct address.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            For a-stem masculine nouns, the vocative singular is the bare stem — the form
            with no ending at all. The nominative of Sañjaya is{' '}
            <span style={s.skt}>सञ्जयः</span> (with -aḥ). The vocative is{' '}
            <span style={s.skt}>सञ्जय</span> — the final visarga stripped away. In spoken
            Sanskrit it is preceded by <span style={s.skt}>हे</span> — an exclamative
            particle. In the Gītā the <span style={s.skt}>हे</span> is usually dropped,
            but the bare stem remains.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            You have already seen this contrast from the other side. Lesson 1 showed you{' '}
            <span style={s.skt}>सञ्जय उवाच</span> — Sañjaya as the subject, nominative,
            with the visarga dropped by lopa. Here he is the addressee, vocative, with the
            visarga simply absent. The forms look the same; the grammatical function is opposite.
          </p></Reveal>

          <Reveal><MCQCard card={set3[0]} color={cc[8]} /></Reveal>

          <Reveal><p style={s.prose}>
            Kṛṣṇa addresses Arjuna by the epithet{' '}
            <span style={s.skt}>अच्युत</span> — "the unfallen one" — one of many names
            used throughout the Gītā. The vocative is the most common case in a text made
            largely of dialogue.
          </p></Reveal>

          <Reveal><MCQCard card={set3[1]} color={cc[9]} /></Reveal>

          <Reveal><p style={s.prose}>
            Pārtha — son of Pṛthā — is one of Arjuna's most frequent epithets. Kṛṣṇa
            uses it dozens of times. The vocative form is the bare stem, just as with
            rāma and sañjaya.
          </p></Reveal>

          <Reveal><MCQCard card={set3[2]} color={cc[10]} /></Reveal>

          <Reveal><p style={s.prose}>
            The warriors in Chapter 1 address their teacher Droṇa. The same rule: a-stem
            masculine vocative = bare stem.
          </p></Reveal>

          <Reveal><MCQCard card={set3[3]} color={cc[11]} /></Reveal>

          <Reveal><p style={s.prose}>
            The Sambodhana of a-stem masculines is the bare stem — the nominative without
            its -aḥ. Learn to spot it: whenever a word appears at the start or end of a
            spoken line without a case ending, it is likely a vocative.
          </p></Reveal>

          <Reveal><div style={s.divider}>✦</div></Reveal>
        </div>

        {/* ══════════ SET 4 — ŚATVA SANDHI ══════════ */}
        <div id="set-4">
          <Reveal><p style={{ ...s.setLabel, color: SC[4], background: `${SC[4]}18` }}>Set 4 — Śatva Sandhi</p></Reveal>
          <Reveal><h2 style={s.h2}>A new sandhi rule</h2></Reveal>

          <Reveal><p style={s.prose}>
            The second hemistich of verse 1.1 reads:{' '}
            <span style={s.skt}>मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय</span>.
            Three of those five words involve sandhi. You know lopa — the silent boundary
            before <span style={s.skt}>उवाच</span>. Now meet a different rule: visarga
            śatva, where the visarga does not disappear but transforms.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            <span style={s.skt}>पाण्डवाश्चैव</span> is a compound of three elements:
            <span style={s.skt}> पाण्डवाः</span> (nominative plural of pāṇḍava) +{' '}
            <span style={s.skt}>च</span> (and) +{' '}
            <span style={s.skt}>एव</span> (indeed). Two sandhi rules operate in sequence.
            First: the visarga before the palatal stop{' '}
            <span style={s.skt}>च</span> becomes the palatal sibilant{' '}
            <span style={s.skt}>श्</span> — this is śatva. Then: the final{' '}
            <span style={s.skt}>अ</span> of{' '}
            <span style={s.skt}>च</span> and the initial{' '}
            <span style={s.skt}>ए</span> of{' '}
            <span style={s.skt}>एव</span> fuse — a + e → ai — giving{' '}
            <span style={s.skt}>चैव</span>. Result:{' '}
            <span style={s.skt}>पाण्डवाश्चैव</span>.
          </p></Reveal>

          {/* Interactive widget — opens on the śatva tab */}
          <Reveal>
            <div style={{ margin: '2rem 0' }}>
              <SandhiWidget defaultTab="satva" />
            </div>
          </Reveal>

          <Reveal><p style={s.prose}>
            Chapter 1 of the Gītā is a catalogue of warriors — and many names are listed in
            pairs joined by{' '}
            <span style={s.skt}>च</span>. Every one of those junctions is a śatva.
            Apply the rule yourself:
          </p></Reveal>

          <Reveal><MCQCard card={set4[0]} color={cc[12]} /></Reveal>

          <Reveal><p style={s.prose}>
            The same rule applies to every a-stem nominative in -aḥ followed by{' '}
            <span style={s.skt}>च</span>.
          </p></Reveal>

          <Reveal><MCQCard card={set4[1]} color={cc[13]} /></Reveal>

          <Reveal><p style={s.prose}>
            Longer compound names — the rule does not care how many syllables precede
            the visarga.
          </p></Reveal>

          <Reveal><MCQCard card={set4[2]} color={cc[14]} /></Reveal>

          <Reveal><p style={s.prose}>
            A two-word proper name as subject, joined to the next name by{' '}
            <span style={s.skt}>च</span>. The palatal assimilation is automatic.
          </p></Reveal>

          <Reveal><MCQCard card={set4[3]} color={cc[15]} /></Reveal>

          <Reveal><p style={s.prose}>
            The final card is different — it is not visarga + palatal, but the vowel
            sandhi that produced the{' '}
            <span style={s.skt}>चैव</span> inside{' '}
            <span style={s.skt}>पाण्डवाश्चैव</span>. This is the second
            operation: a + e → ai.
          </p></Reveal>

          <Reveal><MCQCard card={set4[4]} color={cc[16]} /></Reveal>

          <Reveal><p style={s.prose}>
            Three sandhi rules from the opening verse: lopa (ḥ disappears before non-a
            vowels), śatva (ḥ becomes ś before palatals), and vowel sandhi (a + e → ai).
            Each rule is triggered by the sound environment of what follows. When you read
            the verse aloud, these transitions happen automatically — the grammar is encoded
            in the rhythm of the Sanskrit.
          </p></Reveal>

          <Reveal>
            <EndButton />
          </Reveal>
        </div>

      </main>
    </div>
  )
}

// ── Styles ──────────────────────────────────────────────────────────────────────
const s = {
  page: {
    background: T.color.parchment,
    minHeight: '100vh',
    color: T.color.ink,
  },
  main: {
    maxWidth: '680px',
    margin: '0 auto',
    padding: '4rem 2rem 6rem',    // 4rem top to clear the fixed nav
  },
  prose: {
    fontFamily: T.font.prose,
    fontSize: '1.2rem',
    lineHeight: 1.85,
    color: T.color.ink3,
    marginBottom: '1.4rem',
    maxWidth: '65ch',
  },
  skt: {
    fontFamily: T.font.devanagari,
    color: T.color.gold,
    fontSize: '1.05em',
    letterSpacing: 0,
  },
  h2: {
    fontFamily: T.font.prose,
    fontSize: '2rem',
    fontWeight: 400,
    color: T.color.ink2,
    marginBottom: '1.6rem',
    lineHeight: 1.25,
  },
  setLabel: {
    fontFamily: T.font.label,
    fontSize: '0.58rem',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    marginBottom: '0.6rem',
    display: 'inline-block',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    paddingTop: '0.3rem',
    paddingBottom: '0.3rem',
    borderRadius: '2px',
  },
  divider: {
    textAlign: 'center',
    color: T.color.parchment3,
    fontSize: '1.1rem',
    margin: '3rem 0',
    letterSpacing: '0.5em',
  },
}

const n = {
  nav: {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 2rem',
    height: '52px',
    background: 'rgba(30,32,16,0.75)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  },
  side: {
    fontFamily: T.font.label,
    fontSize: '0.55rem',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: 'rgba(212,175,55,0.5)',
    textDecoration: 'none',
  },
  center: {
    fontFamily: T.font.devanagari,
    fontSize: '0.9rem',
    color: 'rgba(212,175,55,0.28)',
    letterSpacing: '0',
  },
}

const end = {
  wrapper: {
    textAlign: 'center',
    padding: '3rem 0 2rem',
    borderTop: `1px solid rgba(181,119,13,0.15)`,
    marginTop: '1rem',
  },
  endLabel: {
    fontFamily: T.font.label,
    fontSize: '0.55rem',
    letterSpacing: '0.4em',
    textTransform: 'uppercase',
    color: SAGE,
    opacity: 0.55,
    marginBottom: '0.8rem',
  },
  comingSoon: {
    fontFamily: T.font.prose,
    fontSize: '1.05rem',
    fontStyle: 'italic',
    color: T.color.ink4,
    marginBottom: '1.8rem',
    lineHeight: 1.6,
  },
  btn: {
    display: 'inline-block',
    padding: '0.75rem 2.2rem',
    border: `1px solid ${SAGE}`,
    borderRadius: '3px',
    fontFamily: T.font.label,
    fontSize: '0.6rem',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: SAGE,
    transition: 'background 0.25s ease',
  },
}
