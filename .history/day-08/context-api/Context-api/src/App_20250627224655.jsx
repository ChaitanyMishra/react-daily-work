import myImg from './assets/Logo.jpg'

import './index.css'

function App() {
  return(
  <div className=' flex items-center justify-center mx-auto bg-slate-200 h-screen w-full border-'>
    <div className='h-screen max-h-[50vh] w-full max-w-[25vw] bg-slate-400 rounded-lg'>
    <img src={myImg} alt="" className=' object-cover h-[40%] w-full ' />
    </div>
  </div>
  )
}

export default App
