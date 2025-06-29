import myImg from './assets/chaitany.jpg'

import './index.css'

function App() {
  return(
  <>
  <div className=' flex bg-reg h-screen'>
    <h1>hi</h1>
    <img src={myImg} alt="" className=' h-6 w-6 ' />
  </div>
  </>
  )
}

export default App
