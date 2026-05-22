export type Language = 'de' | 'th' | 'en'

export interface Translations {
  appName: string
  subtitle: string
  startTest: string
  restartTest: string
  selectLevel: string
  allLevels: string
  allLevelsDesc: string
  a1Desc: string
  a2Desc: string
  b1Desc: string
  nextQuestion: string
  finishTest: string
  results: string
  recommendedLevel: string
  score: string
  correct: string
  incorrect: string
  explanation: string
  questionCount: string
  levelIndicator: string
  theme: string
  language: string
  themeLight: string
  themeDark: string
  themeGerman: string
  themeSepia: string
  backToHome: string
  adaptiveNotice: string
  levelA1Status: string
  levelA2Status: string
  levelB1Status: string
  correctCount: string
  incorrectCount: string
  difficultyChanged: string
  difficultyIncreased: string
  difficultyDecreased: string
  difficultyStable: string
  testCompleted: string
  generalInfo: string
  levelA1DescDetail: string
  levelA2DescDetail: string
  levelB1DescDetail: string
  belowA1DescDetail: string
  aboveB1DescDetail: string
  diagnosticReport: string
  yourAnswer: string
  correctAnswer: string
  questionTranslation: string
  grammarConcept: string
  adaptiveTestAlert: string
  adaptiveExplanation: string
  
  // New Translations
  grammarBadge: string
  vocabularyBadge: string
  accuracy: string
  a1TestTitle: string
  a2TestTitle: string
  b1TestTitle: string
  vocabTestTitle: string
  vocabTestDesc: string
  vocabAnalysisTitle: string
  vocabStrength: string
  vocabFeedbackHigh: string
  vocabFeedbackMid: string
  vocabFeedbackLow: string
  passedExcellent: string
  borderlinePass: string
  borderlinePassDesc: string
  belowLevel: string
  belowLevelDesc: string
}

export const translations: Record<Language, Translations> = {
  de: {
    appName: 'Deutsch mit Flo',
    subtitle: 'German Einstufungstest (A1 - B1)',
    startTest: 'Test starten',
    restartTest: 'Test neu starten',
    selectLevel: 'Wählen Sie Ihre Teststufe',
    allLevels: 'Gesamttest (Adaptiv)',
    allLevelsDesc: 'Dieser Test passt sich Ihrem Niveau an. Er startet bei A1 und wird schwerer, wenn Sie richtig antworten, oder leichter, wenn Sie Fehler machen.',
    a1Desc: '30 Fragen zur Überprüfung grundlegender Grammatik und des Basiswortschatzes auf A1-Niveau.',
    a2Desc: '30 Fragen zur Überprüfung von Nebensätzen, Wechselpräpositionen und Adjektivdeklinationen (A2-Niveau).',
    b1Desc: '30 Fragen zur Überprüfung von Passiv, Konjunktiv II, zweiteiligen Konjunktionen und B1-Wortschatz.',
    nextQuestion: 'Nächste Frage',
    finishTest: 'Test beenden',
    results: 'Testergebnisse',
    recommendedLevel: 'Ihr empfohlenes Niveau',
    score: 'Ergebnis',
    correct: 'Richtig',
    incorrect: 'Falsch',
    explanation: 'Erklärung',
    questionCount: 'Frage',
    levelIndicator: 'Stufe',
    theme: 'Design',
    language: 'Sprache',
    themeLight: 'Hell',
    themeDark: 'Dunkel',
    themeGerman: 'Deutschland',
    themeSepia: 'Sepia',
    backToHome: 'Zurück zur Startseite',
    adaptiveNotice: 'Adaptiver Modus: Die Schwierigkeit ändert sich dynamisch je nach Ihren Antworten.',
    levelA1Status: 'Niveau A1 Fortschritt',
    levelA2Status: 'Niveau A2 Fortschritt',
    levelB1Status: 'Niveau B1 Fortschritt',
    correctCount: 'Richtig beantwortet',
    incorrectCount: 'Falsch beantwortet',
    difficultyChanged: 'Niveau angepasst',
    difficultyIncreased: 'Schwierigkeit erhöht! Gute Arbeit! 🚀',
    difficultyDecreased: 'Schwierigkeit verringert, um Ihr Fundament zu prüfen. 📉',
    difficultyStable: 'Schwierigkeit bleibt stabil.',
    testCompleted: 'Herzlichen Glückwunsch! Sie haben den Test abgeschlossen.',
    generalInfo: 'Detailliertes Feedback',
    levelA1DescDetail: 'Sie haben das Niveau A1 erreicht! Sie können vertraute, alltägliche Ausdrücke und ganz einfache Sätze verstehen und verwenden.',
    levelA2DescDetail: 'Sie haben das Niveau A2 erreicht! Sie können Sätze und häufig gebrauchte Ausdrücke verstehen, die mit Bereichen von ganz unmittelbarer Bedeutung zusammenhängen (z.B. Informationen zur Person und zur Familie, Einkaufen, Arbeit).',
    levelB1DescDetail: 'Sie haben das Niveau B1 erreicht! Sie können die Hauptpunkte verstehen, wenn klare Standardsprache verwendet wird und es um vertraute Dinge aus Arbeit, Schule, Freizeit usw. geht.',
    belowA1DescDetail: 'Sie stehen noch ganz am Anfang Ihrer Deutschreise. Lernen Sie grundlegende Vokabeln, Pronomen und einfache Präsens-Verbkonjugationen mit Deutsch mit Flo!',
    aboveB1DescDetail: 'Hervorragend! Sie haben fast alle B1-Fragen fehlerfrei gelöst. Sie sind bereit für das Niveau B2! Suchen Sie nach weiterführenden Materialien mit Deutsch mit Flo.',
    diagnosticReport: 'Diagnostischer Bericht',
    yourAnswer: 'Ihre Antwort',
    correctAnswer: 'Richtige Antwort',
    questionTranslation: 'Übersetzung der Frage',
    grammarConcept: 'Grammatik & Wortschatz Erklärung',
    adaptiveTestAlert: 'Adaptiver Test läuft',
    adaptiveExplanation: 'Dieser Test nutzt ein intelligentes adaptives System: Wenn Sie eine Frage richtig beantworten, wird die nächste Frage schwerer (z. B. von A1 zu A2). Antworten Sie falsch, wird das System einfacher. So messen wir Ihr Niveau präzise mit nur 30 Fragen.',
    
    // New Translations
    grammarBadge: 'Grammatik',
    vocabularyBadge: 'Wortschatz',
    accuracy: 'Genauigkeit',
    a1TestTitle: 'A1 Einstufungstest',
    a2TestTitle: 'A2 Einstufungstest',
    b1TestTitle: 'B1 Einstufungstest',
    vocabTestTitle: 'Wortschatz-Test (Spezifisch)',
    vocabTestDesc: '30 Fragen zur gezielten Überprüfung Ihres Wortschatzes über alle GER-Stufen (A1, A2, B1).',
    vocabAnalysisTitle: 'Wortschatz-Analyse',
    vocabStrength: 'Wortschatz-Niveau',
    vocabFeedbackHigh: 'Hervorragender Wortschatz! Sie verfügen über einen präzisen und vielfältigen Wortschatz auf allen geprüften Ebenen. Sie können sich differenziert ausdrücken.',
    vocabFeedbackMid: 'Guter Wortschatz. Sie kennen die wichtigsten Wörter des Alltags, sollten aber spezifischere Begriffe der Stufen A2 und B1 weiter festigen.',
    vocabFeedbackLow: 'Ausbaufähiger Wortschatz. Ihr Wortschatz ist noch auf einfache Grundbegriffe beschränkt. Lernen Sie gezielt Vokabeln mit Deutsch mit Flo!',
    passedExcellent: 'Bestanden (Ausgezeichnet)',
    borderlinePass: 'Knapp bestanden',
    borderlinePassDesc: 'Sie zeigen gute Grundlagen in {level}, aber einige wichtige Grammatikpunkte müssen überprüft werden. Überprüfen Sie die Liste unten!',
    belowLevel: 'Unter {level}',
    belowLevelDesc: 'Sie haben weniger als 50% in {level} erreicht. Wir empfehlen, die Lektionen des vorherigen Niveaus zu wiederholen und es noch einmal mit Deutsch mit Flo zu versuchen!'
  },
  th: {
    appName: 'Deutsch mit Flo',
    subtitle: 'แบบทดสอบวัดระดับภาษาเยอรมัน (A1 - B1)',
    startTest: 'เริ่มทำข้อสอบ',
    restartTest: 'เริ่มทำข้อสอบใหม่',
    selectLevel: 'เลือกแบบทดสอบวัดระดับของคุณ',
    allLevels: 'วัดระดับโดยรวม (แบบปรับตามผู้สอบ - Adaptive)',
    allLevelsDesc: 'ระบบจะปรับระดับความยากของข้อคำถามตามความถูกต้องของคุณ โดยเริ่มต้นที่ระดับ A1 หากตอบถูกระดับความยากจะเพิ่มขึ้น และหากตอบผิดความยากจะลดลง',
    a1Desc: 'ข้อสอบ 30 ข้อ สำหรับวัดความรู้ด้านไวยากรณ์พื้นฐานและคำศัพท์ที่จำเป็นในระดับ A1',
    a2Desc: 'ข้อสอบ 30 ข้อ สำหรับวัดระดับไวยากรณ์ประโยคย่อย (Nebensatz), คำบุพบทสองหน้า และการผันคำคุณศัพท์ในระดับ A2',
    b1Desc: 'ข้อสอบ 30 ข้อ สำหรับวัดระดับประโยคถูกกระทำ (Passiv), Konjunktiv II, คำเชื่อมสองส่วน และคำศัพท์ระดับ B1',
    nextQuestion: 'ข้อถัดไป',
    finishTest: 'ส่งข้อสอบ',
    results: 'สรุปผลคะแนน',
    recommendedLevel: 'ระดับภาษาที่แนะนำของคุณ',
    score: 'คะแนนของคุณ',
    correct: 'ถูกต้อง',
    incorrect: 'ผิด',
    explanation: 'คำอธิบายเพิ่มเติม',
    questionCount: 'คำถามข้อที่',
    levelIndicator: 'ระดับความยาก',
    theme: 'ธีมหน้าจอ',
    language: 'ภาษา',
    themeLight: 'โหมดสว่าง',
    themeDark: 'โหมดมืด',
    themeGerman: 'ธงเยอรมัน',
    themeSepia: 'ซีเปีย',
    backToHome: 'กลับสู่หน้าหลัก',
    adaptiveNotice: 'ระบบปรับระดับ: ความยากจะเปลี่ยนแปลงโดยอัตโนมัติตามคำตอบของคุณ',
    levelA1Status: 'ความคืบหน้าในระดับ A1',
    levelA2Status: 'ความคืบหน้าในระดับ A2',
    levelB1Status: 'ความคืบหน้าในระดับ B1',
    correctCount: 'ตอบถูก',
    incorrectCount: 'ตอบผิด',
    difficultyChanged: 'ปรับเปลี่ยนความยาก',
    difficultyIncreased: 'ระดับความยากเพิ่มขึ้น! เก่งมากครับ! 🚀',
    difficultyDecreased: 'ระดับความยากลดลง เพื่อตรวจสอบพื้นฐานของคุณให้มั่นใจ 📉',
    difficultyStable: 'ระดับความยากคงที่',
    testCompleted: 'ยินดีด้วยครับ! คุณทำข้อสอบเสร็จสิ้นเรียบร้อยแล้ว',
    generalInfo: 'รายงานการวิเคราะห์และข้อเสนอแนะ',
    levelA1DescDetail: 'ยินดีด้วย! คุณผ่านระดับ A1 คุณสามารถเข้าใจและประยุกต์ใช้ประโยคพื้นฐานในชีวิตประจำวันเพื่อสื่อสารเรื่องใกล้ตัวอย่างง่ายๆ ได้ดี',
    levelA2DescDetail: 'ยินดีด้วย! คุณผ่านระดับ A2 คุณสามารถจับใจความสำคัญของประโยคสื่อสารที่ใช้บ่อยในชีวิตประจำวัน เช่น ข้อมูลส่วนตัว ครอบครัว การซื้อของ การทำงาน และการเดินทาง',
    levelB1DescDetail: 'ยินดีด้วย! คุณผ่านระดับ B1 คุณสามารถเข้าใจประเด็นสำคัญเมื่อใช้ภาษากลางที่เป็นมาตรฐานในเรื่องที่คุ้นเคย เช่น การทำงาน โรงเรียน งานอดิเรก และสามารถสื่อสารอธิบายความคิดเห็นของตนเองได้',
    belowA1DescDetail: 'คุณกำลังเริ่มต้นเรียนรู้ภาษาเยอรมัน ขอแนะนำให้ฝึกฝนคำศัพท์พื้นฐาน คำสรรพนาม และการผันกริยาพื้นฐานในประโยคปัจจุบันง่ายๆ ร่วมกับ Deutsch mit Flo นะครับ!',
    aboveB1DescDetail: 'ยอดเยี่ยมมากครับ! คุณทำข้อสอบระดับ B1 ได้เกือบสมบูรณ์แบบ แสดงว่าคุณพร้อมแล้วสำหรับระดับ B2 สามารถศึกษาเนื้อหาขั้นสูงและติดต่อรับคำแนะนำดีๆ จาก Deutsch mit Flo ได้เลย!',
    diagnosticReport: 'รายงานวิเคราะห์ข้อสอบรายข้อ',
    yourAnswer: 'คำตอบของคุณ',
    correctAnswer: 'คำตอบที่ถูกต้อง',
    questionTranslation: 'คำแปลคำถาม',
    grammarConcept: 'คำอธิบายหลักไวยากรณ์และคำศัพท์',
    adaptiveTestAlert: 'กำลังดำเนินข้อสอบแบบปรับระดับความยาก (Adaptive Test)',
    adaptiveExplanation: 'ข้อสอบนี้ใช้ระบบปรับความยากอัจฉริยะ: เมื่อคุณตอบถูก ข้อถัดไปจะท้าทายยิ่งขึ้น (เช่น จาก A1 ขึ้นไป A2) แต่หากคุณตอบผิด ระบบจะปรับระดับข้อถัดไปให้อ่อนโยนลงเพื่อวัดทักษะพื้นฐาน ทำให้ผลลัพธ์มีความแม่นยำอย่างเป็นวิทยาศาสตร์ด้วยข้อสอบเพียง 30 ข้อ',
    
    // New Translations
    grammarBadge: 'ไวยากรณ์',
    vocabularyBadge: 'คำศัพท์',
    accuracy: 'ความแม่นยำ',
    a1TestTitle: 'แบบทดสอบวัดระดับ A1',
    a2TestTitle: 'แบบทดสอบวัดระดับ A2',
    b1TestTitle: 'แบบทดสอบวัดระดับ B1',
    vocabTestTitle: 'แบบทดสอบคลังคำศัพท์ (เฉพาะทาง)',
    vocabTestDesc: 'ข้อสอบ 30 ข้อ สำหรับวัดคลังคำศัพท์และความแม่นยำทางคำศัพท์ในระดับ A1, A2 และ B1 โดยเฉพาะ',
    vocabAnalysisTitle: 'การวิเคราะห์คลังคำศัพท์',
    vocabStrength: 'ระดับคลังคำศัพท์ที่วิเคราะห์ได้',
    vocabFeedbackHigh: 'คลังคำศัพท์ยอดเยี่ยมมาก! คุณมีคำศัพท์ที่แม่นยำและหลากหลายในทุกระดับที่ทดสอบ สามารถเลือกใช้คำศัพท์เพื่อสื่อสารได้อย่างสละสลวยและเป็นธรรมชาติ',
    vocabFeedbackMid: 'คลังคำศัพท์อยู่ในเกณฑ์ดี คุณรู้จักคำศัพท์พื้นฐานทั่วไปเป็นอย่างดี แต่อาจต้องเสริมศัพท์จำเพาะในระดับ A2 และ B1 เพิ่มเติมเพื่อให้สื่อสารได้ละเอียดยิ่งขึ้น',
    vocabFeedbackLow: 'ควรเพิ่มพูนคลังคำศัพท์เพิ่มเติม คลังคำศัพท์ของคุณยังจำกัดอยู่เพียงคำศัพท์พื้นฐานอย่างง่าย แนะนำให้เน้นท่องจำศัพท์จำเพาะในแต่ละระดับภาษาเพิ่มขึ้นร่วมกับ Deutsch mit Flo ครับ!',
    passedExcellent: 'ผ่านเกณฑ์ (ยอดเยี่ยม)',
    borderlinePass: 'ผ่านเกณฑ์ขั้นต่ำ',
    borderlinePassDesc: 'คุณมีพื้นฐานที่ดีในระดับ {level} แต่ควรทบทวนไวยากรณ์สำคัญบางจุดเพิ่มเติม ตรวจสอบรายงานวิเคราะห์ด้านล่างได้เลยครับ!',
    belowLevel: 'ต่ำกว่าระดับ {level}',
    belowLevelDesc: 'คุณได้คะแนนต่ำกว่า 50% ในระดับ {level} แนะนำให้ทบทวนเนื้อหาบทเรียนของระดับก่อนหน้านี้ และลองทำข้อสอบใหม่อีกครั้งร่วมกับ Deutsch mit Flo นะครับ!'
  },
  en: {
    appName: 'Deutsch mit Flo',
    subtitle: 'German Placement Test (A1 - B1)',
    startTest: 'Start Test',
    restartTest: 'Restart Test',
    selectLevel: 'Choose your testing option',
    allLevels: 'Overall Placement (Adaptive)',
    allLevelsDesc: 'This test dynamically adapts to your performance. It starts at A1 and gets progressively harder when you answer correctly, or easier when you make mistakes.',
    a1Desc: '30 questions measuring core grammar, basic sentence structure, and vocabulary at the A1 level.',
    a2Desc: '30 questions testing subordinate clauses, two-way prepositions, and adjective endings (A2 level).',
    b1Desc: '30 questions testing passive voice, subjunctive II (Konjunktiv II), double-conjunctions, and B1 vocabulary.',
    nextQuestion: 'Next Question',
    finishTest: 'Finish Test',
    results: 'Test Results',
    recommendedLevel: 'Your Recommended Level',
    score: 'Your Score',
    correct: 'Correct',
    incorrect: 'Incorrect',
    explanation: 'Explanation',
    questionCount: 'Question',
    levelIndicator: 'Level',
    theme: 'Theme',
    language: 'Language',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeGerman: 'Germany',
    themeSepia: 'Sepia',
    backToHome: 'Back to Home',
    adaptiveNotice: 'Adaptive Mode: Difficulty changes dynamically based on your accuracy.',
    levelA1Status: 'Level A1 Progress',
    levelA2Status: 'Level A2 Progress',
    levelB1Status: 'Level B1 Progress',
    correctCount: 'Correct answers',
    incorrectCount: 'Incorrect answers',
    difficultyChanged: 'Difficulty Adjusted',
    difficultyIncreased: 'Difficulty increased! Great job! 🚀',
    difficultyDecreased: 'Difficulty decreased to verify your fundamentals. 📉',
    difficultyStable: 'Difficulty remains stable.',
    testCompleted: 'Congratulations! You have completed the test.',
    generalInfo: 'Diagnostic Analysis & Advice',
    levelA1DescDetail: 'You have achieved Level A1! You can understand and use familiar, everyday expressions and very simple sentences aimed at satisfying concrete needs.',
    levelA2DescDetail: 'You have achieved Level A2! You can understand sentences and frequently used expressions related to areas of most immediate relevance (e.g., personal and family information, shopping, employment, local geography).',
    levelB1DescDetail: 'You have achieved Level B1! You can understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc.',
    belowA1DescDetail: 'You are at the very beginning of your German journey. We recommend starting with basic vocabulary, pronouns, and present tense verb conjugations with Deutsch mit Flo!',
    aboveB1DescDetail: 'Exceptional! You answered nearly all B1 questions correctly. You are ready to tackle Level B2! Reach out to Deutsch mit Flo for advanced learning materials and guides.',
    diagnosticReport: 'Detailed Question Analysis',
    yourAnswer: 'Your Answer',
    correctAnswer: 'Correct Answer',
    questionTranslation: 'Question Translation',
    grammarConcept: 'Grammar & Vocabulary Explanation',
    adaptiveTestAlert: 'Adaptive Placement Test in Progress',
    adaptiveExplanation: 'This test uses a smart adaptive engine: when you answer a question correctly, the next question becomes more challenging (e.g. from A1 to A2) to find your limit. If you answer incorrectly, the system presents an easier question to gauge your baseline. This guarantees high precision in just 30 questions.',
    
    // New Translations
    grammarBadge: 'Grammar',
    vocabularyBadge: 'Vocabulary',
    accuracy: 'Accuracy',
    a1TestTitle: 'A1 Placement Test',
    a2TestTitle: 'A2 Placement Test',
    b1TestTitle: 'B1 Placement Test',
    vocabTestTitle: 'Vocabulary Quiz (Level-Specific)',
    vocabTestDesc: '30 questions specifically designed to measure your vocabulary depth and accuracy across all CEFR levels (A1, A2, B1).',
    vocabAnalysisTitle: 'Vocabulary Bank Analysis',
    vocabStrength: 'Analyzed Vocabulary Level',
    vocabFeedbackHigh: 'Excellent vocabulary bank! You possess a precise and diverse vocabulary across all tested levels. You can express yourself clearly and with variety.',
    vocabFeedbackMid: 'Good vocabulary bank. You know key everyday words but should reinforce more specific terms at the A2 and B1 levels to express more detailed ideas.',
    vocabFeedbackLow: 'Developing vocabulary bank. Your vocabulary is still limited to simple basics. Focus on studying level-specific vocabulary lists with Deutsch mit Flo!',
    passedExcellent: 'Passed (Excellent)',
    borderlinePass: 'Borderline Pass',
    borderlinePassDesc: 'You show good fundamentals in {level}, but some key grammatical points need review. Check the diagnostic list below!',
    belowLevel: 'Below {level}',
    belowLevelDesc: 'You scored below 50% in {level}. We recommend focusing on the previous level\'s lessons and trying again with Deutsch mit Flo!'
  }
}
