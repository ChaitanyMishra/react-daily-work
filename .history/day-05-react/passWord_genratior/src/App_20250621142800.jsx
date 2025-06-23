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
  const GenPass = () => {
    console.log(length)
    for(let i = 1 ; i <= length ; i++){
      let randomChar = Math.floor(Math.random() + str.length)
      pass += str.charAt(randomChar)
    },[length , numCheck , ]
    setPassword(pass)
    console.log(pass)
    
  }
  })

  return (
    <>
      <h1 className=' text-red-900 text-3xl font-bold'>Password Genratior</h1>
<PassWordGenratior />
    </>
  )
}

export default App
