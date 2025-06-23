import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [length, setLength] = useState(8);
  const [numCheck, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  // ✅ Password Generator with useCallback
  const PassWordGenratior = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numCheck) str += "0123456789";
    if (charAllow) str += '~`@#$%^&*()_-=+{[}]|\\:;",<.>/?*';

    for (let i = 0; i < length; i++) {
      let randomChar = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomChar);
    }

    setPassword(pass);
  }, [length, numCheck, charAllow]);

  // ✅ Run on load or whenever config changes
  useEffect(() => {
    PassWordGenratior();
  }, [PassWordGenratior]);

  // ✅ Copy to Clipboard (on button click)
  const copyPassWord = () => {
    if (passwordRef.current) {
      passwordRef.current.select(); // optional: highlight
      window.navigator.clipboard.writeText(password);
      alert('Password copied to clipboard!');
    }
  };

  return (
    <div className=" flex flex-col  w-full max-w-xl mx-auto my-5 shadow-2xl rounded-xl h-auto px-4 py-6 bg-slate-800 text-blue-200">
      <h1 className="text-blue-200 text-3xl font-bold">Password Generator</h1>

      {/* Password display + Copy */}
      <div className="flex my-4 mx-2 px-3 py-2 rounded-2xl overflow-hidden shadow-inner">
        <input
          type="text"
          value={password}
          readOnly
          ref={passwordRef}
          placeholder="Your Password"
          className="text-slate-950 outline-none w-full py-2 px-3 rounded-l-xl"
        />
        <button
          type="button"
          onClick={copyPassWord}
          className="rounded-r-lg bg-blue-700 text-white py-2 px-3 shrink-0 hover:bg-gray-700 hover:text-blue-100 font-semibold font-serif text-xl"
        >
          Copy
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4 text-base mt-4">
        {/* Length */}
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={8}
            max={16}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>

        {/* Number checkbox */}
        <div className="flex items-center gap-x-2">
          <label>Add Number</label>
          <input
            type="checkbox"
            checked={numCheck}
            onChange={() => setNumberAllow((prev) => !prev)}
            className="size-4 cursor-pointer"
          />
        </div>

        {/* Special Char checkbox */}
        <div className="flex items-center gap-x-2">
          <label>Special Symbols</label>
          <input
            type="checkbox"
            checked={charAllow}
            onChange={() => setCharAllow((prev) => !prev)}
            className="size-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
