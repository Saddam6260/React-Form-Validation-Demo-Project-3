import React, { useState } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isLogInHandler = () => {
    setIsLoggedIn(true);
  };

  const isLogOutHandler = (email, password) => {
    setIsLoggedIn(false);
  };
  return (
    <React.Fragment>
      <MainHeader isLogin={isLoggedIn} isLogOutHandler={isLogOutHandler} />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login isLogin={isLogInHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
