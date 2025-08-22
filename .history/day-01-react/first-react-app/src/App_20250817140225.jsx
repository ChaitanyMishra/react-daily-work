imp
import './App.css'
function MyButton(){
  return(
    <button>1st react button</button>
  );
}

function App() {
  return (
    <div>
   <h1>
    Hello! this is my 1st react app
   </h1>
   <MyButton />
   <br />
   <Counter />
  </div>
  );
   
}

export default App
