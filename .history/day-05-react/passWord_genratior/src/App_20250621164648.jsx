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
           className=' outline-none w-full py-2 px-3 rounded-l-xl readOnly '
           
           />
           <button type="button" className=' rounded-r-lg bg-blue-700 text-white py-2 px-3 shrink-0 outline-none  hover:bg-gray-700 hover:text-blue-100 font-semibold font-serif text-xl'>Copy</button>
        </div>
        <div className='flex text-base gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={20} value={length} className=' cursor-pointer' />
            <label htmlFor="">lenght: {length}</label>
            <input type="checkbox" name="Add Number" id="" />
            <input type="checkbox" name="Add Special Character"/>
          </div>
        </div>
      </div>

      <PassWordGenratior />
    </>
  )
}

export default App
