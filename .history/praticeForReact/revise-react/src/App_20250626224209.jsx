import './index.css' 
import Info from './components/Info';
function App() {
  

  return (
    <>
    <div className=' h-screen w-full bg-stone-200' >
      <h1 className=' text-center text-purple-600 font-extrabold font-serif text-3xl py-3 italic'>React Revision</h1>
      <div className=' flex flex-col h-auto min-h-64 bg-slate-500 w-56 items-center justify-center m-auto text-white text-xl'>
        <Info name = {"Chaitany"} roll = {} />
      </div>
    </div>
    

    </>
  )
}

export default App
