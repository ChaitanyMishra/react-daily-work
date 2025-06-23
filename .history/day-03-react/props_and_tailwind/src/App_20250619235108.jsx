import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
 
export function BackgroundBlogCard() {
  return (
    <>    <Card
      shadow={false}
      className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          How we design and code open-source projects?
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          Tania Andrew
        </Typography>
        <Avatar
          size="xl"
          variant="circular"
          alt="tania andrew"
          className="border-2 border-white"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
      </CardBody>
    </Card>
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
  </>
  )
}

export default App
