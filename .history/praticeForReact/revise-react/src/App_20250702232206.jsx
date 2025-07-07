import './index.css';
import Info from './components/Info';
import Counter from './components/Counter';
import Card from './components/Card';
import ToggleText from './components/toggleText';
import { createContext, useState } from 'react';

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='h-screen w-full bg-stone-200'>
        <h1 className='text-center text-purple-600 font-extrabold font-serif text-3xl py-3 italic'>
          React Revision
        </h1>

        <div className='flex flex-col h-auto min-h-64 bg-slate-500 w-56 items-center justify-center m-auto text-white text-xl'>
          <Info name='Chaitany' roll='Web Developer' location='India' />
        </div>

        <div>
          <h1 className='text-center text-purple-600 font-extrabold font-serif text-3xl py-5 italic'>
            Learn About useState
          </h1>
          <Counter />
        </div>
        <Card name='Chetan' />
        <ToggleText />
        <tog
      </div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
export default App;
