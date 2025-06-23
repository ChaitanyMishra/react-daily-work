import {useCallback , useState } from 'react'
import './App.css'
import './index.css';

function App() {
  const [length, setLength] = useState(8)
  const [numCheck , setNumberAllow] = useState(false)
  const [charAllow , setCharAllow] = useState(false)
  const [password , setPassword] = useState ("")

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
}, [length, numCheck, charAllow]);


  return (
    <>
      <h1 className=' text-red-900 text-3xl font-bold'>Password Genratior</h1>
<GenPass />
    </>
  )
}

export default App
