import './Components/counter'
import './App.css'
import './index.css';

function MyButton(){
  return(
    <button>1st react button</button>
  );
}

function App() {
  return (
    <div>
   <h1 className=' text-red-700 text-center text-4xl'>
    Hello! this is my 1st react app
   </h1>
   <MyButton />
   <br />
  
  </div>
  );
   
}

export default App
