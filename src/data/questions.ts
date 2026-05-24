export interface Question {
  id: string
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1'
  type: 'grammar' | 'vocabulary' | 'writing' | 'speaking'
  question: string
  options: string[]
  correctIndex: number
  translations: {
    de: string
    th: string
    en: string
  }
  explanation: {
    de: string
    th: string
    en: string
  }
}

export const questions: Question[] = [
  // ==================== A1 QUESTIONS (1-25) ====================
  {
    id: 'a1-1',
    level: 'A1',
    type: 'grammar',
    question: 'Wie geht es dir? - Danke, gut. Und ___?',
    options: ['dir', 'dich', 'du', 'Sie'],
    correctIndex: 0,
    translations: {
      de: 'Wie geht es dir? - Danke, gut. Und dir?',
      th: 'สบายดีไหม? - ขอบคุณ สบายดี แล้วเธอล่ะ?',
      en: 'How are you? - Thanks, good. And you?'
    },
    explanation: {
      de: 'Nach "Und" fragen wir im Dativ ("dir"), da die Frage "Wie geht es..." den Dativ verlangt.',
      th: 'หลังจากคำว่า "Und" (และ) ในคำถามนี้ เราต้องใช้สรรพนามในรูป Dativ ("dir") เนื่องจากคำถาม "Wie geht es..." บังคับใช้กรรม Dativ',
      en: 'After "Und" in this context, we use the Dative pronoun ("dir") because the greeting "Wie geht es..." requires the Dative case.'
    }
  },
  {
    id: 'a1-2',
    level: 'A1',
    type: 'vocabulary',
    question: 'Ich ___ Flo und ich komme aus Thailand.',
    options: ['heiße', 'wohne', 'bin', 'komme'],
    correctIndex: 0,
    translations: {
      de: 'Ich heiße Flo und ich komme aus Thailand.',
      th: 'ฉันชื่อโฟลและฉันมาจากประเทศไทย',
      en: 'My name is Flo and I come from Thailand.'
    },
    explanation: {
      de: '"heißen" bedeutet einen Namen haben. "Ich heiße Flo" ist die Standardform zur Vorstellung.',
      th: 'คำว่า "heißen" แปลว่า มีชื่อว่า "Ich heiße Flo" เป็นรูปมาตรฐานในการแนะนำตัว',
      en: '"heißen" means to be named. "Ich heiße Flo" is the standard way to introduce oneself.'
    }
  },
  {
    id: 'a1-3',
    level: 'A1',
    type: 'grammar',
    question: 'Woher kommen Sie? - Ich komme ___ Deutschland.',
    options: ['aus', 'in', 'von', 'nach'],
    correctIndex: 0,
    translations: {
      de: 'Woher kommen Sie? - Ich komme aus Deutschland.',
      th: 'คุณมาจากไหน? - ฉันมาจากประเทศเยอรมนี',
      en: 'Where do you come from? - I come from Germany.'
    },
    explanation: {
      de: 'Die Präposition "aus" wird für die Herkunft aus Ländern und Städten verwendet.',
      th: 'บุพบท "aus" (จาก) ใช้เพื่อบอกแหล่งกำเนิดหรือถิ่นฐานจากประเทศและเมือง',
      en: 'The preposition "aus" (from) is used to indicate origin from countries and cities.'
    }
  },
  {
    id: 'a1-4',
    level: 'A1',
    type: 'vocabulary',
    question: 'Wo wohnen Sie? - Ich ___ in Berlin.',
    options: ['wohne', 'lebe', 'bin', 'komme'],
    correctIndex: 0,
    translations: {
      de: 'Wo wohnen Sie? - Ich wohne in Berlin.',
      th: 'คุณอาศัยอยู่ที่ไหน? - ฉันอาศัยอยู่ในเบอร์ลิน',
      en: 'Where do you live? - I live in Berlin.'
    },
    explanation: {
      de: '"wohnen" bezieht sich auf den Wohnort. Die passende Konjugation für "ich" ist "wohne".',
      th: '"wohnen" หมายถึง อาศัยอยู่ การผันกริยาที่ถูกต้องสำหรับประธาน "ich" คือ "wohne"',
      en: '"wohnen" refers to the place of residence. The correct conjugation for "ich" is "wohne".'
    }
  },
  {
    id: 'a1-5',
    level: 'A1',
    type: 'grammar',
    question: 'Was ___ du beruflich?',
    options: ['machst', 'mache', 'machen', 'macht'],
    correctIndex: 0,
    translations: {
      de: 'Was machst du beruflich?',
      th: 'คุณทำงานอะไร? (คุณทำอะไรเป็นอาชีพ?)',
      en: 'What do you do for a living?'
    },
    explanation: {
      de: 'Das Verb "machen" wird für das Pronomen "du" mit der Endung "-st" zu "machst" konjugiert.',
      th: 'คำกริยา "machen" (ทำ) เมื่อผันตามสรรพนาม "du" (เธอ) จะลงท้ายด้วย "-st" เป็น "machst"',
      en: 'The verb "machen" (to do) is conjugated with the ending "-st" to "machst" for the pronoun "du".'
    }
  },
  {
    id: 'a1-6',
    level: 'A1',
    type: 'grammar',
    question: 'Ich habe ___ Hund.',
    options: ['einen', 'ein', 'eine', 'eines'],
    correctIndex: 0,
    translations: {
      de: 'Ich habe einen Hund.',
      th: 'ฉันมีสุนัขหนึ่งตัว',
      en: 'I have a dog.'
    },
    explanation: {
      de: '"haben" verlangt den Akkusativ. "Hund" ist maskulin (der Hund), daher wird "ein" im Akkusativ zu "einen".',
      th: 'กริยา "haben" (มี) บังคับใช้กรรม Akkusativ (กรรมตรง) คำว่า "Hund" เป็นเพศชาย (der Hund) ดังนั้น "ein" จึงเปลี่ยนเป็น "einen" ในรูป Akkusativ',
      en: '"haben" requires the accusative case. "Hund" is masculine (der Hund), so the indefinite article "ein" becomes "einen" in the accusative.'
    }
  },
  {
    id: 'a1-7',
    level: 'A1',
    type: 'grammar',
    question: 'Das ist ein Tisch. ___ Tisch ist groß.',
    options: ['Der', 'Die', 'Das', 'Ein'],
    correctIndex: 0,
    translations: {
      de: 'Das ist ein Tisch. Der Tisch ist groß.',
      th: 'นี่คือโต๊ะตัวหนึ่ง โต๊ะตัวนั้นมีขนาดใหญ่',
      en: 'This is a table. The table is big.'
    },
    explanation: {
      de: 'Nachdem ein Gegenstand mit "ein" eingeführt wurde, benutzt man danach den bestimmten Artikel. "Tisch" ist maskulin (der).',
      th: 'หลังจากที่กล่าวถึงสิ่งของด้วยคำนำหน้านามไม่ชี้เฉพาะ "ein" ไปแล้ว ครั้งต่อไปจะใช้คำนำหน้านามชี้เฉพาะ "der" เพราะโต๊ะ (Tisch) เป็นเพศชาย',
      en: 'After an object is introduced with the indefinite article "ein", the definite article is used subsequently. "Tisch" is masculine (der).'
    }
  },
  {
    id: 'a1-8',
    level: 'A1',
    type: 'grammar',
    question: 'Hast du einen Bruder? - Ja, ___ heißt Max.',
    options: ['er', 'sie', 'es', 'ihn'],
    correctIndex: 0,
    translations: {
      de: 'Hast du einen Bruder? - Ja, er heißt Max.',
      th: 'เธอมีพี่ชาย/น้องชายไหม? - ใช่ เขาชื่อแม็กซ์',
      en: 'Do you have a brother? - Yes, he is named Max.'
    },
    explanation: {
      de: '"Bruder" ist maskulin. Das passende Subjektpronomen im Nominativ ist "er".',
      th: '"Bruder" (พี่ชาย/น้องชาย) เป็นเพศชาย สรรพนามบุรุษที่ 3 ที่ทำหน้าที่เป็นประธาน (Nominativ) คือ "er" (เขา)',
      en: '"Bruder" is masculine. The corresponding subject pronoun in the nominative case is "er" (he).'
    }
  },
  {
    id: 'a1-9',
    level: 'A1',
    type: 'grammar',
    question: 'Ist das ___ Tasche? - Ja, das ist meine.',
    options: ['deine', 'dein', 'deines', 'deiner'],
    correctIndex: 0,
    translations: {
      de: 'Ist das deine Tasche? - Ja, das ist meine.',
      th: 'นี่คือกระเป๋าของคุณใช่ไหม? - ใช่ นี่คือของฉัน',
      en: 'Is this your bag? - Yes, it is mine.'
    },
    explanation: {
      de: '"Tasche" ist feminin (die Tasche). Das Possessivpronomen für "du" im Nominativ Femininum ist "deine".',
      th: '"Tasche" (กระเป๋า) เป็นเพศหญิง (die Tasche) สรรพนามแสดงความเป็นเจ้าของสำหรับ "du" ในรูปเพศหญิง Nominativ คือ "deine"',
      en: '"Tasche" is feminine (die Tasche). The possessive pronoun for "du" in the nominative feminine is "deine".'
    }
  },
  {
    id: 'a1-10',
    level: 'A1',
    type: 'grammar',
    question: 'Haben Sie ein Auto? - Nein, ich habe ___ Auto.',
    options: ['kein', 'keine', 'nicht', 'einen'],
    correctIndex: 0,
    translations: {
      de: 'Haben Sie ein Auto? - Nein, ich habe kein Auto.',
      th: 'คุณมีรถยนต์ไหม? - ไม่ ฉันไม่มีรถยนต์',
      en: 'Do you have a car? - No, I do not have a car.'
    },
    explanation: {
      de: 'Nomen ohne bestimmten Artikel oder mit unbestimmtem Artikel werden mit "kein" verneint. "Auto" ist neutral (das), daher "kein".',
      th: 'คำนามที่ไม่มีคำนำหน้านามชี้เฉพาะ หรือมีคำนำหน้านามไม่ชี้เฉพาะ จะถูกปฏิเสธด้วยคำว่า "kein" โดย "Auto" เป็นเพศกลาง (das Auto) จึงใช้ "kein"',
      en: 'Nouns without a definite article or with an indefinite article are negated using "kein". "Auto" is neuter (das Auto), hence "kein".'
    }
  },
  {
    id: 'a1-11',
    level: 'A1',
    type: 'grammar',
    question: '___ ich hier rauchen? - Nein, das ist verboten.',
    options: ['Darf', 'Kann', 'Muss', 'Soll'],
    correctIndex: 0,
    translations: {
      de: 'Darf ich hier rauchen? - Nein, das ist verboten.',
      th: 'ฉันสูบบุหรี่ที่นี่ได้ไหม? - ไม่ได้ครับ ที่นี่ห้ามสูบ',
      en: 'May I smoke here? - No, it is forbidden.'
    },
    explanation: {
      de: 'Das Modalverb "dürfen" drückt Erlaubnis aus. Die Form für "ich" ist "darf".',
      th: 'กริยาช่วย Modalverb "dürfen" ใช้เพื่อแสดงการขออนุญาตหรือการได้รับอนุญาต ผันตามประธาน "ich" จะได้รูป "darf"',
      en: 'The modal verb "dürfen" expresses permission. The form for "ich" is "darf" (may/be allowed to).'
    }
  },
  {
    id: 'a1-12',
    level: 'A1',
    type: 'vocabulary',
    question: 'Das sind meine zwei ___.',
    options: ['Kinder', 'Kind', 'Kindes', 'Kindern'],
    correctIndex: 0,
    translations: {
      de: 'Das sind meine zwei Kinder.',
      th: 'นี่คือลูกทั้งสองคนของฉัน',
      en: 'These are my two children.'
    },
    explanation: {
      de: 'Nach der Zahl "zwei" wird der Plural benötigt. Der Plural von "Kind" ist "Kinder".',
      th: 'หลังจำนวนนับ "zwei" (สอง) ต้องใช้คำนามในรูปพหูพจน์ พหูพจน์ของ "Kind" คือ "Kinder"',
      en: 'After the number "zwei" (two), the plural form is required. The plural of "Kind" is "Kinder".'
    }
  },
  {
    id: 'a1-13',
    level: 'A1',
    type: 'vocabulary',
    question: 'Die Schwester von meinem Vater ist meine ___.',
    options: ['Tante', 'Onkel', 'Mutter', 'Oma'],
    correctIndex: 0,
    translations: {
      de: 'Die Schwester von meinem Vater ist meine Tante.',
      th: 'พี่สาวหรือน้องสาวของพ่อฉันคือป้า/น้า/อาหญิงของฉัน',
      en: 'The sister of my father is my aunt.'
    },
    explanation: {
      de: 'Verwandtschaftsbeziehung: Die Schwester des Vaters ist die Tante.',
      th: 'ความสัมพันธ์ทางครอบครัว: พี่สาวหรือน้องสาวของพ่อคือคุณป้า คุณน้า หรือคุณอาผู้หญิง ซึ่งภาษาเยอรมันคือ "Tante"',
      en: 'Family relationship: The sister of one\'s father is the aunt ("Tante").'
    }
  },
  {
    id: 'a1-14',
    level: 'A1',
    type: 'grammar',
    question: '___ Montag habe ich einen Termin.',
    options: ['Am', 'Im', 'Um', 'In'],
    correctIndex: 0,
    translations: {
      de: 'Am Montag habe ich einen Termin.',
      th: 'ในวันจันทร์ฉันมีนัด',
      en: 'On Monday I have an appointment.'
    },
    explanation: {
      de: 'Für Wochentage benutzt man die Präposition "am" (an + dem).',
      th: 'สำหรับวันต่างๆ ในรอบสัปดาห์ จะใช้คำบุพบท "am"เสมอ (ย่อมาจาก an + dem)',
      en: 'For days of the week, the preposition "am" (contraction of "an dem") is used.'
    }
  },
  {
    id: 'a1-15',
    level: 'A1',
    type: 'grammar',
    question: 'Der Film beginnt ___ 20:00 Uhr.',
    options: ['um', 'am', 'im', 'auf'],
    correctIndex: 0,
    translations: {
      de: 'Der Film beginnt um 20:00 Uhr.',
      th: 'ภาพยนตร์เริ่มเวลา 20.00 น.',
      en: 'The movie starts at 8:00 PM.'
    },
    explanation: {
      de: 'Für Uhrzeiten verwendet man immer die Präposition "um".',
      th: 'สำหรับการบอกเวลา (นาฬิกา) จะใช้คำบุพบท "um" เสมอ',
      en: 'For clock times, the preposition "um" (at) is always used.'
    }
  },
  {
    id: 'a1-16',
    level: 'A1',
    type: 'vocabulary',
    question: 'Möchtest du einen Apfel? - Nein, danke. Ich mag kein ___.',
    options: ['Obst', 'Gemüse', 'Fleisch', 'Brot'],
    correctIndex: 0,
    translations: {
      de: 'Möchtest du einen Apfel? - Nein, danke. Ich mag kein Obst.',
      th: 'เธออยากได้แอปเปิ้ลไหม? - ไม่ ขอบคุณ ฉันไม่ชอบผลไม้',
      en: 'Would you like an apple? - No, thanks. I don\'t like fruit.'
    },
    explanation: {
      de: 'Ein Apfel gehört zur Kategorie "Obst" (Früchte).',
      th: 'แอปเปิ้ลจัดอยู่ในหมวดหมู่ "Obst" (ผลไม้)',
      en: 'An apple belongs to the category "Obst" (fruit).'
    }
  },
  {
    id: 'a1-17',
    level: 'A1',
    type: 'grammar',
    question: 'Bitte ___ Sie leise!',
    options: ['seien', 'sein', 'bist', 'seid'],
    correctIndex: 0,
    translations: {
      de: 'Bitte seien Sie leise!',
      th: 'กรุณาเงียบด้วยครับ/ค่ะ',
      en: 'Please be quiet!'
    },
    explanation: {
      de: 'Der Imperativ von "sein" in der Höflichkeitsform (Sie) heißt "seien Sie".',
      th: 'ประโยคคำสั่ง (Imperativ) ของกริยา "sein" ในรูปสุภาพ (Sie) คือ "seien Sie"',
      en: 'The imperative of "sein" in the polite form (Sie) is "seien Sie".'
    }
  },
  {
    id: 'a1-18',
    level: 'A1',
    type: 'grammar',
    question: '___ du gestern Zeit gehabt?',
    options: ['Hast', 'Bist', 'Warst', 'Hattest'],
    correctIndex: 0,
    translations: {
      de: 'Hast du gestern Zeit gehabt?',
      th: 'เมื่อวานนี้เธอมีเวลาไหม?',
      en: 'Did you have time yesterday?'
    },
    explanation: {
      de: 'Das Perfekt von "haben" wird mit dem Hilfsverb "haben" gebildet. Für "du" ist das "hast".',
      th: 'รูปอดีต Perfekt ของคำกริยา "haben" ต้องใช้กริยาช่วย "haben" ผันตามประธาน "du" จะได้รูป "hast" (hast ... gehabt)',
      en: 'The Perfekt (present perfect) of "haben" is formed with the auxiliary verb "haben". For "du", this is "hast" (hast ... gehabt).'
    }
  },
  {
    id: 'a1-19',
    level: 'A1',
    type: 'grammar',
    question: 'Letztes Jahr ___ ich in Deutschland.',
    options: ['war', 'bin', 'hatte', 'wurde'],
    correctIndex: 0,
    translations: {
      de: 'Letztes Jahr war ich in Deutschland.',
      th: 'ปีที่แล้วฉันอยู่ที่ประเทศเยอรมนี',
      en: 'Last year I was in Germany.'
    },
    explanation: {
      de: 'Im Präteritum wird "sein" für "ich" zu "war". Es beschreibt einen Zustand in der Vergangenheit.',
      th: 'ในรูปอดีต Präteritum กริยา "sein" ผันตามประธาน "ich" จะเปลี่ยนรูปเป็น "war" (เคยอยู่/เคยเป็น) ใช้บอกสถานะในอดีต',
      en: 'In the simple past (Präteritum), "sein" becomes "war" for the pronoun "ich". It describes a state in the past.'
    }
  },
  {
    id: 'a1-20',
    level: 'A1',
    type: 'grammar',
    question: 'Ich liebe dich. Liebst du ___ auch?',
    options: ['mich', 'mir', 'ich', 'dich'],
    correctIndex: 0,
    translations: {
      de: 'Ich liebe dich. Liebst du mich auch?',
      th: 'ฉันรักเธอ เธอก็รักฉันเหมือนกันไหม?',
      en: 'I love you. Do you love me too?'
    },
    explanation: {
      de: '"lieben" erfordert das Akkusativobjekt. Das Akkusativpronomen von "ich" ist "mich".',
      th: 'กริยา "lieben" (รัก) บังคับกรรม Akkusativ (กรรมตรง) สรรพนาม Akkusativ ของประธาน "ich" คือ "mich" (ฉันที่เป็นกรรม)',
      en: '"lieben" (to love) requires an accusative object. The accusative pronoun for "ich" is "mich".'
    }
  },
  {
    id: 'a1-21',
    level: 'A1',
    type: 'grammar',
    question: 'Das Geschenk ist für ___.',
    options: ['dich', 'dir', 'du', 'dein'],
    correctIndex: 0,
    translations: {
      de: 'Das Geschenk ist für dich.',
      th: 'ของขวัญชิ้นนี้สำหรับเธอ',
      en: 'The gift is for you.'
    },
    explanation: {
      de: 'Die Präposition "für" verlangt immer den Akkusativ. Das Akkusativpronomen von "du" ist "dich".',
      th: 'คำบุพบท "für" (สำหรับ) บังคับใช้กรรม Akkusativ เสมอ สรรพนามในรูป Akkusativ ของ "du" คือ "dich"',
      en: 'The preposition "für" always requires the accusative case. The accusative pronoun for "du" is "dich".'
    }
  },
  {
    id: 'a1-22',
    level: 'A1',
    type: 'vocabulary',
    question: 'Heute ist Dienstag. Gestern war ___.',
    options: ['Montag', 'Mittwoch', 'Donnerstag', 'Sonntag'],
    correctIndex: 0,
    translations: {
      de: 'Heute ist Dienstag. Gestern war Montag.',
      th: 'วันนี้วันอังคาร เมื่อวานคือวันจันทร์',
      en: 'Today is Tuesday. Yesterday was Monday.'
    },
    explanation: {
      de: '"Gestern" bezeichnet den Vortag. Der Tag vor Dienstag ist Montag.',
      th: '"Gestern" (เมื่อวาน) หมายถึงวันก่อนหน้านี้ วันก่อนวันอังคาร (Dienstag) คือวันจันทร์ (Montag)',
      en: '"Gestern" means yesterday. The day before Tuesday is Monday.'
    }
  },
  {
    id: 'a1-23',
    level: 'A1',
    type: 'grammar',
    question: '___ kostet das Buch? - Es kostet 15 Euro.',
    options: ['Wie viel', 'Wie lange', 'Wie oft', 'Wo'],
    correctIndex: 0,
    translations: {
      de: 'Wie viel kostet das Buch? - Es kostet 15 Euro.',
      th: 'หนังสือเล่มนี้ราคาเท่าไหร่? - ราคา 15 ยูโร',
      en: 'How much does the book cost? - It costs 15 Euros.'
    },
    explanation: {
      de: '"Wie viel" fragt nach Preisen oder Mengen. "Wie viel kostet..." ist die Standardfrage nach dem Preis.',
      th: '"Wie viel" ใช้เพื่อถามราคาหรือปริมาณ คำว่า "Wie viel kostet..." เป็นคำถามมาตรฐานในการถามราคาค่างวด',
      en: '"Wie viel" asks about prices or quantities. "Wie viel kostet..." is the standard question for asking price.'
    }
  },
  {
    id: 'a1-24',
    level: 'A1',
    type: 'vocabulary',
    question: 'Trinkst du oft Kaffee? - Nein, ___.',
    options: ['nie', 'immer', 'oft', 'gern'],
    correctIndex: 0,
    translations: {
      de: 'Trinkst du oft Kaffee? - Nein, nie.',
      th: 'เธอชอบดื่มกาแฟบ่อยไหม? - ไม่เลย ไม่เคยเลย',
      en: 'Do you drink coffee often? - No, never.'
    },
    explanation: {
      de: '"Nein" leitet eine Verneinung ein. "nie" bedeutet 0% Häufigkeit und passt zur Antwort.',
      th: '"Nein" (ไม่) เป็นการตอบปฏิเสธ คำว่า "nie" (ไม่เคยเลย) แสดงถึงความถี่ 0% ซึ่งสอดคล้องกับบริบทปฏิเสธนี้',
      en: '"Nein" initiates a negation. "nie" means never (0% frequency) and perfectly fits the negative answer.'
    }
  },
  {
    id: 'a1-25',
    level: 'A1',
    type: 'grammar',
    question: 'Ich fahre mit ___ Zug.',
    options: ['dem', 'den', 'das', 'der'],
    correctIndex: 0,
    translations: {
      de: 'Ich fahre mit dem Zug.',
      th: 'ฉันเดินทางด้วยรถไฟ',
      en: 'I travel by train.'
    },
    explanation: {
      de: 'Die Präposition "mit" verlangt immer den Dativ. "Zug" ist maskulin (der Zug), im Dativ wird es zu "dem".',
      th: 'คำบุพบท "mit" (ด้วย/กับ) บังคับใช้กรรม Dativ เสมอ คำนาม "Zug" (รถไฟ) เป็นเพศชาย (der Zug) เมื่ออยู่ในรูป Dativ จะเปลี่ยนเป็น "dem"',
      en: 'The preposition "mit" always requires the dative case. "Zug" is masculine (der Zug), which becomes "dem" in the dative.'
    }
  },
  {
    id: 'a1-26',
    level: 'A1',
    type: 'vocabulary',
    question: 'Ich trinke morgens gerne einen heißen ___.',
    options: ['Kaffee', 'Apfel', 'Käse', 'Brot'],
    correctIndex: 0,
    translations: {
      de: 'Ich trinke morgens gerne einen heißen Kaffee.',
      th: 'ฉันชอบดื่มกาแฟร้อนๆ ในตอนเช้า',
      en: 'I like to drink a hot coffee in the morning.'
    },
    explanation: {
      de: '"Kaffee" ist ein beliebtes heißes Getränk. "Apfel" (Obst), "Käse" (Milchprodukt) und "Brot" (Backware) kann man nicht trinken.',
      th: '"Kaffee" (กาแฟ) เป็นเครื่องดื่มร้อนที่นิยมกันทั่วไป ส่วน "Apfel" (แอปเปิ้ล), "Käse" (ชีส) และ "Brot" (ขนมปัง) เป็นของกิน ไม่สามารถดื่มได้',
      en: '"Kaffee" (coffee) is a popular hot beverage. "Apfel" (apple), "Käse" (cheese), and "Brot" (bread) are food items and cannot be drunk.'
    }
  },
  {
    id: 'a1-27',
    level: 'A1',
    type: 'vocabulary',
    question: 'Der Zug fährt um 10:30 Uhr am ___ ab.',
    options: ['Bahnhof', 'Flughafen', 'Supermarkt', 'Kino'],
    correctIndex: 0,
    translations: {
      de: 'Der Zug fährt um 10:30 Uhr am Bahnhof ab.',
      th: 'รถไฟจะออกจากสถานีรถไฟเวลา 10:30 น.',
      en: 'The train departs at 10:30 AM from the train station.'
    },
    explanation: {
      de: 'Züge fahren am "Bahnhof" ab. Flugzeuge starten am "Flughafen".',
      th: 'รถไฟ (der Zug) ต้องออกจากสถานีรถไฟ ("Bahnhof") ส่วนเครื่องบินจะบินขึ้นจากสนามบิน ("Flughafen")',
      en: 'Trains depart from the train station ("Bahnhof"). Airplanes take off from the airport ("Flughafen").'
    }
  },
  {
    id: 'a1-28',
    level: 'A1',
    type: 'vocabulary',
    question: 'Die Mutter von meinem Vater ist meine ___.',
    options: ['Großmutter', 'Schwester', 'Tochter', 'Tante'],
    correctIndex: 0,
    translations: {
      de: 'Die Mutter von meinem Vater ist meine Großmutter.',
      th: 'แม่ของพ่อฉันคือย่า (Großmutter) ของฉัน',
      en: 'The mother of my father is my grandmother.'
    },
    explanation: {
      de: 'Die Mutter des Vaters ist die Großmutter (Oma).',
      th: 'แม่ของพ่อ (die Mutter von meinem Vater) คือคุณย่าหรือคุณยาย ซึ่งภาษาเยอรมันคือ "Großmutter"',
      en: 'The mother of one\'s father is the grandmother ("Großmutter").'
    }
  },
  {
    id: 'a1-29',
    level: 'A1',
    type: 'vocabulary',
    question: 'Im Winter trage ich eine warme Jacke und einen ___ um den Hals.',
    options: ['Schal', 'Schuh', 'Gürtel', 'Hut'],
    correctIndex: 0,
    translations: {
      de: 'Im Winter trage ich eine warme Jacke und einen Schal um den Hals.',
      th: 'ในฤดูหนาว ฉันสวมแจ็กเก็ตหนาๆ และผ้าพันคอพันรอบคอ',
      en: 'In winter, I wear a warm jacket and a scarf around my neck.'
    },
    explanation: {
      de: 'Einen "Schal" trägt man um den Hals. "Schuh" (Fuß), "Gürtel" (Hüfte) und "Hut" (Kopf) werden an anderen Stellen getragen.',
      th: '"Schal" (ผ้าพันคอ) เป็นเครื่องแต่งกายที่ใช้สวมรอบคอ (um den Hals) ส่วน "Schuh" (รองเท้า), "Gürtel" (เข็มขัด) และ "Hut" (หมวก) ใช้กับส่วนอื่นๆ ของร่างกาย',
      en: 'A "Schal" (scarf) is worn around the neck ("um den Hals"). "Schuh" (shoe), "Gürtel" (belt), and "Hut" (hat) are worn on other parts of the body.'
    }
  },
  {
    id: 'a1-31',
    level: 'A1',
    type: 'vocabulary',
    question: 'Der Himmel ist ___ und die Sonne scheint hell.',
    options: ['blau', 'rot', 'grün', 'schwarz'],
    correctIndex: 0,
    translations: {
      de: 'Der Himmel ist blau und die Sonne scheint hell.',
      th: 'ท้องฟ้าเป็นสีฟ้าและดวงอาทิตย์ส่องแสงสว่าง',
      en: 'The sky is blue and the sun shines brightly.'
    },
    explanation: {
      de: '"blau" ist die Standardfarbe des Himmels an einem sonnigen Tag. Die anderen Optionen (rot, grün, schwarz) sind keine typischen Himmelsfarben bei schönem Wetter.',
      th: '"blau" (สีฟ้า) คือสีมาตรฐานของท้องฟ้าในวันที่อากาศดี ตัวเลือกอื่น ๆ อย่าง rot (แดง), grün (เขียว), schwarz (ดำ) ไม่ใช่สีท้องฟ้าในสภาพอากาศปกติ',
      en: '"blau" (blue) is the standard color of the sky on a sunny day. The other options (red, green, black) are not typical sky colors in good weather.'
    }
  },
  {
    id: 'a1-32',
    level: 'A1',
    type: 'vocabulary',
    question: 'Ich sehe mit den ___ und höre mit den Ohren.',
    options: ['Augen', 'Händen', 'Füßen', 'Zähnen'],
    correctIndex: 0,
    translations: {
      de: 'Ich sehe mit den Augen und höre mit den Ohren.',
      th: 'ฉันมองด้วยดวงตาและได้ยินด้วยหู',
      en: 'I see with my eyes and hear with my ears.'
    },
    explanation: {
      de: '"Augen" sind die Körperteile zum Sehen. Das Paar passt hier: Augen (Sehen) und Ohren (Hören) sind die logischen Gegenstücke.',
      th: '"Augen" (ดวงตา) คืออวัยวะที่ใช้มอง คู่ที่สมเหตุสมผลคือ Augen (มอง) และ Ohren (ได้ยิน) ซึ่งสอดคล้องกับประโยค',
      en: '"Augen" (eyes) are the body parts used for seeing. The logical pairing is Augen (sight) and Ohren (hearing), which fits the sentence structure.'
    }
  },
  {
    id: 'a1-33',
    level: 'A1',
    type: 'vocabulary',
    question: 'Ich schlafe in meinem ___.',
    options: ['Schlafzimmer', 'Badezimmer', 'Wohnzimmer', 'Küche'],
    correctIndex: 0,
    translations: {
      de: 'Ich schlafe in meinem Schlafzimmer.',
      th: 'ฉันนอนหลับในห้องนอนของฉัน',
      en: 'I sleep in my bedroom.'
    },
    explanation: {
      de: '"Schlafzimmer" = Zimmer zum Schlafen. Das Wort setzt sich zusammen aus "schlafen" (to sleep) + "Zimmer" (room). Andere Räume: Badezimmer (bathroom), Wohnzimmer (living room), Küche (kitchen).',
      th: '"Schlafzimmer" (ห้องนอน) ประกอบด้วย "schlafen" (นอนหลับ) + "Zimmer" (ห้อง) คำอื่น: Badezimmer (ห้องน้ำ), Wohnzimmer (ห้องนั่งเล่น), Küche (ห้องครัว)',
      en: '"Schlafzimmer" (bedroom) is a compound of "schlafen" (to sleep) + "Zimmer" (room). Other rooms: Badezimmer (bathroom), Wohnzimmer (living room), Küche (kitchen).'
    }
  },
  {
    id: 'a1-34',
    level: 'A1',
    type: 'vocabulary',
    question: 'Es regnet stark. Du brauchst einen ___.',
    options: ['Regenschirm', 'Sonnenbrille', 'Badeanzug', 'Schal'],
    correctIndex: 0,
    translations: {
      de: 'Es regnet stark. Du brauchst einen Regenschirm.',
      th: 'ฝนตกหนัก คุณต้องการร่ม',
      en: 'It is raining heavily. You need an umbrella.'
    },
    explanation: {
      de: '"Regenschirm" = ein Schirm gegen den Regen. Das Wort besteht aus "Regen" (rain) + "Schirm" (umbrella/shield). Man benutzt ihn, wenn es regnet.',
      th: '"Regenschirm" (ร่ม) ประกอบด้วย "Regen" (ฝน) + "Schirm" (ร่ม/โล่) ใช้เมื่อฝนตก ส่วน Sonnenbrille (แว่นกันแดด) ใช้เมื่อแดดออก',
      en: '"Regenschirm" (umbrella) is a compound of "Regen" (rain) + "Schirm" (shield). It is used when it is raining. "Sonnenbrille" (sunglasses) is for sunny weather.'
    }
  },
  {
    id: 'a1-35',
    level: 'A1',
    type: 'vocabulary',
    question: 'Ich gehe in den Supermarkt und ___ Lebensmittel.',
    options: ['kaufe', 'trinke', 'schlafe', 'lerne'],
    correctIndex: 0,
    translations: {
      de: 'Ich gehe in den Supermarkt und kaufe Lebensmittel.',
      th: 'ฉันไปซูเปอร์มาร์เก็ตและซื้ออาหาร',
      en: 'I go to the supermarket and buy groceries.'
    },
    explanation: {
      de: '"kaufen" bedeutet to buy. Im Supermarkt kauft man Lebensmittel (groceries/food). Die Konjugation für "ich" ist "kaufe".',
      th: '"kaufen" แปลว่า ซื้อ ในซูเปอร์มาร์เก็ตเราซื้อ Lebensmittel (อาหาร/ของใช้) การผันกริยาสำหรับ "ich" คือ "kaufe"',
      en: '"kaufen" means to buy. In a supermarket one buys Lebensmittel (groceries). The correct conjugation for "ich" is "kaufe".'
    }
  },
  {
    id: 'a1-30',
    level: 'A1',
    type: 'vocabulary',
    question: 'Am ___ arbeite ich nicht. Da habe ich frei.',
    options: ['Wochenende', 'Montag', 'Vormittag', 'Werktag'],
    correctIndex: 0,
    translations: {
      de: 'Am Wochenende arbeite ich nicht. Da habe ich frei.',
      th: 'ในวันหยุดสุดสัปดาห์ฉันไม่ได้ทำงาน ฉันได้หยุดพักผ่อน',
      en: 'At the weekend, I do not work. I have free time then.'
    },
    explanation: {
      de: 'Am "Wochenende" (Samstag und Sonntag) ist die übliche arbeitsfreie Zeit. "Montag" und "Werktag" sind Arbeitstage.',
      th: '"Wochenende" (วันหยุดสุดสัปดาห์ - วันเสาร์และอาทิตย์) คือเวลาที่คนมักได้หยุดงาน (frei haben) ส่วน "Montag" (วันจันทร์) และ "Werktag" (วันทำงาน) เป็นวันที่ต้องทำงาน',
      en: '"Wochenende" (weekend) is the typical time off from work. "Montag" (Monday) and "Werktag" (workday) are regular working days.'
    }
  },

  // ==================== A2 QUESTIONS (26-50) ====================
  {
    id: 'a2-1',
    level: 'A2',
    type: 'grammar',
    question: 'Ich freue mich ___ den Urlaub.',
    options: ['auf', 'über', 'an', 'für'],
    correctIndex: 0,
    translations: {
      de: 'Ich freue mich auf den Urlaub.',
      th: 'ฉันตั้งตารอคอยช่วงเวลาพักร้อนอย่างใจจดใจจ่อ',
      en: 'I am looking forward to the vacation.'
    },
    explanation: {
      de: '"Sich freuen auf" (+ Akkusativ) bezieht sich auf ein zukünftiges Ereignis. "Sich freuen über" bezieht sich auf die Gegenwart oder Vergangenheit.',
      th: '"Sich freuen auf" (+ Akkusativ) จะใช้สำหรับการตั้งตารอคอยเหตุการณ์ที่จะเกิดขึ้นในอนาคต ส่วน "sich freuen über" จะหมายถึงความยินดีกับสิ่งที่เกิดขึ้นแล้วหรือกำลังเกิดขึ้นในปัจจุบัน',
      en: '"Sich freuen auf" (+ accusative) is used when looking forward to a future event. "Sich freuen über" is used for present or past events.'
    }
  },
  {
    id: 'a2-2',
    level: 'A2',
    type: 'grammar',
    question: 'Ich lerne Deutsch, ___ ich in Deutschland arbeiten möchte.',
    options: ['weil', 'dass', 'denn', 'aber'],
    correctIndex: 0,
    translations: {
      de: 'Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.',
      th: 'ฉันเรียนภาษาเยอรมัน เพราะว่าฉันอยากทำงานที่ประเทศเยอรมนี',
      en: 'I am learning German because I want to work in Germany.'
    },
    explanation: {
      de: '"weil" leitet einen Nebensatz ein (das konjugierte Verb steht am Ende: "möchte"). "denn" steht auf Position 0 eines Hauptsatzes.',
      th: '"weil" (เพราะว่า) เป็นคำเชื่อมที่ใช้เริ่มต้นประโยคย่อย Nebensatz ซึ่งบังคับให้กริยาที่ผันตามประธานไปอยู่ท้ายประโยคสุด ("möchte") ส่วน "denn" ใช้เชื่อมประโยคหลัก Hauptsatz กริยาจะอยู่ตำแหน่งที่ 2 ปกติ',
      en: '"weil" introduces a subordinate clause (Nebensatz) where the conjugated verb moves to the very end ("möchte"). "denn" is used for coordinating main clauses and takes position 0.'
    }
  },
  {
    id: 'a2-3',
    level: 'A2',
    type: 'grammar',
    question: 'Ich glaube, ___ das Wetter morgen gut wird.',
    options: ['dass', 'weil', 'wenn', 'ob'],
    correctIndex: 0,
    translations: {
      de: 'Ich glaube, dass das Wetter morgen gut wird.',
      th: 'ฉันคิดว่า พยากรณ์อากาศวันพรุ่งนี้จะดีนะ',
      en: 'I believe that the weather tomorrow will be good.'
    },
    explanation: {
      de: '"dass" ist eine Konjunktion, die einen Objektsatz einleitet und das konjugierte Verb ("wird") ans Ende schickt.',
      th: '"dass" (ว่า/ที่ว่า) เป็นคำเชื่อมประเภท Nebensatz ใช้บอกความคิดเห็นหรือข้อเท็จจริง โดยส่งกริยาที่ผันแล้ว ("wird") ไปไว้ท้ายสุดของประโยคย่อย',
      en: '"dass" is a conjunction that introduces a noun/object clause, pushing the conjugated verb ("wird") to the end of the clause.'
    }
  },
  {
    id: 'a2-4',
    level: 'A2',
    type: 'grammar',
    question: 'Mein Bruder ist älter ___ ich.',
    options: ['als', 'wie', 'so', 'von'],
    correctIndex: 0,
    translations: {
      de: 'Mein Bruder ist älter als ich.',
      th: 'พี่ชายของฉันอายุมากกว่าฉัน',
      en: 'My brother is older than me.'
    },
    explanation: {
      de: 'Bei einem Komparativ (Ungleichheit) benutzt man "als". Bei Gleichheit (so alt ...) benutzt man "wie".',
      th: 'ในการเปรียบเทียบขั้นกว่า (Comparative) เพื่อแสดงความต่าง จะใช้คำเชื่อม "als" (กว่า) ส่วนกรณีที่เท่ากัน (เช่น so alt...) จะใช้ "wie" (เท่ากันกับ)',
      en: 'In comparative comparisons (inequality), "als" is used. For equal comparisons (e.g. as old as), "wie" is used.'
    }
  },
  {
    id: 'a2-5',
    level: 'A2',
    type: 'grammar',
    question: 'Das ist der ___ Tag meines Lebens!',
    options: ['schönste', 'schöner', 'schön', 'am schönsten'],
    correctIndex: 0,
    translations: {
      de: 'Das ist der schönste Tag meines Lebens!',
      th: 'นี่คือวันที่สวยงามที่สุดในชีวิตของฉันเลย!',
      en: 'This is the most beautiful day of my life!'
    },
    explanation: {
      de: 'Adjektive im Superlativ vor einem Nomen werden dekliniert. "Tag" ist maskulin nominativ mit bestimmtem Artikel, daher "schönste".',
      th: 'คำคุณศัพท์ในขั้นสุด (Superlativ) เมื่อวางอยู่หน้าคำนาม จะต้องมีการผันตามเพศและพจน์ ในที่นี้คือ "der Tag" (เพศชาย ประธาน) หลังอาร์ทิเคิลชี้เฉพาะ จะใช้รูปเดี่ยวลงท้าย "-e" เป็น "schönste"',
      en: 'Adjectives in the superlative position before a noun must be declined. "Tag" is masculine nominative with a definite article, requiring the ending "-ste" ("schönste").'
    }
  },
  {
    id: 'a2-6',
    level: 'A2',
    type: 'grammar',
    question: 'Ich bin ___ Supermarkt.',
    options: ['im', 'in den', 'zu', 'nach'],
    correctIndex: 0,
    translations: {
      de: 'Ich bin im Supermarkt.',
      th: 'ฉันอยู่ในซูเปอร์มาร์เก็ต',
      en: 'I am in the supermarket.'
    },
    explanation: {
      de: '"In" ist eine Wechselpräposition. Bei der Frage "Wo?" (Ort) steht der Dativ: "in + dem" = "im".',
      th: '"In" เป็นบุพบทสองหน้า (Wechselpräposition) เมื่อตอบคำถาม "Wo?" (อยู่ที่ไหน - แสดงตำแหน่ง) จะต้องใช้คู่กับกรรม Dativ: in + dem (der Supermarkt) จึงย่อรวมเป็น "im"',
      en: '"In" is a two-way preposition. For the question "Wo?" (location/where), it requires the dative case: "in dem" = "im".'
    }
  },
  {
    id: 'a2-7',
    level: 'A2',
    type: 'grammar',
    question: 'Ich gehe ___ Supermarkt.',
    options: ['in den', 'im', 'zu', 'nach'],
    correctIndex: 0,
    translations: {
      de: 'Ich gehe in den Supermarkt.',
      th: 'ฉันกำลังเดินเข้าไปในซูเปอร์มาร์เก็ต',
      en: 'I am going into the supermarket.'
    },
    explanation: {
      de: 'Bei der Frage "Wohin?" (Richtung) steht nach "in" der Akkusativ: "in + den" (Supermarkt ist maskulin).',
      th: 'เมื่อตอบคำถาม "Wohin?" (ไปที่ไหน - แสดงทิศทางการเคลื่อนที่เข้าไปด้านใน) บุพบท "in" จะบังคับใช้คู่กับกรรม Akkusativ ซึ่งซูเปอร์มาร์เก็ตเป็นเพศชาย (der Supermarkt) จึงเปลี่ยนเป็น "in den"',
      en: 'For the question "Wohin?" (direction/destination), "in" requires the accusative case: "in den" (since Supermarkt is masculine).'
    }
  },
  {
    id: 'a2-8',
    level: 'A2',
    type: 'grammar',
    question: 'Das Bild hängt an ___ Wand (fem.).',
    options: ['der', 'die', 'den', 'dem'],
    correctIndex: 0,
    translations: {
      de: 'Das Bild hängt an der Wand.',
      th: 'รูปภาพนั้นแขวนอยู่บนผนัง',
      en: 'The picture is hanging on the wall.'
    },
    explanation: {
      de: 'Das Verb "hängen" (Zustand, Wo?) verlangt den Dativ nach "an". "Wand" ist feminin (die Wand), Dativ ist "der".',
      th: 'คำกริยา "hängen" (แขวนอยู่ - เป็นสถานะนิ่ง ตอบคำถาม Wo?) บังคับใช้กรรม Dativ ตามหลังคำบุพบท "an" คำว่า "Wand" เป็นเพศหญิง (die Wand) รูป Dativ จึงเปลี่ยนเป็น "der Wand"',
      en: 'The verb "hängen" (state of hanging, answering "Wo?") requires the dative case after "an". "Wand" is feminine (die Wand), which becomes "der" in the dative.'
    }
  },
  {
    id: 'a2-9',
    level: 'A2',
    type: 'grammar',
    question: 'Ich hänge das Bild an ___ Wand.',
    options: ['die', 'der', 'den', 'das'],
    correctIndex: 0,
    translations: {
      de: 'Ich hänge das Bild an die Wand.',
      th: 'ฉันนำรูปภาพไปแขวนที่ผนัง',
      en: 'I hang the picture on the wall.'
    },
    explanation: {
      de: 'Das Verb "hängen" (Aktion, Wohin?) verlangt den Akkusativ nach "an". "Wand" ist feminin, Akkusativ bleibt "die".',
      th: 'คำกริยา "hängen" (ลงมือแขวน - เป็นการกระทำเคลื่อนไหว ตอบคำถาม Wohin?) บังคับใช้กรรม Akkusativ ตามหลังบุพบท "an" คำนามเพศหญิงในรูป Akkusativ ยังคงรูปเดิมคือ "die"',
      en: 'The verb "hängen" (action of hanging, answering "Wohin?") requires the accusative case after "an". "Wand" is feminine, so the article remains "die" in the accusative.'
    }
  },
  {
    id: 'a2-10',
    level: 'A2',
    type: 'grammar',
    question: 'Ich ___ nächstes Jahr 30 Jahre alt.',
    options: ['werde', 'wirst', 'wird', 'werden'],
    correctIndex: 0,
    translations: {
      de: 'Ich werde nächstes Jahr 30 Jahre alt.',
      th: 'ปีหน้าฉันจะมีอายุครบ 30 ปี',
      en: 'I will turn 30 years old next year.'
    },
    explanation: {
      de: 'Das Verb "werden" beschreibt eine Veränderung oder Zukunft. Konjugation für "ich" ist "werde".',
      th: 'คำกริยา "werden" ใช้เพื่ออธิบายความเปลี่ยนแปลง การเติบโต หรือกาลอนาคต การผันสำหรับประธาน "ich" คือ "werde"',
      en: 'The verb "werden" describes a change of state or future event. The conjugation for "ich" is "werde".'
    }
  },
  {
    id: 'a2-11',
    level: 'A2',
    type: 'grammar',
    question: 'Weißt du, ___ der Bus kommt?',
    options: ['wann', 'wie', 'wo', 'warum'],
    correctIndex: 0,
    translations: {
      de: 'Weißt du, wann der Bus kommt?',
      th: 'เธอรู้ไหมว่ารถบัสจะมาเมื่อไหร่?',
      en: 'Do you know when the bus is coming?'
    },
    explanation: {
      de: 'Das ist eine indirekte Frage. "wann" fragt nach der Uhrzeit / dem Zeitpunkt.',
      th: 'นี่คือรูปแบบประโยคคำถามทางอ้อม (indirekte Frage) โดยใช้ "wann" (เมื่อไหร่) เพื่อสอบถามเรื่องช่วงเวลาหรือจุดเวลาที่รถจะมาถึง',
      en: 'This is an indirect question. "wann" (when) is used to ask about a specific point in time or clock time.'
    }
  },
  {
    id: 'a2-12',
    level: 'A2',
    type: 'grammar',
    question: 'Der Mann, ___ dort steht, ist mein Lehrer.',
    options: ['der', 'den', 'dem', 'dessen'],
    correctIndex: 0,
    translations: {
      de: 'Der Mann, der dort steht, ist mein Lehrer.',
      th: 'ผู้ชายที่ยืนอยู่ตรงนั้นคือคุณครูของฉัน',
      en: 'The man who is standing there is my teacher.'
    },
    explanation: {
      de: 'Relativsatz im Nominativ Maskulinum: Das Relativpronomen für "Mann" (Subjekt im Nebensatz) ist "der".',
      th: 'ประโยคย่อยขยายนาม (Relativsatz) สรรพนามขยายนามเพศชายในรูป Nominativ (เป็นประธานในประโยคย่อย) คือ "der"',
      en: 'Relative clause in the masculine nominative: The relative pronoun for "Mann" (acting as the subject in the sub-clause) is "der".'
    }
  },
  {
    id: 'a2-13',
    level: 'A2',
    type: 'grammar',
    question: 'Wir ___ am Wochenende nach München gefahren.',
    options: ['sind', 'haben', 'wurden', 'waren'],
    correctIndex: 0,
    translations: {
      de: 'Wir sind am Wochenende nach München gefahren.',
      th: 'พวกเราได้ขับรถเดินทางไปมิวนิกในช่วงวันหยุดสุดสัปดาห์',
      en: 'We drove/went to Munich over the weekend.'
    },
    explanation: {
      de: '"fahren" ist ein Verb der Ortsveränderung und bildet das Perfekt mit dem Hilfsverb "sein". Plural für "wir" ist "sind".',
      th: '"fahren" (ขับรถ/เดินทาง) เป็นคำกริยาที่แสดงการเคลื่อนย้ายเปลี่ยนสถานที่ ซึ่งรูปอดีต Perfekt จะต้องใช้กริยาช่วยกลุ่ม "sein" ผันตามประธาน "wir" จะได้ "sind"',
      en: '"fahren" is a verb of motion/direction change and forms its present perfect (Perfekt) with the auxiliary verb "sein". The plural for "wir" is "sind".'
    }
  },
  {
    id: 'a2-14',
    level: 'A2',
    type: 'grammar',
    question: 'Das ist das Auto ___ Vaters.',
    options: ['meines', 'meinem', 'meinen', 'mein'],
    correctIndex: 0,
    translations: {
      de: 'Das ist das Auto meines Vaters.',
      th: 'นี่คือรถยนต์ของพ่อฉัน',
      en: 'This is my father\'s car.'
    },
    explanation: {
      de: '"Vater" ist maskulin (der Vater). Das Possessivpronomen im Genitiv Maskulinum Singular lautet "meines" (+ Endung "-s" am Nomen).',
      th: '"Vater" เป็นเพศชาย (der Vater) เมื่อแสดงความเป็นเจ้าของในรูปสัมพันธการก Genitiv จะผันสรรพนามแสดงความเป็นเจ้าของเป็น "meines" และเติม "-s" ท้ายคำนามเป็น "Vaters"',
      en: '"Vater" is masculine (der Vater). The possessive pronoun in the genitive masculine singular is "meines" (and the noun gets the "-s" ending: "Vaters").'
    }
  },
  {
    id: 'a2-15',
    level: 'A2',
    type: 'grammar',
    question: 'Kannst du mir sagen, ___ du morgen kommst?',
    options: ['ob', 'dass', 'weil', 'wenn'],
    correctIndex: 0,
    translations: {
      de: 'Kannst du mir sagen, ob du morgen kommst?',
      th: 'ช่วยบอกฉันหน่อยได้ไหมว่า พรุ่งนี้เธอจะมาหรือเปล่า?',
      en: 'Can you tell me whether you are coming tomorrow?'
    },
    explanation: {
      de: '"ob" leitet eine indirekte Ja/Nein-Frage ein (ob oder ob nicht).',
      th: '"ob" (หรือไม่ / หรือเปล่า) ใช้เชื่อมประโยคคำถามทางอ้อมที่มาจากคำถามประเภทตอบรับ/ปฏิเสธ (Ja/Nein-Frage)',
      en: '"ob" (whether/if) is a conjunction used to introduce indirect yes/no questions.'
    }
  },
  {
    id: 'a2-16',
    level: 'A2',
    type: 'grammar',
    question: 'Ich spreche mit einem ___ Freund.',
    options: ['alten', 'alter', 'altem', 'altes'],
    correctIndex: 0,
    translations: {
      de: 'Ich spreche mit einem alten Freund.',
      th: 'ฉันกำลังคุยกับเพื่อนเก่าคนหนึ่ง',
      en: 'I am speaking with an old friend.'
    },
    explanation: {
      de: 'Nach der Präposition "mit" steht der Dativ. "Freund" ist maskulin (mit einem). Bei gemischter Deklination im Dativ endet das Adjektiv immer auf "-en".',
      th: 'หลังคำบุพบท "mit" ต้องเป็นกรรม Dativ ซึ่ง "Freund" เป็นเพศชาย (mit einem...) ในการผันคุณศัพท์ตามหลังอาร์ทิเคิลไม่ชี้เฉพาะ (gemischte Deklination) รูป Dativ จะต้องลงท้ายด้วย "-en" เสมอเป็น "alten"',
      en: 'The preposition "mit" requires the dative case. "Freund" is masculine ("mit einem"). In mixed adjective declension, adjectives in the dative case always end in "-en".'
    }
  },
  {
    id: 'a2-17',
    level: 'A2',
    type: 'grammar',
    question: 'Ich möchte einen ___ Apfel essen.',
    options: ['roten', 'roter', 'rotes', 'rote'],
    correctIndex: 0,
    translations: {
      de: 'Ich möchte einen roten Apfel essen.',
      th: 'ฉันอยากกินแอปเปิ้ลสีแดงสักผลหนึ่ง',
      en: 'I would like to eat a red apple.'
    },
    explanation: {
      de: '"einen" zeigt den Akkusativ Maskulinum an (der Apfel). Bei gemischter Deklination im Akkusativ Maskulinum endet das Adjektiv auf "-en".',
      th: '"einen" ระบุว่าเป็นกรรม Akkusativ เพศชาย (der Apfel) ตามกฎการผันคุณศัพท์แบบผสม (gemischte Deklination) คำคุณศัพท์ที่ตามหลัง "einen" จะผันโดยการเติม "-en" จึงได้คำว่า "roten"',
      en: '"einen" indicates the masculine accusative (from "der Apfel"). In mixed adjective declension in the masculine accusative, the adjective ends in "-en" ("roten").'
    }
  },
  {
    id: 'a2-18',
    level: 'A2',
    type: 'grammar',
    question: 'Gestern war ich krank. Ich ___ nicht arbeiten.',
    options: ['konnte', 'durfte', 'musste', 'wollte'],
    correctIndex: 0,
    translations: {
      de: 'Gestern war ich krank. Ich konnte nicht arbeiten.',
      th: 'เมื่อวานนี้ฉันป่วย ฉันเลยไม่สามารถไปทำงานได้',
      en: 'Yesterday I was sick. I could not work.'
    },
    explanation: {
      de: 'Das Modalverb "können" beschreibt Fähigkeit/Möglichkeit. Im Präteritum für "ich" lautet die Form "konnte".',
      th: 'กริยาช่วย Modalverb "können" (สามารถ) แสดงความสามารถหรือความเป็นไปได้ ในรูปอดีตแบบเขียน Präteritum สำหรับประธาน "ich" คือ "konnte" (ไม่สามารถเพราะสภาพร่างกายไม่เอื้อ)',
      en: 'The modal verb "können" describes ability or capability. In the simple past (Präteritum) for "ich", the correct form is "konnte".'
    }
  },
  {
    id: 'a2-19',
    level: 'A2',
    type: 'grammar',
    question: 'Nach ___ Schule gehe ich nach Hause.',
    options: ['der', 'die', 'dem', 'den'],
    correctIndex: 0,
    translations: {
      de: 'Nach der Schule gehe ich nach Hause.',
      th: 'หลังเลิกเรียนฉันก็กลับบ้านเลย',
      en: 'After school I go home.'
    },
    explanation: {
      de: 'Die Präposition "nach" verlangt immer den Dativ. "Schule" ist feminin (die Schule), wird im Dativ zu "der".',
      th: 'คำบุพบท "nach" (หลังจาก) บังคับใช้กรรม Dativ เสมอ คำว่า "Schule" เป็นเพศหญิง (die Schule) เมื่อเปลี่ยนเป็นรูป Dativ จึงได้ "der Schule"',
      en: 'The preposition "nach" always requires the dative case. "Schule" is feminine (die Schule), which changes to "der" in the dative.'
    }
  },
  {
    id: 'a2-20',
    level: 'A2',
    type: 'vocabulary',
    question: 'Kommst du ___? - Ja, ich komme gleich rein.',
    options: ['rein', 'raus', 'rüber', 'hin'],
    correctIndex: 0,
    translations: {
      de: 'Kommst du rein? - Ja, ich komme gleich rein.',
      th: 'เธอจะเข้ามาข้างในไหม? - ใช่ เดี๋ยวฉันกำลังจะเข้าไปแล้ว',
      en: 'Are you coming in? - Yes, I am coming in shortly.'
    },
    explanation: {
      de: '"reinkommen" bedeutet hineinkommen (zu dem Sprecher hin, der sich bereits drinnen befindet).',
      th: '"rein" (ย่อมาจาก herein) หมายถึง เข้ามาด้านใน โดยผู้พูดอยู่ข้างในอยู่แล้วและชวนให้อีกคนเดินเข้ามาหาตัวผู้พูด',
      en: '"rein" (short for "herein") means inside (towards the speaker who is already inside).'
    }
  },
  {
    id: 'a2-21',
    level: 'A2',
    type: 'vocabulary',
    question: 'Ein Arzt arbeitet im ___.',
    options: ['Krankenhaus', 'Schule', 'Büro', 'Fabrik'],
    correctIndex: 0,
    translations: {
      de: 'Ein Arzt arbeitet im Krankenhaus.',
      th: 'คุณหมอท่านหนึ่งทำงานอยู่ในโรงพยาบาล',
      en: 'A doctor works in the hospital.'
    },
    explanation: {
      de: '"Arzt" (Mediziner) arbeitet typischerweise im "Krankenhaus" (Hospital).',
      th: '"Arzt" (นายแพทย์) ทำงานเป็นหลักในสถานที่รักษาพยาบาลซึ่งเรียกว่า "Krankenhaus" (โรงพยาบาล)',
      en: 'A "Arzt" (medical doctor) typically works in a "Krankenhaus" (hospital).'
    }
  },
  {
    id: 'a2-22',
    level: 'A2',
    type: 'grammar',
    question: 'Hast du den Brief schon ___?',
    options: ['geschrieben', 'schreiben', 'geschreibt', 'schrieb'],
    correctIndex: 0,
    translations: {
      de: 'Hast du den Brief schon geschrieben?',
      th: 'เธอเขียนจดหมายฉบับนั้นเสร็จหรือยัง?',
      en: 'Have you already written the letter?'
    },
    explanation: {
      de: 'Das Partizip II von "schreiben" (starkes Verb) ist unregelmäßig: "geschrieben".',
      th: 'รูปกริยาช่อง 3 (Partizip II) ของกริยา "schreiben" (เขียน) ซึ่งเป็นกริยากลุ่มแข็ง (starkes Verb) จะเปลี่ยนรูปเป็น "geschrieben"',
      en: 'The Partizip II (past participle) of the strong verb "schreiben" is irregular: "geschrieben".'
    }
  },
  {
    id: 'a2-23',
    level: 'A2',
    type: 'grammar',
    question: '___ es regnet, bleibe ich zu Hause.',
    options: ['Wenn', 'Als', 'Weil', 'Dass'],
    correctIndex: 0,
    translations: {
      de: 'Wenn es regnet, bleibe ich zu Hause.',
      th: 'ถ้าฝนตก ฉันจะอยู่บ้านนะ',
      en: 'If it rains, I will stay at home.'
    },
    explanation: {
      de: '"Wenn" leitet einen Konditionalsatz (Bedingung) oder einen wiederkehrenden Temporalsatz in der Gegenwart/Zukunft ein.',
      th: '"Wenn" (ถ้า/เมื่อใดที่) ใช้เพื่อเชื่อมประโยคเงื่อนไข (Konditionalsatz) หรือประโยคบอกความสัมพันธ์ทางเวลาในปัจจุบัน/อนาคตที่เกิดขึ้นซ้ำๆ',
      en: '"Wenn" introduces conditional clauses (if) or recurring temporal clauses in the present/future (when).'
    }
  },
  {
    id: 'a2-24',
    level: 'A2',
    type: 'grammar',
    question: 'Das Buch gefällt ___ sehr gut.',
    options: ['mir', 'mich', 'ich', 'mein'],
    correctIndex: 0,
    translations: {
      de: 'Das Buch gefällt mir sehr gut.',
      th: 'ฉันชอบหนังสือเล่มนี้มากๆ (หนังสือเล่มนี้ถูกใจฉันมาก)',
      en: 'I like this book very much.'
    },
    explanation: {
      de: 'Das Verb "gefallen" verlangt immer den Dativ des Empfängers. Dativ von "ich" ist "mir".',
      th: 'คำกริยา "gefallen" (ถูกใจ/ชอบ) บังคับใช้คู่กับกรรม Dativ ของผู้ที่รู้สึกชอบ สรรพนาม Dativ ของประธาน "ich" คือ "mir"',
      en: 'The verb "gefallen" (to please/appeal to) always requires the dative case for the person enjoying it. The dative of "ich" is "mir".'
    }
  },
  {
    id: 'a2-25',
    level: 'A2',
    type: 'grammar',
    question: 'Kannst du ___ bitte helfen?',
    options: ['mir', 'mich', 'ich', 'mein'],
    correctIndex: 0,
    translations: {
      de: 'Kannst du mir bitte helfen?',
      th: 'เธอช่วยฉันหน่อยได้ไหม?',
      en: 'Can you please help me?'
    },
    explanation: {
      de: 'Das Verb "helfen" verlangt das Dativobjekt. Dativ von "ich" ist "mir".',
      th: 'คำกริยา "helfen" (ช่วยเหลือ) บังคับกรรมรอง Dativ เสมอ สรรพนามในรูป Dativ ของประธาน "ich" คือ "mir"',
      en: 'The verb "helfen" (to help) always requires a dative object. The dative of "ich" is "mir".'
    }
  },
  {
    id: 'a2-26',
    level: 'A2',
    type: 'vocabulary',
    question: 'Ich habe starke Kopfschmerzen. Ich brauche eine ___ gegen die Schmerzen.',
    options: ['Tablette', 'Rechnung', 'Quittung', 'Gabel'],
    correctIndex: 0,
    translations: {
      de: 'Ich habe starke Kopfschmerzen. Ich brauche eine Tablette gegen die Schmerzen.',
      th: 'ฉันปวดหัวรุนแรงมาก ฉันต้องการยาสักเม็ดเพื่อแก้ปวด',
      en: 'I have a severe headache. I need a tablet (pill) for the pain.'
    },
    explanation: {
      de: 'Gegen Schmerzen nimmt man eine "Tablette" (Medikament). "Rechnung" (Zahlung), "Quittung" (Beleg) und "Gabel" (Besteck) sind hier völlig unpassend.',
      th: '"Tablette" หมายถึง ยาเม็ด ซึ่งใช้กินเพื่อบรรเทาอาการปวดหัว ส่วน "Rechnung" (บิลใบแจ้งหนี้), "Quittung" (ใบเสร็จ) และ "Gabel" (ส้อม) ไม่เกี่ยวกับอาการเจ็บป่วย',
      en: 'To relieve pain, one takes a "Tablette" (pill/tablet). "Rechnung" (bill), "Quittung" (receipt), and "Gabel" (fork) are completely unrelated contextually.'
    }
  },
  {
    id: 'a2-27',
    level: 'A2',
    type: 'vocabulary',
    question: 'Mein Kollege hat mir eine wichtige E-Mail mit einem ___ im PDF-Format geschickt.',
    options: ['Anhang', 'Anruf', 'Ausflug', 'Anzug'],
    correctIndex: 0,
    translations: {
      de: 'Mein Kollege hat mir eine wichtige E-Mail mit einem Anhang im PDF-Format geschickt.',
      th: 'เพื่อนร่วมงานส่งอีเมลสำคัญพร้อมไฟล์แนบที่เป็นฟอร์แมต PDF มาให้ฉัน',
      en: 'My colleague sent me an important email with an attachment in PDF format.'
    },
    explanation: {
      de: 'Ein Dokument bei einer E-Mail nennt man "Anhang". "Anruf" ist ein Telefonat, "Anzug" ist Kleidung.',
      th: '"Anhang" หมายถึง ไฟล์แนบ (attachment) ที่ส่งมากับอีเมล ส่วน "Anruf" (การโทรศัพท์), "Ausflug" (การทัศนศึกษา) และ "Anzug" (ชุดสูท) ไม่เข้ากับบริบทนี้',
      en: 'A document sent with an email is called an "Anhang" (attachment). "Anruf" is a phone call, and "Anzug" is a suit.'
    }
  },
  {
    id: 'a2-28',
    level: 'A2',
    type: 'vocabulary',
    question: 'Entschuldigung, ich habe mich ___. Wie komme ich zum Dom?',
    options: ['verlaufen', 'verspätet', 'verabredet', 'vergessen'],
    correctIndex: 0,
    translations: {
      de: 'Entschuldigung, ich habe mich verlaufen. Wie komme ich zum Dom?',
      th: 'ขอโทษนะครับ พอดีฉันเดินหลงทาง ไม่ทราบว่าไปยังไงถึงจะไปวิหาร (Dom) ได้ครับ?',
      en: 'Excuse me, I have lost my way. How do I get to the cathedral?'
    },
    explanation: {
      de: '"sich verlaufen" bedeutet, die Orientierung beim Gehen verloren zu haben. "sich verspäten" bedeutet, zu spät zu kommen.',
      th: '"sich verlaufen" แปลว่า เดินหลงทาง (lose one\'s way while walking) ซึ่งเป็นคำกริยาสะท้อน (reflexive verb) ส่วน "sich verspäten" แปลว่า มาสาย',
      en: '"sich verlaufen" means to get lost/lose one\'s way while walking. "sich verspäten" means to be late.'
    }
  },
  {
    id: 'a2-29',
    level: 'A2',
    type: 'vocabulary',
    question: 'Können Sie mir diesen Fünfzig-Euro-Schein in kleinere Scheine ___?',
    options: ['wechseln', 'zahlen', 'kaufen', 'überweisen'],
    correctIndex: 0,
    translations: {
      de: 'Können Sie mir diesen Fünfzig-Euro-Schein in kleinere Scheine wechseln?',
      th: 'คุณช่วยแลกธนบัตรใบละ 50 ยูโรนี้เป็นใบย่อยๆ ให้ฉันหน่อยได้ไหมคะ?',
      en: 'Could you change this fifty-euro note into smaller bills for me?'
    },
    explanation: {
      de: 'Geld in andere Einheiten tauschen nennt man "wechseln". "zahlen" heißt bezahlen, "überweisen" bezieht sich auf Banküberweisungen.',
      th: 'การนำเงินธนบัตรใหญ่ไปแลกเป็นเงินย่อยเรียกว่า "wechseln" (แลกเงิน) ส่วน "zahlen" แปลว่า จ่ายเงิน และ "überweisen" แปลว่า โอนเงินทางธนาคาร',
      en: 'Exchanging money for different denominations is called "wechseln" (to exchange/change). "zahlen" means to pay, and "überweisen" means to bank-transfer.'
    }
  },
  {
    id: 'a2-31',
    level: 'A2',
    type: 'vocabulary',
    question: 'Wir gehen heute ins Restaurant. Ich habe großen ___ und esse sehr gern Schnitzel.',
    options: ['Hunger', 'Durst', 'Stress', 'Mut'],
    correctIndex: 0,
    translations: {
      de: 'Wir gehen heute ins Restaurant. Ich habe großen Hunger und esse sehr gern Schnitzel.',
      th: 'วันนี้เราไปร้านอาหาร ฉันหิวมากและชอบกินชนิตเซลมาก',
      en: 'We are going to a restaurant today. I am very hungry and love to eat Schnitzel.'
    },
    explanation: {
      de: '"Hunger haben" bedeutet hungrig sein. Wenn man ins Restaurant geht, hat man Hunger (Appetit auf Essen). "Durst" wäre Durst auf ein Getränk, passt hier aber nicht zum Kontext des Essens.',
      th: '"Hunger haben" แปลว่า รู้สึกหิว เมื่อไปร้านอาหาร เราจะมี Hunger (ความหิว) ส่วน "Durst" แปลว่า กระหายน้ำ ซึ่งไม่ตรงกับบริบทของการกิน',
      en: '"Hunger haben" means to be hungry. When going to a restaurant, one has Hunger (appetite). "Durst" means thirst for a drink, which does not match the context of eating.'
    }
  },
  {
    id: 'a2-32',
    level: 'A2',
    type: 'vocabulary',
    question: 'Ich fahre jeden Tag mit der ___ zur Arbeit. Sie fährt unter der Erde.',
    options: ['U-Bahn', 'Straßenbahn', 'S-Bahn', 'Seilbahn'],
    correctIndex: 0,
    translations: {
      de: 'Ich fahre jeden Tag mit der U-Bahn zur Arbeit. Sie fährt unter der Erde.',
      th: 'ฉันนั่งรถไฟใต้ดินไปทำงานทุกวัน มันวิ่งใต้ดิน',
      en: 'I ride the underground metro to work every day. It runs underground.'
    },
    explanation: {
      de: '"U-Bahn" steht für Untergrundbahn, die buchstäblich unter der Erde fährt. "Straßenbahn" fährt auf der Straße, "S-Bahn" fährt meistens oberirdisch, und "Seilbahn" ist eine Gondelbahn.',
      th: '"U-Bahn" (รถไฟใต้ดิน) ย่อมาจาก Untergrundbahn ซึ่งวิ่งใต้ดินตามตัวอักษร ส่วน "Straßenbahn" วิ่งบนถนน "S-Bahn" วิ่งบนพื้นดิน และ "Seilbahn" คือกระเช้าไฟฟ้า',
      en: '"U-Bahn" (underground railway) literally runs under the earth. "Straßenbahn" is a tram on the street, "S-Bahn" mostly runs above ground, and "Seilbahn" is a cable car.'
    }
  },
  {
    id: 'a2-33',
    level: 'A2',
    type: 'vocabulary',
    question: 'Diese Jacke gefällt mir sehr, aber sie ist mir ___ teuer. Ich kaufe sie nicht.',
    options: ['zu', 'sehr', 'so', 'gar'],
    correctIndex: 0,
    translations: {
      de: 'Diese Jacke gefällt mir sehr, aber sie ist mir zu teuer. Ich kaufe sie nicht.',
      th: 'ฉันชอบแจ็คเก็ตตัวนี้มาก แต่มันแพงเกินไปสำหรับฉัน ฉันจะไม่ซื้อ',
      en: 'I really like this jacket, but it is too expensive for me. I will not buy it.'
    },
    explanation: {
      de: '"zu + Adjektiv" bedeutet "too + adjective" auf Englisch. "zu teuer" = too expensive. "sehr teuer" würde nur "very expensive" bedeuten, ohne die negative Konsequenz auszudrücken.',
      th: '"zu + คำคุณศัพท์" แปลว่า "...เกินไป" ในภาษาไทย "zu teuer" = แพงเกินไป ส่วน "sehr teuer" แปลว่า แพงมาก โดยไม่ได้แสดงว่าเกินกว่าที่รับได้',
      en: '"zu + adjective" means "too + adjective". "zu teuer" = too expensive. "sehr teuer" only means "very expensive" without implying the negative consequence of not buying.'
    }
  },
  {
    id: 'a2-34',
    level: 'A2',
    type: 'vocabulary',
    question: 'Im ___ fallen die Blätter von den Bäumen und es wird kälter.',
    options: ['Herbst', 'Frühling', 'Sommer', 'Winter'],
    correctIndex: 0,
    translations: {
      de: 'Im Herbst fallen die Blätter von den Bäumen und es wird kälter.',
      th: 'ในฤดูใบไม้ร่วงใบไม้ร่วงจากต้นไม้และอากาศเย็นลง',
      en: 'In autumn the leaves fall from the trees and it gets colder.'
    },
    explanation: {
      de: '"Herbst" ist die Jahreszeit, in der die Blätter fallen (September bis November). "Frühling" ist die Jahreszeit der Blüten, "Sommer" ist die heißeste Zeit, "Winter" hat keine Blätter mehr.',
      th: '"Herbst" (ฤดูใบไม้ร่วง) คือฤดูที่ใบไม้ร่วง (กันยายน-พฤศจิกายน) ส่วน "Frühling" คือฤดูดอกไม้บาน "Sommer" คือฤดูร้อน และ "Winter" คือฤดูหนาวซึ่งไม่มีใบไม้แล้ว',
      en: '"Herbst" (autumn) is the season when leaves fall (September to November). "Frühling" is spring with blossoms, "Sommer" is the hottest season, and "Winter" has no leaves left.'
    }
  },
  {
    id: 'a2-35',
    level: 'A2',
    type: 'vocabulary',
    question: 'Das Café ist ___ dem Supermarkt – sie sind direkt nebeneinander.',
    options: ['neben', 'unter', 'über', 'hinter'],
    correctIndex: 0,
    translations: {
      de: 'Das Café ist neben dem Supermarkt – sie sind direkt nebeneinander.',
      th: 'คาเฟ่อยู่ติดกับซูเปอร์มาร์เก็ต พวกมันอยู่ชิดกัน',
      en: 'The café is next to the supermarket – they are right next to each other.'
    },
    explanation: {
      de: '"neben" bedeutet "next to" und beschreibt eine horizontale, seitliche Position. Es ist eine Wechselpräposition, die hier mit Dativ verwendet wird ("neben dem Supermarkt"). "nebeneinander" im Satz bestätigt die Bedeutung.',
      th: '"neben" แปลว่า อยู่ข้างๆ หรือ ติดกัน ใช้บอกตำแหน่งแนวราบด้านข้าง เป็นคำบุพบทสลับ (Wechselpräposition) ที่ใช้กับ Dativ ในที่นี้ว่า "neben dem Supermarkt"',
      en: '"neben" means "next to" and describes a horizontal, lateral position. It is a two-way preposition used here with the Dative case ("neben dem Supermarkt"). "nebeneinander" in the sentence confirms the meaning.'
    }
  },
  {
    id: 'a2-30',
    level: 'A2',
    type: 'vocabulary',
    question: 'Unsere Wohnung hat einen großen ___, auf dem wir im Sommer frühstücken können.',
    options: ['Balkon', 'Flur', 'Keller', 'Aufzug'],
    correctIndex: 0,
    translations: {
      de: 'Unsere Wohnung hat einen großen Balkon, auf dem wir im Sommer frühstücken können.',
      th: 'อพาร์ตเมนต์ของพวกเรามีระเบียงขนาดใหญ่ที่พวกเราสามารถนั่งกินมื้อเช้าได้ในฤดูหนาวหรือฤดูร้อน',
      en: 'Our apartment has a big balcony where we can have breakfast in the summer.'
    },
    explanation: {
      de: 'Ein "Balkon" ist eine Plattform außerhalb der Wohnung. Ein "Flur" ist der Korridor im Inneren, ein "Keller" ist unter der Erde.',
      th: '"Balkon" (ระเบียง) อยู่ภายนอกอาคาร จึงสามารถนั่งทานอาหารข้างนอกได้ ส่วน "Flur" (โถงทางเดิน) หรือ "Keller" (ห้องใต้ดิน) หรือ "Aufzug" (ลิฟต์) ไม่สามารถใช้นั่งกินข้าวรับลมร้อนได้',
      en: 'A "Balkon" (balcony) is an outdoor platform where you can sit. A "Flur" is an indoor corridor, and a "Keller" is a basement.'
    }
  },

  // ==================== B1 QUESTIONS (27-75) ====================
  {
    id: 'b1-1',
    level: 'B1',
    type: 'grammar',
    question: 'Der Brief ___ gestern vom Postboten gebracht.',
    options: ['wurde', 'ist', 'war', 'wird'],
    correctIndex: 0,
    translations: {
      de: 'Der Brief wurde gestern vom Postboten gebracht.',
      th: 'จดหมายฉบับนั้นถูกบุรุษไปรษณีย์นำมาส่งเมื่อวานนี้',
      en: 'The letter was brought by the mailman yesterday.'
    },
    explanation: {
      de: 'Vorgangspassiv im Präteritum: "werden" im Präteritum ("wurde") + Partizip II ("gebracht").',
      th: 'ประโยคถูกกระทำ (Passiv) ในรูปอดีต Präteritum: โครงสร้างมาจาก "werden" ผันในรูปอดีต ("wurde" สำหรับเอกพจน์) + กริยาช่อง 3 (Partizip II - "gebracht")',
      en: 'Passive voice in the simple past (Vorgangspassiv Präteritum): formed with "werden" in the past tense ("wurde") + Partizip II ("gebracht").'
    }
  },
  {
    id: 'b1-2',
    level: 'B1',
    type: 'grammar',
    question: 'Deutsch ___ in vielen Ländern gesprochen.',
    options: ['wird', 'ist', 'hat', 'wurde'],
    correctIndex: 0,
    translations: {
      de: 'Deutsch wird in vielen Ländern gesprochen.',
      th: 'ภาษาเยอรมันถูกพูดในหลายประเทศ',
      en: 'German is spoken in many countries.'
    },
    explanation: {
      de: 'Vorgangspassiv im Präsens (Gegenwart): "werden" im Präsens ("wird") + Partizip II ("gesprochen").',
      th: 'ประโยคถูกกระทำในรูปปัจจุบัน (Passiv Präsens): โครงสร้างมาจาก "werden" ผันปัจจุบัน ("wird" ตามประธานเอกพจน์) + กริยาช่อง 3 (Partizip II - "gesprochen")',
      en: 'Passive voice in the present tense (Vorgangspassiv Präsens): formed with "werden" in the present tense ("wird") + Partizip II ("gesprochen").'
    }
  },
  {
    id: 'b1-3',
    level: 'B1',
    type: 'grammar',
    question: 'Die Kinder, ___ ich geholfen habe, sind dankbar.',
    options: ['denen', 'die', 'der', 'den'],
    correctIndex: 0,
    translations: {
      de: 'Die Kinder, denen ich geholfen habe, sind dankbar.',
      th: 'เด็กๆ ที่ฉันเคยให้ความช่วยเหลือ รู้สึกซาบซึ้งใจมาก',
      en: 'The children whom I helped are grateful.'
    },
    explanation: {
      de: 'Relativpronomen im Dativ Plural lautet "denen", weil "helfen" den Dativ regiert.',
      th: 'สรรพนามเชื่อมความขยาย (Relativpronomen) ในรูป Dativ พหูพจน์ คือ "denen" เนื่องจากกริยาในประโยคย่อยคือ "helfen" บังคับใช้กรรม Dativ',
      en: 'The relative pronoun in the dative plural is "denen" because the verb "helfen" in the sub-clause requires the dative case.'
    }
  },
  {
    id: 'b1-4',
    level: 'B1',
    type: 'grammar',
    question: 'Ich gehe spazieren, ___ es regnet.',
    options: ['obwohl', 'weil', 'trotzdem', 'während'],
    correctIndex: 0,
    translations: {
      de: 'Ich gehe spazieren, obwohl es regnet.',
      th: 'ฉันออกไปเดินเล่น ทั้งๆ ที่ฝนตกอยู่',
      en: 'I am going for a walk even though it is raining.'
    },
    explanation: {
      de: '"obwohl" leitet einen konzessiven Nebensatz ein (Verb am Ende: "regnet"). "trotzdem" ist ein Adverb und steht im Hauptsatz.',
      th: '"obwohl" (ทั้งๆ ที่ / แม้ว่า) เป็นคำเชื่อมประโยคย่อยขัดแย้ง (konzessiver Nebensatz) บังคับกริยาไปอยู่ท้ายสุด ("regnet") ส่วน "trotzdem" จะใช้ขึ้นต้นประโยคหลัก Hauptsatz',
      en: '"obwohl" (although/even though) introduces a concessive subordinate clause (pushing the verb to the end: "regnet"). "trotzdem" is a sentence connector (adverb) used in main clauses.'
    }
  },
  {
    id: 'b1-5',
    level: 'B1',
    type: 'grammar',
    question: 'Es regnet. ___ gehe ich spazieren.',
    options: ['Trotzdem', 'Obwohl', 'Weil', 'Deshalb'],
    correctIndex: 0,
    translations: {
      de: 'Es regnet. Trotzdem gehe ich spazieren.',
      th: 'ฝนกำลังตก ทว่าอย่างไรก็ตามฉันก็ยังจะออกไปเดินเล่น',
      en: 'It is raining. Nevertheless, I am going for a walk.'
    },
    explanation: {
      de: '"Trotzdem" verbindet zwei Hauptsätze konzessiv und steht meistens auf Position 1 (danach direkt das Verb: "gehe").',
      th: '"Trotzdem" (อย่างไรก็ตาม/ทว่า) เป็นคำคุณศัพท์เชื่อมประโยคหลักขัดแย้ง โดยปกติอยู่ตำแหน่งที่ 1 และตามด้วยกริยาผันโดยตรงทันที ("gehe" อยู่ตำแหน่งที่ 2)',
      en: '"Trotzdem" (nevertheless/anyway) is an adverbial connector that links main clauses and typically takes position 1, followed directly by the conjugated verb ("gehe").'
    }
  },
  {
    id: 'b1-6',
    level: 'B1',
    type: 'grammar',
    question: 'Ich lerne fleißig, ___ ich die Prüfung bestehe.',
    options: ['damit', 'um zu', 'weil', 'dass'],
    correctIndex: 0,
    translations: {
      de: 'Ich lerne fleißig, damit ich die Prüfung bestehe.',
      th: 'ฉันเรียนอย่างขยันขันแข็ง เพื่อที่ว่าฉันจะได้สอบผ่าน',
      en: 'I study hard so that I pass the exam.'
    },
    explanation: {
      de: '"damit" leitet einen Finalsatz ein, wenn das Subjekt im Haupt- und Nebensatz unterschiedlich sein kann oder betont wird. Verb steht am Ende.',
      th: '"damit" (เพื่อที่ว่า) เป็นคำเชื่อมประโยคบอกเป้าหมาย (Finalsatz) แบบมีประธานระบุชัดเจน ส่งกริยาไปอยู่ตำแหน่งท้ายสุดของประโยคย่อย ("bestehe")',
      en: '"damit" (so that/in order that) introduces a final/purpose clause (Finalsatz) where the sub-clause has its own explicit subject, pushing the verb to the end.'
    }
  },
  {
    id: 'b1-7',
    level: 'B1',
    type: 'grammar',
    question: 'Ich lerne Deutsch, ___ in Deutschland zu arbeiten.',
    options: ['um', 'damit', 'ohne', 'anstatt'],
    correctIndex: 0,
    translations: {
      de: 'Ich lerne Deutsch, um in Deutschland zu arbeiten.',
      th: 'ฉันเรียนภาษาเยอรมัน เพื่อที่จะทำงานที่ประเทศเยอรมนี',
      en: 'I am learning German in order to work in Germany.'
    },
    explanation: {
      de: 'Die Struktur "um ... zu + Infinitiv" drückt eine Absicht aus, wenn das Subjekt in beiden Satzteilen identisch ist.',
      th: 'โครงสร้างแบบ "um ... zu + คำกริยารูปดิบ (Infinitiv)" ใช้แสดงวัตถุประสงค์ (เพื่อที่จะ) เมื่อประธานของทั้งประโยคหลักและประโยคย่อยเป็นคนเดียวกัน (ฉันเรียน และ ฉันทำงาน)',
      en: 'The construction "um ... zu + infinitive" expresses a purpose or intention when the subject of both clauses is identical.'
    }
  },
  {
    id: 'b1-8',
    level: 'B1',
    type: 'grammar',
    question: 'Er ist gegangen, ___ Auf Wiedersehen zu sagen.',
    options: ['ohne', 'um', 'anstatt', 'zu'],
    correctIndex: 0,
    translations: {
      de: 'Er ist gegangen, ohne Auf Wiedersehen zu sagen.',
      th: 'เขาเดินจากไปโดยไม่ได้กล่าวคำอำลาเลยสักคำ',
      en: 'He left without saying goodbye.'
    },
    explanation: {
      de: 'Die Struktur "ohne ... zu + Infinitiv" bedeutet, dass eine erwartete Handlung nicht stattfindet.',
      th: 'โครงสร้าง "ohne ... zu + Infinitiv" หมายถึง "โดยปราศจากการทำ..." เป็นการบอกว่าเหตุการณ์ที่ควรจะเกิดขึ้นนั้นไม่ได้เกิดขึ้น (จากไปโดยไม่ได้ลา)',
      en: 'The construction "ohne ... zu + infinitive" translates to "without doing [something]", indicating that an expected action did not occur.'
    }
  },
  {
    id: 'b1-9',
    level: 'B1',
    type: 'grammar',
    question: '___ des schlechten Wetters sind wir zu Hause geblieben.',
    options: ['Wegen', 'Trotz', 'Während', 'Dank'],
    correctIndex: 0,
    translations: {
      de: 'Wegen des schlechten Wetters sind wir zu Hause geblieben.',
      th: 'เนื่องจากสภาพอากาศที่แย่ พวกเราจึงเลือกที่จะอยู่บ้าน',
      en: 'Because of the bad weather, we stayed at home.'
    },
    explanation: {
      de: '"Wegen" verlangt den Genitiv und drückt einen Grund aus (Kausalsatz). "schlechtes Wetter" wird im Genitiv zu "des schlechten Wetters".',
      th: '"Wegen" (เนื่องจาก/เพราะว่า) บังคับใช้คู่กับกรรมสัมพันธการก Genitiv ใช้เพื่อบอกเหตุผล โดยคำนามเพศกลาง das Wetter เปลี่ยนเป็น "des schlechten Wetters"',
      en: '"Wegen" (because of) requires the genitive case and expresses a cause. "schlechtes Wetter" becomes "des schlechten Wetters" in the genitive.'
    }
  },
  {
    id: 'b1-10',
    level: 'B1',
    type: 'grammar',
    question: 'Wenn ich reich wäre, ___ ich ein großes Haus kaufen.',
    options: ['würde', 'werde', 'wollte', 'könnte'],
    correctIndex: 0,
    translations: {
      de: 'Wenn ich reich wäre, würde ich ein großes Haus kaufen.',
      th: 'ถ้าฉันรวย ฉันจะซื้อบ้านหลังใหญ่โตสักหลัง',
      en: 'If I were rich, I would buy a big house.'
    },
    explanation: {
      de: 'Konjunktiv II der Gegenwart drückt Irrealität aus: "würde" + Infinitiv ("kaufen").',
      th: 'ไวยากรณ์สมมติขัดแย้งความจริงในปัจจุบัน (Konjunktiv II) เพื่อแสดงความปรารถนาที่เป็นไปไม่ได้ ณ ตอนนี้: โครงสร้างมาจาก "würde" + กริยารูปดิบ Infinitiv ไว้ท้ายสุด ("kaufen")',
      en: 'The Konjunktiv II (subjunctive II) of the present tense expresses an unreal condition or hypothetical situation: formed with "würde" + infinitive ("kaufen").'
    }
  },
  {
    id: 'b1-11',
    level: 'B1',
    type: 'grammar',
    question: 'Ich ___ gern ein Auto, aber ich habe kein Geld.',
    options: ['hätte', 'wäre', 'würde', 'habe'],
    correctIndex: 0,
    translations: {
      de: 'Ich hätte gern ein Auto, aber ich habe kein Geld.',
      th: 'ฉันอยากจะมีรถสักคันจัง แต่ไม่มีเงินเลย',
      en: 'I would like to have a car, but I have no money.'
    },
    explanation: {
      de: 'Der Konjunktiv II von "haben" lautet für "ich" -> "hätte". Es drückt einen unerfüllten Wunsch aus.',
      th: 'รูปสมมติขัดความจริง Konjunktiv II ของกริยา "haben" สำหรับประธาน "ich" คือ "hätte" (อยากจะมีในจินตนาการ) มักใช้คู่กับ "gern" แสดงความปรารถนา',
      en: 'The Konjunktiv II of the verb "haben" for "ich" is "hätte". It expresses an unfulfilled present wish.'
    }
  },
  {
    id: 'b1-12',
    level: 'B1',
    type: 'grammar',
    question: '___ ich ein Kind war, habe ich in einem Dorf gewohnt.',
    options: ['Als', 'Wenn', 'Wann', 'Während'],
    correctIndex: 0,
    translations: {
      de: 'Als ich ein Kind war, habe ich in einem Dorf gewohnt.',
      th: 'เมื่อตอนที่ฉันยังเป็นเด็ก ฉันอาศัยอยู่ในหมู่บ้านชนบทแห่งหนึ่ง',
      en: 'When I was a child, I lived in a village.'
    },
    explanation: {
      de: '"Als" wird für einmalige Ereignisse oder Zeiträume in der Vergangenheit verwendet. "Wenn" benutzt man für wiederkehrende Ereignisse in Gegenwart/Vergangenheit.',
      th: '"Als" (เมื่อ/ตอนที่) ใช้บอกเวลาสำหรับเหตุการณ์หรือช่วงเวลาที่เกิดขึ้น "เพียงครั้งเดียวเสร็จสิ้นไปแล้วในอดีต" (เช่น ตอนเป็นเด็ก) ส่วน "wenn" จะใช้กับเหตุการณ์ที่เกิดขึ้นซ้ำๆ หรือเป็นเงื่อนไข',
      en: '"Als" (when) is used for a single, completed event or period in the past. "Wenn" is used for recurring events in the present, future, or past.'
    }
  },
  {
    id: 'b1-13',
    level: 'B1',
    type: 'grammar',
    question: '___ ich koche, höre ich gerne Musik.',
    options: ['Während', 'Als', 'Wenn', 'Seitdem'],
    correctIndex: 0,
    translations: {
      de: 'Während ich koche, höre ich gerne Musik.',
      th: 'ในระหว่างที่ฉันทำอาหาร ฉันก็ชอบฟังเพลงไปด้วย',
      en: 'While I am cooking, I like to listen to music.'
    },
    explanation: {
      de: '"Während" drückt Gleichzeitigkeit von zwei Handlungen in einem Nebensatz aus.',
      th: '"Während" (ในขณะที่) ใช้เชื่อมประโยคย่อยเพื่อแสดงเหตุการณ์สองอย่างที่เกิดพร้อมๆ กันในเวลาเดียวกัน (ทำอาหาร และ ฟังเพลง)',
      en: '"Während" (while) is a temporal conjunction expressing the simultaneity of two actions.'
    }
  },
  {
    id: 'b1-14',
    level: 'B1',
    type: 'grammar',
    question: 'Morgen ___ wir nach Paris reisen.',
    options: ['werden', 'wollen', 'können', 'haben'],
    correctIndex: 0,
    translations: {
      de: 'Morgen werden wir nach Paris reisen.',
      th: 'พรุ่งนี้พวกเราจะเดินทางไปปารีส',
      en: 'Tomorrow we will travel to Paris.'
    },
    explanation: {
      de: 'Zukunft (Futur I) wird mit "werden" + Infinitiv am Satzende gebildet. Plural für "wir" ist "werden".',
      th: 'กาลอนาคต (Futur I) ประกอบไปด้วยกริยาช่วย "werden" ผันตามประธาน + กริยาหลักรูปไม่ผัน Infinitiv ไว้ท้ายประโยคสุด สำหรับประธาน "wir" จะผันได้เป็น "werden"',
      en: 'The future tense (Futur I) is formed using "werden" + infinitive at the end of the clause. The plural for "wir" is "werden".'
    }
  },
  {
    id: 'b1-15',
    level: 'B1',
    type: 'grammar',
    question: 'Das ist das Haus, ___ ich wohne.',
    options: ['in dem', 'wo', 'darin', 'in das'],
    correctIndex: 0,
    translations: {
      de: 'Das ist das Haus, in dem ich wohne.',
      th: 'นี่คือบ้านหลังที่ฉันอาศัยอยู่ข้างใน',
      en: 'This is the house in which I live.'
    },
    explanation: {
      de: 'Relativsatz mit Präposition: "wohnen in" verlangt den Dativ. "Haus" ist neutral (das), also "in dem".',
      th: 'ประโยคย่อยขยายนามที่ต้องใช้คำบุพบทร่วมด้วย: โครงสร้าง "wohnen in" บังคับใช้คู่กับกรรม Dativ โดยคำว่า Haus เป็นเพศกลาง das Haus ดังนั้นรูป Dativ จึงได้ "in dem"',
      en: 'Relative clause with a preposition: "wohnen in" requires the dative case. "Haus" is neuter (das Haus), resulting in "in dem" (in which).'
    }
  },
  {
    id: 'b1-16',
    level: 'B1',
    type: 'grammar',
    question: 'Ich denke oft ___ meine Familie.',
    options: ['an', 'über', 'auf', 'nach'],
    correctIndex: 0,
    translations: {
      de: 'Ich denke oft an meine Familie.',
      th: 'ฉันคิดถึงครอบครัวของฉันอยู่บ่อยครั้ง',
      en: 'I often think of my family.'
    },
    explanation: {
      de: 'Die feste Verbindung lautet "denken an" + Akkusativ. "meine Familie" ist feminin akkusativ.',
      th: 'โครงสร้างกริยาคู่บุพบทเฉพาะที่ต้องจำคือ "denken an" + กรรมตรง Akkusativ แปลว่า "คิดถึง/นึกถึง" โดย Familie เป็นเพศหญิงจึงคงรูป "meine Familie"',
      en: 'The fixed verb-preposition combination is "denken an" + accusative case. "meine Familie" is feminine accusative.'
    }
  },
  {
    id: 'b1-17',
    level: 'B1',
    type: 'grammar',
    question: '___ wartest du? - Auf den Bus.',
    options: ['Worauf', 'Auf was', 'Wovon', 'Was'],
    correctIndex: 0,
    translations: {
      de: 'Worauf wartest du? - Auf den Bus.',
      th: 'เธอกำลังรออะไรอยู่เหรอ? - รอรถประจำทางอยู่',
      en: 'What are you waiting for? - For the bus.'
    },
    explanation: {
      de: 'Bei Fragen nach Dingen mit Präpositionen bildet man ein "Wo(r)-" + Präposition. "warten auf" -> "worauf" (wegen Vokal r dazwischen).',
      th: 'สำหรับการตั้งคำถามถึงสิ่งไม่มีชีวิตที่ต้องใช้คู่กับบุพบท จะใช้โครงสร้าง "Wo(r)-" + บุพบทนั้นๆ โดยกริยา "warten auf" (รอคอย) จะได้เป็น "worauf" (มีตัว r คั่นเพราะนำหน้าด้วยสระ)',
      en: 'When asking questions about inanimate things using a preposition, we form a "Wo(r)-" compound. "warten auf" turns into "worauf" (the "r" is inserted between vowels).'
    }
  },
  {
    id: 'b1-18',
    level: 'B1',
    type: 'grammar',
    question: 'Denkst du an den Urlaub? - Ja, ich denke ___.',
    options: ['daran', 'darauf', 'davon', 'an ihn'],
    correctIndex: 0,
    translations: {
      de: 'Denkst du an den Urlaub? - Ja, ich denke daran.',
      th: 'เธอกำลังคิดถึงช่วงเวลาพักร้อนอยู่หรือเปล่า? - ใช่ ฉันกำลังคิดถึงมันอยู่',
      en: 'Are you thinking about the vacation? - Yes, I am thinking about it.'
    },
    explanation: {
      de: 'Pronominaladverbien für Dinge werden mit "da(r)-" + Präposition gebildet. "denken an" -> "daran" (bezogen auf den Urlaub).',
      th: 'คำสรรพนามบอกแทนสิ่งของที่อ้างอิงคู่กับบุพบทจะสร้างขึ้นด้วย "da(r)-" + บุพบท โดยกริยาคือ "denken an" นึกถึงสิ่งนั้น (วันหยุด) จึงย่อเป็น "daran"',
      en: 'Pronominal adverbs referring to things/concepts are formed with "da(r)-" + preposition. "denken an" becomes "daran" (referring to the vacation).'
    }
  },
  {
    id: 'b1-19',
    level: 'B1',
    type: 'grammar',
    question: 'Er spricht ___ Deutsch ___ Englisch perfekt.',
    options: ['sowohl ... als auch', 'entweder ... oder', 'weder ... noch', 'nicht nur'],
    correctIndex: 0,
    translations: {
      de: 'Er spricht sowohl Deutsch als auch Englisch perfekt.',
      th: 'เขาพูดได้สมบูรณ์แบบทั้งภาษาเยอรมันและภาษาอังกฤษเลย',
      en: 'He speaks both German and English perfectly.'
    },
    explanation: {
      de: 'Die mehrteilige Konjunktion "sowohl ... als auch" verbindet zwei positive Optionen (Satzteile/Wörter).',
      th: 'คำเชื่อมสองส่วน "sowohl ... als auch" (ทั้ง...และ...) ใช้เชื่อมเพื่อเน้นย้ำถึงทางเลือกหรือส่วนประกอบที่เป็นเชิงบวกทั้งสองส่วนพร้อมกัน',
      en: 'The multi-part double conjunction "sowohl ... als auch" (both ... and) connects two positive elements or options.'
    }
  },
  {
    id: 'b1-20',
    level: 'B1',
    type: 'grammar',
    question: 'Ich habe ___ Zeit ___ Geld. Ich bleibe zu Hause.',
    options: ['weder ... noch', 'sowohl ... als auch', 'zwar ... aber', 'nicht nur'],
    correctIndex: 0,
    translations: {
      de: 'Ich habe weder Zeit noch Geld.',
      th: 'ฉันไม่มีทั้งเวลาและไม่มีทั้งเงิน ฉันเลยต้องอยู่บ้าน',
      en: 'I have neither time nor money.'
    },
    explanation: {
      de: '"weder ... noch" schließt zwei Optionen komplett aus (doppelte Verneinung).',
      th: 'คำเชื่อมสองส่วน "weder ... noch" (ไม่ทั้ง...และไม่ทั้ง...) ใช้เพื่อการปฏิเสธตัวเลือกหรือส่วนประกอบทั้งสองอย่างพร้อมๆ กันโดยสมบูรณ์',
      en: 'The double conjunction "weder ... noch" (neither ... nor) completely negates two options or elements.'
    }
  },
  {
    id: 'b1-21',
    level: 'B1',
    type: 'grammar',
    question: 'Wegen des ___ Regens konnten wir nicht raus.',
    options: ['starken', 'starker', 'starkem', 'starkes'],
    correctIndex: 0,
    translations: {
      de: 'Wegen des starken Regens konnten wir nicht raus.',
      th: 'เนื่องจากฝนที่ตกหนักมาก พวกเราเลยไม่สามารถออกไปข้างนอกได้',
      en: 'Because of the heavy rain, we could not go out.'
    },
    explanation: {
      de: '"Wegen" verlangt den Genitiv. "Regen" ist maskulin (der Regen -> des Regens). Im Genitiv endet das Adjektiv bei schwacher Deklination auf "-en".',
      th: 'บุพบท "Wegen" บังคับใช้กรรม Genitiv คำว่า "Regen" เป็นเพศชาย (der Regen -> des Regens) ในการผันคุณศัพท์ตามหลังอาร์ทิเคิลของ Genitiv (schwache Deklination) คำคุณศัพท์จะลงท้ายด้วย "-en" เสมอเป็น "starken"',
      en: '"Wegen" requires the genitive case. "Regen" is masculine (der Regen -> des Regens). In weak adjective declension under the genitive case, the adjective always ends in "-en" ("starken").'
    }
  },
  {
    id: 'b1-22',
    level: 'B1',
    type: 'grammar',
    question: 'Er schenkt ___ einen Ring.',
    options: ['seiner Frau', 'seine Frau', 'seiner Frau ihr', 'von seiner Frau'],
    correctIndex: 0,
    translations: {
      de: 'Er schenkt seiner Frau einen Ring.',
      th: 'เขามอบแหวนวงหนึ่งเป็นของขวัญให้แก่ภรรยาของเขา',
      en: 'He gives his wife a ring as a gift.'
    },
    explanation: {
      de: 'Das Verb "schenken" benötigt ein Dativobjekt (Empfänger, "seiner Frau") und ein Akkusativobjekt (Sache, "einen Ring").',
      th: 'คำกริยา "schenken" (มอบของขวัญ) ต้องการกรรมสองตัว คือ กรรมรอง Dativ (ผู้รับของขวัญ - ในที่นี้คือ "seiner Frau" เพศหญิงผันแบบ dative) และกรรมตรง Akkusativ (สิ่งของที่ให้ - "einen Ring")',
      en: 'The verb "schenken" (to gift) requires a dative object (recipient: "seiner Frau") and an accusative object (the item: "einen Ring").'
    }
  },
  {
    id: 'b1-23',
    level: 'B1',
    type: 'vocabulary',
    question: 'Wir müssen eine Entscheidung ___.',
    options: ['treffen', 'machen', 'geben', 'haben'],
    correctIndex: 0,
    translations: {
      de: 'Wir müssen eine Entscheidung treffen.',
      th: 'พวกเราจำเป็นจะต้องทำการตัดสินใจแล้วนะ',
      en: 'We have to make a decision.'
    },
    explanation: {
      de: 'Das ist ein Nomen-Verb-Gefüge. Die feste Kombination lautet "eine Entscheidung treffen" (entscheiden).',
      th: 'นี่คือกลุ่มคำนามควบกริยาเฉพาะ (Nomen-Verb-Verbindung) รูปแบบคำที่ใช้ร่วมกันตายตัวคือ "eine Entscheidung treffen" ซึ่งหมายถึง "ทำการตัดสินใจ" (entscheiden)',
      en: 'This is a noun-verb combination (Nomen-Verb-Gefüge). The idiomatic coupling is "eine Entscheidung treffen" (meaning to make a decision).'
    }
  },
  {
    id: 'b1-24',
    level: 'B1',
    type: 'vocabulary',
    question: 'Plastikmüll ist ein großes Problem für die ___.',
    options: ['Umwelt', 'Natur', 'Welt', 'Gesellschaft'],
    correctIndex: 0,
    translations: {
      de: 'Plastikmüll ist ein großes Problem für die Umwelt.',
      th: 'ขยะพลาสติกเป็นปัญหาอันยิ่งใหญ่ต่อสิ่งแวดล้อม',
      en: 'Plastic waste is a big problem for the environment.'
    },
    explanation: {
      de: '"Umwelt" bezeichnet die ökologische Umgebung, die durch Plastikmüll gefährdet wird.',
      th: '"Umwelt" แปลว่า สิ่งแวดล้อมทางธรรมชาติ ซึ่งได้รับผลกระทบความเสียหายโดยตรงจากขยะพลาสติก (Plastikmüll)',
      en: '"Umwelt" refers to the ecological environment, which is heavily threatened by plastic waste.'
    }
  },
  {
    id: 'b1-25',
    level: 'B1',
    type: 'grammar',
    question: 'Das ___ Kind weinte laut.',
    options: ['weinende', 'weinend', 'weinendes', 'weinender'],
    correctIndex: 0,
    translations: {
      de: 'Das weinende Kind weinte laut.',
      th: 'เด็กน้อยที่กำลังร้องไห้อยู่นั้นส่งเสียงร้องไห้ออกมาดังลั่น',
      en: 'The crying child cried loudly.'
    },
    explanation: {
      de: 'Das Partizip I (weinend) wird hier als Adjektiv verwendet und entsprechend dekliniert (Das weinende Kind, neutral nominativ bestimmt).',
      th: 'กริยาขยายที่เป็นรูปเหตุการณ์กำลังเกิดขึ้น Partizip I ("weinend" กำลังร้องไห้) ถูกนำมาใช้ทำหน้าที่ขยายคำนามเสมือนคำคุณศัพท์ จึงต้องผันตามเพศพจน์ของนามข้างหลัง (das Kind เพศกลาง มีอาร์ทิเคิลชี้เฉพาะ Nominativ ลงท้ายด้วย "-e") จึงได้ "weinende"',
      en: 'The present participle (Partizip I: "weinend") is used here as an attributive adjective and must be declined accordingly (Das weinende Kind: neuter nominative definite).'
    }
  },
  {
    id: 'b1-26',
    level: 'B1',
    type: 'vocabulary',
    question: 'Ich habe mich bei einer großen Firma auf eine neue Stelle ___ und nächste Woche habe ich das Vorstellungsgespräch.',
    options: ['beworben', 'beschwert', 'beschäftigt', 'entschieden'],
    correctIndex: 0,
    translations: {
      de: 'Ich habe mich bei einer großen Firma auf eine neue Stelle beworben und nächste Woche habe ich das Vorstellungsgespräch.',
      th: 'ฉันได้สมัครงานตำแหน่งใหม่ที่บริษัทใหญ่แห่งหนึ่งไป และสัปดาห์หน้าฉันมีนัดสัมภาษณ์งาน',
      en: 'I have applied for a new job at a large company, and next week I have the job interview.'
    },
    explanation: {
      de: 'Man bewirbt sich (sich bewerben um/auf) auf eine Stelle. "Vorstellungsgespräch" bestätigt diese Berufs-Bewerbung.',
      th: 'โครงสร้างวลีคือ "sich bewerben um/auf eine Stelle" แปลว่า สมัครงานในตำแหน่งใดตำแหน่งหนึ่ง ซึ่งสัมพันธ์โดยตรงกับคำว่า "Vorstellungsgespräch" (การสัมภาษณ์งาน) ส่วน "sich beschweren" แปลว่า ร้องเรียน',
      en: 'The phrase is "sich bewerben um/auf eine Stelle" (to apply for a job position), which directly matches "Vorstellungsgespräch" (job interview). "sich beschweren" means to complain.'
    }
  },
  {
    id: 'b1-27',
    level: 'B1',
    type: 'vocabulary',
    question: 'Wir müssen Wasser und Strom ___, um die Umwelt zu schützen und Geld zu sparen.',
    options: ['sparen', 'verbrauchen', 'verschwenden', 'zerstören'],
    correctIndex: 0,
    translations: {
      de: 'Wir müssen Wasser und Strom sparen, um die Umwelt zu schützen und Geld zu sparen.',
      th: 'พวกเราต้องประหยัดน้ำและไฟฟ้าเพื่อปกป้องสิ่งแวดล้อมและประหยัดเงิน',
      en: 'We must save water and electricity to protect the environment and save money.'
    },
    explanation: {
      de: '"sparen" bedeutet, Ressourcen schonend zu nutzen. "verschwenden" (waste) und "verbrauchen" (consume) bewirken das Gegenteil.',
      th: '"sparen" แปลว่า ประหยัด ซึ่งตรงกับการประหยัดพลังงานเพื่อรักษาสิ่งแวดล้อมและประหยัดเงิน ส่วน "verschwenden" แปลว่า สิ้นเปลือง และ "verbrauchen" แปลว่า บริโภค/ใช้ไป',
      en: '"sparen" means to save or conserve. "verschwenden" (to waste) and "verbrauchen" (to consume) are the opposite concepts.'
    }
  },
  {
    id: 'b1-28',
    level: 'B1',
    type: 'vocabulary',
    question: 'Mein Chef hat mir ___ , dass ich ab nächsten Monat mehr Gehalt bekomme.',
    options: ['versprochen', 'vorgeschlagen', 'verboten', 'verpasst'],
    correctIndex: 0,
    translations: {
      de: 'Mein Chef hat mir versprochen, dass ich ab nächsten Monat mehr Gehalt bekomme.',
      th: 'หัวหน้าสัญญาเจาะจงกับฉันว่าฉันจะได้รับเงินเดือนเพิ่มขึ้นตั้งแต่เดือนหน้าเป็นต้นไป',
      en: 'My boss promised me that I will receive a higher salary starting next month.'
    },
    explanation: {
      de: '"versprechen" bedeutet, ein festes Versprechen zu geben. "verbieten" (verbieten, to forbid) oder "verpassen" (miss) ergeben hier keinen Sinn.',
      th: '"versprechen" แปลว่า สัญญา (to promise) ซึ่งเข้ากับใจความประโยคที่ว่าบอกว่าจะขึ้นเงินเดือนให้ ส่วน "verbieten" แปลว่า ห้าม และ "verpassen" แปลว่า พลาด',
      en: '"versprechen" means to promise. "verbieten" means to forbid, and "verpassen" means to miss.'
    }
  },
  {
    id: 'b1-29',
    level: 'B1',
    type: 'vocabulary',
    question: 'Hast du den Bericht über die Klimakonferenz in der Zeitung ___?',
    options: ['gelesen', 'geschrieben', 'gesehen', 'gehört'],
    correctIndex: 0,
    translations: {
      de: 'Hast du den Bericht über die Klimakonferenz in der Zeitung gelesen?',
      th: 'เธอได้อ่านรายงานเกี่ยวกับงานประชุมการเปลี่ยนแปลงสภาพภูมิอากาศ in der Zeitung หรือยัง?',
      en: 'Have you read the report about the climate conference in the newspaper?'
    },
    explanation: {
      de: 'Einen Bericht in der Zeitung tut man normalerweise "lesen". Da es Partizip II ist, heißt es "gelesen".',
      th: 'รายงานข่าวในหนังสือพิมพ์ (in der Zeitung) โดยปกติแล้วใช้กับการ "gelesen" (อ่าน) ส่วน "gesehen" (เห็น/ดู) หรือ "gehört" (ได้ยิน) ไม่ตรงตามสำนวนการใช้ของสื่อสิ่งพิมพ์',
      en: 'One typically reads ("lesen" -> Partizip II "gelesen") a report in a newspaper. "gesehen" means seen, and "gehört" means heard.'
    }
  },
  {
    id: 'b1-31',
    level: 'B1',
    type: 'vocabulary',
    question: 'Wegen ihrer hervorragenden Leistungen hat sie eine ___ bekommen und verdient jetzt mehr.',
    options: ['Gehaltserhöhung', 'Gehaltskürzung', 'Kündigung', 'Versetzung'],
    correctIndex: 0,
    translations: {
      de: 'Wegen ihrer hervorragenden Leistungen hat sie eine Gehaltserhöhung bekommen und verdient jetzt mehr.',
      th: 'เพราะผลงานที่ยอดเยี่ยมของเธอ เธอจึงได้รับการขึ้นเงินเดือนและตอนนี้หารายได้ได้มากขึ้น',
      en: 'Due to her outstanding performance, she received a salary increase and now earns more.'
    },
    explanation: {
      de: '"Gehaltserhöhung" setzt sich zusammen aus "Gehalt" (salary) + "Erhöhung" (increase). Bei guten Leistungen bekommt man eine Erhöhung. "Gehaltskürzung" ist eine Kürzung, "Kündigung" ist die Kündigung des Arbeitsverhältnisses.',
      th: '"Gehaltserhöhung" (การขึ้นเงินเดือน) ประกอบด้วย "Gehalt" (เงินเดือน) + "Erhöhung" (การเพิ่ม) เมื่อทำงานดี จะได้รับ Erhöhung ส่วน "Gehaltskürzung" คือการลดเงินเดือน และ "Kündigung" คือการไล่ออก',
      en: '"Gehaltserhöhung" (salary raise) is a compound of "Gehalt" (salary) + "Erhöhung" (increase). Good performance leads to a raise. "Gehaltskürzung" is a salary cut, and "Kündigung" means termination.'
    }
  },
  {
    id: 'b1-32',
    level: 'B1',
    type: 'vocabulary',
    question: 'Die Ärztin hat ihm ___, täglich 30 Minuten spazieren zu gehen, da es seiner Gesundheit gut tut.',
    options: ['geraten', 'verboten', 'befohlen', 'verweigert'],
    correctIndex: 0,
    translations: {
      de: 'Die Ärztin hat ihm geraten, täglich 30 Minuten spazieren zu gehen, da es seiner Gesundheit gut tut.',
      th: 'แพทย์หญิงแนะนำเขาให้เดิน 30 นาทีต่อวัน เพราะเป็นประโยชน์ต่อสุขภาพของเขา',
      en: 'The doctor advised him to walk for 30 minutes every day, as it is good for his health.'
    },
    explanation: {
      de: '"raten" (Partizip II: geraten) bedeutet jemandem einen Rat geben / empfehlen. "jdm. raten zu + Infinitiv" ist die feste Konstruktion. "verbieten" = verboten (forbid), "befehlen" = befohlen (command) sind zu stark/autoritär.',
      th: '"raten" (Partizip II: geraten) แปลว่า ให้คำแนะนำ/แนะนำ โครงสร้าง "jdm. raten zu + Infinitiv" เป็นรูปแบบคงที่ ส่วน "verbieten" (ห้าม) หรือ "befehlen" (สั่ง) มีน้ำเสียงเข้มแข็งหรือบังคับมากกว่า',
      en: '"raten" (Partizip II: geraten) means to advise/recommend. "jdm. raten zu + Infinitiv" is the fixed construction. "verbieten" (forbid) and "befehlen" (command) carry a stronger authoritative tone.'
    }
  },
  {
    id: 'b1-33',
    level: 'B1',
    type: 'vocabulary',
    question: 'Er hatte nicht genug Ersparnisse und musste deshalb ein ___ bei der Bank aufnehmen, um sein Studium zu finanzieren.',
    options: ['Darlehen', 'Stipendium', 'Einkommen', 'Rabatt'],
    correctIndex: 0,
    translations: {
      de: 'Er hatte nicht genug Ersparnisse und musste deshalb ein Darlehen bei der Bank aufnehmen, um sein Studium zu finanzieren.',
      th: 'เขาไม่มีเงินออมเพียงพอจึงต้องกู้เงินจากธนาคารเพื่อจ่ายค่าเรียน',
      en: 'He did not have enough savings and therefore had to take out a loan from the bank to finance his studies.'
    },
    explanation: {
      de: '"ein Darlehen aufnehmen" bedeutet, einen Kredit bei der Bank zu beantragen, der zurückgezahlt werden muss. "Stipendium" ist ein Förderbetrag, den man nicht zurückzahlt. "Einkommen" ist das Gehalt, "Rabatt" ist ein Preisnachlass.',
      th: '"ein Darlehen aufnehmen" แปลว่า กู้เงินจากธนาคาร ซึ่งต้องชำระคืน ส่วน "Stipendium" คือทุนการศึกษาที่ไม่ต้องคืน "Einkommen" คือรายได้ และ "Rabatt" คือส่วนลดราคา',
      en: '"ein Darlehen aufnehmen" means taking out a bank loan that must be repaid. "Stipendium" is a scholarship that does not need to be repaid. "Einkommen" is income, and "Rabatt" is a discount.'
    }
  },
  {
    id: 'b1-34',
    level: 'B1',
    type: 'vocabulary',
    question: 'Durch die fortschreitende ___ können viele Arbeitnehmer ihre Aufgaben bequem von zu Hause aus erledigen.',
    options: ['Digitalisierung', 'Bevölkerung', 'Bürokratisierung', 'Qualifikation'],
    correctIndex: 0,
    translations: {
      de: 'Durch die fortschreitende Digitalisierung können viele Arbeitnehmer ihre Aufgaben bequem von zu Hause aus erledigen.',
      th: 'เนื่องจากการพัฒนาดิจิทัลที่ก้าวหน้า พนักงานจำนวนมากสามารถทำงานจากบ้านได้อย่างสะดวก',
      en: 'Thanks to the advancing digitalization, many employees can comfortably carry out their tasks from home.'
    },
    explanation: {
      de: '"Digitalisierung" beschreibt den Prozess der Überführung von Arbeitsprozessen und Informationen in digitale Formate, der u.a. Homeoffice ermöglicht. "Bevölkerung" = population, "Bürokratisierung" = bureaucratization.',
      th: '"Digitalisierung" (การดิจิทัลไลเซชัน) หมายถึงกระบวนการเปลี่ยนกระบวนการทำงานและข้อมูลเป็นรูปแบบดิจิทัล ซึ่งทำให้สามารถทำงานจากบ้านได้ ส่วน "Bevölkerung" คือประชากร',
      en: '"Digitalisierung" (digitalization) describes the process of converting work processes and information to digital formats, enabling remote work. "Bevölkerung" means population, "Bürokratisierung" means bureaucratization.'
    }
  },
  {
    id: 'b1-35',
    level: 'B1',
    type: 'vocabulary',
    question: 'Das neue Gesetz ___ alle Unternehmen mit mehr als 50 Mitarbeitern, einen Betriebsrat zu gründen.',
    options: ['verpflichtet', 'erlaubt', 'ermöglicht', 'hindert'],
    correctIndex: 0,
    translations: {
      de: 'Das neue Gesetz verpflichtet alle Unternehmen mit mehr als 50 Mitarbeitern, einen Betriebsrat zu gründen.',
      th: 'กฎหมายใหม่บังคับให้บริษัทที่มีพนักงานมากกว่า 50 คนต้องจัดตั้งสภาคนงาน',
      en: 'The new law obliges all companies with more than 50 employees to establish a works council.'
    },
    explanation: {
      de: '"verpflichten" bedeutet, jemanden durch ein Gesetz oder eine Regel zu zwingen, etwas zu tun. "jdn. zu etw. verpflichten" = to oblige someone to do something. "erlauben" = to permit (optional), "ermöglichen" = to enable (kein Zwang).',
      th: '"verpflichten" แปลว่า บังคับ/ผูกพัน ตามกฎหมายหรือกฎระเบียบ "jdn. zu etw. verpflichten" = บังคับให้ทำสิ่งหนึ่ง ส่วน "erlauben" = อนุญาต (ไม่บังคับ) และ "ermöglichen" = เอื้ออำนวย (ไม่มีการบังคับ)',
      en: '"verpflichten" means to legally oblige someone to do something. "jdn. zu etw. verpflichten" = to compel someone to do something. "erlauben" = to permit (optional), "ermöglichen" = to enable (no compulsion).'
    }
  },
  {
    id: 'b1-30',
    level: 'B1',
    type: 'vocabulary',
    question: 'Ich bin fest davon ___, dass wir diese schwierige Prüfung bestehen werden.',
    options: ['überzeugt', 'überrascht', 'enttäuscht', 'erschrocken'],
    correctIndex: 0,
    translations: {
      de: 'Ich bin fest davon überzeugt, dass wir diese schwierige Prüfung bestehen werden.',
      th: 'ฉันมีความเชื่อมั่นอย่างแรงกล้า (มั่นใจเต็มเปี่ยม) ว่าพวกเราจะสอบผ่านการสอบที่ยากลำบากนี้ไปได้',
      en: 'I am firmly convinced that we will pass this difficult exam.'
    },
    explanation: {
      de: '"fest davon überzeugt sein" ist ein feststehender Ausdruck für eine starke Überzeugung.',
      th: '"fest davon überzeugt sein" เป็นสำนวนแปลว่า "เชื่อมั่นอย่างแน่วแน่/มั่นใจอย่างยิ่ง" ส่วน "enttäuscht" แปลว่า ผิดหวัง และ "überrascht" แปลว่า ประหลาดใจ',
      en: '"fest davon überzeugt sein" is an idiom meaning "to be firmly convinced". "enttäuscht" means disappointed, and "überrascht" means surprised.'
    }
  },
  // ==================== EXTRA VOCABULARY QUESTIONS (1-10) ====================
  {
    id: 'vocab-extra-1',
    level: 'A1',
    type: 'vocabulary',
    question: 'Ich trinke am Morgen gerne ___ mit Milch und Zucker.',
    options: ['Kaffee', 'Bier', 'Wein', 'Salz'],
    correctIndex: 0,
    translations: {
      de: 'Ich trinke am Morgen gerne Kaffee mit Milch und Zucker.',
      th: 'ในตอนเช้าฉันชอบดื่มกาแฟใส่นมและน้ำตาล',
      en: 'In the morning, I like to drink coffee with milk and sugar.'
    },
    explanation: {
      de: '"Kaffee" ist das typische Heißgetränk für den Morgen. Bier und Wein sind alkoholische Getränke, Salz ist ein Gewürz.',
      th: '"Kaffee" (กาแฟ) คือเครื่องดื่มร้อนทั่วไปสำหรับตอนเช้า ส่วน Bier และ Wein เป็นเครื่องดื่มแอลกอฮอล์ และ Salz คือเกลือ',
      en: '"Kaffee" (coffee) is the typical hot drink for the morning. Bier and Wein are alcoholic beverages, and Salz is salt.'
    }
  },
  {
    id: 'vocab-extra-2',
    level: 'A1',
    type: 'vocabulary',
    question: 'Wir kaufen Brot und Brötchen in der ___.',
    options: ['Bäckerei', 'Apotheke', 'Metzgerei', 'Bibliothek'],
    correctIndex: 0,
    translations: {
      de: 'Wir kaufen Brot und Brötchen in der Bäckerei.',
      th: 'พวกเราซื้อขนมปังและขนมปังก้อนเล็กที่ร้านขายขนมปัง',
      en: 'We buy bread and rolls at the bakery.'
    },
    explanation: {
      de: '"Bäckerei" ist das Geschäft, in dem Brot gebacken und verkauft wird. "Apotheke" = pharmacy, "Metzgerei" = butcher\'s, "Bibliothek" = library.',
      th: '"Bäckerei" (ร้านขนมปัง) คือร้านอบและขายขนมปัง ส่วน "Apotheke" คือร้านขายยา, "Metzgerei" คือร้านขายเนื้อ และ "Bibliothek" คือห้องสมุด',
      en: '"Bäckerei" (bakery) is the shop where bread is baked and sold. "Apotheke" means pharmacy, "Metzgerei" means butcher shop, and "Bibliothek" means library.'
    }
  },
  {
    id: 'vocab-extra-3',
    level: 'A2',
    type: 'vocabulary',
    question: 'Ich muss einen Termin beim Arzt ___.',
    options: ['vereinbaren', 'kochen', 'singen', 'fahren'],
    correctIndex: 0,
    translations: {
      de: 'Ich muss einen Termin beim Arzt vereinbaren.',
      th: 'ฉันต้องนัดหมายเวลากับคุณหมอ',
      en: 'I must make an appointment with the doctor.'
    },
    explanation: {
      de: '"einen Termin vereinbaren" ist der feste Ausdruck für das Ausmachen eines Termins.',
      th: '"einen Termin vereinbaren" เป็นสำนวนหมายถึง "นัดหมายเวลา" ส่วนกริยาอื่นๆ ไม่ตรงความหมาย (kochen = ทำอาหาร, singen = ร้องเพลง, fahren = ขับรถ)',
      en: '"einen Termin vereinbaren" is the standard collocation for making/arranging an appointment.'
    }
  },
  {
    id: 'vocab-extra-4',
    level: 'A2',
    type: 'vocabulary',
    question: 'Das Auto ist kaputt. Ich muss es in die ___ bringen.',
    options: ['Werkstatt', 'Küche', 'Post', 'Schule'],
    correctIndex: 0,
    translations: {
      de: 'Das Auto ist kaputt. Ich muss es in die Werkstatt bringen.',
      th: 'รถเสีย ฉันต้องนำมันไปที่อู่ซ่อมรถ',
      en: 'The car is broken. I have to take it to the repair shop.'
    },
    explanation: {
      de: '"Werkstatt" (Kfz-Werkstatt) ist der Ort, an dem Autos repariert werden.',
      th: '"Werkstatt" (อู่ซ่อมรถ) คือสถานที่สำหรับซ่อมแซมรถยนต์ ส่วน Küche = ครัว, Post = ไปรษณีย์, Schule = โรงเรียน',
      en: '"Werkstatt" (repair shop / garage) is the place where cars are repaired.'
    }
  },
  {
    id: 'vocab-extra-5',
    level: 'A2',
    type: 'vocabulary',
    question: 'Bitte füllen Sie dieses ___ aus und unterschreiben Sie hier.',
    options: ['Formular', 'Buch', 'Auto', 'Haus'],
    correctIndex: 0,
    translations: {
      de: 'Bitte füllen Sie dieses Formular aus und unterschreiben Sie hier.',
      th: 'กรุณากรอกแบบฟอร์มนี้และลงชื่อตรงนี้ครับ',
      en: 'Please fill out this form and sign here.'
    },
    explanation: {
      de: '"ein Formular ausfüllen" bedeutet, persönliche Daten in ein Dokument einzutragen.',
      th: '"ein Formular ausfüllen" แปลว่า "กรอกแบบฟอร์ม" ซึ่งเป็นเอกสารราชการหรือเอกสารสมัครงานทั่วไป',
      en: '"ein Formular ausfüllen" means to fill out a document with personal details.'
    }
  },
  {
    id: 'vocab-extra-6',
    level: 'B1',
    type: 'vocabulary',
    question: 'Aufgrund des schlechten Wetters wurde der Flug ___.',
    options: ['annulliert', 'gebucht', 'gelandet', 'gestartet'],
    correctIndex: 0,
    translations: {
      de: 'Aufgrund des schlechten Wetters wurde der Flug annulliert.',
      th: 'เนื่องจากสภาพอากาศย่ำแย่ เที่ยวบินจึงถูกยกเลิก',
      en: 'Due to the bad weather, the flight was canceled.'
    },
    explanation: {
      de: '"annullieren" bedeutet, einen geplanten Flug oder eine Reservierung offiziell abzusagen. "gebucht" = booked, "gelandet" = landed.',
      th: '"annulliert" หมายถึง ถูกยกเลิก (เที่ยวบินหรือการจอง) ส่วน "gebucht" แปลว่าถูกจอง และ "gelandet" แปลว่าลงจอดแล้ว',
      en: '"annullieren" means to officially cancel a planned flight or booking. "gebucht" means booked, and "gelandet" means landed.'
    }
  },
  {
    id: 'vocab-extra-7',
    level: 'B1',
    type: 'vocabulary',
    question: 'Ich möchte mein Geld auf ein Sparkonto ___.',
    options: ['überweisen', 'ausgeben', 'leihen', 'verlieren'],
    correctIndex: 0,
    translations: {
      de: 'Ich möchte mein Geld auf ein Sparkonto überweisen.',
      th: 'ฉันต้องการโอนเงินของฉันไปยังบัญชีออมทรัพย์',
      en: 'I would like to transfer my money to a savings account.'
    },
    explanation: {
      de: '"überweisen" bedeutet, Geld bargeldlos von einem Konto auf ein anderes zu übertragen. "ausgeben" = spend, "leihen" = lend/borrow.',
      th: '"überweisen" แปลว่า "โอนเงิน" ทางบัญชี ส่วน "ausgeben" = ใช้จ่าย, "leihen" = ขอยืม/ให้ยืม, "verlieren" = ทำหาย',
      en: '"überweisen" means to transfer money electronically from one account to another.'
    }
  },
  {
    id: 'vocab-extra-8',
    level: 'B1',
    type: 'vocabulary',
    question: 'Die ___ für die Wohnung beträgt 600 Euro kalt.',
    options: ['Miete', 'Heizung', 'Versicherung', 'Möbel'],
    correctIndex: 0,
    translations: {
      de: 'Die Miete für die Wohnung beträgt 600 Euro kalt.',
      th: 'ค่าเช่าห้องพักราคา 600 ยูโร (ยังไม่รวมค่าส่วนกลางและค่าน้ำค่าไฟ)',
      en: 'The rent for the apartment is 600 Euros cold (excluding utilities).'
    },
    explanation: {
      de: '"Kaltmiete" (Miete kalt) ist die reine Grundmiete für das Wohnen ohne Heizung und Nebenkosten.',
      th: '"Miete kalt" (ค่าเช่าดิบ) คือค่าเช่าห้องพักพื้นฐานเท่านั้น ยังไม่รวมค่าน้ำ ค่าไฟ และค่าทำความร้อน (Heizung)',
      en: '"Kaltmiete" (cold rent) refers to the basic rent for an apartment, excluding heating and utility bills.'
    }
  },
  {
    id: 'vocab-extra-9',
    level: 'A2',
    type: 'vocabulary',
    question: 'Mein Bruder sucht eine neue ___ als Informatiker.',
    options: ['Stelle', 'Schule', 'Kleidung', 'Freizeit'],
    correctIndex: 0,
    translations: {
      de: 'Mein Bruder sucht eine neue Stelle als Informatiker.',
      th: 'น้องชายของฉันกำลังหางานใหม่ในตำแหน่งนักไอที',
      en: 'My brother is looking for a new job/position as an IT specialist.'
    },
    explanation: {
      de: '"Stelle" bedeutet Arbeitsstelle oder Job. "eine Stelle suchen" = to look for a job.',
      th: '"Stelle" ในที่นี้หมายถึง "ตำแหน่งงาน" หรือ "งาน" ส่วนกริยา/นามอื่นไม่ถูกต้อง (Schule = โรงเรียน, Kleidung = เสื้อผ้า)',
      en: '"Stelle" means job position. "eine Stelle suchen" means to look for a job/employment.'
    }
  },
  {
    id: 'vocab-extra-10',
    level: 'B1',
    type: 'vocabulary',
    question: 'Umweltschutz ist eine wichtige ___ für unsere Gesellschaft.',
    options: ['Herausforderung', 'Verspätung', 'Einladung', 'Verletzung'],
    correctIndex: 0,
    translations: {
      de: 'Umweltschutz ist eine wichtige Herausforderung für unsere Gesellschaft.',
      th: 'การรักษาสิ่งแวดล้อมคือสิ่งท้าทายที่สำคัญสำหรับสังคมของพวกเรา',
      en: 'Environmental protection is an important challenge for our society.'
    },
    explanation: {
      de: '"Herausforderung" ist eine schwierige, aber wichtige Aufgabe. "Verspätung" = delay, "Einladung" = invitation, "Verletzung" = injury.',
      th: '"Herausforderung" แปลว่า "ความท้าทาย" ส่วน "Verspätung" แปลว่า การมาสาย/ความล่าช้า และ "Einladung" คือ การเชิญชวน',
      en: '"Herausforderung" means a challenge or a demanding task. "Verspätung" means delay, and "Einladung" means invitation.'
    }
  },

  // ==================== B2-C1 TEST MODE QUESTIONS (30 ITEMS) ====================
  // --- VOCABULARY SECTION (1-10) ---
  {
    id: 'b2c1-v1',
    level: 'B2',
    type: 'vocabulary',
    question: 'Durch die fortschreitende Automatisierung haben viele klassische Handwerksberufe an Bedeutung ___.',
    options: ['verloren', 'gewonnen', 'erhalten', 'vermisst'],
    correctIndex: 0,
    translations: {
      de: 'Durch die fortschreitende Automatisierung haben viele klassische Handwerksberufe an Bedeutung verloren.',
      th: 'เนื่องจากระบบอัตโนมัติที่พัฒนาไปอย่างรวดเร็ว ทำให้อาชีพช่างฝีมือแบบดั้งเดิมจำนวนมากสูญเสียความสำคัญลงไป',
      en: 'Due to advancing automation, many traditional craft professions have lost importance.'
    },
    explanation: {
      de: 'Der feste Ausdruck lautet "an Bedeutung verlieren" (= weniger wichtig werden). Gegenteil: "an Bedeutung gewinnen".',
      th: 'สำนวนภาษาเยอรมันคือ "an Bedeutung verlieren" แปลว่า สูญเสียความสำคัญหรือหมดความสำคัญลงไป ตรงข้ามกับ "an Bedeutung gewinnen" (ได้รับความนิยมเพิ่มขึ้น)',
      en: 'The standard expression is "an Bedeutung verlieren" (to lose importance/significance). The opposite is "an Bedeutung gewinnen".'
    }
  },
  {
    id: 'b2c1-v2',
    level: 'B2',
    type: 'vocabulary',
    question: 'Es ist in stressigen Situationen unerlässlich, einen kühlen Kopf zu ___.',
    options: ['bewahren', 'halten', 'schonen', 'tragen'],
    correctIndex: 0,
    translations: {
      de: 'Es ist in stressigen Situationen unerlässlich, einen kühlen Kopf zu bewahren.',
      th: 'ในสถานการณ์ที่ตึงเครียด การรักษาความเยือกเย็น (ตั้งสติ) เอาไว้ถือเป็นสิ่งจำเป็นอย่างยิ่ง',
      en: 'It is essential in stressful situations to keep a cool head.'
    },
    explanation: {
      de: 'Die Redewendung "einen kühlen Kopf bewahren" bedeutet, in einer schwierigen Lage ruhig und besonnen zu bleiben.',
      th: 'สำนวน "einen kühlen Kopf bewahren" แปลว่า "รักษาความสุขุม/มีสติเยือกเย็นท่ามกลางความกดดัน" ไม่ใช้คำว่า halten หรือ tragen',
      en: 'The idiom "einen kühlen Kopf bewahren" means to stay calm, composed, and rational in a difficult or stressful situation.'
    }
  },
  {
    id: 'b2c1-v3',
    level: 'B2',
    type: 'vocabulary',
    question: 'Der behandelnde Arzt verschrieb ein hochwirksames Medikament, um die akuten Schmerzen zu ___.',
    options: ['lindern', 'steigern', 'verlängern', 'verteilen'],
    correctIndex: 0,
    translations: {
      de: 'Der behandelnde Arzt verschrieb ein hochwirksames Medikament, um die akuten Schmerzen zu lindern.',
      th: 'แพทย์ผู้ทำการรักษาได้สั่งยาที่มีประสิทธิภาพสูงเพื่อบรรเทาอาการปวดอย่างเฉียบพลัน',
      en: 'The attending physician prescribed a highly effective medication to alleviate the acute pain.'
    },
    explanation: {
      de: '"lindern" bedeutet, Schmerzen, Beschwerden oder Leiden abzumildern. "steigern" = erhöhen (falsch), "verlängern" = länger machen (falsch).',
      th: '"lindern" แปลว่า "บรรเทา (ความเจ็บปวดหรือไข้ไข้)" ส่วน "steigern" แปลว่า เพิ่มขึ้น ซึ่งขัดแย้งกับจุดประสงค์ของยา',
      en: '"lindern" means to soothe, alleviate, or ease pain or symptoms. "steigern" means to increase, and "verlängern" means to prolong.'
    }
  },
  {
    id: 'b2c1-v4',
    level: 'B2',
    type: 'vocabulary',
    question: 'Die neue gesetzliche Regelung bezüglich des Datenschutzes tritt ab dem 1. Januar in ___.',
    options: ['Kraft', 'Wirkung', 'Macht', 'Geltung'],
    correctIndex: 0,
    translations: {
      de: 'Die neue gesetzliche Regelung bezüglich des Datenschutzes tritt ab dem 1. Januar in Kraft.',
      th: 'ข้อกำหนดทางกฎหมายใหม่เกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคลจะมีผลบังคับใช้ตั้งแต่วันที่ 1 มกราคมเป็นต้นไป',
      en: 'The new legal regulation regarding data protection will come into force starting January 1st.'
    },
    explanation: {
      de: '"in Kraft treten" ist ein rechtssprachlicher Fachausdruck für Gesetze, die offiziell gültig werden.',
      th: '"in Kraft treten" เป็นสำนวนทางกฎหมายหมายถึง "เริ่มมีผลบังคับใช้ (สำหรับกฎหมายหรือข้อบังคับ)" ส่วน "in Wirkung treten" ไม่ใช่ภาษาราชการ',
      en: '"in Kraft treten" is a fixed legal expression meaning to come into force or take effect (for laws/regulations).'
    }
  },
  {
    id: 'b2c1-v5',
    level: 'C1',
    type: 'vocabulary',
    question: 'Ihr unermüdliches ehrenamtliches ___ trug maßgeblich zum Erfolg des sozialen Projekts bei.',
    options: ['Engagement', 'Interesse', 'Verhalten', 'Erscheinen'],
    correctIndex: 0,
    translations: {
      de: 'Ihr unermüdliches ehrenamtliches Engagement trug maßgeblich zum Erfolg des sozialen Projekts bei.',
      th: 'การอุทิศตนทำงานอาสาสมัครอย่างไม่รู้จักเหน็ดเหนื่อยของเธอมีส่วนสำคัญอย่างยิ่งต่อความสำเร็จของโครงการเพื่อสังคมนี้',
      en: 'Her tireless voluntary commitment contributed significantly to the success of the social project.'
    },
    explanation: {
      de: '"Engagement" (soziales/politisches Engagement) beschreibt den aktiven, persönlichen Einsatz für eine Sache oder ein Ziel.',
      th: '"Engagement" (การอุทิศตน/ความมุ่งมั่นทุ่มเททำงาน) เป็นคำยืมจากภาษาฝรั่งเศสที่ใช้บ่อยในระดับสูง เพื่อบอกถึงการสละแรงกายแรงใจช่วยงานสังคม',
      en: '"Engagement" (commitment/involvement) refers to active, dedicated participation or effort towards a cause or project.'
    }
  },
  {
    id: 'b2c1-v6',
    level: 'C1',
    type: 'vocabulary',
    question: 'Die neuesten Forschungsergebnisse weichen erheblich von den bisherigen Hypothesen ___.',
    options: ['ab', 'aus', 'vor', 'zu'],
    correctIndex: 0,
    translations: {
      de: 'Die neuesten Forschungsergebnisse weichen erheblich von den bisherigen Hypothesen ab.',
      th: 'ผลการวิจัยล่าสุดมีความเบี่ยงเบน (แตกต่าง) ไปจากสมมติฐานเดิมก่อนหน้านี้อย่างมีนัยสำคัญ',
      en: 'The latest research results deviate significantly from the previous hypotheses.'
    },
    explanation: {
      de: 'Das Verb "abweichen" fordert die Präposition "von" + Dativ. "von etwas abweichen" = anders sein als die Erwartung oder Norm.',
      th: 'กริยาคือ "abweichen" (เบี่ยงเบน/แตกต่างออกไป) ซึ่งต้องใช้คู่กับบุพบท "von" + Dativ เสมอ (รูปแยกคือ weichen ... ab)',
      en: 'The verb "abweichen" requires the preposition "von" (to deviate/differ from). The separable verb prefix is "ab".'
    }
  },
  {
    id: 'b2c1-v7',
    level: 'C1',
    type: 'vocabulary',
    question: 'Man sollte die potenziellen Risiken dieser langfristigen Geldanlage keinesfalls ___.',
    options: ['verharmlosen', 'unterschätzen', 'verschönern', 'übergehen'],
    correctIndex: 0,
    translations: {
      de: 'Man sollte die potenziellen Risiken dieser langfristigen Geldanlage keinesfalls verharmlosen.',
      th: 'เราไม่ควรลดทอนความรุนแรง (มองข้ามอันตราย) ของความเสี่ยงที่อาจเกิดขึ้นจากการลงทุนระยะยาวนี้อย่างเด็ดขาด',
      en: 'One should under no circumstances downplay the potential risks of this long-term investment.'
    },
    explanation: {
      de: '"verharmlosen" bedeutet, etwas Gefährliches oder Negatives so darzustellen, als ob es harmlos und unbedeutend wäre.',
      th: '"verharmlosen" แปลว่า "ทำให้ดูเหมือนไม่มีพิษมีภัย/ลดทอนความร้ายแรง" ซึ่งเหมาะสมที่สุดในบริบทเตือนภัยการลงทุนระดับสูง',
      en: '"verharmlosen" means to downplay, trivialize, or minimize the danger or severity of something negative.'
    }
  },
  {
    id: 'b2c1-v8',
    level: 'C1',
    type: 'vocabulary',
    question: 'Der erfahrene Redner verstand es, das skeptische Publikum vollkommen von seinen Thesen zu ___.',
    options: ['überzeugen', 'überreden', 'übergehen', 'übermitteln'],
    correctIndex: 0,
    translations: {
      de: 'Der erfahrene Redner verstand es, das skeptische Publikum vollkommen von seinen Thesen zu überzeugen.',
      th: 'นักพูดผู้มีประสบการณ์รู้วิธีที่จะโน้มน้าวใจ (ทำให้เชื่อมั่น) ผู้ฟังที่กำลังคลางแคลงใจให้คล้อยตามข้อสมมติฐานของเขาได้อย่างสมบูรณ์',
      en: 'The experienced speaker knew how to completely convince the skeptical audience of his theses.'
    },
    explanation: {
      de: '"jemanden von etwas überzeugen" bedeutet, jemanden durch rationale Argumente und Beweise zu einer Einsicht zu bringen.',
      th: '"überzeugen" แปลว่า "โน้มน้าวด้วยเหตุผลจนเชื่อมั่น" ใช้โครงสร้าง "jdn. von etw. überzeugen" ส่วน "überreden" คือตื๊อหรือชักจูงโดยไม่เน้นเหตุผล',
      en: '"überzeugen" means to convince or persuade someone using solid arguments and facts, structured as "jdn. von etw. überzeugen".'
    }
  },
  {
    id: 'b2c1-v9',
    level: 'B2',
    type: 'vocabulary',
    question: 'Sie hat die anspruchsvolle staatliche Prüfung zur Dolmetscherin mit Bravour ___.',
    options: ['bestanden', 'geschrieben', 'erhalten', 'absolviert'],
    correctIndex: 0,
    translations: {
      de: 'Sie hat die anspruchsvolle staatliche Prüfung zur Dolmetscherin mit Bravour bestanden.',
      th: 'เธอสอบผ่านการสอบวัดระดับของรัฐที่ยากลำบagenสำหรับการเป็นล่ามได้อย่างราบรื่นและยอดเยี่ยมเป็นพิเศษ',
      en: 'She passed the demanding state examination for interpreters with flying colors.'
    },
    explanation: {
      de: '"eine Prüfung mit Bravour bestehen" ist ein fester idiomatischer Ausdruck für ein herausragendes Bestehen einer Prüfung.',
      th: 'สำนวน "mit Bravour bestehen" แปลว่า "สอบผ่านได้อย่างยอดเยี่ยม/คะแนนสูงลิ่ว" มักคู่กับกริยา "bestehen" (bestanden ในรูปอดีต)',
      en: '"eine Prüfung mit Bravour bestehen" is a fixed collocation meaning to pass an exam with distinction or "with flying colors".'
    }
  },
  {
    id: 'b2c1-v10',
    level: 'C1',
    type: 'vocabulary',
    question: 'Die beiden vorgeschlagenen Lösungsansätze schließen sich gegenseitig ___.',
    options: ['aus', 'ein', 'an', 'auf'],
    correctIndex: 0,
    translations: {
      de: 'Die beiden vorgeschlagenen Lösungsansätze schließen sich gegenseitig aus.',
      th: 'แนวทางการแก้ไขปัญหาทั้งสองแบบที่เสนอมานั้นเข้ากันไม่ได้ (เป็นปฏิปักษ์/กีดกันซึ่งกันและกัน)',
      en: 'The two proposed solutions are mutually exclusive.'
    },
    explanation: {
      de: '"sich gegenseitig ausschließen" bedeutet, dass nicht beide Dinge gleichzeitig wahr oder möglich sein können (mutually exclusive).',
      th: '"sich gegenseitig ausschließen" (รูปแยกคือ schließen ... aus) แปลว่า "ขัดแย้งกันจนไปด้วยกันไม่ได้/ต่างฝ่ายต่างกีดกันกันและกัน"',
      en: '"sich gegenseitig ausschließen" is a standard academic phrase meaning to be mutually exclusive.'
    }
  },

  // --- WRITING SECTION (11-20) ---
  {
    id: 'b2c1-w1',
    level: 'B2',
    type: 'writing',
    question: '___ ich Ihre Argumente im Wesentlichen verstehe, kann ich Ihrer Schlussfolgerung nicht zustimmen.',
    options: ['Obwohl', 'Weil', 'Trotzdem', 'Deshalb'],
    correctIndex: 0,
    translations: {
      de: 'Obwohl ich Ihre Argumente im Wesentlichen verstehe, kann ich Ihrer Schlussfolgerung nicht zustimmen.',
      th: 'แม้ว่าฉันจะเข้าใจข้อโต้แย้งของคุณเป็นอย่างดี แต่ฉันก็ไม่สามารถเห็นด้วยกับข้อสรุปของคุณได้',
      en: 'Although I essentially understand your arguments, I cannot agree with your conclusion.'
    },
    explanation: {
      de: '"Obwohl" leitet einen Nebensatz (Konzessivsatz) ein, bei dem das konjugierte Verb am Ende steht. Es drückt einen Gegensatz aus.',
      th: '"Obwohl" (แม้ว่า) ทำหน้าที่เชื่อมประโยคขัดแย้งเชิงสัมปทาน (Konzessivsatz) บังคับกริยาผันอยู่ท้ายประโยคย่อย ("verstehe")',
      en: '"Obwohl" (although/even though) introduces a concessive subordinate clause with the conjugated verb at the very end.'
    }
  },
  {
    id: 'b2c1-w2',
    level: 'B2',
    type: 'writing',
    question: 'Ein wesentlicher Vorteil von Elektrofahrzeugen besteht darin, ___ sie im Betrieb keine CO2-Emissionen verursachen.',
    options: ['dass', 'weil', 'damit', 'ob'],
    correctIndex: 0,
    translations: {
      de: 'Ein wesentlicher Vorteil von Elektrofahrzeugen besteht darin, dass sie im Betrieb keine CO2-Emissionen verursachen.',
      th: 'ข้อดีที่สำคัญประการหนึ่งของยานยนต์ไฟฟ้าคือการที่พวกมันไม่ก่อให้เกิดการปล่อยก๊าซคาร์บอนไดออกไซด์ในระหว่างการใช้งาน',
      en: 'A major advantage of electric vehicles is that they do not produce CO2 emissions during operation.'
    },
    explanation: {
      de: 'Das Korrelat "darin" kündigt einen Nebensatz mit der Konjunktion "dass" an ("darin bestehen, dass...").',
      th: 'โครงสร้าง "darin bestehen, dass..." แปลว่า "ประกอบด้วยการที่..." หรือ "คือการที่..." โดยใช้คำเชื่อม "dass" นำหน้าประโยคย่อยส่งกริยาไปท้ายสุด',
      en: 'The pronominal adverb "darin" points forward to a explanatory subordinate clause introduced by the conjunction "dass".'
    }
  },
  {
    id: 'b2c1-w3',
    level: 'B2',
    type: 'writing',
    question: 'Je intensiver man sich mit einer Fremdsprache beschäftigt, ___ schneller erzielt man sichtbare Fortschritte.',
    options: ['desto', 'umso', 'so', 'mehr'],
    correctIndex: 0,
    translations: {
      de: 'Je intensiver man sich mit einer Fremdsprache beschäftigt, desto schneller erzielt man sichtbare Fortschritte.',
      th: 'ยิ่งเราใส่ใจฝึกฝนภาษาต่างประเทศอย่างเข้มข้นมากเท่าไร เราก็ยิ่งเห็นความก้าวหน้าได้อย่างรวดเร็วมากขึ้นเท่านั้น',
      en: 'The more intensively one studies a foreign language, the faster one achieves visible progress.'
    },
    explanation: {
      de: 'Die mehrteilige Konjunktion für proportionale Vergleiche lautet "je + Komparativ (Nebensatz), desto/umso + Komparativ (Hauptsatz)".',
      th: 'โครงสร้างไวยากรณ์เปรียบเทียบสัดส่วนคู่คือ "je ... desto/umso" แปลว่า "ยิ่ง...ก็ยิ่ง..." โดยหลัง je เป็นประโยคย่อย และหลัง desto เป็นประโยคหลักสลับกริยา',
      en: 'The proportional double-conjunction is "je + comparative (subordinate clause), desto/umso + comparative (main clause)".'
    }
  },
  {
    id: 'b2c1-w4',
    level: 'C1',
    type: 'writing',
    question: 'Der vorliegende Artikel befasst sich eingehend mit der Fragestellung, ___ soziale Medien die Vereinsamung fördern.',
    options: ['inwiefern', 'wogegen', 'wodurch', 'weshalb'],
    correctIndex: 0,
    translations: {
      de: 'Der vorliegende Artikel befasst sich eingehend mit der Fragestellung, inwiefern soziale Medien die Vereinsamung fördern.',
      th: 'บทความที่อยู่ตรงหน้านี้มุ่งเน้นศึกษาลงลึกในประเด็นคำถามที่ว่า สื่อสังคมออนไลน์ส่งผลให้เกิดความโดดเดี่ยวอ้างว้างในแง่ใดและมากน้อยเพียงใด',
      en: 'The present article deals in detail with the question of the extent to which social media promotes loneliness.'
    },
    explanation: {
      de: '"inwiefern" ist ein Interrogativadverb, das in indirekten Fragen verwendet wird und "in welchem Maße / auf welche Weise" bedeutet.',
      th: '"inwiefern" เป็นคำเชื่อมทางวิชาการแปลว่า "ในแง่ใด/ถึงระดับใด (in what way / to what extent)" เหมาะสมที่สุดสำหรับการตั้งประเด็นวิจัยหรือหัวข้อเขียนวิเคราะห์',
      en: '"inwiefern" (to what extent / in what way) is an interrogative adverb frequently used in academic writing to introduce indirect questions.'
    }
  },
  {
    id: 'b2c1-w5',
    level: 'C1',
    type: 'writing',
    question: 'Es ist im wissenschaftlichen Diskurs ratsam, sachliche Argumente ___ emotionaler Kritik vorzuziehen.',
    options: ['anstelle', 'trotz', 'wegen', 'während'],
    correctIndex: 0,
    translations: {
      de: 'Es ist im wissenschaftlichen Diskurs ratsam, sachliche Argumente anstelle emotionaler Kritik vorzuziehen.',
      th: 'ในการอภิปรายเชิงวิชาการ ขอแนะนำให้หยิบยกข้อโต้แย้งที่มีเหตุมีผลขึ้นมาเป็นอันดับแรกแทนที่จะใช้การวิพากษ์วิจารณ์ด้วยอารมณ์',
      en: 'In scientific discourse, it is advisable to prefer objective arguments instead of emotional criticism.'
    },
    explanation: {
      de: 'Die Präposition "anstelle" verlangt den Genitiv ("emotionaler Kritik") und bedeutet "statt / als Ersatz für".',
      th: '"anstelle" เป็นบุพบทที่ต้องตามด้วยคำนามในรูป Genitiv เสมอ แปลว่า "แทนที่..." หรือ "แทนที่จะเป็น..." เหมาะสำหรับการเขียนวิเคราะห์เปรียบเทียบเป้าหมายสองสิ่ง',
      en: 'The preposition "anstelle" (instead of) requires the Genitive case ("emotionaler Kritik") and is used to indicate substitution.'
    }
  },
  {
    id: 'b2c1-w6',
    level: 'B2',
    type: 'writing',
    question: '___ lässt sich festhalten, dass die Vorteile dieser Technologie die Risiken bei weitem überwiegen.',
    options: ['Zusammenfassend', 'Folglich', 'Demnach', 'Zwar'],
    correctIndex: 0,
    translations: {
      de: 'Zusammenfassend lässt sich festhalten, dass die Vorteile dieser Technologie die Risiken bei weitem überwiegen.',
      th: 'โดยสรุปแล้ว สามารถกล่าวได้ว่าประโยชน์ของเทคโนโลยีนี้มีน้ำหนักเหนือกว่าความเสี่ยงของมันอย่างมาก',
      en: 'In conclusion, it can be stated that the benefits of this technology far outweigh the risks.'
    },
    explanation: {
      de: '"Zusammenfassend lässt sich festhalten/sagen, dass..." ist ein Standard-Strukturmittel für das Fazit eines Aufsatzes.',
      th: '"Zusammenfassend" (สรุปความได้ว่า) เป็นวลีเกริ่นนำยอดนิยมสำหรับย่อหน้าสรุปข้อเขียน (Fazit/Schluss) เพื่อให้งานเขียนเป็นระบบและสละสลวย',
      en: '"Zusammenfassend" (in summary / in conclusion) is a transitional adverb used to introduce the concluding remarks of a text.'
    }
  },
  {
    id: 'b2c1-w7',
    level: 'B2',
    type: 'writing',
    question: 'Bezüglich Ihres Schreibens vom 10. Mai möchte ich ___ wie folgt Stellung nehmen:',
    options: ['hierzu', 'darüber', 'damit', 'wovon'],
    correctIndex: 0,
    translations: {
      de: 'Bezüglich Ihres Schreibens vom 10. Mai möchte ich hierzu wie folgt Stellung nehmen:',
      th: 'อ้างอิงถึงจดหมายของคุณลงวันที่ 10 พฤษภาคม ฉันขออนุญาตชี้แจงจุดยืนและแสดงความคิดเห็นต่อเรื่องนี้ดังต่อไปนี้',
      en: 'With regard to your letter of May 10, I would like to take a position on this as follows:'
    },
    explanation: {
      de: '"Stellung nehmen zu + Dativ". Das Pronominaladverb "hierzu" bezieht sich auf das zuvor erwähnte Schreiben ("zu diesem Schreiben").',
      th: 'สำนวนคือ "Stellung nehmen zu (แสดงความเห็น/ชี้แจงจุดยืนต่อสิ่งใด)" ดังนั้นเมื่ออ้างถึงจดหมายข้างต้น จึงเปลี่ยนเป็นรูปสรรพนามบุพบท "hierzu" (ต่อสิ่งนี้)',
      en: 'The idiom is "Stellung nehmen zu + Dative". The pronominal adverb "hierzu" replaces "zu diesem Schreiben" to refer back to the letter.'
    }
  },
  {
    id: 'b2c1-w8',
    level: 'C1',
    type: 'writing',
    question: 'Es steht außer ___, dass eine fundierte Ausbildung die Chancen auf dem Arbeitsmarkt maximiert.',
    options: ['Zweifel', 'Frage', 'Diskussion', 'Gefahr'],
    correctIndex: 0,
    translations: {
      de: 'Es steht außer Zweifel, dass eine fundierte Ausbildung die Chancen auf dem Arbeitsmarkt maximiert.',
      th: 'เป็นเรื่องที่ปราศจากข้อสงสัยใดๆ (แน่นอนที่สุด) ว่าการมีการศึกษาที่ดีและมั่นคงจะช่วยเพิ่มโอกาสสำเร็จในตลาดแรงงานได้อย่างสูงสุด',
      en: 'There is no doubt that sound education/training maximizes opportunities in the labor market.'
    },
    explanation: {
      de: 'Das Funktionsverbgefüge "außer Zweifel stehen" bedeutet "völlig sicher / unumstritten sein".',
      th: 'สำนวนโครงสร้างกริยาเชิงฟังก์ชัน (Funktionsverbgefüge) "außer Zweifel stehen" แปลว่า "แน่นอน/ไม่ต้องสงสัยเลย" (ไม่มีการใช้ außer Frage ในความหมายนี้)',
      en: 'The noun-verb combination "außer Zweifel stehen" is a formal academic structure meaning "to be beyond doubt / unquestionable".'
    }
  },
  {
    id: 'b2c1-w9',
    level: 'C1',
    type: 'writing',
    question: 'Unter Berücksichtigung aller genannten Faktoren sollten wir die endgültige Entscheidung ___ aufschieben.',
    options: ['vorerst', 'damit', 'jederzeit', 'neulich'],
    correctIndex: 0,
    translations: {
      de: 'Unter Berücksichtigung aller genannten Faktoren sollten wir die endgültige Entscheidung vorerst aufschieben.',
      th: 'เมื่อพิจารณาปัจจัยทั้งหมดที่กล่าวมาแล้ว พวกเราควรจะเลื่อนการตัดสินใจขั้นสุดท้ายออกไปก่อนในระยะนี้',
      en: 'Taking all mentioned factors into account, we should postpone the final decision for the time being.'
    },
    explanation: {
      de: '"vorerst" bedeutet "fürs Erste / im Moment noch" und drückt eine temporäre Verzögerung aus. Passt perfekt zum Verb "aufschieben".',
      th: '"vorerst" (ณ ขณะนี้/ไว้ก่อนชั่วคราว) สอดคล้องอย่างยิ่งกับกริยา "aufschieben" (เลื่อนเวลาออกไป) เพื่อแสดงท่าทีรอบคอบในการเขียนเชิงวิชาชีพ',
      en: '"vorerst" means "for now / for the time being" and perfectly complements the action of postponing ("aufschieben").'
    }
  },
  {
    id: 'b2c1-w10',
    level: 'C1',
    type: 'writing',
    question: 'Um wissenschaftliche Redlichkeit zu garantieren, muss man fremdes Gedankengut stets präzise ___.',
    options: ['zitieren', 'formulieren', 'kopieren', 'erfinden'],
    correctIndex: 0,
    translations: {
      de: 'Um wissenschaftliche Redlichkeit zu garantieren, muss man fremdes Gedankengut stets präzise zitieren.',
      th: 'เพื่อรับประกันความซื่อสัตย์สุจริตทางวิชาการ เราจำเป็นต้องอ้างอิงแนวคิดหรือผลงานของผู้อื่นอย่างถูกต้องและแม่นยำเสมอ',
      en: 'To guarantee scientific integrity, one must always cite external ideas/works precisely.'
    },
    explanation: {
      de: '"zitieren" ist der korrekte Begriff für das Kennzeichnen und Belegen von Gedanken und Texten anderer Autoren.',
      th: '"zitieren" (อ้างอิงแหล่งที่มา/อัญพจน์) คือหัวใจหลักของจริยธรรมการเขียนเชิงวิชาการระดับสูง ป้องกันการคัดลอกผลงานโดยมิชอบ (Plagiat)',
      en: '"zitieren" (to cite / quote) is the correct academic term for referencing and acknowledging other authors\' intellectual property.'
    }
  },

  // --- SPEAKING SECTION (21-30) ---
  {
    id: 'b2c1-s1',
    level: 'B2',
    type: 'speaking',
    question: 'Wie stehst du eigentlich zu diesem umstrittenen Vorschlag? - Um ehrlich zu sein, bin ich ganz deiner ___.',
    options: ['Meinung', 'Ansicht', 'Idee', 'Stimme'],
    correctIndex: 0,
    translations: {
      de: 'Wie stehst du eigentlich zu diesem umstrittenen Vorschlag? - Um ehrlich zu sein, bin ich ganz deiner Meinung.',
      th: 'เธอมีความคิดเห็นอย่างไรกับข้อเสนอที่เป็นประเด็นถกเถียงนี้เหรอ? - พูดตามตรงนะ ฉันเห็นด้วยกับเธอทุกประการเลย',
      en: 'What is your stance on this controversial proposal? - To be honest, I am completely of your opinion.'
    },
    explanation: {
      de: 'Der feste Ausdruck für Zustimmung lautet "einer Meinung sein" ("ich bin deiner Meinung" = ich stimme dir zu).',
      th: 'สำนวนบอกความเห็นพ้องในการพูดคุยคือ "jds. Meinung sein" (มีความเห็นเดียวกับใคร) ในที่นี้ผันในรูป Genitiv เพศหญิงคือ "deiner Meinung"',
      en: 'The standard idiom to express agreement with someone is "einer Meinung sein" (to be of the same opinion).'
    }
  },
  {
    id: 'b2c1-s2',
    level: 'B2',
    type: 'speaking',
    question: 'Keine Sorge wegen des Fehlers im Bericht. Das geht voll und ganz auf meine ___!',
    options: ['Kappe', 'Tasche', 'Hand', 'Kosten'],
    correctIndex: 0,
    translations: {
      de: 'Keine Sorge wegen des Fehlers im Bericht. Das geht voll und ganz auf meine Kappe!',
      th: 'ไม่ต้องกังวลเกี่ยวกับข้อผิดพลาดในรายงานหรอกนะ เรื่องนี้ฉันขอรับผิดชอบเองทั้งหมดเลย!',
      en: 'Don\'t worry about the mistake in the report. That is entirely on me (my responsibility)!'
    },
    explanation: {
      de: 'Die Redewendung "etwas auf seine Kappe nehmen" bedeutet, die Verantwortung für einen Fehler oder ein Risiko zu übernehmen.',
      th: 'สำนวนพูดคุยประจำวัน "etwas auf seine Kappe nehmen/gehen" แปลว่า "รับเป็นความรับผิดชอบของตนเอง/ยืดอกรับผิด"',
      en: 'The colloquial German expression "etwas auf seine Kappe nehmen" means to take full responsibility or blame for a mistake.'
    }
  },
  {
    id: 'b2c1-s3',
    level: 'B2',
    type: 'speaking',
    question: 'Ich habe das Vorstellungsgespräch gestern komplett verpatzt. - Ach, Kopf ___! Das nächste Mal klappt es bestimmt.',
    options: ['hoch', 'runter', 'voran', 'auf'],
    correctIndex: 0,
    translations: {
      de: 'Ich habe das Vorstellungsgespräch gestern komplett verpatzt. - Ach, Kopf hoch! Das nächste Mal klappt es bestimmt.',
      th: 'เมื่อวานนี้ฉันทำพังกับการสัมภาษณ์งานไปหมดเลย - เอาน่า เชิดหน้าสู้เข้าไว้! ครั้งหน้าต้องสำเร็จแน่นอน',
      en: 'I completely messed up the job interview yesterday. - Oh, cheer up! Next time it will definitely work out.'
    },
    explanation: {
      de: 'Der ermutigende Zuruf "Kopf hoch!" wird verwendet, um jemanden in einer enttäuschenden Situation zu trösten und Mut zuzusprechen.',
      th: 'สำนวนให้กำลังใจเวลาเพื่อนท้อแท้คือ "Kopf hoch!" แปลตรงตัวคือให้เชิดหัวขึ้น หรือเทียบเท่ากับ "สู้ๆ นะ / อย่าเพิ่งหมดหวัง"',
      en: 'The encouraging idiomatic phrase "Kopf hoch!" (literally: head up) is used to comfort and motivate someone who is down.'
    }
  },
  {
    id: 'b2c1-s4',
    level: 'C1',
    type: 'speaking',
    question: 'Wegen der aktuellen Wirtschaftskrise müssen wir in nächster Zeit wohl den Gürtel enger ___.',
    options: ['schnallen', 'binden', 'ziehen', 'schließen'],
    correctIndex: 0,
    translations: {
      de: 'Wegen der aktuellen Wirtschaftskrise müssen wir in nächster Zeit wohl den Gürtel enger schnallen.',
      th: 'เนื่องจากวิกฤตเศรษฐกิจในปัจจุบัน ในช่วงเวลาหลังจากนี้พวกเราคงต้องรัดเข็มขัดให้แน่นขึ้น (ประหยัดค่าใช้จ่าย)',
      en: 'Due to the current economic crisis, we will probably have to tighten our belts in the near future.'
    },
    explanation: {
      de: 'Die Redewendung "den Gürtel enger schnallen" bedeutet, sparsamer zu leben und die Ausgaben deutlich zu reduzieren.',
      th: 'สำนวนอุปมาอุปไมยด้านการเงิน "den Gürtel enger schnallen" แปลว่า "รัดเข็มขัด / ประหยัดอดออมเนื่องจากรายได้ลดลง"',
      en: 'The idiom "den Gürtel enger schnallen" means to live more frugally and reduce expenditures during tough times.'
    }
  },
  {
    id: 'b2c1-s5',
    level: 'C1',
    type: 'speaking',
    question: 'Rede doch bitte nicht ständig um den heißen ___ herum, sondern sag mir klipp und klar, was los ist!',
    options: ['Brei', 'Topf', 'Ofen', 'Kuchen'],
    correctIndex: 0,
    translations: {
      de: 'Rede doch bitte nicht ständig um den heißen Brei herum, sondern sag mir klipp und klar, was los ist!',
      th: 'กรุณาอย่าพูดอ้อมค้อมไปมาอยู่เลย ช่วยบอกฉันมาตรงๆ ชัดเจนเลยดีกว่าว่าเกิดอะไรขึ้น!',
      en: 'Please don\'t keep beating around the bush, just tell me clearly what is going on!'
    },
    explanation: {
      de: 'Die Redewendung "um den heißen Brei herumreden" bedeutet, eine klare Antwort zu vermeiden und das eigentliche Thema ungesagt zu lassen.',
      th: 'สำนวนพูดสุดคลาสสิก "um den heißen Brei herumreden" แปลตรงตัวคือพูดรอบโจ๊กที่ยังร้อนอยู่ หรือเปรียบเทียบคือ "พูดอ้อมค้อมไม่ยอมเข้าประเด็นหลัก"',
      en: 'The idiomatic expression "um den heißen Brei herumreden" means to beat around the bush or avoid speaking directly about a sensitive topic.'
    }
  },
  {
    id: 'b2c1-s6',
    level: 'C1',
    type: 'speaking',
    question: 'Haben Sie verstanden, worum es in dieser komplexen Software-Schulung ging? - Nein, ehrlich gesagt verstehe ich nur ___.',
    options: ['Bahnhof', 'Flughafen', 'Zug', 'Auto'],
    correctIndex: 0,
    translations: {
      de: 'Haben Sie verstanden, worum es in dieser komplexen Software-Schulung ging? - Nein, ehrlich gesagt verstehe ich nur Bahnhof.',
      th: 'คุณเข้าใจไหมว่าการอบรมซอฟต์แวร์ที่ซับซ้อนนี้เกี่ยวกับอะไร? - ไม่เลยครับ พูดตรงๆ คือฉันฟังไม่รู้เรื่องเลยสักนิดเดียว',
      en: 'Did you understand what this complex software training was about? - No, to be honest, it is all Greek to me.'
    },
    explanation: {
      de: 'Die umgangssprachliche Redewendung "nur Bahnhof verstehen" bedeutet, dass man absolut nichts von dem versteht, was gesagt wird.',
      th: 'สำนวนเยอรมันแท้ "nur Bahnhof verstehen" (เข้าใจแต่คำว่าสถานีรถไฟ) มีความหมายว่า "ฟังไม่เข้าใจเลยสักนิด / จับต้นชนปลายไม่ถูกเลย"',
      en: 'The popular colloquial idiom "nur Bahnhof verstehen" means to understand absolutely nothing of what is being explained.'
    }
  },
  {
    id: 'b2c1-s7',
    level: 'B2',
    type: 'speaking',
    question: 'Er redet zwar sehr viel und eloquent, aber er drückt sich immer um eine konkrete ___ herum.',
    options: ['Antwort', 'Frage', 'Arbeit', 'Meinung'],
    correctIndex: 0,
    translations: {
      de: 'Er redet zwar sehr viel und eloquent, aber er drückt sich immer um eine konkrete Antwort herum.',
      th: 'แม้เขาจะพูดเก่งและดูภูมิฐานมาก แต่เขามักจะหลบเลี่ยงไม่ยอมให้คำตอบที่ชัดเจนและเป็นรูปธรรมเสมอ',
      en: 'Although he talks a lot and eloquently, he always dodges a concrete answer.'
    },
    explanation: {
      de: '"sich um etwas herumdrücken" bedeutet, einer Pflicht, Aufgabe oder klaren Stellungnahme geschickt aus dem Weg zu gehen.',
      th: 'กริยา "sich um etw. herumdrücken" แปลว่า "บ่ายเบี่ยง / หลบเลี่ยง (ความรับผิดชอบหรือคำตอบตรงๆ)" มักตามด้วยนามเพศหญิง "Antwort"',
      en: '"sich um etwas herumdrücken" is a common phrase meaning to dodge, evade, or avoid a duty, task, or clear statement.'
    }
  },
  {
    id: 'b2c1-s8',
    level: 'C1',
    type: 'speaking',
    question: 'Mit meiner unbedachten kritischen Äußerung vor dem Chef habe ich mich gestern vollkommen in die ___ gesetzt.',
    options: ['Nesseln', 'Haare', 'Karten', 'Wolken'],
    correctIndex: 0,
    translations: {
      de: 'Mit meiner unbedachten kritischen Äußerung vor dem Chef habe ich mich gestern vollkommen in die Nesseln gesetzt.',
      th: 'การที่ฉันแสดงความเห็นวิพากษ์วิจารณ์อย่างไม่ยั้งคิดต่อหน้าเจ้านายเมื่อวานนี้ ทำให้ฉันตกที่นั่งลำบาก (สร้างปัญหาให้ตัวเอง) เสียแล้ว',
      en: 'With my thoughtless critical remark in front of the boss yesterday, I got myself into serious hot water.'
    },
    explanation: {
      de: 'Die Redewendung "sich in die Nesseln setzen" bedeutet, sich durch unvorsichtiges Verhalten Unannehmlichkeiten oder Ärger einzuhandeln.',
      th: 'สำนวน "sich in die Nesseln setzen" (เข้าไปนั่งในกอต้นตำแยที่คันและแสบ) แปลว่า "แส่หาเรื่องใส่ตัว / หาเหาใส่หัว / ตกที่นั่งลำบากเพราะคำพูดตัวเอง"',
      en: 'The figurative expression "sich in die Nesseln setzen" (literally: to sit in the nettles) means to get into trouble or hot water due to indiscretion.'
    }
  },
  {
    id: 'b2c1-s9',
    level: 'B2',
    type: 'speaking',
    question: 'Unser mühsam ausgearbeitetes Konzept wurde vom Vorstand abgelehnt. Jetzt müssen wir wieder ganz bei ___ anfangen.',
    options: ['Null', 'Eins', 'Anfang', 'Ende'],
    correctIndex: 0,
    translations: {
      de: 'Unser mühsam ausgearbeitetes Konzept wurde vom Vorstand abgelehnt. Jetzt müssen wir wieder ganz bei Null anfangen.',
      th: 'แนวคิดที่พวกเราอุตส่าห์ร่วมกันระดมสมองคิดมาอย่างยากลำบากถูกคณะกรรมการปฏิเสธ ตอนนี้เราคงต้องกลับไปเริ่มต้นนับหนึ่งใหม่หมดเลย',
      en: 'Our painstakingly developed concept was rejected by the board. Now we have to start from scratch all over again.'
    },
    explanation: {
      de: 'Der Ausdruck "bei Null anfangen" bedeutet, nach einem Fehlschlag oder einer Änderung wieder ganz von vorn zu beginnen.',
      th: 'สำนวน "bei Null anfangen" (เริ่มต้นนับศูนย์ใหม่) แปลตรงกับภาษาไทยว่า "เริ่มต้นจากศูนย์ / เริ่มต้นใหม่ทั้งหมดจากจุดไม่มีอะไรเลย"',
      en: '"bei Null anfangen" (to start from zero) is the German equivalent of starting completely from scratch or going back to square one.'
    }
  },
  {
    id: 'b2c1-s10',
    level: 'C1',
    type: 'speaking',
    question: 'Ich weiß, dass morgen deine entscheidende Abschlussprüfung ansteht. Ich drücke dir ganz fest beide ___!',
    options: ['Daumen', 'Hände', 'Finger', 'Augen'],
    correctIndex: 0,
    translations: {
      de: 'Ich weiß, dass morgen deine entscheidende Abschlussprüfung ansteht. Ich drücke dir ganz fest beide Daumen!',
      th: 'ฉันรู้นะว่าพรุ่งนี้เธอมีสอบไล่ครั้งสำคัญที่สุด ฉันขอส่งกำลังใจและช่วยลุ้น (ขอให้โชคดี) อย่างเต็มที่เลยนะ!',
      en: 'I know that your decisive final exam is tomorrow. I will keep my fingers crossed tightly for you!'
    },
    explanation: {
      de: 'Die Redewendung "jemandem die Daumen drücken" drückt den Wunsch aus, dass eine andere Person Erfolg bei einer schwierigen Aufgabe hat.',
      th: 'สำนวนอวยพรอันดับหนึ่งของคนเยอรมัน "jdm. die Daumen drücken" (กดนิ้วหัวแม่โป้งให้ใคร) แปลว่า "อวยพรให้โชคดี / ขอให้ประสบความสำเร็จ"',
      en: '"jemandem die Daumen drücken" is the German cultural equivalent of keeping ones fingers crossed to wish someone good luck.'
    }
  }
]
