import LogIn from "./components/LogIn";
import Profile from "./components/profile";
import UserCard from "./components/UserCard";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
   <UserContextProvider>
    <h1>Hello</h1>
    <LogIn />
    
   </UserContextProvider>
  );
}

export default App;
