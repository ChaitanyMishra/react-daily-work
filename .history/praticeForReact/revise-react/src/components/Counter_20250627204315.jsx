import { useContext, useState } from "react";
import { ThemeContext } from "../App";
export default function Counter() {
  const theme = useContext(ThemeContext)
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");

  function handleIncrement() {
    if (counter < 20) {
      setCounter((prev) => prev + 1);
      setMessage("");
    } else {
      setMessage("Value can't go above 20");
    }
  }

  function handleDecrement() {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
      setMessage("");
    } else {
      setMessage("Value can't go below 0");
    }
  }

  function reset() {
    setCounter(0);
    setMessage("");
  }

  return (
    <div className="flex flex-col items-center bg-slate-600 px-6 py-6 rounded-lg shadow-lg space-y-4">
      
      <h2 className="text-white text-3xl font-bold">{counter}</h2>
      <div className="flex space-x-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded"
          onClick={handleDecrement}
        >
          -
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-4 py-2 rounded"
          onClick={reset}
        >
          Reset
        </button>
      </div>
      {message && (
        <span className="text-yellow-300 font-semibold text-sm italic">
          {message}
        </span>
      )}
    </div>
  );
}
