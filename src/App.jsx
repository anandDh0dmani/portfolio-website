import { useState } from 'react'
import './App.css'
import {  Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Educations from './Pages/Education'
import Projects from './Pages/Projects'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProjectDisplay from './Pages/ProjectDisplay'
import './Styles/Navbar.css'
function App() {
  return (
    <div className="App">
      <Navbar />  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<ProjectDisplay />} />
        <Route path='/qualifications' element={<Educations />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
