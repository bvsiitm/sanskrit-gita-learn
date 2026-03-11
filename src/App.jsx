import { cardSets } from './data/cardSets'
import MCQCard from './components/MCQCard'
import Reveal from './components/Reveal'
import Hero from './components/Hero'
import { ProblemSection, InsightSection } from './components/IntroSections'
import MethodBand from './components/MethodBand'
import BeginDivider from './components/BeginDivider'
import NavSidebar from './components/NavSidebar'
import ShlokaDisplay from './components/ShlokaDisplay'
import { T } from './theme'

const C = T.setColor // shorthand
// 5-color cycle for cards (independent of set grouping)
const palette = [C[1], C[2], C[3], C[4], C[5]]
let cardIdx = 0
function nextColor() { return palette[cardIdx++ % 5] }
const cc = Array.from({ length: 21 }, () => nextColor())

const set1 = cardSets[0].cards // 5 Prathamā Vibhakti cards
const set2 = cardSets[1].cards // 5 Sandhi cards
const set3 = cardSets[2].cards // 6 √वच् / उवाच cards
const set4 = cardSets[3].cards // 5 Review cards

export default function App() {
  return (
    <div style={styles.page}>
      {/* ── RIGHT-SIDE NAV ── */}
      <NavSidebar />

      {/* ── EXPLAINER ── */}
      <div id="hero"><Hero /></div>
      <div id="problem"><ProblemSection /></div>
      <div id="insight"><InsightSection /></div>
      <div id="method"><MethodBand /></div>
      <BeginDivider />

      {/* ── LESSON ── */}
      <main id="lesson-1" style={styles.main}>

        {/* Full verse before drilling into it */}
        <ShlokaDisplay />

        {/* ══════════════════ SET 1 — PRATHAMĀ VIBHAKTI ══════════════════ */}
        <div id="set-1">
        <Reveal><p style={{...styles.setLabel, color: C[1], background: `${C[1]}18`}}>Set 1 — Prathamā Vibhakti</p></Reveal>
        <Reveal><h2 style={styles.h2}>Who is speaking?</h2></Reveal>

        <Reveal><p style={styles.prose}>
          The Bhagavad Gita opens with two words:{' '}
          <span style={styles.skt}>धृतराष्ट्र उवाच</span>.{' '}
          They mean <em>"Dhritarashtra said."</em> But inside those two words
          sit four complete grammar concepts. This lesson begins with the first:
          who is the subject?
        </p></Reveal>

        <Reveal><p style={styles.prose}>
          In Sanskrit, the subject of a sentence takes the{' '}
          <strong>Prathamā Vibhakti</strong> — the first case, what other
          grammars call the nominative. For masculine nouns ending in{' '}
          <span style={styles.skt}>-अ</span>, the singular nominative ending
          is -<span style={styles.skt}>ः</span>. So the speaker{' '}
          <em>Dhritarashtra</em>, in full, is{' '}
          <span style={styles.skt}>धृतराष्ट्रः</span>.
        </p></Reveal>

        <Reveal><p style={styles.prose}>
          But the text writes <span style={styles.skt}>धृतराष्ट्र उवाच</span> —
          the <span style={styles.skt}>ः</span> has disappeared. That is
          Sandhi, and we will come to it shortly. First, make sure you can
          identify the nominative form.
        </p></Reveal>

        <Reveal><MCQCard card={set1[0]} color={cc[0]} /></Reveal>

        <Reveal><p style={styles.prose}>
          The same phrase structure repeats throughout Chapter 1. Sanjaya —
          the charioteer's narrator, gifted with divine sight by Vyasa — is the
          next speaker. His nominative form follows the identical pattern.
        </p></Reveal>

        <Reveal><MCQCard card={set1[1]} color={cc[1]} /></Reveal>

        <Reveal><p style={styles.prose}>
          Krishna, too, speaks many times in the Gita. He is called by many
          names. One of them is <span style={styles.skt}>मधुसूदन</span> —
          "slayer of the demon Madhu." In the text you will encounter{' '}
          <span style={styles.skt}>मधुसूदन उवाच</span>. The same question
          applies: what is the underlying nominative form?
        </p></Reveal>

        <Reveal><MCQCard card={set1[2]} color={cc[2]} /></Reveal>

        <Reveal><p style={styles.prose}>
          Now Arjuna. The great archer, son of Indra, student of Drona. In the
          first chapter he speaks more than anyone — his crisis is the heart of
          the Gita. His nominative follows the same{' '}
          -<span style={styles.skt}>ः</span> ending.
        </p></Reveal>

        <Reveal><MCQCard card={set1[3]} color={cc[3]} /></Reveal>

        <Reveal><p style={styles.prose}>
          One speaker in the Gita is different. The Lord himself —{' '}
          <span style={styles.skt}>भगवान्</span> — does not follow the{' '}
          <span style={styles.skt}>-अ</span> stem pattern. He belongs to the{' '}
          <em>an-stem</em> declension (<span style={styles.skt}>भगवत्</span>),
          whose nominative singular is <span style={styles.skt}>भगवान्</span>{' '}
          — ending in <span style={styles.skt}>न्</span>, not{' '}
          <span style={styles.skt}>ः</span>. There is no visarga to drop, so
          the sandhi form and the nominative form look identical.
        </p></Reveal>

        <Reveal><MCQCard card={set1[4]} color={cc[4]} /></Reveal>

        <Reveal><p style={styles.prose}>
          You now recognise the Prathamā Vibhakti in all five speaker phrases
          of Chapter 1. The pattern is consistent: look for the word before{' '}
          <span style={styles.skt}>उवाच</span> and restore the{' '}
          <span style={styles.skt}>ः</span> mentally — unless it is{' '}
          <span style={styles.skt}>भगवान्</span>, which never had one.
        </p></Reveal>

        <Reveal><div style={styles.divider}>✦</div></Reveal>
        </div>{/* /set-1 */}

        {/* ══════════════════ SET 2 — SANDHI ══════════════════ */}
        <div id="set-2">
        <Reveal><p style={{...styles.setLabel, color: C[2], background: `${C[2]}18`}}>Set 2 — Sandhi</p></Reveal>
        <Reveal><h2 style={styles.h2}>Where did the ः go?</h2></Reveal>

        <Reveal><p style={styles.prose}>
          You know that <span style={styles.skt}>धृतराष्ट्रः</span> is the
          nominative — the subject. So why does the text write{' '}
          <span style={styles.skt}>धृतराष्ट्र उवाच</span> without the{' '}
          <span style={styles.skt}>ः</span>?
        </p></Reveal>

        <Reveal><p style={styles.prose}>
          The answer is <strong>Sandhi</strong> — the rules governing how
          sounds combine at word boundaries. Sanskrit is a spoken language
          first; the written form reflects what the mouth actually does.
          When a word ending in <span style={styles.skt}>ः</span> (visarga) is
          followed by the vowel <span style={styles.skt}>उ</span>, the visarga
          undergoes <em>Lopa</em> — complete disappearance. Pāṇini 8.3.17.
          No new sound takes its place. The{' '}
          <span style={styles.skt}>ः</span> simply ceases to exist.
        </p></Reveal>

        <Reveal><p style={styles.prose}>
          This is not erosion or laziness — it is a precise, predictable rule.
          Once you know it, every <span style={styles.skt}>X उवाच</span>{' '}
          phrase in the Gita becomes transparent. Apply the rule yourself:
        </p></Reveal>

        <Reveal><MCQCard card={set2[0]} color={cc[5]} /></Reveal>

        <Reveal><p style={styles.prose}>
          Same rule, different speaker. Sanjaya's nominative is{' '}
          <span style={styles.skt}>सञ्जयः</span>. Before{' '}
          <span style={styles.skt}>उवाच</span>, the{' '}
          <span style={styles.skt}>ः</span> drops.
        </p></Reveal>

        <Reveal><MCQCard card={set2[1]} color={cc[6]} /></Reveal>

        <Reveal><p style={styles.prose}>
          And Arjuna — you have seen his nominative, now apply the sandhi rule
          to produce the form that actually appears in Chapter 1.
        </p></Reveal>

        <Reveal><MCQCard card={set2[2]} color={cc[7]} /></Reveal>

        <Reveal><p style={styles.prose}>
          The rule is not specific to the Gita's characters. It applies to any
          Sanskrit word ending in <span style={styles.skt}>ः</span> before{' '}
          <span style={styles.skt}>उ</span>. Take Rāma — not a character in
          the Gita, but the nominative <span style={styles.skt}>रामः</span>{' '}
          follows the same pattern before <span style={styles.skt}>उवाच</span>.
        </p></Reveal>

        <Reveal><MCQCard card={set2[3]} color={cc[8]} /></Reveal>

        <Reveal><p style={styles.prose}>
          One more, and it is more complex. The word{' '}
          <span style={styles.skt}>रथोपस्थः</span> means "the floor of the
          chariot" — literally <em>ratha</em> (chariot) +{' '}
          <em>upastha</em> (seat/lap). The word itself is already a sandhi
          product: <span style={styles.skt}>रथः</span> +{' '}
          <span style={styles.skt}>उपस्थ</span> merged by Guṇa (a + u → o)
          inside the compound to give <span style={styles.skt}>रथोपस्थ</span>.
          Now that compound noun appears as the subject of a verb that also
          begins with <span style={styles.skt}>उ</span>. Two sandhi operations,
          one phrase.
        </p></Reveal>

        <Reveal><MCQCard card={set2[4]} color={cc[9]} /></Reveal>

        <Reveal><p style={styles.prose}>
          Visarga Lopa is now a reflex. Whenever you see a name or noun
          directly before <span style={styles.skt}>उवाच</span> or any word
          beginning with <span style={styles.skt}>उ</span>, mentally restore
          the <span style={styles.skt}>ः</span> — the case ending is still
          there, hiding in the sound boundary.
        </p></Reveal>

        <Reveal><div style={styles.divider}>✦</div></Reveal>
        </div>{/* /set-2 */}

        {/* ══════════════════ SET 3 — √वच् ══════════════════ */}
        <div id="set-3">
        <Reveal><p style={{...styles.setLabel, color: C[3], background: `${C[3]}18`}}>Set 3 — उवाच and √वच्</p></Reveal>
        <Reveal><h2 style={styles.h2}>Where does the word come from?</h2></Reveal>

        <Reveal><p style={styles.prose}>
          You can now identify the speaker and explain why the{' '}
          <span style={styles.skt}>ः</span> disappears. The third question is
          about the verb itself: <span style={styles.skt}>उवाच</span>. What
          does it mean, exactly? And where does it come from?
        </p></Reveal>

        <Reveal><p style={styles.prose}>
          Every Sanskrit verb descends from a <strong>dhātu</strong> — a
          verbal root. The dhātu is not itself a word you say; it is the
          irreducible core of meaning from which all verb forms are built.
          Grammarians list dhātus with a preceding{' '}
          <span style={styles.skt}>√</span> symbol. The dhātu of{' '}
          <span style={styles.skt}>उवाच</span> is{' '}
          <span style={styles.skt}>√वच्</span> — to speak, to say, to tell.
          It is the second most frequent verbal root in all of Classical
          Sanskrit.
        </p></Reveal>

        <Reveal><p style={styles.prose}>
          <span style={styles.skt}>उवाच</span> is the{' '}
          <strong>Liṭ Lakāra</strong> — the perfect tense — third person
          singular. The action is completed. He spoke; the speaking is done.
          Tense in Sanskrit is not carried by auxiliary words ("did say") but
          baked directly into the verb form itself.
        </p></Reveal>

        <Reveal><MCQCard card={set3[0]} color={cc[10]} /></Reveal>

        <Reveal><p style={styles.prose}>
          Knowing the meaning is one thing. Knowing the root is another —
          and more powerful. From the root you can predict related forms
          across the whole text.
        </p></Reveal>

        <Reveal><MCQCard card={set3[1]} color={cc[11]} /></Reveal>

        <Reveal><p style={styles.prose}>
          The same root appears in the future tense. In BG 10.19, Krishna
          says <span style={styles.skt}>तत् प्रवक्ष्यामि</span> — "I will
          tell you that." The prefix <span style={styles.skt}>प्र</span>{' '}
          (forth, completely) intensifies the root. The ending{' '}
          <span style={styles.skt}>-ष्यामि</span> marks first person singular
          future — the Lṛṭ Lakāra.
        </p></Reveal>

        <Reveal><MCQCard card={set3[2]} color={cc[12]} /></Reveal>

        <Reveal><p style={styles.prose}>
          The root consonant shifts in the future: <span style={styles.skt}>वच्</span>{' '}
          becomes <span style={styles.skt}>वक्</span> before the future
          suffix <span style={styles.skt}>-ष्य</span>. The underlying dhātu
          is the same — only the stem changes.
        </p></Reveal>

        <Reveal><MCQCard card={set3[3]} color={cc[13]} /></Reveal>

        <Reveal><p style={styles.prose}>
          One root, multiple speakers. When a single person speaks,{' '}
          <span style={styles.skt}>उवाच</span>. When a group speaks — the
          Rishis, the assembled warriors — Sanskrit uses a different form of
          the same root. The Liṭ plural looks entirely different from the
          singular, which surprises most students.
        </p></Reveal>

        <Reveal><MCQCard card={set3[4]} color={cc[14]} /></Reveal>

        <Reveal><p style={styles.prose}>
          Compare: <span style={styles.skt}>उवाच</span> (he said) vs{' '}
          <span style={styles.skt}>ऊचुः</span> (they said). The singular
          reduplicates as <span style={styles.skt}>उ-</span>; the plural
          lengthens to <span style={styles.skt}>ऊ-</span> and the root
          syllable contracts. One dhātu — three very different-looking forms
          across the Gita. The root is the thread that connects them.
        </p></Reveal>

        <Reveal><MCQCard card={set3[5]} color={cc[15]} /></Reveal>

        <Reveal><p style={styles.prose}>
          <span style={styles.skt}>उवाच</span>,{' '}
          <span style={styles.skt}>वक्ष्यामि</span>,{' '}
          <span style={styles.skt}>ऊचुः</span> — three verb forms, one
          dhātu. This is the payoff of the root-first approach: learn{' '}
          <span style={styles.skt}>√वच्</span> once, and every form of
          speaking in the Gita becomes family.
        </p></Reveal>

        <Reveal><div style={styles.divider}>✦</div></Reveal>
        </div>{/* /set-3 */}

        {/* ══════════════════ SET 4 — REVIEW ══════════════════ */}
        <div id="set-4">
        <Reveal><p style={{...styles.setLabel, color: C[4], background: `${C[4]}18`}}>Set 4 — Review</p></Reveal>
        <Reveal><h2 style={styles.h2}>Putting it all together</h2></Reveal>

        <Reveal><p style={styles.prose}>
          Four concepts, one two-word phrase. Let us read{' '}
          <span style={styles.skt}>धृतराष्ट्र उवाच</span> with everything
          you now know — Vibhakti, Sandhi, Lakāra, Dhātu — and make sure
          nothing slips through.
        </p></Reveal>

        <Reveal><MCQCard card={set4[0]} color={cc[16]} /></Reveal>

        <Reveal><MCQCard card={set4[1]} color={cc[17]} /></Reveal>

        <Reveal><p style={styles.prose}>
          The dhātu runs deeper than a single verb. Its forms appear as nouns,
          participles, and agent words. <span style={styles.skt}>वक्तॄ</span>{' '}
          — "one who speaks, a speaker" — is built from the same root via a
          nominal suffix. The root consonant shifts again:{' '}
          <span style={styles.skt}>वच्</span> →{' '}
          <span style={styles.skt}>वक्</span> before the suffix{' '}
          <span style={styles.skt}>-तॄ</span>.
        </p></Reveal>

        <Reveal><MCQCard card={set4[2]} color={cc[18]} /></Reveal>

        <Reveal><p style={styles.prose}>
          Now name the rule precisely. You know that{' '}
          <span style={styles.skt}>धृतराष्ट्रः</span> becomes{' '}
          <span style={styles.skt}>धृतराष्ट्र</span> before{' '}
          <span style={styles.skt}>उवाच</span>. What is this operation called,
          and what is its Pāṇinian reference?
        </p></Reveal>

        <Reveal><MCQCard card={set4[3]} color={cc[19]} /></Reveal>

        <Reveal><p style={styles.prose}>
          One final integration. This phrase from BG 1.47 contains two
          separate sandhi operations — a compound merger and a visarga drop.
          Apply both.
        </p></Reveal>

        <Reveal><MCQCard card={set4[4]} color={cc[20]} /></Reveal>

        <Reveal><p style={styles.prose}>
          Two words. Four concepts. Every time you open the Gita and read{' '}
          <span style={styles.skt}>धृतराष्ट्र उवाच</span>, you will now see:
          a nominative subject (Prathamā Vibhakti), a visarga hidden by Lopa
          (Sandhi), a completed past action (Liṭ Lakāra), and a root that
          connects nine other verb forms across 700 verses (Dhātu). That is
          the whole of Lesson 1.
        </p></Reveal>
        </div>{/* /set-4 */}

      </main>
    </div>
  )
}

const styles = {
  divider: {
    textAlign: 'center',
    color: T.color.parchment3,
    fontSize: '1.1rem',
    margin: '3rem 0',
    letterSpacing: '0.5em',
  },

  setLabel: {
    fontFamily: T.font.label,
    fontSize: '0.58rem',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    color: T.color.saffron,     // overridden per-set inline
    marginBottom: '0.6rem',
    display: 'inline-block',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    paddingTop: '0.3rem',
    paddingBottom: '0.3rem',
    borderRadius: '2px',
    background: 'rgba(181,119,13,0.08)', // overridden per-set inline
  },

  h2: {
    fontFamily: T.font.prose,
    fontSize: '2rem',
    fontWeight: 400,
    color: T.color.ink2,
    marginBottom: '1.6rem',
    lineHeight: 1.25,
  },

  page: {
    background: T.color.parchment,
    minHeight: '100vh',
    color: T.color.ink,
  },

  header: {
    borderBottom: `1px solid ${T.color.border}`,
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: T.color.parchment,
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },

  headerTitle: {
    fontFamily: T.font.devanagari,
    fontSize: '1rem',
    color: T.color.gold,
  },

  main: {
    maxWidth: '680px',
    margin: '0 auto',
    padding: '3rem 2rem 6rem',
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
  },
}
