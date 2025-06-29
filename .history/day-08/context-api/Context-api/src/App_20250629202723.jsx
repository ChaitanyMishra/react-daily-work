import LogIn from "./components/LogIn";
import Profile from "./components/profile";
import UserCard from "./components/UserCard";

import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
   <UserContextProvider>
    <Profile />
    <LogIn />
    <UserCard/>
   </UserContextProvider>
  );
}

export default App;
