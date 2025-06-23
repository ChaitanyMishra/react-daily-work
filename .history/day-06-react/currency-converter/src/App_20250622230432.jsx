import { useState  , useEffect} from 'react';
import './App.css';
import InputBox from './components/InputBox'; // ✅ Correct import
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState("inr")
  const [to , setTo] = useState("usd")
  const [convertedAmmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo || {})

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmmount)
  }
  
  useEffect(() => {
  if (!currencyInfo) return;
  const rate = currencyInfo[to];
  if (rate) {
    setConvertedAmount((amount * rate).toFixed(2));
  }
}, [amount, from, to, currencyInfo]);
  return (
    <div className="min-h-screen bg-[url('bgImg.png')] bg-cover bg-center bg-no-repeat">
      <h1 className="text-white text-3xl font-bold p-10">Currency Converter</h1>

      {/* Example usage of InputBox */}
      <div className="max-w-xl mx-auto mt-8">
        <InputBox
          label="From"
          amount={amount}
          onAmountChange={(val) => console.log("Amount changed to:", val)}
          onCurrencyChange={(currency) => console.log("Currency changed to:", currency)}
          currencyOptions={['usd', 'inr', 'eur']}
          selectedCurrency="usd"
        />
      </div>
    </div>
  );
}

export default App;
