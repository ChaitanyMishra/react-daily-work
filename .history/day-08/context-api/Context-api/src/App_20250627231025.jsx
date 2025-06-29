import myImg from './assets/Logo.jpg'

import './index.css'

function App() {
  return(
  <div className=' flex items-center justify-center mx-auto bg-purple-200 h-screen w-full rounded-lg'>
    <div className='h-screen max-h-[65vh] py-3 w-full max-w-[25vw]  bg-purple-400 rounded-lg hover:shadow-lg hover:shadow-purple-400 hover:scale-105 duration-500'>
    <img src={myImg} alt="" className=' object-cover h-auto w-[99%] px-2 mx-auto rounded-3xl ' />
    <p className=' text-purple-100 font-serif px-3 text-center py-4 text-base '>I'm <span className=' text-purple-800 font-semibold italic '>Chaitany Mishra</span>, a BCA student passionate about <span className=' text-purple-800 font-semibold italic '>Full Stack Web Development</span> and Cloud Computing. I focus on building y real-world projects while strengthening my core skills in JavaScript, React, and backend technologies.</p>

    </div>
  </div>
  )
}

export default App
