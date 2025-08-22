import Counter from './components/Counter';
import './index.css';



function App() {

  return (
    <div className=' h-screen w-screen bg-slate-800'>
     <h1 className=' text-center text-white italic underline text-3xl pt-3'>This Is my React Pratice Day</h1>
     <br />
     <br />
     <p className=' text-white text-center text-2xl pb-6'> Counter IS</p>
     <Counter />
    </div>
  );
}

export default App;
