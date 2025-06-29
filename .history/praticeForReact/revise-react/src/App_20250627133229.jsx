import './index.css' 
import Info from './components/Info';
import Counter from './components/Counter';

function App() {


  return (
    <div className=' h-screen w-full bg-stone-200' >
      <h1 className=' text-center text-purple-600 font-extrabold font-serif text-3xl py-3 italic'>React Revision</h1>
      <div className=' flex flex-col h-auto min-h-64 bg-slate-500 w-56 items-center justify-center m-auto text-white text-xl'>
        <Info name = {"Chaitany"} roll = {"Web Devloper"} location = {"India"} />
      </div>
    

    <div>
      <h1 className=' text-center text-purple-600 font-extrabold font-serif text-3xl py-5 italic'>Counter App</h1>
        < Counter />

    </div>
    </div>
    <div 
  style="padding: 20px; border: 2px solid black; background: lightgray;"
  onclick="this.style.background = 'salmon'; alert('Card Clicked')"
>
  <div style="position: relative;">
    <img src="https://via.placeholder.com/150" alt="Profile" />
    <button 
      style="position: absolute; top: 10px; left: 10px;"
      onclick="alert('LinkedIn Clicked')"
    >
      LinkedIn
    </button>
  </div>
  <button onclick="alert('GitHub Clicked')">
    GitHub
  </button>
</div>

  )
}

export default App
