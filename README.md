# Deutsch mit Flo - German Placement Test Web Application (A1 - B1)

An interactive, responsive, and robust single-page placement testing web application for German language levels A1, A2, and B1. It showcases the "Deutsch mit Flo" brand, offering individual-level diagnostics and an intelligent adaptive overall test.

---

## 🚀 Key Features

1. **Brand Identity:** Integration of the official "Deutsch mit Flo" branding logo in the header and home screens.
2. **Four Diagnostic Test Modes:**
   - **Level A1 Test:** 25 questions verifying basic pronouns, articles, present-tense verbs, simple prepositions, and primary vocabulary.
   - **Level A2 Test:** 25 questions verifying subordinating conjunctions (`weil`, `dass`, `wenn`, `ob`), two-way prepositions, relative clauses, and adjective declensions.
   - **Level B1 Test:** 25 questions verifying passive voice, Konjunktiv II, genitive prepositions, double-conjunctions, and intermediate vocabulary.
   - **Overall Placement Test (Adaptive):** Starts at A1 and dynamically adjusts question difficulty based on accuracy (moves up on correct answer, moves down on incorrect answer) to establish a highly precise CEFR level diagnosis in exactly 25 questions.
3. **Multi-Language Support (Localization):** Real-time toggle between **German (DE)**, **Thai (TH)**, and **English (EN)** for all headings, labels, button prompts, questions, options, and grammatical explanations.
4. **Interactive Theme Switcher:** Four gorgeous visual styles designed for perfect contrast and modern readability:
   - **Deutschland Theme:** A customized authentic national flag layout with deep charcoal backgrounds, velvet-burgundy card bodies, and bright gold/amber highlights.
   - **Light Theme:** Modern, crisp white with slate-gray borders and royal blue action states.
   - **Dark Theme:** Midnight slate with charcoal cards and indigo highlights.
   - **Sepia Theme:** A warm, vintage-paper aesthetic with espresso text and terracotta accents.
5. **Detailed Diagnostic Review:** Comprehensive post-test diagnostic reports displaying the percentage of accuracy per CEFR level, followed by a granular question-by-question card review indicating the correct option, chosen option, question translation, and detailed grammatical explanations in the user's selected language.

---

## 🛠️ Tech Stack

- **Framework:** TanStack Start (React 19, TanStack Router)
- **Styling & Theming:** Tailwind CSS v4, custom utility classes
- **Icons:** Lucide React
- **Language:** TypeScript 5.7+ (Strict Mode)
- **Deployment & Hosting:** Netlify Serverless Cloud

---

## 💻 Local Development

Follow these steps to run the application locally:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📂 Project Structure

- `src/components/GermanTestApp.tsx`: The primary application component comprising localization toggles, theme settings, home select screen, testing state machines, results analytics, and diagnostic review components.
- `src/data/questions.ts`: Clean database of 75 items (25 each for A1, A2, and B1), detailing question content, translations, options, correct indices, and multi-language explanations.
- `src/utils/translations.ts`: Key-value map definitions for DE, TH, and EN supporting full localized operation.
- `src/routes/index.tsx`: Root level index route rendering the testing application.
- `src/routes/__root.tsx`: Standard HTML skeleton including script integration, layout viewports, and custom document metadata titles.
- `public/assets/logo.png`: Main branded asset for "Deutsch mit Flo".
