import React, { useState } from 'react'
import MainHeader from './components/MainHeader/MainHeader'
import './App.css'
import Login from './components/Login/Login'
import Home from './components/Home/Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const isLogOutHandler = () => {
    setIsLoggedIn(false);
  }
  return (
    <React.Fragment>
      <MainHeader isLogin={isLoggedIn} isLogOutHandler={isLogOutHandler}/>
      <Home/>
      <Login/>
    </React.Fragment>
  )
}

export default App
