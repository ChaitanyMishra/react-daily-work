import {useCallback , useState } from 'react'
import './App.css'
import './index.css';

function App() {
  const [length, setLength] = useState(8)
  const [numCheck , setNumberAllow] = useState(false)
  const [charAllow , setCharAllow] = useState(false)
  const [password , setPassword] = useState ("")
  const PassWordGenratior = useCallback(() => {
  let pass =""
  let str = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz"
  if(numCheck) str+= '0123456789'
  if(charAllow) str+= '~`@#$%^&*()_-=+{[}]|\:;",<.>/?*'
    console.log(length)
    for(let i = 1 ; i <= length ; i++){
      let randomChar = Math.floor(Math.random() + str.length)
      pass += str.charAt(randomChar)
    }
  console.log(pass)
  setPassword(pass) 
  },[length , numCheck , charAllow])

  return (
    <>
      
      <div className=' w-full max-w-md mx-auto my-5 shadow-2xl rounded-xl h-auto px-4 py-6 bg-slate-800 text-blue-200 '>
        <h1 className=' text-blue-200 text-3xl font-bold'>Password Genratior</h1>
        <div className=' flex my-4 mx-2 px-3 py-2 rounded-2xl shadow-2xl overflow-hidden'>
           <input type="text" value={password} placeholder='Your Password' 
           className=' outline-none w-full py-2 px-3 rounded-lg readOnly '
           />
           <button type="button" className=' bg-slate-400 text-blue-400 py-2 px-3 mx-2 w-'>Copy</button>
        </div>
      </div>

      <PassWordGenratior />
    </>
  )
}

export default App
