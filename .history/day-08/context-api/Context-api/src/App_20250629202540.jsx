import { useState } from "react";
import LogIn from "./components/LogIn";
import Profile from "./components/Profile";
import UserCard from "./components/UserCard";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  const [showUserCard, setShowUserCard] = useState(false);

  return (
    <UserContextProvider>
      <h1>Hello</h1>
      {!showUserCard ? (
        <LogIn onLoginSuccess={() => setShowUserCard(true)} />
      ) : (
        <>
          <Profile />
          <UserCard />
        </>
      )}
    </UserContextProvider>
  );
}

export default App;
