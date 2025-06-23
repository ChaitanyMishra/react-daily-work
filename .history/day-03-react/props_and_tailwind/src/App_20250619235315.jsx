import { useState } from 'react'
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
    <Card
      shadow={false}
      className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
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
          alt="Tania Andrew"
          className="border-2 border-white"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
        />
      </CardBody>
    </Card>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-red-100 text-black p-3 rounded-xl hover:bg-red-900 text-center font-bold text-xl">
        Day-03-React
      </h1>

      <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
        <img
          className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
          alt="profile"
        />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">Erin Lindford</p>
            <p className="font-medium text-gray-500">Product Engineer</p>
          </div>
          <button className="border border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 px-4 py-1 rounded">
            Message
          </button>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <BackgroundBlogCard />
      </div>
    </>
  );
}

export default App;
