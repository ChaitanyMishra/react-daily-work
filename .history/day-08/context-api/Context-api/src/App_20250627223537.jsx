import myImg from './assets/chaitany.jpg'

import './index.css'

function App() {
  return(
  <div className=' flex b h-screen'>
    <img src={myImg} alt="" className=' object-cover h-24 w-24 ' />
  </div>
  )
}

export default App
