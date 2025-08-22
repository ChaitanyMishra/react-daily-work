import './index.css';
import Info from './components/Info';
import Counter from './components/Counter';
import Card from './components/Card';
import ToggleText from './components/toggleText';
import { createContext, useState } from 'react';
import ToggleInput from './components/toggleInput';

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    
  );
}

export default App;
