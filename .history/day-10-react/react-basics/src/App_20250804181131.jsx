function App() {
  return (
    <div className=" bg-blue-950 h-full w-screen ">
     
      <div className=" flex gap-10 px-10 items-start mt-5 justify-around">
        <div className=" p-8 max-w-xl">
          <h2 className=" text-violet-500 text-3xl pb-3">About Me</h2>
          <p className=" text-violet-100">
            {" "}
            Fast-learning and dedicated{" "}
            <span className=" text-violet-300 italic text-lg">
              Frontend Web Developer
            </span>{" "}
            with hands-on experience building{" "}
            <span className=" text-violet-300 italic text-lg">responsive</span>,
            user friendly web applications using HTML, CSS, JavaScript, and
            React.js. Strong understanding of{" "}
            <span className=" text-violet-300 italic text-lg">
              {" "}
              UI/UX principles,
            </span>
            <span className=" text-violet-300 italic text-lg">
              component-based
            </span>{" "}
            design , and cloud-based deployment tools. Passionate about product
            development, company to contribute to impactful tech teams
          </p>
        </div>
        <div className=" w-80 h-70 overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="chaitany.jpg"
            alt="Chaitany"
            srcset=""
            className=" h-full w-full object-cover"
          />
        </div>
      </div>
      <h2 className=" text-center text-violet-200 pt-16 text-3xl font-semibold italic">
        Skills
      </h2>
      <div>
        <h2 className="text-xl text-center mt-8 text-violet-200">
          Technical Skills:
        </h2>
        <ul className=" text-violet-200 flex gap-5 justify-center pt-4 items-center ">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript(ES6+)</li>
          <li>TailwindCSS</li>
          <li>C programming</li>
          <li>C++</li>
          <li>Python</li>
        </ul>
        <h2 className="text-xl text-center text-violet-200 mt-3">Soft Skill</h2>
        <ul className=" text-violet-200 flex gap-5 justify-center pt-4 items-center ">
          <li> Emotional Intelligence (EQ)</li>
          <li>Growth Mindset</li>
          <li> Effective Communication</li>
          <li>Self-Awareness</li>
          <li>Learning Initiative</li>
          <li> Attention to Detail</li>
        </ul>
        <h2 className="text-xl text-violet-200 text-center mt-3">
          Tools & Technology
        </h2>
        <ul className=" text-violet-200 flex gap-5 justify-center  pt-4 items-center ">
          <li>Stripe API</li>
          <li>Open API</li>
          <li>Socket.IO</li>
          <li>ESLint</li>
          <li> Prettier</li>
          <li>Postman</li>
          <li>Git</li>
          <li>Git Hub</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
