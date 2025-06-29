import myImg from './assets/Logo.jpg'

import './index.css'

function App() {
  return(
  <div className=' flex items-center justify-center mx-auto bg-purple-200 h-screen w-full rounded-lg'>
    <div className='h-screen max-h-[65vh] py-3 w-full max-w-[25vw]  bg-purple-400 rounded-lg hover:shadow-lg hover:shadow-purple-400 hover:scale-105 duration-500'>
    <img src={myImg} alt="" className=' object-cover h-auto w-[99%] px-2 mx-auto rounded-3xl ' />
    <p>My Name Is Chaitany Mishra</p>

    </div>
  </div>
  )
}

export default App
