import { useState, useEffect, useMemo } from 'react'
import {
  Award,
  BookOpen,
  Sparkles,
  Palette,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Info,
  Home,
  Check
} from 'lucide-react'
import { questions, Question } from '../data/questions'
import { translations, Language } from '../utils/translations'

interface UserAnswer {
  question: Question
  selectedOptionIndex: number
  isCorrect: boolean
  difficultyAtTime: 'A1' | 'A2' | 'B1'
}

type Theme = 'light' | 'dark' | 'sepia' | 'germany'

export default function GermanTestApp() {
  // Localization and Theming States
  const [language, setLanguage] = useState<Language>('th') // Default to Thai for regional relevance, easy to switch
  const [theme, setTheme] = useState<Theme>('germany') // Default to Germany theme for a unique authentic feel!

  // Navigation States
  const [mode, setMode] = useState<'home' | 'testing' | 'results'>('home')
  const [testType, setTestType] = useState<'A1' | 'A2' | 'B1' | 'overall' | 'vocabulary'>('overall')

  // Quiz Play States
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [shuffledOptions, setShuffledOptions] = useState<{ text: string; originalIndex: number }[]>([])
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState<boolean>(false)

  // Tracking Arrays
  const [activeQuestionList, setActiveQuestionList] = useState<Question[]>([])
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([])
  const [usedQuestionIds, setUsedQuestionIds] = useState<string[]>([])

  // Adaptive Test Engine States
  const [currentDifficulty, setCurrentDifficulty] = useState<'A1' | 'A2' | 'B1'>('A1')
  const [adaptiveFeedback, setAdaptiveFeedback] = useState<string>('')

  // Active UI Translations Shortcut
  const t = useMemo(() => translations[language], [language])

  // Get Theme CSS classes
  const themeClasses = useMemo(() => {
    switch (theme) {
      case 'light':
        return {
          bg: 'bg-slate-50 text-slate-800 transition-all duration-300',
          card: 'bg-white border border-slate-200 shadow-xl rounded-3xl p-6 md:p-8',
          header: 'bg-white border-b border-slate-100',
          buttonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-200',
          buttonSecondary: 'bg-slate-100 hover:bg-slate-200 text-slate-700',
          optionBtn: 'border border-slate-200 hover:bg-slate-50 text-slate-800',
          optionSelected: 'border-blue-500 bg-blue-50/50 text-blue-900',
          optionCorrect: 'border-emerald-500 bg-emerald-50 text-emerald-900',
          optionIncorrect: 'border-rose-500 bg-rose-50 text-rose-900',
          badge: 'bg-blue-100 text-blue-800',
          badgeA1: 'bg-amber-100 text-amber-800',
          badgeA2: 'bg-orange-100 text-amber-800',
          badgeB1: 'bg-purple-100 text-purple-800',
          feedbackBg: 'bg-blue-50 text-blue-800 border border-blue-100',
          progressBg: 'bg-slate-100',
          progressBar: 'bg-blue-600'
        }
      case 'dark':
        return {
          bg: 'bg-slate-950 text-slate-100 transition-all duration-300',
          card: 'bg-slate-900 border border-slate-800 shadow-2xl rounded-3xl p-6 md:p-8',
          header: 'bg-slate-900/90 border-b border-slate-800 backdrop-blur-md',
          buttonPrimary: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/40',
          buttonSecondary: 'bg-slate-800 hover:bg-slate-700 text-slate-200',
          optionBtn: 'border border-slate-800 hover:bg-slate-800 text-slate-200',
          optionSelected: 'border-indigo-500 bg-indigo-950/40 text-indigo-200',
          optionCorrect: 'border-emerald-500 bg-emerald-950/40 text-emerald-200',
          optionIncorrect: 'border-rose-500 bg-rose-950/40 text-rose-200',
          badge: 'bg-indigo-900/60 text-indigo-300',
          badgeA1: 'bg-amber-950/50 text-amber-300',
          badgeA2: 'bg-orange-950/50 text-orange-300',
          badgeB1: 'bg-purple-950/50 text-purple-300',
          feedbackBg: 'bg-indigo-950/40 text-indigo-300 border border-indigo-900/50',
          progressBg: 'bg-slate-800',
          progressBar: 'bg-indigo-500'
        }
      case 'sepia':
        return {
          bg: 'bg-[#faf6ed] text-[#433422] transition-all duration-300',
          card: 'bg-[#fcf8f2] border border-[#eadaa6] shadow-xl rounded-3xl p-6 md:p-8',
          header: 'bg-[#fcf8f2] border-b border-[#ebdca9]',
          buttonPrimary: 'bg-[#8c6239] hover:bg-[#734d26] text-[#faf6ed] shadow-md shadow-amber-900/20',
          buttonSecondary: 'bg-[#ebdcb9] hover:bg-[#dfceaa] text-[#433422]',
          optionBtn: 'border border-[#ebdca9] hover:bg-[#f3ebd3] text-[#433422]',
          optionSelected: 'border-[#8c6239] bg-[#ebdcb9]/40 text-[#433422]',
          optionCorrect: 'border-emerald-600 bg-emerald-50/60 text-emerald-900',
          optionIncorrect: 'border-rose-600 bg-rose-50/60 text-rose-900',
          badge: 'bg-[#ebdcb9] text-[#734d26]',
          badgeA1: 'bg-[#ebdca9] text-[#734d26]',
          badgeA2: 'bg-[#dfceaa] text-[#734d26]',
          badgeB1: 'bg-[#ebdca9] text-[#734d26]',
          feedbackBg: 'bg-[#f4ebd3] text-[#734d26] border border-[#ebdca9]',
          progressBg: 'bg-[#ebdcb9]/50',
          progressBar: 'bg-[#8c6239]'
        }
      case 'germany':
      default:
        // Elegant German Flag styling: Deep charcoal background, velvet-burgundy card, rich gold highlights.
        return {
          bg: 'bg-[#0a0a0c] text-slate-100 transition-all duration-300',
          card: 'bg-[#151214] border border-red-950/60 shadow-2xl rounded-3xl p-6 md:p-8 relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-gradient-to-r before:from-black before:via-red-600 before:to-amber-500',
          header: 'bg-[#151214] border-b border-red-950/30',
          buttonPrimary: 'bg-amber-500 hover:bg-amber-400 text-black font-semibold shadow-lg shadow-amber-500/20',
          buttonSecondary: 'bg-zinc-900 hover:bg-zinc-800 text-slate-100 border border-red-950/40',
          optionBtn: 'border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/80 text-slate-100',
          optionSelected: 'border-amber-500 bg-amber-500/10 text-amber-200',
          optionCorrect: 'border-emerald-500 bg-emerald-500/10 text-emerald-300',
          optionIncorrect: 'border-rose-500 bg-rose-500/10 text-rose-300',
          badge: 'bg-red-950/40 text-red-300 border border-red-950',
          badgeA1: 'bg-amber-500/10 text-amber-300 border border-amber-500/30',
          badgeA2: 'bg-orange-500/10 text-orange-300 border border-orange-500/30',
          badgeB1: 'bg-purple-500/10 text-purple-300 border border-purple-500/30',
          feedbackBg: 'bg-zinc-900 text-amber-300 border border-red-950/40',
          progressBg: 'bg-zinc-950',
          progressBar: 'bg-gradient-to-r from-red-600 to-amber-500'
        }
    }
  }, [theme])

  // Shuffle options whenever the current question changes
  useEffect(() => {
    if (currentQuestion) {
      const mapped = currentQuestion.options.map((option, idx) => ({
        text: option,
        originalIndex: idx
      }))
      const scrambled = [...mapped].sort(() => Math.random() - 0.5)
      setShuffledOptions(scrambled)
    } else {
      setShuffledOptions([])
    }
  }, [currentQuestion])

  // Start a New Test Session
  const handleStartTest = (type: 'A1' | 'A2' | 'B1' | 'overall' | 'vocabulary') => {
    setTestType(type)
    setUserAnswers([])
    setUsedQuestionIds([])
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setAdaptiveFeedback('')

    if (type === 'overall') {
      // Adaptive test initializes at A1
      setCurrentDifficulty('A1')
      const a1Pool = questions.filter(q => q.level === 'A1')
      const firstQ = a1Pool[Math.floor(Math.random() * a1Pool.length)]
      setCurrentQuestion(firstQ)
      setUsedQuestionIds([firstQ.id])
      setActiveQuestionList([firstQ])
    } else if (type === 'vocabulary') {
      // Draw 30 random vocabulary questions from the entire database
      const vocabPool = questions.filter(q => q.type === 'vocabulary')
      const shuffled = [...vocabPool].sort(() => Math.random() - 0.5).slice(0, 30)
      setActiveQuestionList(shuffled)
      setCurrentQuestion(shuffled[0])
      setUsedQuestionIds([shuffled[0].id])
    } else {
      // Fixed test loads all 30 questions of that specific level
      const levelPool = questions.filter(q => q.level === type)
      // Shuffle the selected pool
      const shuffled = [...levelPool].sort(() => Math.random() - 0.5).slice(0, 30)
      setActiveQuestionList(shuffled)
      setCurrentQuestion(shuffled[0])
      setUsedQuestionIds([shuffled[0].id])
    }

    setMode('testing')
  }

  // Answer Submission and Adaptation Execution
  const handleSelectOption = (shuffledIndex: number) => {
    if (isAnswered || !currentQuestion || shuffledOptions.length === 0) return

    setSelectedOption(shuffledIndex)
    setIsAnswered(true)

    const clickedOption = shuffledOptions[shuffledIndex]
    const isCorrect = clickedOption.originalIndex === currentQuestion.correctIndex

    // Record User Answer
    const currentAnswer: UserAnswer = {
      question: currentQuestion,
      selectedOptionIndex: clickedOption.originalIndex,
      isCorrect,
      difficultyAtTime: currentQuestion.level
    }
    setUserAnswers(prev => [...prev, currentAnswer])

    // If overall test, run the dynamic Adaptive Testing Algorithm
    if (testType === 'overall') {
      let nextDifficulty: 'A1' | 'A2' | 'B1' = currentDifficulty

      if (isCorrect) {
        if (currentDifficulty === 'A1') {
          nextDifficulty = 'A2'
          setAdaptiveFeedback(t.difficultyIncreased)
        } else if (currentDifficulty === 'A2') {
          nextDifficulty = 'B1'
          setAdaptiveFeedback(t.difficultyIncreased)
        } else {
          nextDifficulty = 'B1'
          setAdaptiveFeedback(t.difficultyStable)
        }
      } else {
        if (currentDifficulty === 'B1') {
          nextDifficulty = 'A2'
          setAdaptiveFeedback(t.difficultyDecreased)
        } else if (currentDifficulty === 'A2') {
          nextDifficulty = 'A1'
          setAdaptiveFeedback(t.difficultyDecreased)
        } else {
          nextDifficulty = 'A1'
          setAdaptiveFeedback(t.difficultyStable)
        }
      }
      setCurrentDifficulty(nextDifficulty)
    }
  }

  // Go to Next Question or Conclude Test
  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1

    if (nextIndex >= 30) {
      // We completed 30 questions, move to results!
      setMode('results')
      return
    }

    setCurrentQuestionIndex(nextIndex)
    setSelectedOption(null)
    setIsAnswered(false)
    setAdaptiveFeedback('')

    if (testType === 'overall') {
      // Dynamic question selection based on current difficulty
      const subPool = questions.filter(
        q => q.level === currentDifficulty && !usedQuestionIds.includes(q.id)
      )

      let selectedQ: Question
      if (subPool.length > 0) {
        selectedQ = subPool[Math.floor(Math.random() * subPool.length)]
      } else {
        // Fallback if we somehow run dry (practically impossible as we have 30 questions per level and max 30 questions in the quiz)
        const unUsedPool = questions.filter(q => !usedQuestionIds.includes(q.id))
        selectedQ = unUsedPool[Math.floor(Math.random() * unUsedPool.length)]
      }

      setCurrentQuestion(selectedQ)
      setUsedQuestionIds(prev => [...prev, selectedQ.id])
      setActiveQuestionList(prev => [...prev, selectedQ])
    } else {
      // Fixed test moves sequentially through activeQuestionList
      const selectedQ = activeQuestionList[nextIndex]
      setCurrentQuestion(selectedQ)
      setUsedQuestionIds(prev => [...prev, selectedQ.id])
    }
  }

  // Diagnostic Results Calculation
  const resultsData = useMemo(() => {
    if (userAnswers.length === 0) return null

    const totalQuestions = userAnswers.length
    const correctCount = userAnswers.filter(a => a.isCorrect).length
    const scorePercentage = Math.round((correctCount / totalQuestions) * 100)

    // Analyze performance per level
    const a1Answers = userAnswers.filter(a => a.question.level === 'A1')
    const a2Answers = userAnswers.filter(a => a.question.level === 'A2')
    const b1Answers = userAnswers.filter(a => a.question.level === 'B1')

    const a1Correct = a1Answers.filter(a => a.isCorrect).length
    const a2Correct = a2Answers.filter(a => a.isCorrect).length
    const b1Correct = b1Answers.filter(a => a.isCorrect).length

    // Vocabulary specific diagnostics
    const vocabAnswers = userAnswers.filter(a => a.question.type === 'vocabulary')
    const vocabTotal = vocabAnswers.length
    const vocabCorrect = vocabAnswers.filter(a => a.isCorrect).length
    const vocabPercentage = vocabTotal > 0 ? Math.round((vocabCorrect / vocabTotal) * 100) : 0

    const a1VocabAnswers = vocabAnswers.filter(a => a.question.level === 'A1')
    const a2VocabAnswers = vocabAnswers.filter(a => a.question.level === 'A2')
    const b1VocabAnswers = vocabAnswers.filter(a => a.question.level === 'B1')

    const a1VocabCorrect = a1VocabAnswers.filter(a => a.isCorrect).length
    const a2VocabCorrect = a2VocabAnswers.filter(a => a.isCorrect).length
    const b1VocabCorrect = b1VocabAnswers.filter(a => a.isCorrect).length

    // Overall Recommended Level Logic
    let recommendedLevel = 'A1'
    let levelDetail = t.levelA1DescDetail

    if (testType === 'overall') {
      const a1Success = a1Answers.length > 0 ? a1Correct / a1Answers.length : 0
      const a2Success = a2Answers.length > 0 ? a2Correct / a2Answers.length : 0
      const b1Success = b1Answers.length > 0 ? b1Correct / b1Answers.length : 0

      // Adaptive test checks starting from highest level reached with solid success rate
      if (b1Answers.length >= 3 && b1Success >= 0.7 && scorePercentage >= 80) {
        recommendedLevel = 'B1+ (Ready for B2)'
        levelDetail = t.aboveB1DescDetail
      } else if (b1Answers.length > 0 && b1Success >= 0.5) {
        recommendedLevel = 'B1 (Intermediate)'
        levelDetail = t.levelB1DescDetail
      } else if (a2Answers.length > 0 && a2Success >= 0.5) {
        recommendedLevel = 'A2 (Elementary)'
        levelDetail = t.levelA2DescDetail
      } else if (a1Answers.length > 0 && a1Success >= 0.5) {
        recommendedLevel = 'A1 (Beginner)'
        levelDetail = t.levelA1DescDetail
      } else {
        recommendedLevel = 'Below A1 / Beginner Entry'
        levelDetail = t.belowA1DescDetail
      }
    } else if (testType === 'vocabulary') {
      // Vocabulary-only placement test recommendation
      if (scorePercentage >= 80) {
        recommendedLevel = 'B1+ (Advanced Vocabulary)'
        levelDetail = t.vocabFeedbackHigh
      } else if (scorePercentage >= 50) {
        recommendedLevel = 'A2 - B1 (Good Vocabulary)'
        levelDetail = t.vocabFeedbackMid
      } else {
        recommendedLevel = 'A1 (Basic Vocabulary)'
        levelDetail = t.vocabFeedbackLow
      }
    } else {
      // For fixed tests, recommendation relies purely on score percentage
      if (scorePercentage >= 80) {
        recommendedLevel = t.passedExcellent
        levelDetail = testType === 'A1' ? t.levelA1DescDetail : testType === 'A2' ? t.levelA2DescDetail : t.levelB1DescDetail
      } else if (scorePercentage >= 50) {
        recommendedLevel = t.borderlinePass
        levelDetail = t.borderlinePassDesc.replace('{level}', testType)
      } else {
        recommendedLevel = t.belowLevel.replace('{level}', testType)
        levelDetail = t.belowLevelDesc.replace('{level}', testType)
      }
    }

    // Vocabulary diagnostics analysis text
    let vocabFeedback = t.vocabFeedbackLow
    if (vocabPercentage >= 80) {
      vocabFeedback = t.vocabFeedbackHigh
    } else if (vocabPercentage >= 50) {
      vocabFeedback = t.vocabFeedbackMid
    }

    return {
      totalQuestions,
      correctCount,
      scorePercentage,
      a1Total: a1Answers.length,
      a1Correct,
      a2Total: a2Answers.length,
      a2Correct,
      b1Total: b1Answers.length,
      b1Correct,
      vocabTotal,
      vocabCorrect,
      vocabPercentage,
      a1VocabTotal: a1VocabAnswers.length,
      a1VocabCorrect,
      a2VocabTotal: a2VocabAnswers.length,
      a2VocabCorrect,
      b1VocabTotal: b1VocabAnswers.length,
      b1VocabCorrect,
      vocabFeedback,
      recommendedLevel,
      levelDetail
    }
  }, [userAnswers, testType, language])

  // Progress Bar Width
  const progressPercent = useMemo(() => {
    return Math.round(((currentQuestionIndex) / 30) * 100)
  }, [currentQuestionIndex])

  return (
    <div className={`min-h-screen w-full flex flex-col ${themeClasses.bg}`}>
      {/* GLOBAL HEADER BAR */}
      <header className={`sticky top-0 z-50 px-4 py-3 md:px-8 ${themeClasses.header}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500 overflow-hidden border border-amber-400 shadow-md">
              <img
                src="/assets/logo.png"
                alt="Deutsch mit Flo"
                className="w-full h-full object-cover scale-110"
                onError={(e) => {
                  // Fallback in case of image load failure
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight block">
                {t.appName}
              </span>
              <span className="text-xs opacity-75 block font-medium">
                {t.subtitle}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 rounded-full p-1 border border-black/10 dark:border-white/10">
              {(['de', 'th', 'en'] as Language[]).map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                    language === lang
                      ? theme === 'germany' ? 'bg-amber-500 text-black' : 'bg-slate-700 text-white'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  {lang === 'de' ? '🇩🇪 DE' : lang === 'th' ? '🇹🇭 TH' : '🇬🇧 EN'}
                </button>
              ))}
            </div>

            {/* Theme Selector Icon/Trigger */}
            <div className="relative group">
              <button
                className={`p-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center`}
              >
                <Palette className="w-4 h-4 text-amber-500" />
              </button>
              {/* Theme Dropdown menu */}
              <div className="absolute right-0 top-full mt-2 w-36 bg-slate-900 text-white border border-slate-800 rounded-2xl shadow-xl p-2 hidden group-hover:block z-50">
                {(['light', 'dark', 'sepia', 'germany'] as Theme[]).map(th => (
                  <button
                    key={th}
                    onClick={() => setTheme(th)}
                    className={`w-full text-left px-3 py-2 text-xs rounded-xl hover:bg-slate-800 flex items-center justify-between ${
                      theme === th ? 'text-amber-400 font-bold' : ''
                    }`}
                  >
                    <span>
                      {th === 'light' ? t.themeLight : th === 'dark' ? t.themeDark : th === 'sepia' ? t.themeSepia : t.themeGerman}
                    </span>
                    {theme === th && <Check className="w-3.5 h-3.5 text-amber-400" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT CANVAS */}
      <main className="flex-grow max-w-4xl w-full mx-auto px-4 py-8 md:py-12 flex flex-col justify-center">

        {/* 1. HOME SCREEN */}
        {mode === 'home' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Visual Intro Brand Card */}
            <div className={`${themeClasses.card} text-center space-y-6 md:p-12 relative overflow-hidden`}>
              <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-red-600/10 blur-2xl"></div>
              <div className="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-amber-500/10 blur-2xl"></div>

              <div className="mx-auto w-24 h-24 rounded-full border-4 border-amber-500/40 p-1 overflow-hidden shadow-xl bg-zinc-900">
                <img
                  src="/assets/logo.png"
                  alt="Deutsch mit Flo"
                  className="w-full h-full object-cover scale-110"
                />
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-slate-100 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  {t.appName}
                </h1>
                <p className="text-lg md:text-xl opacity-90 max-w-xl mx-auto font-medium">
                  {t.subtitle}
                </p>
              </div>

              {/* Informational Alert Box about Adaptive Testing */}
              <div className={`p-4 md:p-6 rounded-2xl max-w-2xl mx-auto text-left flex gap-4 ${themeClasses.feedbackBg}`}>
                <Info className="w-6 h-6 flex-shrink-0 text-amber-400 mt-1" />
                <div className="space-y-1">
                  <h4 className="font-bold text-sm md:text-base">{t.adaptiveTestAlert}</h4>
                  <p className="text-xs md:text-sm opacity-90 leading-relaxed">
                    {t.adaptiveExplanation}
                  </p>
                </div>
              </div>
            </div>

            {/* Test Selection Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ADAPTIVE OVERALL TEST (FEATURED) */}
              <button
                onClick={() => handleStartTest('overall')}
                className={`${themeClasses.card} col-span-1 md:col-span-2 text-left group hover:scale-[1.01] transition-transform duration-300 relative border-2 border-amber-500/40`}
              >
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="bg-amber-500 text-black px-3 py-1 text-xs font-black rounded-full uppercase tracking-wider">
                        HOT
                      </span>
                      <h3 className="text-xl md:text-2xl font-black flex items-center gap-2">
                        {t.allLevels} <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                      </h3>
                    </div>
                    <p className="text-sm opacity-80 max-w-2xl leading-relaxed">
                      {t.allLevelsDesc}
                    </p>
                  </div>
                  <div className="flex items-center justify-start md:justify-end">
                    <span className={`px-5 py-3 rounded-full flex items-center gap-2 text-sm font-bold ${themeClasses.buttonPrimary}`}>
                      {t.startTest} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </button>

              {/* A1 LEVEL TEST */}
              <button
                onClick={() => handleStartTest('A1')}
                className={`${themeClasses.card} text-left group hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="bg-amber-500/10 text-amber-400 px-3 py-1 text-xs font-black rounded-full uppercase tracking-wider">
                      Level A1
                    </span>
                    <BookOpen className="w-5 h-5 text-amber-500 opacity-60" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">{t.a1TestTitle}</h3>
                  <p className="text-xs md:text-sm opacity-80 leading-relaxed">
                    {t.a1Desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs md:text-sm font-bold text-amber-400 group-hover:text-amber-300">
                  <span>{t.startTest}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* A2 LEVEL TEST */}
              <button
                onClick={() => handleStartTest('A2')}
                className={`${themeClasses.card} text-left group hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="bg-orange-500/10 text-orange-400 px-3 py-1 text-xs font-black rounded-full uppercase tracking-wider">
                      Level A2
                    </span>
                    <BookOpen className="w-5 h-5 text-orange-500 opacity-60" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">{t.a2TestTitle}</h3>
                  <p className="text-xs md:text-sm opacity-80 leading-relaxed">
                    {t.a2Desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs md:text-sm font-bold text-orange-400 group-hover:text-orange-300">
                  <span>{t.startTest}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* B1 LEVEL TEST */}
              <button
                onClick={() => handleStartTest('B1')}
                className={`${themeClasses.card} text-left group hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="bg-purple-500/10 text-purple-400 px-3 py-1 text-xs font-black rounded-full uppercase tracking-wider">
                      Level B1
                    </span>
                    <BookOpen className="w-5 h-5 text-purple-500 opacity-60" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">{t.b1TestTitle}</h3>
                  <p className="text-xs md:text-sm opacity-80 leading-relaxed">
                    {t.b1Desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs md:text-sm font-bold text-purple-400 group-hover:text-purple-300">
                  <span>{t.startTest}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* VOCABULARY LEVEL TEST */}
              <button
                onClick={() => handleStartTest('vocabulary')}
                className={`${themeClasses.card} text-left group hover:scale-[1.01] transition-transform duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 text-xs font-black rounded-full uppercase tracking-wider">
                      Wortschatz / Vocabulary
                    </span>
                    <Sparkles className="w-5 h-5 text-emerald-500 opacity-60 animate-pulse" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">{t.vocabTestTitle}</h3>
                  <p className="text-xs md:text-sm opacity-80 leading-relaxed">
                    {t.vocabTestDesc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs md:text-sm font-bold text-emerald-400 group-hover:text-emerald-300">
                  <span>{t.startTest}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        )}

        {/* 2. ACTIVE TEST ENVIRONMENT */}
        {mode === 'testing' && currentQuestion && (
          <div className="space-y-6 animate-fadeIn">
            {/* Header / Meta Info Panel */}
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="font-extrabold text-base md:text-lg">
                  {testType === 'overall'
                    ? t.allLevels
                    : testType === 'vocabulary'
                    ? t.vocabTestTitle
                    : testType === 'A1'
                    ? t.a1TestTitle
                    : testType === 'A2'
                    ? t.a2TestTitle
                    : t.b1TestTitle}
                </span>
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                  currentQuestion.level === 'A1' ? themeClasses.badgeA1 : currentQuestion.level === 'A2' ? themeClasses.badgeA2 : themeClasses.badgeB1
                }`}>
                  {t.levelIndicator}: {currentQuestion.level}
                </span>
              </div>
              <div className="text-sm font-bold opacity-80">
                {t.questionCount} {currentQuestionIndex + 1} / 30
              </div>
            </div>

            {/* Micro Progress Bar */}
            <div className={`w-full h-2 rounded-full overflow-hidden ${themeClasses.progressBg}`}>
              <div
                className={`h-full transition-all duration-300 ${themeClasses.progressBar}`}
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            {/* MAIN QUESTION BLOCK */}
            <div className={`${themeClasses.card} space-y-6`}>
              {/* Question Text in German */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase opacity-60 tracking-wider">
                  {currentQuestion.type === 'grammar' ? t.grammarBadge : t.vocabularyBadge}
                </span>
                <h2 className="text-xl md:text-3xl font-extrabold leading-snug">
                  {currentQuestion.question}
                </h2>
                {/* Trilingual Translation of Question Panel - Only visible after answering */}
                {isAnswered && (
                  <div className="pt-2 border-t border-slate-100/10 text-sm opacity-80 italic animate-fadeIn">
                    <p className="flex items-center gap-2">
                      <span className="font-bold uppercase text-[10px] tracking-wider px-1.5 py-0.5 rounded border border-slate-400/20 bg-slate-500/10">
                        {language === 'th' ? 'TH' : language === 'en' ? 'EN' : 'DE'}
                      </span>
                      {language === 'th' ? currentQuestion.translations.th : language === 'en' ? currentQuestion.translations.en : currentQuestion.translations.de}
                    </p>
                  </div>
                )}
              </div>

              {/* Multiple Choice Options List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {shuffledOptions.map((opt, index) => {
                  let optStyle = themeClasses.optionBtn
                  const isOptCorrect = opt.originalIndex === currentQuestion.correctIndex

                  if (isAnswered) {
                    if (isOptCorrect) {
                      optStyle = themeClasses.optionCorrect
                    } else if (index === selectedOption) {
                      optStyle = themeClasses.optionIncorrect
                    } else {
                      optStyle = 'border-slate-200/10 opacity-40'
                    }
                  } else if (selectedOption === index) {
                    optStyle = themeClasses.optionSelected
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleSelectOption(index)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 rounded-2xl text-sm md:text-base font-bold transition-all flex items-center justify-between ${optStyle}`}
                    >
                      <span>{opt.text}</span>
                      {isAnswered && isOptCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      )}
                      {isAnswered && index === selectedOption && !isOptCorrect && (
                        <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                      )}
                    </button>
                  )
                })}
              </div>

              {/* POST-ANSWER FEEDBACK & EXPLANATION ROW */}
              {isAnswered && (
                <div className="space-y-4 pt-4 border-t border-slate-100/10 animate-slideDown">
                  {/* Adaptive Notification Toast */}
                  {testType === 'overall' && adaptiveFeedback && (
                    <div className={`p-3 rounded-xl text-xs font-bold flex items-center gap-2 ${themeClasses.feedbackBg}`}>
                      <Info className="w-4 h-4 flex-shrink-0 text-amber-400" />
                      <span>{adaptiveFeedback}</span>
                    </div>
                  )}

                  {/* Complete Grammatical Explanation Box */}
                  <div className="bg-slate-500/5 rounded-2xl p-4 md:p-5 space-y-2 border border-slate-400/10 text-xs md:text-sm">
                    <h4 className="font-extrabold flex items-center gap-2 text-amber-500 text-sm md:text-base">
                      <BookOpen className="w-4 h-4" /> {t.explanation}
                    </h4>
                    <p className="opacity-90 leading-relaxed">
                      {language === 'th' ? currentQuestion.explanation.th : language === 'en' ? currentQuestion.explanation.en : currentQuestion.explanation.de}
                    </p>
                  </div>

                  {/* Navigation Trigger Button */}
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={handleNextQuestion}
                      className={`px-6 py-3 rounded-full flex items-center gap-2 text-sm font-bold ${themeClasses.buttonPrimary}`}
                    >
                      <span>
                        {currentQuestionIndex + 1 >= 30 ? t.finishTest : t.nextQuestion}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 3. DIAGNOSTIC RESULTS / REPORT SCREEN */}
        {mode === 'results' && resultsData && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header Hero Banner Card */}
            <div className={`${themeClasses.card} text-center space-y-4 md:p-12 relative overflow-hidden`}>
              <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-red-600/10 blur-2xl"></div>
              <div className="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-amber-500/10 blur-2xl"></div>

              <div className="mx-auto w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500 flex items-center justify-center shadow-md">
                <Award className="w-8 h-8 text-amber-500" />
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl md:text-4xl font-extrabold">
                  {t.testCompleted}
                </h1>
                <p className="text-sm md:text-base opacity-75">
                  {t.subtitle}
                </p>
              </div>

              {/* RECOMMENDED LEVEL BLOCK */}
              <div className="py-6 border-t border-b border-slate-100/10 max-w-xl mx-auto space-y-2">
                <span className="text-xs uppercase font-extrabold opacity-60 tracking-wider">
                  {t.recommendedLevel}
                </span>
                <div className="text-3xl md:text-5xl font-black text-amber-400">
                  {resultsData.recommendedLevel}
                </div>
                <p className="text-sm md:text-base opacity-90 max-w-md mx-auto leading-relaxed pt-2 font-medium">
                  {resultsData.levelDetail}
                </p>
              </div>

              {/* GENERAL SCOREBOARD */}
              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto pt-2">
                <div className="p-4 bg-slate-500/5 rounded-2xl border border-slate-400/10">
                  <span className="text-xs opacity-60 block font-bold">{t.score}</span>
                  <span className="text-2xl md:text-3xl font-black text-amber-500">{resultsData.correctCount} / {resultsData.totalQuestions}</span>
                </div>
                <div className="p-4 bg-slate-500/5 rounded-2xl border border-slate-400/10">
                  <span className="text-xs opacity-60 block font-bold">{t.accuracy}</span>
                  <span className="text-2xl md:text-3xl font-black text-amber-500">{resultsData.scorePercentage}%</span>
                </div>
              </div>
            </div>

            {/* DIAGNOSTIC LEVEL BREAKDOWN STATS */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
                <Info className="w-5 h-5 text-amber-500" /> {t.generalInfo}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* A1 Diagnostic */}
                <div className={`${themeClasses.card} p-5 space-y-3`}>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold">{t.levelA1Status}</span>
                    <span className="text-xs font-black text-amber-500">
                      {resultsData.a1Correct} / {resultsData.a1Total}
                    </span>
                  </div>
                  <div className={`w-full h-1.5 rounded-full overflow-hidden ${themeClasses.progressBg}`}>
                    <div
                      className="h-full bg-amber-500"
                      style={{ width: `${resultsData.a1Total > 0 ? (resultsData.a1Correct / resultsData.a1Total) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>

                {/* A2 Diagnostic */}
                <div className={`${themeClasses.card} p-5 space-y-3`}>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold">{t.levelA2Status}</span>
                    <span className="text-xs font-black text-orange-500">
                      {resultsData.a2Correct} / {resultsData.a2Total}
                    </span>
                  </div>
                  <div className={`w-full h-1.5 rounded-full overflow-hidden ${themeClasses.progressBg}`}>
                    <div
                      className="h-full bg-orange-500"
                      style={{ width: `${resultsData.a2Total > 0 ? (resultsData.a2Correct / resultsData.a2Total) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>

                {/* B1 Diagnostic */}
                <div className={`${themeClasses.card} p-5 space-y-3`}>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold">{t.levelB1Status}</span>
                    <span className="text-xs font-black text-purple-500">
                      {resultsData.b1Correct} / {resultsData.b1Total}
                    </span>
                  </div>
                  <div className={`w-full h-1.5 rounded-full overflow-hidden ${themeClasses.progressBg}`}>
                    <div
                      className="h-full bg-purple-500"
                      style={{ width: `${resultsData.b1Total > 0 ? (resultsData.b1Correct / resultsData.b1Total) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* VOCABULARY BANK DIAGNOSTIC / Wortschatz-Analyse */}
            {resultsData.vocabTotal > 0 && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-400" /> {t.vocabAnalysisTitle}
                </h3>
                <div className={`${themeClasses.card} space-y-6`}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-slate-100/10">
                    <div>
                      <span className="text-xs uppercase font-extrabold opacity-60 tracking-wider">
                        {t.vocabStrength}
                      </span>
                      <h4 className="text-xl md:text-2xl font-black text-emerald-400">
                        {resultsData.vocabPercentage >= 80 ? 'B1+ (Advanced)' : resultsData.vocabPercentage >= 50 ? 'A2 - B1 (Intermediate)' : 'A1 (Basic)'}
                      </h4>
                    </div>
                    <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-center flex-shrink-0">
                      <span className="text-xs opacity-60 block font-bold uppercase tracking-wider">{t.accuracy}</span>
                      <span className="text-xl md:text-2xl font-black text-emerald-400">{resultsData.vocabCorrect} / {resultsData.vocabTotal} ({resultsData.vocabPercentage}%)</span>
                    </div>
                  </div>

                  <p className="text-sm opacity-90 leading-relaxed font-medium italic">
                    "{resultsData.vocabFeedback}"
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    {/* A1 Vocab Status */}
                    {resultsData.a1VocabTotal > 0 && (
                      <div className="bg-slate-500/5 rounded-2xl p-4 border border-slate-400/10 space-y-2">
                        <div className="flex justify-between items-center text-xs font-bold">
                          <span>A1 Vocabulary</span>
                          <span className="text-emerald-400">{resultsData.a1VocabCorrect} / {resultsData.a1VocabTotal}</span>
                        </div>
                        <div className={`w-full h-1 rounded-full overflow-hidden ${themeClasses.progressBg}`}>
                          <div
                            className="h-full bg-emerald-400"
                            style={{ width: `${(resultsData.a1VocabCorrect / resultsData.a1VocabTotal) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {/* A2 Vocab Status */}
                    {resultsData.a2VocabTotal > 0 && (
                      <div className="bg-slate-500/5 rounded-2xl p-4 border border-slate-400/10 space-y-2">
                        <div className="flex justify-between items-center text-xs font-bold">
                          <span>A2 Vocabulary</span>
                          <span className="text-emerald-400">{resultsData.a2VocabCorrect} / {resultsData.a2VocabTotal}</span>
                        </div>
                        <div className={`w-full h-1 rounded-full overflow-hidden ${themeClasses.progressBg}`}>
                          <div
                            className="h-full bg-emerald-400"
                            style={{ width: `${(resultsData.a2VocabCorrect / resultsData.a2VocabTotal) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {/* B1 Vocab Status */}
                    {resultsData.b1VocabTotal > 0 && (
                      <div className="bg-slate-500/5 rounded-2xl p-4 border border-slate-400/10 space-y-2">
                        <div className="flex justify-between items-center text-xs font-bold">
                          <span>B1 Vocabulary</span>
                          <span className="text-emerald-400">{resultsData.b1VocabCorrect} / {resultsData.b1VocabTotal}</span>
                        </div>
                        <div className={`w-full h-1 rounded-full overflow-hidden ${themeClasses.progressBg}`}>
                          <div
                            className="h-full bg-emerald-400"
                            style={{ width: `${(resultsData.b1VocabCorrect / resultsData.b1VocabTotal) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* DETAILED QUESTION-BY-QUESTION DIAGNOSTIC REPORT CARD */}
            <div className="space-y-6">
              <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-500" /> {t.diagnosticReport}
              </h3>
              <div className="space-y-6">
                {userAnswers.map((answer, index) => (
                  <div
                    key={index}
                    className={`${themeClasses.card} border-l-4 ${
                      answer.isCorrect ? 'border-l-emerald-500' : 'border-l-rose-500'
                    } space-y-4`}
                  >
                    {/* Diagnostic Question Header */}
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                          answer.isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                        }`}>
                          {index + 1}
                        </span>
                        <span className="text-xs font-semibold opacity-60">
                          {answer.question.type === 'grammar' ? t.grammarBadge : t.vocabularyBadge}
                        </span>
                      </div>
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                        answer.question.level === 'A1' ? themeClasses.badgeA1 : answer.question.level === 'A2' ? themeClasses.badgeA2 : themeClasses.badgeB1
                      }`}>
                        Level {answer.question.level}
                      </span>
                    </div>

                    {/* Question Statement */}
                    <h4 className="text-base md:text-lg font-bold leading-relaxed">
                      {answer.question.question}
                    </h4>

                    {/* Question translation */}
                    <div className="text-xs md:text-sm opacity-70 italic border-l border-slate-500/20 pl-3">
                      <p className="font-semibold text-[10px] uppercase opacity-50 mb-1">{t.questionTranslation}</p>
                      {language === 'th' ? answer.question.translations.th : language === 'en' ? answer.question.translations.en : answer.question.translations.de}
                    </div>

                    {/* Options Breakdown for Review */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm pt-2">
                      <div>
                        <span className="opacity-60 block mb-1 font-bold">{t.yourAnswer}</span>
                        <div className={`p-3 rounded-xl flex items-center gap-2 font-bold ${
                          answer.isCorrect ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        }`}>
                          {answer.isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                          <span>{answer.question.options[answer.selectedOptionIndex]}</span>
                        </div>
                      </div>

                      {!answer.isCorrect && (
                        <div>
                          <span className="opacity-60 block mb-1 font-bold">{t.correctAnswer}</span>
                          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-2 font-bold">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>{answer.question.options[answer.question.correctIndex]}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Detailed Explanation */}
                    <div className="bg-slate-500/5 rounded-2xl p-4 space-y-2 border border-slate-400/10 text-xs md:text-sm">
                      <span className="font-extrabold text-amber-500 flex items-center gap-2 text-xs md:text-sm uppercase tracking-wider">
                        <BookOpen className="w-4 h-4" /> {t.grammarConcept}
                      </span>
                      <p className="opacity-90 leading-relaxed">
                        {language === 'th' ? answer.question.explanation.th : language === 'en' ? answer.question.explanation.en : answer.question.explanation.de}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ACTION FOOTER ROW */}
            <div className="flex justify-center pt-4">
              <button
                onClick={() => setMode('home')}
                className={`px-8 py-4 rounded-full flex items-center gap-2 text-base font-bold shadow-lg ${themeClasses.buttonPrimary}`}
              >
                <Home className="w-5 h-5" />
                <span>{t.backToHome}</span>
              </button>
            </div>
          </div>
        )}

      </main>

      {/* COPYRIGHT BRANDING FOOTER */}
      <footer className="text-center py-8 text-xs opacity-60 border-t border-slate-500/10 max-w-6xl w-full mx-auto px-4 mt-12">
        <p>© 2026 {t.appName} - {t.subtitle}. All rights reserved.</p>
        <p className="mt-1">Designed for robust CEFR evaluation by AI Agent.</p>
      </footer>
    </div>
  )
}
