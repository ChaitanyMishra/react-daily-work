import Counter from './components/Counter';
import Card from './components/Card';
import './index.css';
import { useState } from 'react';
import BgChanger from './components/BgChanger';
import PasswordGen from './components/PasswordGen';

function App() {
  // ✅ declare students outside return (not inside JSX)
  const students = [
    {
      name: "Chaitany Mishra",
      course: "BCA",
      college: "MPCPS",
      cgpa: 7.24,
      jobRole: "Front End Developer",
    },
    {
      name: "Amit Sharma",
      course: "BCA",
      college: "XYZ College",
      cgpa: 8.1,
      jobRole: "Backend Developer",
    },
    {
      name: "Neha Verma",
      course: "B.Sc IT",
      college: "ABC University",
      cgpa: 9.0,
      jobRole: "UI/UX Designer",
    },
  ];
const [theme , setTheme] = useState('light');
  return (
    
    <div className={` min-h-screen w-full  ${theme==="light"?"bg-slate-950":"bg-slate-600"} `}>
      <div className='flex justify-around items-center py-5'>
      <h1 className="text-center text-white italic underline text-3xl pt-3 dark:text-blue-500">
        This Is my React Practice Day
      </h1>
      <BgChanger theme={theme} setTheme={setTheme} />
</div>
      <p className="text-white text-center text-2xl my-6">Counter IS</p>
     
      <Counter />
      

      {/* multiple cards */}
      <div className="flex flex-wrap gap-6 justify-center mt-8">
        {students.map((s, i) => (
          <Card key={i} students={s} />
        ))}
      </div>
      <PasswordGen />
    </div>
  );
}

export default App;
