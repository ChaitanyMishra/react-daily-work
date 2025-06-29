import LogIn from "./components/LogIn";
import Profile from "./;
import UserCard from "./components/UserCard";
import UserContextProvider from "./context/UserContextProvider"; // ✅ correct now

function App() {
  return (
    <UserContextProvider>
      <h1>Hello</h1>
      <LogIn />
      <Profile />
      <UserCard />
    </UserContextProvider>
  );
}

export default App;
