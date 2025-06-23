import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
export function VacationCard({ img, imgAlt, eyebrow, title, pricing, url }) {
  return (
    <div>
      <img className="rounded-lg" src="" alt={imgAlt} />
      <div className="mt-4">
        <div className="text-xs font-bold text-sky-500">{eyebrow}</div>
        <div className="mt-1 font-bold text-gray-700">
          <a href={url} className="hover:underline">
            {title}
          </a>
        </div>
        <div className="mt-2 text-sm text-gray-600">{pricing}</div>
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)
  

  return (
  <>
  <h1 className='bg-red-100 text-black p-3 rounded-xl hover:bg-red-900' >day-03-react</h1>
  <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?_gl=1*il8jyg*_ga*MTQ1MTE1NTQ4Mi4xNzQwNzYxMTMw*_ga_8JE65Q40S6*czE3NTAzNTYzODIkbzMkZzEkdDE3NTAzNTY0OTMkajE0JGwwJGgw" alt="" />
  <div class="space-y-2 text-center sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg font-semibold text-black">Erin Lindford</p>
      <p class="font-medium text-gray-500">Product Engineer</p>
    </div>
    <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
      Message
    </button>
  </div>
</div>
<VacationCard />
  </>
  )
}

export default App
