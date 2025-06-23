import { useCallback, useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [length, setLength] = useState(8);
  const [numCheck, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numCheck) str += "0123456789";
    if (charAllow) str += "~`@#$%^&*()_-+=[]{|}\\:;\"'<>,.?/";

    let pass = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
    console.log(pass);
  }, [length, numCheck, charAllow]);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-red-900 text-3xl font-bold mb-4">Password Generator</h1>

      <label className="block mb-2">
        Length: {length}
        <input
          type="range"
          min={4}
          max={20}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full"
        />
      </label>

      <label className="block mt-2">
        <input
          type="checkbox"
          checked={numCheck}
          onChange={() => setNumberAllow(prev => !prev)}
        />
        <span className="ml-2">Include Numbers</span>
      </label>

      <label className="block mt-2">
        <input
          type="checkbox"
          checked={charAllow}
          onChange={() => setCharAllow(prev => !prev)}
        />
        <span className="ml-2">Include Special Characters</span>
      </label>

      <button
        onClick={generatePassword}
        className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
      >
        Generate Password
      </button>

      {password && (
        <div className="mt-4 bg-gray-100 p-2 rounded border text-center">
          <strong>Generated Password:</strong> <br />
          <span className="text-lg text-green-600">{password}</span>
        </div>
      )}
    </div>
  );
}

export default App;
