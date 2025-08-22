
function App() {
return(
  <div className=" bg-blue-950 h-screen w-screen ">
  <h1 className=" text-violet-300 text-center font-serif font-semibold text-2xl pb-12 pt-5 ">Chaitany Mishra - Frontend Devloper</h1>
  <div className=" flex gap-10 px-10 items-start mt-5 justify-around">
    <div className=" p-8 max-w-xl">
      <h2 className=" text-violet-500 text-3xl pb-3">About Me</h2>
      <p className=" text-violet-100"> Fast-learning and dedicated <span className=" text-violet-300 italic text-lg">Frontend Web Developer</span> with hands-on experience building <span className=" text-violet-300 italic text-lg">responsive</span>, 
        user
          friendly web applications using HTML, CSS, JavaScript, and React.js. Strong understanding of <span className=" text-violet-300 italic text-lg"> UI/UX principles,</span> 
          <span  className=" text-violet-300 italic text-lg">component-based</span> design , and cloud-based deployment tools. Passionate about product development, 
          company to contribute to impactful tech teams</p>
    </div>
    <div className=" w-80 h-100 overflow-hidden rounded-3xl shadow-2xl" >
    <img src="chaitany.jpg" alt="Chaitany" srcset="" className=" h-full w-full object-cover"  />
    </div>
    <div>
    </div>
  </div>
  <h1 className=" text-center text-violet-200">Skills</h1>
  </div>

)

}

export default App
