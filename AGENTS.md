# AGENTS.md

This document provides an overview of the "Deutsch mit Flo - German Placement Test" project structure, coding conventions, architectural decisions, and configuration settings to guide future AI development agents.

---

## 🏗️ Project Architecture

An interactive single-page German language proficiency testing system supporting CEFR levels A1, A2, and B1. It is built using **TanStack Start** (React 19 + TanStack Router) and styled with **Tailwind CSS v4**.

### Key Tech Stack Components

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (Vite 7) |
| Frontend Library | React 19 (Hooks, useMemo) |
| Routing | TanStack Router |
| Icons | Lucide React |
| Styling | Tailwind CSS v4 (Adaptive CSS variables & dynamic classes) |
| Language | TypeScript 5.7+ (Strict Mode) |

---

## 📁 Key Directories and Files

```
├── public
│   └── assets
│       └── logo.png                # Official "Deutsch mit Flo" branding logo
├── src
│   ├── components
│   │   ├── GermanTestApp.tsx       # Main app shell, quiz workflow state, adaptive algorithm, and diagnostic layout
│   │   └── Calculator.tsx          # Deprecated placeholder component (no longer imported)
│   ├── data
│   │   └── questions.ts            # Curriculum database (75 premium localized multiple-choice items)
│   ├── routes
│   │   ├── __root.tsx              # Outer HTML frame, global styles, page metadata, and title configuration
│   │   └── index.tsx               # Root route, mounts the <GermanTestApp /> component
│   ├── utils
│   │   └── translations.ts         # Localization dictionaries for DE, TH, and EN
│   ├── router.tsx                  # TanStack Router instance creation
│   └── styles.css                  # Global Tailwind imports and base styles
├── README.md                       # Local development instructions & capabilities summary
├── netlify.toml                    # Netlify deployment and dev server settings
└── package.json                    # Project manifest, scripts, and dependencies
```

---

## ⚙️ Core Engines & Algorithms

### 1. Adaptive Placement Testing Engine (`GermanTestApp.tsx`)
The "Overall Placement" test uses a custom stepwise adaptive algorithm:
- **Baseline:** Starts at `A1` difficulty.
- **Dynamic Tuning:** Upon submitting an answer, the correctness is evaluated instantly.
  - If the answer is **correct**: The difficulty level moves up (`A1` → `A2` or `A2` → `B1`) and the next question is randomly pulled from the unused pool of that higher difficulty.
  - If the answer is **incorrect**: The difficulty level moves down (`B1` → `A2` or `A2` → `A1`) to gauge baseline accuracy.
- **Safety Bounds:** No question can be repeated during a single 25-question test. The algorithm records and filters out already used question IDs from the pool.

### 2. CEFR Level Diagnosis Recommendation
At the end of the 25 questions, the results analyzer evaluates the success rate for the different levels encountered during the test:
- **B1 Recommendation:** Achieved if they reached B1 questions, answered at least 50% of them correctly, and maintained strong overall accuracy. If their B1 success is above 70% with high overall scores, they are recommended as **B1+ (Ready for B2)**.
- **A2 Recommendation:** Achieved if they did not meet B1 criteria, but answered at least 50% of A2 questions correctly.
- **A1 Recommendation:** Achieved if they answered at least 50% of A1 questions correctly.
- **Below A1:** Recommended if they scored less than 50% on A1 questions.

---

## 🎨 Styling and Theming

The app supports real-time theme-switching using an abstract state mapper (`themeClasses`) that returns Tailind v4-compatible CSS classes for the page container, buttons, option buttons, correct/incorrect borders, and progress bars.

- **Germany Theme (Schwarz-Rot-Gold):** High-contrast premium dark aesthetic. Background is deep charcoal, cards are velvet-burgundy, highlighting gold/amber. Uses a horizontal dual-color gradient (Crimson-to-Gold) progress bar.
- **Light Theme:** Classic soft slate-50 background, white container, blue highlights.
- **Dark Theme:** High-tech midnight background, slate-900 card body, indigo highlights.
- **Sepia Theme:** Elegant vintage-paper look (`#faf6ed` page, `#fcf8f2` cards) with espresso text and warm terracotta highlights.

---

## 🌐 Localization (Trilingual Operation)

All UI elements, instructions, questions, answer choices, and grammatical review explanations are localized in three languages:
- **German (DE)** — Perfect for native reading and advanced immersion.
- **Thai (TH)** — Perfect for native Thai speakers learning German (regional emphasis).
- **English (EN)** — Global standard explanations.

Translations are defined as a strict type-safe record mapping `Language ('de' | 'th' | 'en')` to `Translations` schema in `src/utils/translations.ts`.

---

## 📝 Conventions & Rules for Future Extensions

1. **Adding Questions:**
   - Add new objects to the `questions` list in `src/data/questions.ts`.
   - Maintain the `Question` interface structure. Every question MUST have authentic translations and precise pedagogical explanations for `de`, `th`, and `en`.
   - Ensure the correct index matches the corresponding option array index (0 to 3).
2. **Type Safety:**
   - Ensure all components are fully typed under TypeScript's strict rules.
   - Avoid `any` or forced type casts.
3. **Responsive Design:**
   - All custom components must use mobile-first Tailwind design layouts (e.g., `flex-col md:flex-row`, `grid-cols-1 md:grid-cols-2`, `p-6 md:p-8`).
