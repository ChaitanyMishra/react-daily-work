import LogIn from "./components/LogIn";

import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
   <UserContextProvider>
    <h1>Hello</h1>
    <LogIn />
   </UserContextProvider>
  );
}

export default App;
