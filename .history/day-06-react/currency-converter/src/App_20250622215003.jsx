import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const currencyData = useCurrencyInfo("usd"); // ✅ call hook here

  return (
    <div className="min-h-screen bg-[url('bgImg.png')] bg-cover bg-center bg-no-repeat">
      <h1 className="text-white text-3xl font-bold p-10">Currency Converter</h1>

      <div className="bg-white max-w-md mx-auto p-6 rounded-lg shadow-lg text-black">
        <h2 className="text-xl font-semibold mb-4">USD Rates:</h2>
        {currencyData && Object.entries(currencyData).map(([key, value]) => (
          <p key={key}>USD → {key.toUpperCase()}: <strong>{value}</strong></p>
        ))}
      </div>
    </div>
  );
}

export default App;
