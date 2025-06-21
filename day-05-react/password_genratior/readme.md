# 🔐 Password Generator App

A modern password generator web app built using **React**, **Vite**, and **Tailwind CSS**. It allows users to generate strong, customizable passwords with options for length, numbers, and special characters.

---

## 📁 Project Structure

```
pass_gen/
├── node_modules/           # Dependencies
├── public/                 # Static assets
├── src/                    # React source files
├── .gitignore              # Git ignored files
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML entry point
├── package-lock.json       # Auto-generated lockfile
├── package.json            # Project metadata & scripts
├── postcss.config.js       # PostCSS configuration
├── README.md               # Project documentation
├── tailwind.config.js      # Tailwind configuration
└── vite.config.js          # Vite config file
```

---

## 🚀 Tech Stack

* **React** – UI library
* **Vite** – Next-gen frontend tooling
* **Tailwind CSS** – Utility-first CSS framework
* **ESLint** – Code linting

---

## ⚙️ Features

* Generate random passwords
* Toggle inclusion of:

  * Numbers (0–9)
  * Special characters (!@#\$%^&\*)
* Set password length dynamically
* Copy password to clipboard
* Responsive and styled with Tailwind

---

## 📦 Installation

```bash
git clone https://github.com/your-username/pass_gen.git
cd pass_gen
npm install
npm run dev
```

---

## 💡 How It Works

```js
// ✅ useState to store UI state
const [length, setLength] = useState(8);
const [numCheck, setNumberAllow] = useState(false);
const [charAllow, setCharAllow] = useState(false);
const [password, setPassword] = useState("");

// ✅ useRef for accessing DOM
const passwordRef = useRef(null);

// ✅ useCallback to memoize password generation logic
const PassWordGenratior = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numCheck) str += "0123456789";
  if (charAllow) str += '~`@#$%^&*()_-=+{[}]|\\:;\",<.>/?*';

  for (let i = 0; i < length; i++) {
    let randomChar = Math.floor(Math.random() * str.length);
    pass += str.charAt(randomChar);
  }

  setPassword(pass);
}, [length, numCheck, charAllow]);

// ✅ useEffect to regenerate password on settings change
useEffect(() => {
  PassWordGenratior();
}, [PassWordGenratior]);

// ✅ Copy password to clipboard
const copyPassWord = () => {
  if (passwordRef.current) {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  }
};
```

---

## 🧠 What I Learned from This Project

* ✅ How to build functional components using React
* ✅ Mastered hooks like `useState`, `useEffect`, `useRef`, and `useCallback`
* ✅ Understood how to manage and trigger side effects
* ✅ Learned to memoize functions for optimization
* ✅ Grasped DOM manipulation using `ref`
* ✅ Integrated Tailwind CSS for responsive styling
* ✅ Applied clean component logic and hook dependencies effectively

---

## 🛠 Developer Notes

* Tailwind configured in `tailwind.config.js`
* Password logic isolated in `useCallback`
* `useEffect` handles reactivity cleanly
* `useRef` simplifies clipboard copy

---

## 🧪 Future Improvements

* Add password strength meter
* Allow user to exclude similar characters (e.g., l, 1, I)
* Dark mode toggle
* Save password history locally

---

## 🙌 Contributing

Feel free to fork and submit PRs. Feedback and contributions are welcome!

---

## 📄 License

MIT License
