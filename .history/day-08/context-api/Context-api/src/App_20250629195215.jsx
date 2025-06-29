import LogIn from "./components/LogIn";

import UserContextProvider from "./context/UserContext";

function App() {
  return (
   <UserContext.Provider>
    <h1>Hello</h1>
    <LogIn />
    
   </UserContextProvider>
  );
}

export default App;
