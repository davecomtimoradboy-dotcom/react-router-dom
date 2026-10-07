// import { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Students from './pages/Student';
import Courses from './pages/Courses';
import Contact from './Contavt';
import MainLayout from "./layout/MainLayout";



function App() {
  
  return (

    <>

    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="students" element={<Students />} />
        <Route path="courses" element={<Courses />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
