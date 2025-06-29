import myImg from './assets/chaitany.jpg'

import './index.css'

function App() {
  return(
  <>
  <div className=' flex bg-red h-screen'>
    <h1>hi</h1>
    <img src={myImg} alt="" className=' object-cover ' />
  </div>
  </>
  )
}

export default App
