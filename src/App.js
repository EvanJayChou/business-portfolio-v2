import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <>
        <NavBar/>
        <Routes>
          <Route exact path = '/' element={<Home />} />
          <Route exact path = '/about' element={<About />} />
          <Route exact path = '/Work' element={<Work/>}/>
          <Route exact path = '/portfolio' element={<Portfolio/>}/>
          <Route exact path = '/contact' element ={<Contact/>}/>
        </Routes>
    </>
  );
}

export default App;
