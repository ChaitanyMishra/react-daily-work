import Card from './cardComponent/card'
import  ProfileCard  from './cardComponent/profileCard'
import './App.css'
import './index.css'


function App() {
  let myDetails = {
    name : 'Chaitany Mishra',
    jobRole : 'Web Devloper',
    btnText : "see Work History"
  }
    let myDetails2 = {
    name : 'ABC 1',
    jobRole : 'software devloper',
    btnText : "projects"
  }
    let myDetails3 = {
    name : 'DEF 2',
    jobRole : 'Python Devloper',
    btnText : "Work Experience"
  }


  return (
  <div  className='flex flex-wrap gap-5 flex-col'>
  <h1 className='bg-red-100 text-black p-3 rounded-xl hover:bg-red-200' >day-03-react</h1>
 <div className='flex gap'>
< ProfileCard name="Chaitany Mishra" jobRole="Web Developer" btnText = "react op" />
< ProfileCard name="MPCPS" jobRole="Web Developer" btnText="Click to learn" />
</div>
<Card newDetails={myDetails}/>
<Card newDetails={myDetails2}/>
<Card newDetails={myDetails3}/>
<Card newDetails={myDetails}/>
<Card newDetails={myDetails}/>

</div>
  )
}

export default App
