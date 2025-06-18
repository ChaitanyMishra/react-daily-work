import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(1);
  const [message, setMessage] = useState('');

  const addValue = () => {
    if (counter < 20) {
      setCounter(prev => prev + 1);
      setMessage(''); // clear any previous message
    } else {
      setMessage("You can't go above 20");
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(prev => prev - 1);
      setMessage('');
    } else {
      setMessage("You can't go below 0");
    }
  };

  return (
    <>
      <h1>Counter App using React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Increment</button>
      <button onClick={removeValue} style={{ marginLeft: '1rem' }}>Decrement</button>
      
      {/* Show message if exists */}
      {message && (
        <p style={{ color: 'red', marginTop: '1rem' , ba }}>{message}</p>
      )}
    </>
  );
}

export default App;
