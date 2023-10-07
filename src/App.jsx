import React, {} from 'react'
import MainHeader from './components/MainHeader/MainHeader'
import './App.css'
import Login from './components/Login/Login'
import Home from './components/Home/Home'

function App() {

  return (
    <React.Fragment>
      <MainHeader/>
      <Home/>
      <Login/>
    </React.Fragment>
  )
}

export default App
