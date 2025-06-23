import Card from './cardComponent/card'
import  ProfileCard  from './cardComponent/profileCard'
import './App.css'


function App() {
  let myDetails = {
    name : 'Chaitany Mishra',
    jobRole : 'Web Devloper'
    btnText : "see Work History"
  }

  return (
  <>
  <h1 className='bg-red-100 text-black p-3 rounded-xl hover:bg-red-900' >day-03-react</h1>
  
 
< ProfileCard name="Chaitany Mishra" jobRole="Web Developer" btnText = "react op" />
< ProfileCard name="MPCPS" jobRole="Web Developer" btnText="Click to learn" />
<Card newDetails={myDetails}/>
<Card newDetails={myDetails}/>
<Card newDetails={myDetails}/>
<Card newDetails={myDetails}/>
<Card newDetails={myDetails}/>

  </>
  )
}

export default App
