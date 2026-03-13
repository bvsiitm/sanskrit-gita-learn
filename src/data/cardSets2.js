// cardSets2.js  — Lesson 2: Saptamī Vibhakti, Word Order, Sambodhana, Śatva Sandhi
// Note: Pāṇini sūtra numbers are omitted throughout — verify before adding.

export const CARD_COLORS = [
  "rgba(255,255,255,0.50)",
  "rgba(232,234,216,0.62)",
  "rgba(181,119,13,0.09)",
  "rgba(74,94,74,0.09)",
  "rgba(193,127,36,0.09)",
];

const seed = () => ({
  easeFactor: 2.5,
  repetitions: 0,
  interval: 1,
  nextReview: new Date().toISOString(),
});

export const cardSets2 = [

  // ── SET 1 — Saptamī Vibhakti ───────────────────────────────────────────────
  {
    setId: "saptami",
    setLabel: "Saptamī Vibhakti",
    cards: [
      {
        id: "s2-saptami-01",
        colorIndex: 0,
        q: "How do you write \"Kṛṣṇa in Kurukṣetra\" in Sanskrit?",
        qd: "",
        opts: [
          { t: "कुरुक्षेत्रे कृष्णः (Kurukṣetre Kṛṣṇaḥ)",  d: "", c: true,  fb: "Correct. Kurukṣetre is saptamī — \"in Kurukṣetra\". Kṛṣṇaḥ is nominative, the subject." },
          { t: "कुरुक्षेत्रे कृष्णे (Kurukṣetre Kṛṣṇe)",   d: "", c: false, fb: "Kṛṣṇe is the saptamī of Kṛṣṇa — \"in Kṛṣṇa\". Both words become locatives, leaving no subject." },
          { t: "कुरुक्षेत्रे कृष्ण (Kurukṣetre Kṛṣṇa)",    d: "", c: false, fb: "Kṛṣṇa (bare stem) is the sambodhana — the vocative \"O Kṛṣṇa!\" — not the nominative subject." },
          { t: "कृष्णम् कुरुक्षेत्र (Kṛṣṇam Kurukṣetra)",  d: "", c: false, fb: "Kṛṣṇam is dvitīyā (accusative) — an object form. Kurukṣetra is the bare stem, not the locative." },
        ],
        ...seed(),
      },
      {
        id: "s2-saptami-02",
        colorIndex: 1,
        q: "What does \"वृन्दावने कृष्णः (Bṛndāvane Kṛṣṇaḥ)\" mean?",
        qd: "",
        opts: [
          { t: "Kṛṣṇa is in Bṛndāvana",      d: "कृष्णः वृन्दावने",           c: true,  fb: "Correct. Bṛndāvane is saptamī — \"in Bṛndāvana\". Kṛṣṇaḥ is nominative subject." },
          { t: "Kṛṣṇa goes to Bṛndāvana",    d: "कृष्णः वृन्दावनम् गच्छति",  c: false, fb: "Motion toward uses dvitīyā: Bṛndāvanam (-am). The -e ending marks location, not destination." },
          { t: "Kṛṣṇa is from Bṛndāvana",    d: "कृष्णः वृन्दावनात् आगच्छति", c: false, fb: "Origin uses pañcamī (-āt). Saptamī -e means \"in\", not \"from\"." },
          { t: "Kṛṣṇa belongs to Bṛndāvana", d: "कृष्णः वृन्दावनस्य",         c: false, fb: "Possession uses ṣaṣṭhī (-sya). The locative -e means \"in\", not \"of\"." },
        ],
        ...seed(),
      },
      {
        id: "s2-saptami-03",
        colorIndex: 2,
        q: "What does \"चित्रकूटे रामः (Citrakūṭe Rāmaḥ)\" mean?",
        qd: "",
        opts: [
          { t: "Rāma is in Citrakūṭa",      d: "रामः चित्रकूटे (अस्ति)",    c: true,  fb: "Correct. Citrakūṭe is saptamī; Rāmaḥ is nominative. The locative places the subject at a location." },
          { t: "Rāma goes to Citrakūṭa",    d: "रामः चित्रकूटम् गच्छति",   c: false, fb: "Motion uses dvitīyā: Citrakūṭam (-am). The -e marks where something is, not where it heads." },
          { t: "Rāma is from Citrakūṭa",    d: "रामः चित्रकूटात् आगच्छति",  c: false, fb: "Ablative pañcamī -āt expresses origin. Saptamī -e expresses location." },
          { t: "Citrakūṭa belongs to Rāma", d: "चित्रकूटः रामस्य अस्ति",   c: false, fb: "Possession uses ṣaṣṭhī: Rāmasya. Neither word is genitive here." },
        ],
        ...seed(),
      },
      {
        id: "s2-saptami-04",
        colorIndex: 3,
        q: "How do you write \"Sañjaya in Indraprastha\" in Sanskrit?",
        qd: "",
        opts: [
          { t: "इन्द्रप्रस्थे सञ्जयः (Indraprasthe Sañjayaḥ)",   d: "", c: true,  fb: "Correct. Indraprasthe is saptamī — \"in Indraprastha\". Sañjayaḥ is nominative subject." },
          { t: "इन्द्रप्रस्थम् सञ्जयः (Indraprastham Sañjayaḥ)", d: "", c: false, fb: "Indraprastham is dvitīyā (accusative) — \"to Indraprastha\", not \"in Indraprastha\"." },
          { t: "इन्द्रप्रस्थात् सञ्जयः (Indraprasthāt Sañjayaḥ)", d: "", c: false, fb: "Indraprasthāt is pañcamī (ablative) — \"from Indraprastha\", not \"in Indraprastha\"." },
          { t: "सञ्जयो इन्द्रप्रस्थम् (Sañjayo Indraprastham)",   d: "", c: false, fb: "Sañjayo is a sandhi form of Sañjayaḥ, and Indraprastham is accusative — \"Sañjaya goes to Indraprastha\"." },
        ],
        ...seed(),
      },
    ],
  },

  // ── SET 2 — Word Order ─────────────────────────────────────────────────────
  {
    setId: "word-order",
    setLabel: "Word Order",
    cards: [
      {
        id: "s2-word-order-01",
        colorIndex: 4,
        q: "What does \"कृष्णः कुरुक्षेत्रे (Kṛṣṇaḥ Kurukṣetre)\" mean?",
        qd: "",
        opts: [
          { t: "Kṛṣṇa is in Kurukṣetra",       d: "", c: true,  fb: "Correct. Kṛṣṇaḥ is nominative subject; Kurukṣetre is saptamī. Word order is free — case endings carry the meaning." },
          { t: "Kurukṣetra is in Kṛṣṇa",       d: "", c: false, fb: "That would need Kṛṣṇe (locative) and Kurukṣetraḥ (nominative). Here Kṛṣṇaḥ ends in -aḥ — nominative — so Kṛṣṇa is the subject." },
          { t: "Kṛṣṇa goes to Kurukṣetra",     d: "", c: false, fb: "Motion uses the accusative (-am). Kurukṣetre ends in -e (locative) — location, not destination." },
          { t: "Kṛṣṇa of Kurukṣetra",           d: "", c: false, fb: "Belonging uses the genitive (-sya). The locative -e means \"in\", not \"of\"." },
        ],
        ...seed(),
      },
      {
        id: "s2-word-order-02",
        colorIndex: 0,
        q: "What does \"कृष्णे कुरुक्षेत्रः (Kṛṣṇe Kurukṣetraḥ)\" mean?",
        qd: "",
        opts: [
          { t: "Kurukṣetra is in Kṛṣṇa",            d: "", c: true,  fb: "Correct. Kṛṣṇe is now locative (\"in Kṛṣṇa\"); Kurukṣetraḥ is nominative. Same word order as Q1 — reversed roles." },
          { t: "Kṛṣṇa is in Kurukṣetra",            d: "", c: false, fb: "That was the previous sentence. Here the endings have swapped — Kṛṣṇe is locative, Kurukṣetraḥ is subject." },
          { t: "Kṛṣṇa and Kurukṣetra are the same",  d: "", c: false, fb: "The sentence has a subject (nominative) and a location (locative) — not an equation." },
          { t: "Kṛṣṇa goes to Kurukṣetra",          d: "", c: false, fb: "Motion uses the accusative. Neither word here is accusative, and there is no verb of motion." },
        ],
        ...seed(),
      },
      {
        id: "s2-word-order-03",
        colorIndex: 1,
        q: "Translate: \"भारत-देशे रामः (Bhārata-deśe Rāmaḥ)\"",
        qd: "",
        opts: [
          { t: "Rāma is in Bhārata-desh",             d: "", c: true,  fb: "Correct. Bhārata-deśe is saptamī — \"in the land of Bhārata\". Rāmaḥ is nominative subject." },
          { t: "Rāma goes to the land of Bhārata",    d: "", c: false, fb: "Destination uses dvitīyā (-am). The -e ending is saptamī — location, not destination." },
          { t: "Rāma is from the land of Bhārata",    d: "", c: false, fb: "Origin uses pañcamī (-āt). Saptamī (-e) means \"in\", not \"from\"." },
          { t: "The land of Bhārata belongs to Rāma", d: "", c: false, fb: "Possession uses ṣaṣṭhī (-sya). Neither word is in the genitive here." },
        ],
        ...seed(),
      },
      {
        id: "s2-word-order-04",
        colorIndex: 2,
        q: "Translate: रामे भारत-देशः (Rāme Bhārata-deśaḥ)",
        qd: "",
        opts: [
          { t: "The land of Bhārata is in Rāma",   d: "", c: true,  fb: "Correct. Rāme is locative; Bhārata-deśaḥ is nominative. Case endings — not position — carry the meaning." },
          { t: "Rāma is in the land of Bhārata",   d: "", c: false, fb: "That was the previous sentence. Here Rāme (-e) is locative and Bhārata-deśaḥ (-aḥ) is nominative — they have swapped." },
          { t: "Rāma goes to the land of Bhārata", d: "", c: false, fb: "Motion uses dvitīyā (-am). Bhārata-deśaḥ ends in -aḥ (nominative), not -am." },
          { t: "Rāma is Bhārata's land",           d: "", c: false, fb: "Rāme is locative — \"in Rāma\" — not nominative." },
        ],
        ...seed(),
      },
    ],
  },

  // ── SET 3 — Sambodhana ─────────────────────────────────────────────────────
  {
    setId: "sambodhana",
    setLabel: "Sambodhana",
    cards: [
      {
        id: "s2-sambodhana-01",
        colorIndex: 3,
        q: "What is the sambodhana (vocative) of रामः (rāmaḥ)?",
        qd: "",
        opts: [
          { t: "राम (rāma)",    d: "", c: true,  fb: "Correct. For a-stem masculines, the sambodhana singular is the bare stem. Hence rāmaḥ → rāma (हे राम!)." },
          { t: "रामम् (rāmam)", d: "", c: false, fb: "Rāmam is dvitīyā (accusative) — the direct object form. The vocative of a-stem masculines is the bare stem: rāma." },
          { t: "रामाय (rāmāya)", d: "", c: false, fb: "Rāmāya is caturthī (dative) — \"for Rāma\". The vocative for a-stems is the bare stem." },
          { t: "रामे (rāme)",   d: "", c: false, fb: "Rāme is saptamī (locative) — \"in Rāma\". Do not confuse locative with vocative; the vocative is the bare stem: rāma." },
        ],
        ...seed(),
      },
      {
        id: "s2-sambodhana-02",
        colorIndex: 4,
        q: "How do you say \"O Acyuta!\" in Sanskrit?",
        qd: "",
        opts: [
          { t: "अच्युत",   d: "", c: true,  fb: "Correct. Acyuta is an a-stem masculine. Vocative singular = bare stem: acyuta. Spoken with हे before it." },
          { t: "अच्युतम्", d: "", c: false, fb: "Acyutam is the accusative — \"Acyuta (as object)\". To address someone, use the vocative bare stem." },
          { t: "अच्युतः",  d: "", c: false, fb: "Acyutaḥ is the nominative — \"Acyuta (as subject)\". Address/calling uses the vocative bare stem." },
          { t: "अच्युते",  d: "", c: false, fb: "Acyute is the locative — \"in Acyuta\". The vocative for a-stems is the bare stem: acyuta." },
        ],
        ...seed(),
      },
      {
        id: "s2-sambodhana-03",
        colorIndex: 0,
        q: "What is the sambodhana (vocative) of पार्थः (pārthaḥ)?",
        qd: "",
        opts: [
          { t: "पार्थ",   d: "", c: true,  fb: "Correct. Pārtha is an a-stem masculine. Vocative = bare stem: pārtha. Kṛṣṇa addresses Arjuna this way many times in the Gītā." },
          { t: "पार्थम्", d: "", c: false, fb: "Pārtham is the accusative — \"Pārtha (as object)\". The vocative for a-stem masculines is always the bare stem." },
          { t: "पार्थाय", d: "", c: false, fb: "Pārthāya is the dative — \"for Pārtha\". The vocative for a-stems is the bare stem: pārtha." },
          { t: "पार्थे",  d: "", c: false, fb: "Pārthe is the locative — \"in Pārtha\". The vocative for a-stems is the bare stem: pārtha." },
        ],
        ...seed(),
      },
      {
        id: "s2-sambodhana-04",
        colorIndex: 1,
        q: "How do you say \"O teacher (ācārya)!\" in Sanskrit?",
        qd: "",
        opts: [
          { t: "आचार्य",   d: "", c: true,  fb: "Correct. Ācārya is an a-stem masculine. Vocative = bare stem: ācārya. Droṇa is addressed this way by the warriors." },
          { t: "आचार्यम्", d: "", c: false, fb: "Ācāryam is the accusative — a direct object form. To call out to someone, use the vocative bare stem: ācārya." },
          { t: "आचार्याय", d: "", c: false, fb: "Ācāryāya is the dative — \"for the teacher\". The vocative is the bare stem: ācārya." },
          { t: "आचार्ये",  d: "", c: false, fb: "Ācārye is the locative — \"in the teacher\". The vocative for a-stems is always the bare stem." },
        ],
        ...seed(),
      },
    ],
  },

  // ── SET 4 — Śatva Sandhi (Devanagari only) ────────────────────────────────
  {
    setId: "shatva",
    setLabel: "Śatva Sandhi",
    cards: [
      {
        id: "s2-shatva-01",
        colorIndex: 2,
        q: "द्रुपदः + च = ?",
        qd: "",
        opts: [
          { t: "द्रुपदश्च", d: "", c: true,  fb: "Correct. ḥ before palatal ca → ś (śatva). The visarga assimilates to the palatal place: Drupadaḥ + ca → Drupadaśca." },
          { t: "द्रुपदच",   d: "", c: false, fb: "Simply dropping the visarga is not śatva — before a palatal stop, ḥ becomes ś, not zero." },
          { t: "द्रुपदस्च", d: "", c: false, fb: "Sa-śruti (ḥ→s) applies before dental consonants (t, th), not before palatal ca." },
          { t: "द्रुपदष्च", d: "", c: false, fb: "Ṣa (retroflex) is the result before retroflexes — that is ṣatva. Before palatal ca, the result is ś." },
        ],
        ...seed(),
      },
      {
        id: "s2-shatva-02",
        colorIndex: 3,
        q: "विराटः + च = ?",
        qd: "",
        opts: [
          { t: "विराटश्च", d: "", c: true,  fb: "Correct. ḥ + ca → śca (śatva). The visarga before palatal ca becomes ś." },
          { t: "विराटच",   d: "", c: false, fb: "The visarga is not dropped before ca — it transforms into ś through śatva sandhi." },
          { t: "विराटस्च", d: "", c: false, fb: "Sa-śruti applies before dentals (ta, tha). Before palatal ca, use ś, not sa." },
          { t: "विराटष्च", d: "", c: false, fb: "Ṣatva applies before retroflex ṭa/ṭha. Before palatal ca, the result is ś (palatal), not ṣ (retroflex)." },
        ],
        ...seed(),
      },
      {
        id: "s2-shatva-03",
        colorIndex: 4,
        q: "कुन्तिभोजः + च = ?",
        qd: "",
        opts: [
          { t: "कुन्तिभोजश्च", d: "", c: true,  fb: "Correct. Śatva: ḥ + ca → śca. The visarga assimilates to the palatal place before ca." },
          { t: "कुन्तिभोजच",   d: "", c: false, fb: "Deleting the visarga is lopa — which applies before non-a vowels, not before consonants like ca." },
          { t: "कुन्तिभोजस्च", d: "", c: false, fb: "The direct result of ḥ + ca is ś, not sa." },
          { t: "कुन्तिभोजष्च", d: "", c: false, fb: "Ṣatva (ḥ→ṣ) applies before retroflexes (ṭ, ṭh), not before palatal ca." },
        ],
        ...seed(),
      },
      {
        id: "s2-shatva-04",
        colorIndex: 0,
        q: "धृष्टकेतुः + चेकितानः = ?",
        qd: "",
        opts: [
          { t: "धृष्टकेतुश्चेकितानः", d: "", c: true,  fb: "Correct. Cekitāna begins with palatal ce (ca-family). Śatva: ḥ → ś before any palatal stop." },
          { t: "धृष्टकेतुचेकितानः",   d: "", c: false, fb: "The visarga must not be dropped before a voiced consonant — before a palatal it transforms to ś." },
          { t: "धृष्टकेतुस्चेकितानः", d: "", c: false, fb: "Sa-śruti applies before dentals. Cekitāna begins with a palatal (ca-family), so the result is ś, not sa." },
          { t: "धृष्टकेतुष्चेकितानः", d: "", c: false, fb: "Ṣatva applies before retroflexes (ṭ, ṭh). Cekitāna is palatal (ce = ca-class), so use ś, not ṣ." },
        ],
        ...seed(),
      },
      {
        id: "s2-shatva-05",
        colorIndex: 1,
        q: "च + एव = ?",
        qd: "",
        opts: [
          { t: "चैव",  d: "", c: true,  fb: "Correct. Ca ends in short a; eva begins with short e. Vowel sandhi: a + e → ai (vṛddhi). Hence ca + eva → caiva." },
          { t: "चेव",  d: "", c: false, fb: "Simple dropping of a gives ceva, but Sanskrit vowel sandhi fuses — a + e → ai, not zero + e." },
          { t: "चवे",  d: "", c: false, fb: "Rearranging phonemes is not how sandhi works. The junction: final -a of ca meets initial e- of eva → ai." },
          { t: "चएवे", d: "", c: false, fb: "Both vowels are not preserved separately — they fuse. a + e → ai, giving caiva." },
        ],
        ...seed(),
      },
    ],
  },

];

export const allCards2 = cardSets2.flatMap(set => set.cards);
export const cardBg = (card) => CARD_COLORS[card.colorIndex % CARD_COLORS.length];
