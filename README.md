# QuizMaster - Interactive Online Programming Quiz Platform

**QuizMaster** is a complete, responsive, full-featured web-based programming quiz application designed to test and elevate software engineering skills across 6 technical categories and 3 distinct difficulty tiers.

---

## 🌟 Key Features

### 1. 6 Dedicated Subjects & 540 Verified Questions
The platform includes **540 genuine, technically verified questions** (with no placeholders or duplicate entries):
* **HTML**: Semantic elements, forms, accessibility (ARIA), canvas vs SVG, Web Components, and browser DOM rendering.
* **CSS**: Box model, Flexbox, CSS Grid, specificity calculations, stacking contexts, `@layer`, and container queries.
* **C Programming**: Pointers, memory allocation (`malloc`, `free`), structs, unions, pointer arithmetic, bit manipulation, and undefined behavior.
* **Python**: Data structures, comprehensions, decorators, generators, dunder methods, metaclasses, and the GIL.
* **Data Structures (DS)**: Stacks, queues, heaps, balanced BSTs (AVL, Red-Black), graphs (Dijkstra, BFS/DFS), Tries, and Segment Trees.
* **DBMS**: SQL queries, normalization (1NF–5NF), ACID transactions, isolation levels, MVCC, indexing (B+ Trees), and query optimization.

| Category | Easy | Moderate | Hard | Total |
| :--- | :---: | :---: | :---: | :---: |
| **HTML** | 30 | 30 | 30 | **90** |
| **CSS** | 30 | 30 | 30 | **90** |
| **C Programming** | 30 | 30 | 30 | **90** |
| **Python** | 30 | 30 | 30 | **90** |
| **Data Structures** | 30 | 30 | 30 | **90** |
| **DBMS** | 30 | 30 | 30 | **90** |
| **Grand Total** | **180** | **180** | **180** | **540 Questions** |

---

### 2. Interactive Quiz Experience
- **Single Question Display**: Clean, distraction-free view with monospace code formatting for code questions.
- **Randomization Engine**: Shuffles questions AND randomizes answer choices (`A`, `B`, `C`, `D`) on every attempt while dynamically preserving the correct answer pointer.
- **Question Navigation Palette**: Interactive sidebar showing color-coded status:
  - 🟢 **Answered**
  - 🟣 **Flagged for Review**
  - ⚪ **Current Active**
  - ⚫ **Unvisited**
- **Real-Time Countdown Timer**:
  - Dynamically calculates time allocation (1 minute per question).
  - Visual warnings: turns yellow at `< 2 mins` and pulses red at `< 30s`.
  - Automatic submission when time expires.
- **Keyboard Shortcuts**:
  - Press `1`, `2`, `3`, `4` (or `A`, `B`, `C`, `D`) to pick options instantly.
  - Press `Arrow Right` or `Enter` for Next Question.
  - Press `Arrow Left` for Previous Question.
  - Press `F` to toggle "Mark for Review".

---

### 3. Scoring & In-Depth Review System
- **Scoring**: 1 mark awarded per correct answer.
- **Performance Evaluation**:
  - `90% - 100%`: 🏆 **Mastery Performance**
  - `75% - 89%`: 🌟 **Expert Achievement**
  - `50% - 74%`: 📚 **Good Foundation**
  - `< 50%`: 💪 **Needs Practice**
- **Celebratory Confetti**: Interactive HTML5 Canvas particle confetti for high scores.
- **Detailed Question Review**:
  - Filter by `All`, `Incorrect Only`, `Correct Only`, `Skipped`, or `Flagged`.
  - Color-coded badges indicating user selection vs correct answer.
  - Verified technical explanations detailing the exact reason why the answer is correct.

---

### 4. Modern UI/UX Design
- **Theme Support**: One-click toggle between Dark Mode and Light Mode.
- **Synthesized Audio**: Web Audio API sound effects for clicks, answers, flags, and fanfare (100% offline, zero audio file dependencies).
- **Persistent Analytics**: Automatically records all test attempts, dates, percentages, and time spent into `localStorage`.
- **Responsive Layout**: Designed for desktops, laptops, tablets, and smartphones.

---

## 📁 Project Structure (GitHub Repository: `bcharishma08/QUIZ-MASTER`)

```
quizmaster/
│
├── .nojekyll                    # Prevents Jekyll from breaking static asset loading
├── index.html                   # Master HTML (references style.css, questions.js, app.js directly)
├── style.css                    # Complete stylesheet: dark blue background, cards & animations
├── questions.js                 # Complete self-contained 540 questions bank & config
├── app.js                       # Complete interactive app logic, timer, scoring & review
└── README.md                    # Project documentation & run guide
```

---

## 🌐 Deploying to GitHub Pages (`bcharishma08/QUIZ-MASTER`)

QuizMaster is now structured to match your exact repository:
1. Ensure your repository root contains these 4 primary files (plus `.nojekyll`):
   - `index.html`
   - `style.css`
   - `questions.js`
   - `app.js`
   - `.nojekyll`
2. Push or upload these files to your GitHub repository `bcharishma08/QUIZ-MASTER`.
3. In your GitHub repository, navigate to **Settings** > **Pages**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or `master`), folder: `/ (root)`
4. Click **Save**. Your site will be live at:
   `https://bcharishma08.github.io/QUIZ-MASTER/`
5. The stylesheet and script references in `index.html` directly target `style.css`, `questions.js`, and `app.js` with zero missing folder dependencies, eliminating 404 and MIME-type errors.

---

## 🚀 How to Run the Website Locally in VS Code

You can run **QuizMaster** locally on your machine using any of the following methods:

### Method 1: VS Code Live Server Extension (Recommended)
1. Open **Visual Studio Code**.
2. Go to **File** > **Open Folder...** and select the `quizmaster` folder located at:
   ```
   C:\Users\bchar\OneDrive\Desktop\quizmaster
   ```
3. In VS Code, install the extension named **Live Server** (by *Ritwick Dey*) from the Extensions panel (`Ctrl + Shift + X`).
4. Right-click on `index.html` in the Explorer sidebar.
5. Click **"Open with Live Server"** (or click the **"Go Live"** button on the bottom status bar).
6. Your browser will automatically open:
   ```
   http://127.0.0.1:5500/index.html
   ```

---

### Method 2: Direct Browser Launch
Because QuizMaster is written in clean, standard vanilla HTML, CSS, and JavaScript with zero build dependencies, you can run it directly:
1. Navigate to `C:\Users\bchar\OneDrive\Desktop\quizmaster` in File Explorer.
2. Double-click **`index.html`** (or right-click > **Open With** > Chrome, Edge, Firefox, or Brave).
3. The application will run immediately in your browser.

---

### Method 3: Python Built-In HTTP Server
If Python is installed on your system:
1. Open terminal inside `quizmaster`:
   ```bash
   cd C:\Users\bchar\OneDrive\Desktop\quizmaster
   python -m http.server 8000
   ```
2. Open your web browser and navigate to:
   ```
   http://localhost:8000
   ```

---

## 🛠️ Browser Compatibility
Tested and fully supported on:
- Google Chrome (Desktop & Mobile)
- Microsoft Edge
- Mozilla Firefox
- Safari (macOS & iOS)
- Brave & Opera
