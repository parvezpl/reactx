import { useState } from 'react'
import './App.css'
import { Footer, Header } from './components'
// import Home from './homeItem/home'
import { Outlet } from 'react-router-dom';



function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>

    </>
  )
}

export default App
