import React from 'react'

export default function BgChanger({theme , setTheme }) {

  return (
    <div>
      <button className=' text-lg italic text-white bg-blue-600 px-5 py-1 text-center mx-auto my-auto rounded-lg hover:bg-blue-500'onClick={()=> setTheme((prevTheme) => (prevTheme === "light"?"Dark" : "light"))} >{theme}</button>
      
    </div>
  )
}
