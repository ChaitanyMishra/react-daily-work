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
      <h1 className=' text-red-900 text-3xl font-bold'>Password Genratior</h1>
      <div className=' w-full max-w-md mx-auto shadow-2xl rounded-xl h-72 px-4 py-6 bg-slate- text-white '>hello</div>

      <PassWordGenratior />
    </>
  )
}

export default App
