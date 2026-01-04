import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import HomePage from './Pages/HomePage'

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
       
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
