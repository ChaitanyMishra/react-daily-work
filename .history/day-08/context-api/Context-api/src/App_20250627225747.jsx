import myImg from './assets/Logo.jpg'

import './index.css'

function App() {
  return(
  <div className=' flex items-center justify-center mx-auto bg-slate-200 h-screen w-full rounded-lg'>
    <div className='h-screen max-h-[45vh] py-6 w-full max-w-[25vw]  bg-slate-400 rounded-lg hover:shadow-lg hover:shadow-gray-400 hover:scale-105 duration-500'>
    <img src={myImg} alt="" className=' object-cover h-[40%] w-[80] px-4 py-1 rounded-xl ' />

    </div>
  </div>
  )
}

export default App
