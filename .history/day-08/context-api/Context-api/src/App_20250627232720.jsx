import myImg from './assets/Logo.jpg'

import './index.css'

function App() {
  return(
  <div className=' flex items-center justify-center mx-auto bg-purple-200 h-screen w-full rounded-lg '>
    <div className=' absolute h-screen max-h-[65vh] py-3 w-full max-w-[25vw]  bg-slate-950 rounded-lg hover:shadow-lg hover:shadow-purple-400 hover:scale-105 duration-500'>
    <img src={myImg} alt="" className=' object-cover h-[20vh] w-[99%] px-2 mx-auto rounded-3xl ' />
    <p className=' relative text-white font-serif px-5 text-center py-4 text-[1.05rem] '>I'm <span className=' text-purple-300 font-semibold italic '>Chaitany Mishra</span>, a BCA student passionate about <span className=' text-purple-300 font-semibold italic '>Full Stack Web Development</span> and <span className=' text-purple-300 font-semibold italic '>Cloud Computing</span>. I focus on building  <span className=' text-purple-300 font-semibold italic '> real-world projects </span> while strengthening my core skills in JavaScript, React, and backend technologies.</p>
    <button className=' px-4 py-2 rounded-lg bg-slate-700 text-white w-24 relative left-64 top-24  '>Git Hub</button>
     <button className=' px-4 py-2 rounded-lg bg-blue-700 text-white w-24 relative left- top-24  '>LinkedIn</button>
    

    </div>
  </div>
  )
}

export default App
