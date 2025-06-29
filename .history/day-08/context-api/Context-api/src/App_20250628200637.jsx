import UserCard from "./components/UserCard";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
   <UserContextProvider>
    <h1>Hello</h1>
   </UserContextProvider>
  );
}

export default App;
