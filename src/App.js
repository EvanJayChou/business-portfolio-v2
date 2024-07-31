import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path = '/' index element={<Home />} />
          <Route path = '/about' element={<About />} />
          <Route path = '/skills' element={<Skills/>}/>
          <Route path = '/portfolio' element={<Portfolio/>}/>
          <Route path = '/contact' element ={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
