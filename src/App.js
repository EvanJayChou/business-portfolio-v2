import React from 'react';
import {Routes, Route} from 'react-router-dom';
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
        <NavBar />
        <Routes>
          <Route exact path = '/' index element={<Home />} />
          <Route exact path = '/about' element={<About />} />
          <Route exact path = '/skills' element={<Skills/>}/>
          <Route exact path = '/portfolio' element={<Portfolio/>}/>
          <Route exact path = '/contact' element ={<Contact/>}/>
        </Routes>
    </>
  );
}

export default App;
