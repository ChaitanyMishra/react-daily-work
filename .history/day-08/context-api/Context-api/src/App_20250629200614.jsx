import LogIn from "./components/LogIn";
import Profile from "./components/profile";
import UserCard from "./components/UserCard";
import UserContexProvider from "./context/UserContextProvider";

function App() {
  return (
   <UserContextProvider>
    <h1>Hello</h1>
    <LogIn />
    <Profile />
    <UserCard/>
   </UserContextProvider>
  );
}

export default App;
