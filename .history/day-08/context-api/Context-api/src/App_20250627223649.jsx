import myImg from './assets/chaitany.jpg'

import './index.css'

function App() {
  return(
  <div className=' flex bg-slate-200 h-screen'>
    <div className=' h-auto w-auto min-h'>
    <img src={myImg} alt="" className=' object-cover h-24 w-24 ' />
    </div>
  </div>
  )
}

export default App
