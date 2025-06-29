import LogIn from "./components/LogIn";
import UserCard from "./components/UserCard";

import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
   <UserContextProvider>
    <Pro
    <LogIn />
    <UserCard/>
   </UserContextProvider>
  );
}

export default App;
