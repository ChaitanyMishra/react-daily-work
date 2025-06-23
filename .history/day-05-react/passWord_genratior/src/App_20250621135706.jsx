import {useCallback , useState } from 'react'
import './App.css'
import './index.css';

function App() {
  const [length, setLength] = useState(8)
  const [numCheck , setNumberAllow] = useState(false)
  const [charAllow , setCharAllow] = useState(false)
  const [password , setPassword] = useState (false)
  const passWordGenratior = useCallback(length , numCheck , charAllow , password)
  let pass =""
  let str = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz"
  if(numCheck) str+= '0123456789'
  if(charAllow) str+= '~`@#$%^&*()_-=+{[}]|\:;",<.>/?*'
  const genPass = () => {
    
  }

  return (
    <>
      <h1 className=' text-red-900 text-3xl font-bold'>Password Genratior</h1>

    </>
  )
}

export default App
