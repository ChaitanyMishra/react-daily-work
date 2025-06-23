import './App.css'
import CurrencyInfo from './hooks/CurrencyInfo/useC'; // ✅


function App() {

  return (
     <div className="min-h-screen bg-[url('bgImg.png')] bg-cover bg-center bg-no-repeat">
      <h1 className="text-white text-3xl font-bold p-10">Currency Converter</h1>
      < CurrencyInfo />
    </div>

    
  )
}

export default App
