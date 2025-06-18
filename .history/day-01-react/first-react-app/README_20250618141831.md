# 📘 First React App (Vite vs Normal React)

## 🚀 Project Overview

This is my **first React application**, built using **Vite** instead of the traditional `create-react-app`. I documented everything I learned in this README as part of my learning journey.

---

## ⚙️ What I Learned

### 🔄 1. Difference: Normal React App vs Vite React App

| Feature                | Create React App (CRA)      | Vite                         |
| ---------------------- | --------------------------- | ---------------------------- |
| Startup Time           | Slower                      | Very fast                    |
| Configuration          | Hides config under the hood | Lightweight and customizable |
| Build Tool             | Webpack                     | Native ES modules + Rollup   |
| Hot Module Replacement | Slower                      | Lightning fast               |
| Default Template Size  | Bigger                      | Minimal                      |

> ✅ Vite helps me focus more on coding and less on waiting.

---

### 📁 2. Clean-up: Deleted Unnecessary Files

* Removed default assets, logos, and example components.
* Cleaned up `App.jsx` to use my own components and headings.

---

### 💻 3. Terminal Knowledge I Gained

* `npm create vite@latest` – Create a new Vite app
* `npm install` – Install all dependencies from `package.json`
* `npm run dev` – Run development server
* `cd folder-name` – Navigate into project directory

---

## 🧠 Concepts Learned

### ✅ JSX & Components

Here's the final code I wrote in `App.jsx`:

```jsx
import { useState } from 'react';
import './App.css';

function MyButton() {
  return (
    <button>1st react button</button>
  );
}

function App() {
  return (
    <div>
      <h1>Hello! this is my 1st react app</h1>
      <MyButton />
    </div>
  );
}

export default App;
```

### 🧩 What I Practiced:

* Creating a **custom component** (`MyButton`)
* Using `import` to include other files and components
* Writing clean, minimal React structure
* Understanding `export default App` and why we need it

---

## 🛠 Next Steps

* Learn about `useState()` and how to add interactivity
* Create a To-Do List app with multiple components
* Explore routing using `react-router-dom`

---

## 📁 Project Structure (Cleaned)

```
first-react-app/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
```

---

## 🏁 Conclusion

Starting with Vite made React feel faster and easier to set up. I'm now more confident in handling React projects and using the terminal to manage and run them efficiently.

---

*This is my first step into the React world 🚀*
