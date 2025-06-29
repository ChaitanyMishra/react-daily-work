import { useState } from "react";

export default function ClickCard() {
  const [bgColor, setBgColor] = useState("bg-gray-200");

  const handleCardClick = () => {
    setBgColor("bg-red-300");
    alert("Card Clicked");
  };

  const handleLinkedInClick = (e) => {
    e.stopPropagation();
    alert("LinkedIn Button Clicked");
    window.open("https://linkedin.com/in/yourprofile", "_blank");
  };

  const handleGitHubClick = (e) => {
    e.stopPropagation();
    alert("GitHub Button Clicked");
    window.open("https://github.com/yourrepo", "_blank");
  };

  return (
    <div
      className={`p-6 rounded-lg border-2 border-black ${bgColor} cursor-pointer transition duration-300`}
      onClick={handleCardClick}
    >
      <div className="relative">
        <img
          src="https://via.placeholder.com/300x150"
          alt="Profile"
          className="rounded-lg"
        />
        <button
          onClick={handleLinkedInClick}
          className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          LinkedIn
        </button>
      </div>

      <div className="mt-4">
        <button
          onClick={handleGitHubClick}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          GitHub
        </button>
      </div>
    </div>
  );
}
