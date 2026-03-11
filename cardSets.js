// ═══════════════════════════════════════════════════════════════════
// भगवद्गीतासंस्कृतशिक्षकः — MCQ Card Sets
// Reusable data for Claude Code session
// ═══════════════════════════════════════════════════════════════════

export const cardSets = [

  // ─────────────────────────────────────────────────────────────────
  // SET 1 — Prathamā Vibhakti (5 questions)
  // Goal: identify the nominative word in X uvāca phrases
  // ─────────────────────────────────────────────────────────────────
  {
    id: "set1",
    title: "Set 1 — Prathamā Vibhakti",
    subtitle: "Identify the nominative word",
    cards: [

      {
        id: "s1q1",
        question: "In धृतराष्ट्र उवाच, which word is in Prathamā Vibhakti (nominative)?",
        options: [
          {
            label: "धृतराष्ट्र",
            correct: false,
            feedback: "This is the sandhi form — the ः has dropped before उ. The underlying nominative form is धृतराष्ट्रः. In the text it looks like धृतराष्ट्र, but grammatically it is the subject.",
          },
          {
            label: "धृतराष्ट्रः",
            correct: true,
            feedback: "Correct. धृतराष्ट्रः is the Prathamā Vibhakti (nominative) form — Dhritarashtra as the subject, the one speaking. The ः disappears before उवाच by Visarga Lopa, but the case is still nominative.",
          },
          {
            label: "उवाच",
            correct: false,
            feedback: "उवाच is the verb — 'said.' Verbs do not take Vibhakti endings. Vibhakti belongs to nouns and pronouns. The nominative word here is the speaker: धृतराष्ट्रः.",
          },
          {
            label: "उवाचम्",
            correct: false,
            feedback: "उवाचम् is not a real form here. The -म् ending marks the accusative (द्वितीया), used for objects. The verb is simply उवाच. The subject takes Prathamā: धृतराष्ट्रः.",
          },
        ],
      },

      {
        id: "s1q2",
        question: "In सञ्जय उवाच, which word is in Prathamā Vibhakti?",
        options: [
          {
            label: "सञ्जय",
            correct: false,
            feedback: "सञ्जय is the sandhi form — visarga has dropped before उ. The underlying nominative is सञ्जयः. Same pattern as धृतराष्ट्रः — Visarga Lopa before उ.",
          },
          {
            label: "सञ्जयः",
            correct: true,
            feedback: "Yes. सञ्जयः is the nominative — Sanjaya as the subject who speaks. The ः drops in the text before उवाच, but the Prathamā case is still there underneath.",
          },
          {
            label: "उवाच",
            correct: false,
            feedback: "उवाच is the verb 'said.' It does not belong to any Vibhakti. Only nouns and pronouns take case endings. The nominative here is सञ्जयः.",
          },
          {
            label: "सञ्जयम्",
            correct: false,
            feedback: "सञ्जयम् with -म् is द्वितीया Vibhakti (accusative) — Sanjaya as object. Here Sanjaya is the one acting (speaking), so he takes Prathamā: सञ्जयः.",
          },
        ],
      },

      {
        id: "s1q3",
        question: "In मधुसूदन उवाच, which word is in Prathamā Vibhakti?",
        options: [
          {
            label: "मधुसूदन",
            correct: false,
            feedback: "This is the sandhi surface form. The underlying nominative is मधुसूदनः — ः dropped before उ. Madhusudana is one of Krishna's names; he is the speaker here.",
          },
          {
            label: "मधुसूदनः",
            correct: true,
            feedback: "Correct. मधुसूदनः (slayer of the demon Madhu — a name of Krishna) is the subject in Prathamā. The ः disappears before उवाच but the nominative case remains.",
          },
          {
            label: "उवाच",
            correct: false,
            feedback: "उवाच is the verb. Verbs don't carry Vibhakti. The nominative speaker here is मधुसूदनः.",
          },
          {
            label: "मधुसूदनम्",
            correct: false,
            feedback: "मधुसूदनम् (-म् ending) would be the accusative — Krishna as the object of someone else's action. Here he is the subject, so Prathamā: मधुसूदनः.",
          },
        ],
      },

      {
        id: "s1q4",
        question: "In अर्जुन उवाच, which word is in Prathamā Vibhakti?",
        options: [
          {
            label: "अर्जुन",
            correct: false,
            feedback: "अर्जुन is what the text shows after Visarga Lopa. The actual nominative form is अर्जुनः — the ः has silently disappeared before उ.",
          },
          {
            label: "अर्जुनः",
            correct: true,
            feedback: "Exactly. अर्जुनः is Prathamā — Arjuna as subject, the one speaking. In the text you see अर्जुन उवाच because ः drops before उ, but grammatically it is still the nominative.",
          },
          {
            label: "उवाच",
            correct: false,
            feedback: "उवाच is the verb 'said.' No Vibhakti applies to verbs. The nominative here is अर्जुनः.",
          },
          {
            label: "अर्जुनाः",
            correct: false,
            feedback: "अर्जुनाः is the plural nominative — 'the Arjunas.' Only one Arjuna speaks here. Singular Prathamā is अर्जुनः.",
          },
        ],
      },

      {
        id: "s1q5",
        question: "In भगवान् उवाच, which word is in Prathamā Vibhakti? (Hint: look carefully at the ending.)",
        options: [
          {
            label: "भगवान्",
            correct: true,
            feedback: "Correct — and this is the key insight. भगवान् already ends in न् (not ः). It follows the 'an-stem' declension (भगवत्), whose nominative singular is भगवान् — no visarga, so no Visarga Lopa occurs here. The Prathamā form and the sandhi form are identical.",
          },
          {
            label: "भगवानः",
            correct: false,
            feedback: "भगवानः is not the correct nominative. भगवत् (an-stem) nouns form the nominative as भगवान् — not with ः. The visarga rule does not apply here because there is no visarga to drop.",
          },
          {
            label: "उवाच",
            correct: false,
            feedback: "उवाच is the verb. The subject — the Lord himself — is भगवान्, which is already in Prathamā without any sandhi change needed.",
          },
          {
            label: "भगवतः",
            correct: false,
            feedback: "भगवतः is the genitive (of the Lord) or ablative. The nominative of भगवत्-stem is भगवान् — notice no visarga. This declension is different from the -a stem nouns like रामः, कृष्णः.",
          },
        ],
      },

    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // SET 2 — Sandhi (5 questions)
  // Goal: apply Visarga Lopa to produce the sandhi form
  // ─────────────────────────────────────────────────────────────────
  {
    id: "set2",
    title: "Set 2 — Sandhi",
    subtitle: "Apply the Visarga Lopa rule",
    cards: [

      {
        id: "s2q1",
        question: "Due to Sandhi rules, धृतराष्ट्रः + उवाच is usually written as:",
        options: [
          {
            label: "धृतराष्ट्र उवाच",
            correct: true,
            feedback: "Correct. ः + उ → Lopa (disappearance). The visarga drops entirely, leaving a space between the two words. This is Visarga Lopa, Pāṇini 8.3.17.",
          },
          {
            label: "धृतराष्ट्रो उवाच",
            correct: false,
            feedback: "धृतराष्ट्रो would result from a + u → o (Guṇa sandhi) — but that is the rule for full compound merger, not between separate words in verse. Between words, only Lopa (dropping) occurs.",
          },
          {
            label: "धृतराष्ट्रस् उवाच",
            correct: false,
            feedback: "धृतराष्ट्रस् is not a standard sandhi form before उ. The visarga before u undergoes Lopa — it does not become स्.",
          },
          {
            label: "धृतराष्ट्रः उवाच",
            correct: false,
            feedback: "This is the pre-sandhi form — two words before the rule is applied. In actual Sanskrit text, Sandhi is obligatory; the ः must drop before उ.",
          },
        ],
      },

      {
        id: "s2q2",
        question: "Due to Sandhi rules, सञ्जयः + उवाच is usually written as:",
        options: [
          {
            label: "सञ्जय उवाच",
            correct: true,
            feedback: "Correct. Same Visarga Lopa rule: ः drops before उ. सञ्जयः → सञ्जय before उवाच. You will see this exact form in Bhagavad Gita 1.2.",
          },
          {
            label: "सञ्जयो उवाच",
            correct: false,
            feedback: "The -o form (सञ्जयो) would arise if this were a tight compound. Between separate words in verse, only Lopa applies — the ः disappears, it does not merge into ो.",
          },
          {
            label: "सञ्जयस् उवाच",
            correct: false,
            feedback: "Visarga does not become स् before उ. The rule is simple Lopa — total disappearance. The result is सञ्जय उवाच.",
          },
          {
            label: "सञ्जयम् उवाच",
            correct: false,
            feedback: "सञ्जयम् is the accusative form (-म् ending). Sandhi doesn't change the case. The nominative सञ्जयः simply loses its ः before उ.",
          },
        ],
      },

      {
        id: "s2q3",
        question: "Due to Sandhi rules, अर्जुनः + उवाच is usually written as:",
        options: [
          {
            label: "अर्जुन उवाच",
            correct: true,
            feedback: "Correct. Visarga Lopa: अर्जुनः loses ः before उवाच. You will see this exact phrase in Bhagavad Gita Chapter 1. The pattern is now completely predictable.",
          },
          {
            label: "अर्जुनो उवाच",
            correct: false,
            feedback: "अर्जुनो (with -o) is the compound-merger form. In verse, between separate words, only Lopa applies. The ः drops; it does not become ो.",
          },
          {
            label: "अर्जुनः उवाच",
            correct: false,
            feedback: "This is the unsandhi-ed form — written before the rule applies. In Sanskrit texts, Sandhi is applied. The correct written form is अर्जुन उवाच.",
          },
          {
            label: "अर्जुनाः उवाच",
            correct: false,
            feedback: "अर्जुनाः is the plural nominative. Only one Arjuna speaks. The singular nominative is अर्जुनः, which becomes अर्जुन before उवाच.",
          },
        ],
      },

      {
        id: "s2q4",
        question: "Due to Sandhi rules, रामः + उवाच is usually written as:",
        options: [
          {
            label: "राम उवाच",
            correct: true,
            feedback: "Correct. Rāma is not a character in the Gita, but the rule is identical: रामः + उवाच → राम उवाच. One rule, any speaker.",
          },
          {
            label: "रामो उवाच",
            correct: false,
            feedback: "रामो (with -o) is the compound form: a + u → o. But between separate words in verse, only Visarga Lopa applies. The ः drops, giving राम उवाच.",
          },
          {
            label: "रामस् उवाच",
            correct: false,
            feedback: "Visarga does not become स् before उ. The rule for ः + u is specifically Lopa — disappearance. Result: राम उवाच.",
          },
          {
            label: "रामेण उवाच",
            correct: false,
            feedback: "रामेण is the instrumental case (by Rāma). Sandhi changes sounds, not cases. The nominative रामः simply loses ः before उ.",
          },
        ],
      },

      {
        id: "s2q5",
        question: "Due to Sandhi rules, रथोपस्थः + उपाविशत् is usually written as:",
        options: [
          {
            label: "रथोपस्थ उपाविशत्",
            correct: true,
            feedback: "Correct — and note that रथोपस्थ itself is already a sandhi product (रथः + उपस्थ → रथोपस्थ by full Guṇa merger). Then रथोपस्थः loses ः before उपाविशत् by Visarga Lopa. Two operations in one phrase.",
          },
          {
            label: "रथोपस्थो उपाविशत्",
            correct: false,
            feedback: "The -o form would be a compound merger. Between separate noun and verb in verse, only Lopa applies. The ः drops, giving रथोपस्थ उपाविशत्.",
          },
          {
            label: "रथोपस्थः उपाविशत्",
            correct: false,
            feedback: "This is the pre-sandhi form. In Sanskrit text, Sandhi applies — the ः must drop before उ. The written form is रथोपस्थ उपाविशत्.",
          },
          {
            label: "रथस्थ उपाविशत्",
            correct: false,
            feedback: "रथस्थ is not the correct form. The compound is रथ + उपस्थ = रथोपस्थ (with the उप prefix). Don't confuse उपस्थ (seat/lap) with स्थ (standing).",
          },
        ],
      },

    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // SET 3 — Uvāca (6 questions)
  // Goal: understand √वच् and its forms
  // ─────────────────────────────────────────────────────────────────
  {
    id: "set3",
    title: "Set 3 — उवाच and √वच्",
    subtitle: "The dhātu and its forms",
    cards: [

      {
        id: "s3q1",
        question: "If धृतराष्ट्र उवाच means 'Dhritarashtra said', what does उवाच mean?",
        options: [
          {
            label: "A word / speech",
            correct: false,
            feedback: "वाक् or वचनम् means speech or word (the noun). उवाच is the verb form — a specific tense of the root √वच्. It means 'he/she said' — past tense, third person singular.",
          },
          {
            label: "Will say",
            correct: false,
            feedback: "Future tense would be वक्ष्यति (he will say). उवाच is the Liṭ Lakāra — the perfect tense. The action is completed in the past. He already said.",
          },
          {
            label: "Is saying",
            correct: false,
            feedback: "Present tense would be वक्ति (he is saying). उवाच is past — the speaking is done and complete. Liṭ Lakāra = perfect.",
          },
          {
            label: "Said / He said",
            correct: true,
            feedback: "Correct. उवाच is the Liṭ Lakāra (perfect tense) of √वच् — third person singular. It means 'he said' or 'she said.' The speaking is in the completed past.",
          },
        ],
      },

      {
        id: "s3q2",
        question: "The dhātu (root) of उवाच is:",
        options: [
          {
            label: "√वच्",
            correct: true,
            feedback: "Correct. √वच् means 'to speak, to say, to tell.' It is the #2 most frequent dhātu in Classical Sanskrit. उवाच is built from it by reduplication: उ (reduplicate) + वाच् (strengthened root) = उवाच.",
          },
          {
            label: "√वद्",
            correct: false,
            feedback: "√वद् also means 'to speak' — but it gives forms like वदति (speaks), वदन् (speaking). उवाच is specifically from √वच्, recognizable by the -वाच् portion.",
          },
          {
            label: "√श्रु",
            correct: false,
            feedback: "√श्रु means 'to hear' — the opposite action. It gives शृणोति (hears). उवाच is from √वच् — producing speech, not receiving it.",
          },
          {
            label: "√भाष्",
            correct: false,
            feedback: "√भाष् also means 'to speak' (as in भाषा, language). But उवाच is specifically from √वच् — you can see वाच् (speech/voice) embedded in the word itself.",
          },
        ],
      },

      {
        id: "s3q3",
        question: "If 'तत् प्रवक्ष्यामि' means 'I will say that', what does प्रवक्ष्यामि mean?",
        options: [
          {
            label: "I said",
            correct: false,
            feedback: "Past tense first person would be something like उदवोचम् or अवोचम्. प्रवक्ष्यामि is future — the -ष्यामि ending is a marker of the Lṛṭ Lakāra (future tense), first person singular.",
          },
          {
            label: "I am saying",
            correct: false,
            feedback: "Present tense first person would be वक्मि or प्रवच्मि. The -ष्यामि ending signals future tense. प्रवक्ष्यामि = I will say / I will tell.",
          },
          {
            label: "I will say / I will tell",
            correct: true,
            feedback: "Correct. प्र + वक्ष्यामि — the prefix प्र (forth, completely) + future form of √वच्. The -ष्यामि ending is first person singular future (Lṛṭ Lakāra). You will see this form in BG 10.19: श्रृणु मे परमं वचः — Krishna is about to enumerate his vibhūtis.",
          },
          {
            label: "I have said",
            correct: false,
            feedback: "Perfect tense first person would use the Liṭ Lakāra. The -ष्यामि ending specifically marks future tense. प्रवक्ष्यामि = I will say.",
          },
        ],
      },

      {
        id: "s3q4",
        question: "The dhātu (root) of वक्ष्यामि is:",
        options: [
          {
            label: "√वच्",
            correct: true,
            feedback: "Correct. वक्ष्यामि is the future tense (Lṛṭ Lakāra) of √वच् — first person singular. The root sound shifts: वच् → वक् in the future stem before -ष्य. Same root as उवाच, different tense.",
          },
          {
            label: "√वक्",
            correct: false,
            feedback: "√वक् is not an independent dhātu. What looks like वक् is the future stem form of √वच् — the root consonant clusters shift in the future tense. The underlying dhātu is √वच्.",
          },
          {
            label: "√वद्",
            correct: false,
            feedback: "√वद् gives forms like वदिष्यामि in the future. वक्ष्यामि comes from √वच् — notice the root consonant is च, which changes to क before the future suffix -ष्य.",
          },
          {
            label: "√ब्रू",
            correct: false,
            feedback: "√ब्रू also means 'to speak' and gives future form ब्रविष्यामि. वक्ष्यामि is from √वच् specifically. You can trace it: वच् → वक् (before -ष्य) → वक्ष्य → वक्ष्यामि.",
          },
        ],
      },

      {
        id: "s3q5",
        question: "If ऋषयः ऊचुः means 'The Rishis said', what does ऊचुः mean?",
        options: [
          {
            label: "The Rishi said (singular)",
            correct: false,
            feedback: "Singular would be ऊच (one Rishi said). ऊचुः is the plural perfect — the -उः ending marks third person plural in the Liṭ Lakāra. The Rishis (plural) all spoke.",
          },
          {
            label: "The Rishis will say",
            correct: false,
            feedback: "Future plural would be वक्ष्यन्ति. ऊचुः is Liṭ Lakāra — perfect tense, past. The Rishis already spoke.",
          },
          {
            label: "They said (plural)",
            correct: true,
            feedback: "Correct. ऊचुः is the Liṭ Lakāra third person plural of √वच् — 'they said.' Compare: उवाच (he said, singular) vs ऊचुः (they said, plural). The same root, different number — and the form looks completely different! This is the surprise of the Liṭ plural.",
          },
          {
            label: "They heard",
            correct: false,
            feedback: "Hearing (plural) would be शृण्वन्ति or अशृण्वन्. ऊचुः is from √वच् — speaking, not hearing. They said.",
          },
        ],
      },

      {
        id: "s3q6",
        question: "The dhātu of ऊचुः is:",
        options: [
          {
            label: "√वच्",
            correct: true,
            feedback: "Correct — and this surprises most students. ऊचुः looks nothing like उवाच or वक्ष्यामि, yet all three come from √वच्. In the Liṭ plural, the reduplication changes: उ → ऊ (lengthened), and वाच् → उच् in the plural stem. One dhātu, three very different-looking forms.",
          },
          {
            label: "√ऊच्",
            correct: false,
            feedback: "√ऊच् is not an independent dhātu in the Dhātupāṭha. ऊचुः is the Liṭ plural of √वच् — the root transforms in the plural. This transformation is exactly why knowing the dhātu is so powerful.",
          },
          {
            label: "√उच्",
            correct: false,
            feedback: "√उच् means 'to be pleased' or 'to be accustomed' — a different root entirely. ऊचुः comes from √वच्. The -उच्- portion is the reduced plural stem, not a separate root.",
          },
          {
            label: "√वद्",
            correct: false,
            feedback: "√वद् gives ऊदुः in the Liṭ plural, not ऊचुः. ऊचुः specifically traces back to √वच्. The ch → c alternation in the plural is a feature of this root.",
          },
        ],
      },

    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // SET 4 — Review (5 questions)
  // Goal: integrate Vibhakti + Sandhi + Dhātu knowledge
  // ─────────────────────────────────────────────────────────────────
  {
    id: "set4",
    title: "Set 4 — Review",
    subtitle: "Integrating all four concepts",
    cards: [

      {
        id: "s4q1",
        question: "In 'सञ्जय उवाच', what word is in Prathamā Vibhakti (nominative)?",
        options: [
          {
            label: "सञ्जयः",
            correct: true,
            feedback: "Correct. The underlying Prathamā form is सञ्जयः. The ः has dropped before उ by Visarga Lopa, so the text reads सञ्जय — but the grammatical case is still Prathamā. Always restore the ः mentally when you see a name before उवाच.",
          },
          {
            label: "सञ्जय",
            correct: false,
            feedback: "सञ्जय is the sandhi surface form — what you see in the text. But the underlying Prathamā (nominative) form is सञ्जयः. The case is Prathamā; Sandhi has merely hidden the ending.",
          },
          {
            label: "उवाच",
            correct: false,
            feedback: "उवाच is the verb. Verbs do not take Vibhakti. The nominative (Prathamā) belongs to the subject — here सञ्जयः, the one who is speaking.",
          },
          {
            label: "सञ्जयाय",
            correct: false,
            feedback: "सञ्जयाय is the dative (चतुर्थी Vibhakti) — 'for Sanjaya' or 'to Sanjaya.' The speaking subject takes Prathamā: सञ्जयः.",
          },
        ],
      },

      {
        id: "s4q2",
        question: "What does उवाच mean?",
        options: [
          {
            label: "He heard",
            correct: false,
            feedback: "Hearing is √श्रु → शृणोति. उवाच is from √वच् — producing speech, not receiving it. The Liṭ Lakāra (perfect tense), third person singular.",
          },
          {
            label: "He thought",
            correct: false,
            feedback: "Thinking is √मन् → मन्यते. उवाच is specifically about speech — 'he said.' The root √वच् and the word वाच् (speech) share the same origin.",
          },
          {
            label: "He said",
            correct: true,
            feedback: "Correct. उवाच = Liṭ Lakāra (perfect tense), third person singular of √वच्. 'He said / he spoke.' The most common verb in all Gita dialogue introductions.",
          },
          {
            label: "He will say",
            correct: false,
            feedback: "Future tense is वक्ष्यति. उवाच is Liṭ Lakāra — the action is completed in the past. The speaking has already happened.",
          },
        ],
      },

      {
        id: "s4q3",
        question: "What is the dhātu (root) of वक्तॄ (one who will speak / a speaker)?",
        options: [
          {
            label: "√वद्",
            correct: false,
            feedback: "√वद् (to speak/say) gives वदितॄ for 'one who speaks.' वक्तॄ is from √वच् — you can trace the root: वच् → वक् (before consonant suffixes). Same root as उवाच and वक्ष्यामि.",
          },
          {
            label: "√वच्",
            correct: true,
            feedback: "Correct. वक्तॄ is the agent noun (future passive participle / kṛt suffix -tṛ) from √वच् — 'one who speaks, a speaker.' The root consonant च shifts to क before the suffix. √वच् underlies उवाच, वक्ष्यामि, वक्तॄ, उक्त्वा — all the same family.",
          },
          {
            label: "√ब्रू",
            correct: false,
            feedback: "√ब्रू gives वक्तॄ? No — √ब्रू gives ब्रवीतॄ or वक्तॄ depending on the stem. But specifically here, वक्तॄ traces to √वच्. The -क्त- cluster is characteristic of √वच् derivatives.",
          },
          {
            label: "√वाक्",
            correct: false,
            feedback: "√वाक् is not a standard dhātu. वाक् is a noun (speech/voice), derived from √वच्. The root is √वच्; the noun वाक् is a nominal derivative. वक्तॄ comes from the verbal root √वच्.",
          },
        ],
      },

      {
        id: "s4q4",
        question: "The disappearance of visarga in 'धृतराष्ट्र उवाच' is because of which rule, and what is it called?",
        options: [
          {
            label: "Guṇa Sandhi — vowel strengthening (a + u → o)",
            correct: false,
            feedback: "Guṇa sandhi gives merger — like रथः + उपस्थ → रथोपस्थ (a + u → o inside a compound). In धृतराष्ट्र उवाच, the visarga simply disappears — no merger, no new vowel. That total disappearance is Lopa.",
          },
          {
            label: "Visarga Lopa — ः disappears before उ (Pāṇini 8.3.17)",
            correct: true,
            feedback: "Correct. Lopa means complete disappearance — the sound is replaced by zero. Visarga (ः) before the vowel उ undergoes Lopa by Pāṇini 8.3.17. The grammatical rule is well-defined; nothing accidental has happened.",
          },
          {
            label: "Anusvāra Sandhi — nasal assimilation",
            correct: false,
            feedback: "Anusvāra sandhi (ं) governs nasal consonants — completely different from visarga (ः). Anusvāra is the nasal dot; visarga is the two dots. Different sounds, different rules.",
          },
          {
            label: "Vṛddhi Sandhi — vowel lengthening (a + u → au)",
            correct: false,
            feedback: "Vṛddhi would give au (औ) — a different and stronger vowel. What happens to ः before उ is not Vṛddhi but Lopa — the visarga simply ceases to exist.",
          },
        ],
      },

      {
        id: "s4q5",
        question: "रथोपस्थः + उपाविशत् = ?",
        options: [
          {
            label: "रथोपस्थ उपाविशत्",
            correct: true,
            feedback: "Correct. Visarga Lopa: ः drops before उ. And remember — रथोपस्थ is itself already a sandhi product (रथः + उपस्थ → रथोपस्थ by Guṇa merger inside the compound). This single phrase has seen two sandhi operations.",
          },
          {
            label: "रथोपस्थो उपाविशत्",
            correct: false,
            feedback: "The -o form (ो) would come from full Guṇa merger — which is what happens inside tight compounds. Between a separate noun and verb in verse, only Lopa applies: the ः drops, leaving a space.",
          },
          {
            label: "रथोपस्थः उपाविशत्",
            correct: false,
            feedback: "This is the pre-sandhi form. Sanskrit text applies Sandhi. रथोपस्थः + उपाविशत् must undergo Visarga Lopa before उ. The correct written form is रथोपस्थ उपाविशत्.",
          },
          {
            label: "रथोपस्थम् उपाविशत्",
            correct: false,
            feedback: "रथोपस्थम् (-म् ending) is the accusative. Sandhi changes sound, not grammatical case. The nominative subject रथोपस्थः simply loses ः before उपाविशत्.",
          },
        ],
      },

    ],
  },

];

// ─────────────────────────────────────────────────────────────────
// FLAT LIST — all cards in sequence, for SRS use
// ─────────────────────────────────────────────────────────────────
export const allCards = cardSets.flatMap(set =>
  set.cards.map(card => ({ ...card, setId: set.id, setTitle: set.title }))
);

// ─────────────────────────────────────────────────────────────────
// INITIAL SRS STATE — for each card
// SM-2 inspired: interval, easeFactor, due date
// ─────────────────────────────────────────────────────────────────
export const initialSRSState = Object.fromEntries(
  allCards.map(card => [
    card.id,
    {
      interval: 0,       // days until next review
      easeFactor: 2.5,   // multiplier (SM-2 default)
      due: null,         // ISO date string when due next
      seen: false,
      correct: 0,
      incorrect: 0,
    }
  ])
);
