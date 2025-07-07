import './index.css'

function App() {
  

 return (
  <Todo.Provider value="">
  <div className="min-h-screen bg-slate-400 flex items-center justify-center px-4">
    <div className="w-full max-w-2xl border-l-4 border-l-indigo-500 bg-white rounded-xl shadow-md p-6">
      <h1 className="text-center font-serif font-bold text-2xl lg:text-3xl xl:text-5xl py-5">
        ---- Write Your Todo ----
      </h1>
      <div className="mb-4">
      {/* Todo form goes here */} 
      </div>
      <div className="flex flex-wrap gap-y-3">
      {/*Loop and Add TodoItem here */}
      </div>

      
    </div>
  </div>
  </Todo.Provider>
);

}

export default App
