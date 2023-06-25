
import './App.css';
import { useState } from "react";
import SideBar from './components/SideBar/SideBar';
import { Routes,Route, useLocation  } from 'react-router-dom';
import About from "./components/About/About" 

import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import {AnimatePresence } from "framer-motion"
import Home from "./components/home/Home"




function App() {
  const location = useLocation()
  return (
    <div>
      <SideBar></SideBar>
      <AnimatePresence  >
      <Routes location={location}  key={location.key}>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/Contact" element={<Contact/>} />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
