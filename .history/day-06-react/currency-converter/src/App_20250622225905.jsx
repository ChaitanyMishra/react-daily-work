import { useState, useEffect } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  useEffect(() => {
    if (!currencyInfo) return;
    const rate = currencyInfo[to];
    setConvertedAmount((amount * rate).toFixed(2));
  }, [amount, from, to, currencyInfo]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div className="min-h-screen bg-[url('bgImg.png')] bg-cover bg-center bg-no-repeat p-4">
      <h1 className="text-white text-3xl font-bold text-center mb-8">Currency Converter</h1>

      <div className="max-w-xl mx-auto bg-white/20 p-6 rounded-xl backdrop-blur-md space-y-4">
        {/* FROM Input */}
        <InputBox
          label="From"
          amount={amount}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
          currencyOptions={options}
          selectedCurrency={from}
        />

        {/* SWAP Button */}
        <div className="text-center">
          <button
            onClick={swap}
            className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300"
          >
            🔁 Swap
          </button>
        </div>

        {/* TO Input */}
        <InputBox
          label="To"
          amount={convertedAmount}
          onAmountChange={() => {}} // disabled field
          onCurrencyChange={setTo}
          currencyOptions={options}
          selectedCurrency={to}
          amountDisabled={true}
        />
      </div>
    </div>
  );
}

export default App;
