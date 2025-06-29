import React from 'react'
import myImg from '../assets/Logo.jpg'
function UserCard() {
  return (
    <div className="flex items-center justify-center bg-purple-200 min-h-screen w-full px-4">
      <div className="relative  max-w-sm bg-slate-950 rounded-lg p-5 hover:shadow-lg hover:shadow-purple-400 hover:scale-105 duration-500">
        <img
          src={myImg}
          alt="Chaitany"
          className="object-cover h-40 w-[90%] items-center rounded-2xl"
        />

        <p className="text-white font-serif text-center py-4 text-base">
          I'm <span className="text-purple-300 font-semibold italic">Chaitany Mishra</span>, a BCA student passionate about{" "}
          <span className="text-purple-300 font-semibold italic">Full Stack Web Development</span> and{" "}
          <span className="text-purple-300 font-semibold italic">Cloud Computing</span>. I focus on building{" "}
          <span className="text-purple-300 font-semibold italic">real-world projects</span> while strengthening my core skills in JavaScript, React, and backend technologies.
        </p>

        <h2 className="font-semibold text-lg text-center text-purple-400">Follow me on</h2>

        <div className="flex justify-around mt-5">
          <a
            className="px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-500 transition"
            href="https://github.com/ChaitanyMishra"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            className="px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-500 transition"
            href="https://www.linkedin.com/in/chaitany-dev-hash/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default UserCard
