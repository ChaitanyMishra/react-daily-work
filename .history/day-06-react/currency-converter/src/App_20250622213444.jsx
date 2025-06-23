import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo/useCurrencyInfo '


function App() {

  return (
     <div className="min-h-screen bg-[url('bgImg.png')] bg-cover bg-center bg-no-repeat">
      <h1 className="text-white text-3xl font-bold p-10">Currency Converter</h1>
      < useCurrencyInfo />
    </div>

    
  )
}

export default App
