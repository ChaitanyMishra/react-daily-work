import { useState } from "react";

export default function ClickDemoCard() {
  const [cardColor, setCardColor] = useState("bg-gray-200");

  function handleCardClick() {
    setCardColor("bg-red-300");
    alert("🚨 Card Clicked");
  }

  return (
    <div
      onClick={handleCardClick}
      className={`p-6 border-2 border-black rounded-xl w-[300px] ${cardColor} transition-colors duration-300 space-y-4`}
    >
      <div className="relative">
        <img
          src="C:\Ussrc\assets\react.svg"
          alt="Profile"
          className="rounded-md"
        />
        {/* ✅ This button uses stopPropagation */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // 👈 Prevent card click
            alert("🔗 LinkedIn Button Clicked");
          }}
          className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 text-sm rounded-md shadow-md hover:bg-blue-700"
        >
          LinkedIn
        </button>
      </div>

      {/* ❌ This button does NOT use stopPropagation */}
      <button
        onClick={() => {
          alert("💻 GitHub Button Clicked");
          // ⚠️ No stopPropagation here — card click will also fire
        }}
        className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
      >
        GitHub
      </button>
    </div>
  );
}
