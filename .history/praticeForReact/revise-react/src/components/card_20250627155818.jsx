import { useState } from "react";
import logo from "../assets/Logo.jpg";

const Card = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleButton = () => {
    if (name.trim() === "") {
      setGreeting(""); // Clear if input is empty
    } else {
      setGreeting(`Hello ${name}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-200">
      <h1 className="text-center text-purple-600 font-extrabold italic text-4xl mb-4">My Card</h1>

      <div className="flex flex-col h-[20rem] w-[14rem] bg-purple-600 rounded-2xl p-4 shadow-lg">
        <img
          src={logo}
          alt="Chaitany Logo"
          className="h-20 w-20 rounded-full mx-auto my-3 object-cover"
        />

        <input
          type="text"
          className="bg-purple-400 p-2 rounded-xl text-purple-900 mb-2 text-center"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          className="bg-purple-500 text-blue-100 px-3 py-2 rounded-xl hover:bg-purple-900 hover:scale-105 duration-300"
          onClick={handleButton}
        >
          Click me
        </button>

        {greeting && (
          <p className="mt-4 text-white font-semibold text-center font">{greeting}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
