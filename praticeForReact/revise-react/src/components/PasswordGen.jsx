import React, { useCallback, useEffect , useRef } from 'react'
import {useState} from 'react'
export default function PasswordGen() {
  const [length , setLengh] = useState(8)
  const [number , setNum] = useState(false)
  const [character , setChar] = useState(false)
  const [password , setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenrator = useCallback(() =>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    let pass = ""
    if(number) str += "1234567890"
    if(character) str +="`~!@#$%^&*()-_=+]}[{';:/?.>,<|"

    for(let i = 1 ; i <= length ; i++ ){
      let char = Math.floor(Math.random() * str.length)
      pass+=  str.charAt(char)
    }
    setPassword(pass)
  } , [length , number , character])
  const copyHeandling = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

  }, [password])

  useEffect(() =>{

    passwordGenrator(); 
  } , [length , number , character , passwordGenrator])


  return (
    <div className='  dark:bg-slate-700 w-10/12 min-h-lg  mx-auto mt-14 px-3 py-3 rounded-lg shadow-slate-50 shadow-md'>
      <h1 className='text-white text-3xl text-center'>PassWord Genrator</h1>
      <div className=' flex gap-5 mt-5 mx-auto justify-center'>
      <input name="passwordGen" id="password" value={password} ref={passwordRef} className=' w-72 px-3 max-w-md flex items-center rounded-xl h-9 text-center  ' readOnly   placeholder='Your Password Will Genrate Hear' ></input>
      <button className=' bg-blue-600 hover:bg-blue-700 text-white px-8  rounded-md shadow-md shadow-blue-600 text-lg' onClick={copyHeandling}>Copy</button>
      </div>
       <div className='mx-auto flex  gap-2  bg-slate-500 text-white mt-5 max-w-lg px-3 rounded-lg shadow-xl  '>
        <div className=' flex items-center gap-5 w-full rounded-lg '>
        <input type="range" name="Lenght" value={length} min={8} max={16}  className=' cursor-pointer'  onChange={(e) =>{setLengh(Number(e.target.value))}} />
        <label className=' text-base text-blue-200  italic'>Length({length})</label>
        <input type="checkbox" name="Numbers" id=""  value={number}  onClick={()=> setNum((prevNumber) =>  !prevNumber)} />
        <label  className='  text-blue-200 text-base italic'>Numbers Allowd</label>
        <input type="checkbox" name="Characters" id="" value={character} placeholder='Character Allowed' className=' outline-none w-full py-1 px-3 ' onClick={() => setChar(prevChar => !prevChar)}  />
        <label htmlFor=""  className=' text-blue-200 text-base italic'>Character Allowed</label>
        </div>
      </div>
    </div>
  )
}
