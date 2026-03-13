import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cardSets2 } from '../data/cardSets2'
import MCQCard from '../components/MCQCard'
import Reveal from '../components/Reveal'
import VerseDisplay from '../components/VerseDisplay'
import VibhaktiTable from '../components/VibhaktiTable'
import SandhiWidget from '../components/SandhiWidget'
import VicchhedaWidget from '../components/VicchhedaWidget'
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
        Lesson 3 — coming soon.
      </p>
      <Link to="/interlude" style={end.btn}>← Return to Interlude</Link>
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
          In Lesson 1, we read two words: <span style={s.skt}>धृतराष्ट्र उवाच</span>.
        </p></Reveal>

        <Reveal><p style={s.prose}>
          Now we turn to what Dhṛtarāṣṭra actually says.
        </p></Reveal>

        <Reveal><p style={s.prose}>
          We have underlined four words in this verse and we will learn some basic aspects
          of Sanskrit from them.
        </p></Reveal>

        <Reveal><div style={s.divider}>✦</div></Reveal>

        {/* ══════════ SET 1 — SAPTAMĪ VIBHAKTI ══════════ */}
        <div id="set-1">
          <Reveal><p style={{ ...s.setLabel, color: SC[1], background: `${SC[1]}18` }}>Set 1 — Saptamī Vibhakti</p></Reveal>
          <Reveal><h2 style={s.h2}>Where does the battle take place?</h2></Reveal>

          <Reveal><p style={s.prose}>
            The verse starts with two words:{' '}
            <span style={s.skt}>धर्मक्षेत्रे</span> and{' '}
            <span style={s.skt}>कुरुक्षेत्रे</span>.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            <span style={s.skt}>कुरुक्षेत्र</span> is a real place, the battlefield.{' '}
            <span style={s.skt}>धर्मक्षेत्र</span> means "the field of dharma" and is more
            of an idea than a location.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            Both words end in <strong>-e</strong>. That ending is called
            the <strong>Saptamī Vibhakti</strong>, the seventh case. It answers one
            question: where is something?
          </p></Reveal>

          <Reveal><p style={s.prose}>
            In English we use the word <em>in</em> for this. In Sanskrit, the -e ending
            does the same job. Take the stem{' '}
            <span style={s.skt}>कुरुक्षेत्र</span> and add -e. You get{' '}
            <span style={s.skt}>कुरुक्षेत्रे</span>, meaning <em>in</em> Kurukṣetra.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            Nouns whose stem ends in the vowel <span style={s.skt}>अ</span> are called
            a-stem nouns. For these nouns, the locative ending is <strong>-e</strong>, written{' '}
            <span style={s.skt}>-े</span> in Devanagari. The table below shows all eight
            cases for the a-stem noun <span style={s.skt}>रामः</span>. Only two cells are
            filled in for now. We will add more each lesson.
          </p></Reveal>

          <Reveal><VibhaktiTable /></Reveal>

          <Reveal><p style={s.prose}>
            You already know the Prathamā from Lesson 1. It marks the subject, the person
            doing something. The Saptamī marks the place where something is happening. Put
            them together and you have the two ingredients of a basic Sanskrit sentence:
            someone, somewhere. That is exactly how the Gītā begins.
          </p></Reveal>

          <Reveal><MCQCard card={set1[0]} color={cc[0]} /></Reveal>

          <Reveal><p style={s.prose}>
            The <span style={s.skt}>-े</span> ending always means <em>in</em> somewhere.
            Other endings handle going <em>to</em> a place or coming <em>from</em> a place,
            but those come in later lessons. For now, one rule is enough: when you see{' '}
            <span style={s.skt}>-े</span> on a noun,{' '}
            <b>read it as <em>in that place</em></b>.
          </p></Reveal>

          <Reveal><MCQCard card={set1[1]} color={cc[1]} /></Reveal>

          <Reveal><p style={s.prose}>
            The Rāmāyaṇa uses this ending constantly. Rāma lives in Citrakūṭa, wanders
            through the Daṇḍaka forest, and searches for Sītā in the palace of Laṅkā.
            Any Sanskrit story that places a character somewhere will use this ending.
          </p></Reveal>

          <Reveal><MCQCard card={set1[2]} color={cc[2]} /></Reveal>

          <Reveal><p style={s.prose}>
            The same ending works for any a-stem noun, not just famous place names. Sañjaya
            is sitting in the royal court while he speaks. If the text named that court, it
            would carry the same -e ending.
          </p></Reveal>

          <Reveal><MCQCard card={set1[3]} color={cc[3]} /></Reveal>

          <Reveal><p style={s.prose}>
            The Saptamī marks location. The ending is -e. The Gītā opens with two of them
            side by side, placing the scene before any character is named.
          </p></Reveal>

          <Reveal><div style={s.divider}>✦</div></Reveal>
        </div>

        {/* ══════════ SET 2 — WORD ORDER ══════════ */}
        <div id="set-2">
          <Reveal><p style={{ ...s.setLabel, color: SC[2], background: `${SC[2]}18` }}>Set 2 — Word Order</p></Reveal>
          <Reveal><h2 style={s.h2}>Does the order of words matter?</h2></Reveal>

          <Reveal><p style={s.prose}>
            In English, word order matters a lot. "The dog bit the man" means something very
            different from "the man bit the dog."
          </p></Reveal>

          <Reveal><p style={s.prose}>
            Sanskrit works differently. Each word carries an ending that shows its job in the
            sentence. Because of this, you can move words around freely.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            <span style={s.skt}>कुरुक्षेत्रे कृष्णः</span> and{' '}
            <span style={s.skt}>कृष्णः कुरुक्षेत्रे</span> mean exactly the same thing:
            Kṛṣṇa is in Kurukṣetra. The endings do the work; the order just shows what the
            speaker wants to stress.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            When you read Sanskrit, look at the endings rather than the positions.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            The subject carries the <strong>-aḥ</strong> ending (for a-stem nouns). It can
            sit anywhere in the line. Find the -aḥ ending and you have found the subject.
          </p></Reveal>

          <Reveal><MCQCard card={set2[0]} color={cc[4]} /></Reveal>

          <Reveal><p style={s.prose}>
            The same two words appear in the same order. But the endings have switched. That
            one change flips the whole meaning. Always find the -aḥ ending to find the subject.
          </p></Reveal>

          <Reveal><MCQCard card={set2[1]} color={cc[5]} /></Reveal>

          <Reveal><p style={s.prose}>
            Sanskrit place names are often long compounds. The -e ending works the same way
            no matter how many syllables the word has.
          </p></Reveal>

          <Reveal><MCQCard card={set2[2]} color={cc[6]} /></Reveal>

          <Reveal><p style={s.prose}>
            Same two words, same order, but with the endings reversed. The meaning is completely
            different. This shows that word order in Sanskrit is about emphasis, not about
            who is doing what.
          </p></Reveal>

          <Reveal><MCQCard card={set2[3]} color={cc[7]} /></Reveal>

          <Reveal><p style={s.prose}>
            The subject is whichever word carries the -aḥ ending. It can appear anywhere
            in the sentence. The ending tells you who is who; the position tells you what
            the speaker wants to highlight.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            This freedom is one reason why so much Sanskrit is written in verse.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            A Sanskrit poet works with fixed meters where each line follows a strict pattern
            of long and short syllables. Because words can move without changing meaning, the
            poet can put any word wherever the rhythm needs it.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            In English you cannot do that. Move a word and you change the sense. In Sanskrit
            the endings hold the meaning, so the words are free to fit the pattern.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            This is why the Rāmāyaṇa, the Mahābhārata, the Purāṇas, and even technical texts
            like grammar books are written in verse. It is something that a language with case
            endings can do naturally, and English cannot.
          </p></Reveal>

          <Reveal><div style={s.divider}>✦</div></Reveal>
        </div>

        {/* ══════════ SET 3 — SAMBODHANA ══════════ */}
        <div id="set-3">
          <Reveal><p style={{ ...s.setLabel, color: SC[3], background: `${SC[3]}18` }}>Set 3 — Sambodhana</p></Reveal>
          <Reveal><h2 style={s.h2}>Who is being addressed?</h2></Reveal>

          <Reveal><p style={s.prose}>
            The verse ends with one word:{' '}
            <span style={s.skt}>सञ्जय</span>. Dhṛtarāṣṭra is talking
            directly to Sañjaya, calling his name. In Sanskrit, when you call
            someone by name, the word gets a special form. It is called the{' '}
            <strong>Sambodhana</strong>, and it just means "calling out to someone."
          </p></Reveal>

          <Reveal><p style={s.prose}>
            Here is the simple rule: for most names, the calling form is just the
            plain name, with no ending added. Sañjaya's normal form (as the subject) is{' '}
            <span style={s.skt}>सञ्जयः</span>. But when you call out to him, you just
            say <span style={s.skt}>सञ्जय</span>. The -ḥ at the end drops off.
            Think of it like the difference between "Sanjaya walked in" and "Hey, Sanjaya!"
          </p></Reveal>

          <Reveal><p style={s.prose}>
            But be careful! You have seen words with the visarga "missing" before, like{' '}
            <span style={s.skt}>धृतराष्ट्र</span> or <span style={s.skt}>सञ्जय</span> in
            Lesson 1, where <span style={s.skt}>सञ्जय उवाच</span> meant "Sañjaya said."
            But there, the -ḥ dropped because of sandhi (sound rules). Here it drops because
            it is a calling form. The word looks the same, but the reason is different!
          </p></Reveal>

          <Reveal><p style={s.prose}>
            In summary: if you see <span style={s.skt}>सञ्जयः</span>, Sañjaya is the
            subject, the one doing something. If you see <span style={s.skt}>सञ्जय</span>,
            Sañjaya is being called out to. One letter makes the difference.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            This happens all the time in the Gītā. Kṛṣṇa and Arjuna spend the whole
            book talking to each other — so they are constantly calling each other by
            name. "Arjuna!" "Kṛṣṇa!" Every time that happens, you will see the Sambodhana
            form. Let's see some examples now.
          </p></Reveal>

          <Reveal><MCQCard card={set3[0]} color={cc[8]} /></Reveal>

          <Reveal><p style={s.prose}>
            Kṛṣṇa has many names in the Gītā. One of them is{' '}
            <span style={s.skt}>अच्युत</span>, which means "the one who never falls."
            When someone calls out to Kṛṣṇa using this name, the same rule applies:
            plain name, no ending.
          </p></Reveal>

          <Reveal><MCQCard card={set3[1]} color={cc[9]} /></Reveal>

          <Reveal><p style={s.prose}>
            Arjuna also has many names. "Pārtha" means "son of Pṛthā" — that is his
            mother's name. Kṛṣṇa calls Arjuna "Pārtha" again and again through the Gītā.
            Same rule every time: calling form = plain name.
          </p></Reveal>

          <Reveal><MCQCard card={set3[2]} color={cc[10]} /></Reveal>

          <Reveal><p style={s.prose}>
            Droṇa is the great teacher of the warriors. When a warrior calls out to him,
            the same thing happens. Once you know this rule, you will spot it everywhere
            in the Gītā. It is one of the most common forms in the whole book.
          </p></Reveal>

          <Reveal><MCQCard card={set3[3]} color={cc[11]} /></Reveal>

          <Reveal><p style={s.prose}>
            So: when someone calls out to another person in Sanskrit, the name loses its
            -ḥ ending. That is the Sambodhana. Simple as that.
          </p></Reveal>

          <Reveal><div style={s.divider}>✦</div></Reveal>
        </div>

        {/* ══════════ SET 4 — ŚATVA SANDHI ══════════ */}
        <div id="set-4">
          <Reveal><p style={{ ...s.setLabel, color: SC[4], background: `${SC[4]}18` }}>Set 4 — Śatva Sandhi</p></Reveal>
          <Reveal><h2 style={s.h2}>A new sandhi rule</h2></Reveal>

          <Reveal><p style={s.prose}>
            The second line of verse 1.1 reads:{' '}
            <span style={s.skt}>मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय</span>.
            Three of those five words have sandhi in them.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            You already know lopa, where the visarga disappears before{' '}
            <span style={s.skt}>उवाच</span>. Now there is a new rule.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            This time the visarga does not disappear. It changes into a different sound.
            This is called śatva.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            The word <span style={s.skt}>पाण्डवाश्चैव</span> is actually three words
            joined together:{' '}
            <span style={s.skt}>पाण्डवाः</span> (the Pāṇḍavas) +{' '}
            <span style={s.skt}>च</span> (and) +{' '}
            <span style={s.skt}>एव</span> (indeed).
          </p></Reveal>

          <Reveal><p style={s.prose}>
            First: the visarga at the end of <span style={s.skt}>पाण्डवाः</span> meets{' '}
            <span style={s.skt}>च</span>. Before this sound, the visarga turns into{' '}
            <span style={s.skt}>श्</span> instead of disappearing. That is the śatva rule.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            Second: the -a at the end of <span style={s.skt}>च</span> and the -e at the
            start of <span style={s.skt}>एव</span> merge into -ai, giving{' '}
            <span style={s.skt}>चैव</span>. Put it all together:{' '}
            <span style={s.skt}>पाण्डवाश्चैव</span>.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            Press play to see the sandhi in action. You can also switch between
            the two sandhis we have seen so far.
          </p></Reveal>

          {/* Interactive widget — opens on the śatva tab */}
          <Reveal>
            <div style={{ margin: '2rem 0' }}>
              <SandhiWidget defaultTab="satva" />
            </div>
          </Reveal>

          <Reveal><p style={s.prose}>
            The widget above shows sandhi going <em>forward</em> — how two words
            fuse when spoken together. Now let us go in the other direction.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            When you read a Sanskrit text, you see the fused form on the page —
            something like <span style={s.skt}>पाण्डवाश्चैव</span>.
            Your job as a reader is to split it back into the original words.
            This reverse process is called <strong>viccheda</strong>.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            Viccheda means "cutting apart." You find the seam where the sandhi
            happened and restore what was there before —{' '}
            <span style={s.skt}>पाण्डवाश्चैव</span> becomes{' '}
            <span style={s.skt}>पाण्डवाः</span> ·{' '}
            <span style={s.skt}>च</span> ·{' '}
            <span style={s.skt}>एव</span>.
            The widget below shows this step by step for both rules we have learned.
          </p></Reveal>

          {/* Viccheda widget — shows the reversal process for lopa and śatva */}
          <Reveal>
            <div style={{ margin: '2rem 0' }}>
              <VicchhedaWidget />
            </div>
          </Reveal>

          <Reveal><p style={s.prose}>
            Chapter 1 of the Gītā lists many warriors, often in pairs joined by{' '}
            <span style={s.skt}>च</span> (and). Every time a name ending in -aḥ sits
            before <span style={s.skt}>च</span>, the śatva rule fires. Let's practice it:
          </p></Reveal>

          <Reveal><MCQCard card={set4[0]} color={cc[12]} /></Reveal>

          <Reveal><p style={s.prose}>
            Any a-stem noun ending in -aḥ does the same thing before{' '}
            <span style={s.skt}>च</span>. The ending, the rule, the result are all the same.
          </p></Reveal>

          <Reveal><MCQCard card={set4[1]} color={cc[13]} /></Reveal>

          <Reveal><p style={s.prose}>
            The name can be long or short. The rule only looks at the very end of the word,
            where the visarga is. Everything before it is ignored.
          </p></Reveal>

          <Reveal><MCQCard card={set4[2]} color={cc[14]} /></Reveal>

          <Reveal><p style={s.prose}>
            Here a two-word name acts as the subject. The śatva rule still applies to the
            visarga at the end, no matter how long the name is.
          </p></Reveal>

          <Reveal><MCQCard card={set4[3]} color={cc[15]} /></Reveal>

          <Reveal><p style={s.prose}>
            This last card focuses on the second part of the compound: the vowel change that
            makes <span style={s.skt}>च</span> + <span style={s.skt}>एव</span> become{' '}
            <span style={s.skt}>चैव</span>. The two vowels -a and -e cannot sit next to
            each other in Sanskrit. They merge into -ai. That is a standard vowel sandhi rule.
          </p></Reveal>

          <Reveal><MCQCard card={set4[4]} color={cc[16]} /></Reveal>

          <Reveal><p style={s.prose}>
            You now know three sandhi rules from this one verse.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            Lopa: the visarga disappears before certain vowels. Śatva: the visarga turns
            into <span style={s.skt}>श्</span> before <span style={s.skt}>च</span> and
            other similar sounds. Vowel sandhi: a + e becomes ai.
          </p></Reveal>

          <Reveal><p style={s.prose}>
            Each rule is triggered by the sound that comes next. When Sanskrit is spoken
            aloud, all of these happen naturally. That is the point of sandhi: it makes
            the language flow smoothly.
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
