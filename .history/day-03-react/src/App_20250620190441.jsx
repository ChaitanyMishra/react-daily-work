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
    name : 'aditya',
    jobRole : 'software devloper',
    btnText : "projects"
  }
    let myDetails3 = {
    name : 'Satyam',
    jobRole : 'Python Devloper',
    btnText : "Work Experience"
  }
      let myDetails4 = {
    name : 'Nikhil',
    jobRole : 'React Devloper',
    btnText : "Visit Us"
  }
      let myDetails5 = {
    name : 'Naman',
    jobRole : 'Full Stack ',
    btnText : "Work Experience"
  }


  return (
  <div  className='flex flex-wrap gap-5 flex-col justify-center items-center'>
  <h1 className='bg-red-100 text-purple-700 text-center p-3 rounded-lg hover:bg-red-200' >day-03-react</h1>
 <div className='flex gap-5 flex-wrap'>

< ProfileCard name="Chaitany Mishra" jobRole="Web Developer" btnText = "react op" />
< ProfileCard name="MPCPS" jobRole="Web Developer" btnText="Click to learn" />
</div>
<div className='flex flex-wrap gap-5 rounded-lg p-5 justify-center items-center'>
<Card  newDetails={myDetails}/>
<Card newDetails={myDetails2}/>
<Card newDetails={myDetails3}/>
<Card newDetails={myDetails4}/>
<Card newDetails={myDetails5}/>
</div>

</div>
  )
}

export default App
