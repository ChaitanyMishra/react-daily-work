import { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [length, setLength] = useState(8);
  const [numCheck, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numCheck) str += "0123456789";
    if (charAllow) str += "~`@#$%^&*()_-+=[]{|}\\:;\"'<>,.?/";

    let pass = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  };

  return (
    <>
      <h1 className='text-red-900 text-3xl font-bold'>Password Generator</h1>

      <div className="p-4">
        <label className="block mb-2">Password Length: {length}</label>
        <input
          type="range"
          min={4}
          max={20}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full mb-4"
        />

        <label className="block">
          <input
            type="checkbox"
            checked={numCheck}
            onChange={() => setNumberAllow((prev) => !prev)}
          />
          Include Numbers
        </label>

        <label className="block">
          <input
            type="checkbox"
            checked={charAllow}
            onChange={() => setCharAllow((prev) => !prev)}
          />
          Include Special Characters
        </label>

        <button
          onClick={generatePassword}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
        >
          Generate Password
        </button>

        {password && (
          <div className="mt-4 p-2 border rounded bg-gray-100">
            <strong>Generated Password:</strong> {password}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
