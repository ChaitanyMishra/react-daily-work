import { useCallback, useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [length, setLength] = useState(8);
  const [numCheck, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

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

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert("Password copied to clipboard!");
    }
  };

  return (
    <div className='w-full max-w-lg mx-auto my-5 px-4 py-6 bg-slate-800 text-blue-200 shadow-2xl rounded-xl'>
      <h1 className='text-blue-200 text-2xl sm:text-3xl font-bold text-center mb-6'>Password Generator</h1>

      <div className='flex flex-col sm:flex-row items-center gap-2 mb-4'>
        <input
          type="text"
          value={password}
          readOnly
          placeholder='Your Password'
          className='outline-none w-full py-2 px-3 rounded-xl bg-white text-black'
        />
        <button
          onClick={copyToClipboard}
          className='bg-blue-700 text-white py-2 px-4 rounded-xl hover:bg-blue-600'
        >
          Copy
        </button>
      </div>

      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4'>
        <div className='flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto'>
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className='cursor-pointer w-full sm:w-auto'
          />
          <label className='text-sm'>Length: {length}</label>
        </div>

        <div className='flex items-center gap-2'>
          <label className='text-sm'>Add Numbers</label>
          <input
            type="checkbox"
            checked={numCheck}
            onChange={() => setNumberAllow(prev => !prev)}
            className='size-4 cursor-pointer'
          />
        </div>

        <div className='flex items-center gap-2'>
          <label className='text-sm'>Special Symbols</label>
          <input
            type="checkbox"
            checked={charAllow}
            onChange={() => setCharAllow(prev => !prev)}
            className='size-4 cursor-pointer'
          />
        </div>
      </div>

      <button
        onClick={PassWordGenratior}
        className='w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl font-semibold text-lg transition duration-300 ease-in-out'
      >
        Generate Password
      </button>
    </div>
  );
}

export default App;
