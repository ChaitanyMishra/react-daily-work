# 💱 Currency Converter - React App

A responsive and modern currency converter built using **React** and **Tailwind CSS**, powered by the [Fawaz Currency API](https://latest.currency-api.pages.dev/). This project helps users convert one currency to another with real-time exchange rates.

---

## 🚀 Features

* 🔁 Convert any amount between two currencies
* 🌍 Live exchange rate data using `useCurrencyInfo` custom hook
* 🎨 Responsive UI with Tailwind CSS
* 🔄 Swap button to switch currencies
* 🔎 Clean UX with real-time updates

---

## 🛠 Tech Stack

| Tool         | Purpose                         |
| ------------ | ------------------------------- |
| React        | UI framework                    |
| Tailwind CSS | Styling                         |
| Vite         | Fast build tool                 |
| Custom Hooks | Modular logic for fetching data |

---

## 📁 Folder Structure

```
├── public
│   └── bgImg.png           # Background image
├── src
│   ├── components
│   │   └── InputBox.jsx    # Reusable input + select component
│   ├── hooks
│   │   └── useCurrencyInfo.js # Custom hook to fetch currency data
│   ├── App.jsx             # Main application
│   └── App.css             # Global styles
└── README.md
```

---

## 🔗 API Used

**Base URL:** `https://latest.currency-api.pages.dev/v1/currencies/`

* Example: `https://latest.currency-api.pages.dev/v1/currencies/inr.json`
* Data Format:

```json
{
  "inr": {
    "usd": 0.012,
    "eur": 0.011,
    ...
  }
}
```

---

## 🧠 Learning Goals

* Mastering React state and hooks
* Building real-time input-driven applications
* Writing clean component logic using custom hooks
* Deepening Tailwind CSS proficiency

---



## 👨‍💻 Author

* **Chaitany Mishra**
  BCA Student | Aspiring Full Stack + Blockchain Dev
  GitHub: [ChaitanyMishra](https://github.com/ChaitanyMishra)

---

## 🧪 How to Run

```bash
# Clone the repo
git clone https://github.com/ChaitanyMishra/react-daily-work.git

# Navigate to folder
cd react-daily-work

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## 📅 Day 06 - #100DaysOfReact

This was created as part of my personal **100 Days of React Challenge** to master frontend development with real-world projects.

---

## 📌 Future Enhancements

* 🌐 Add currency symbols & flags
* 📱 Improve mobile UX
* 💾 Add offline conversion cache
* 🌈 Dark mode support

---

## ✅ License

This project is open source and available under the [MIT License](LICENSE).
