import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav id='nav'>
            <div>
                <h1>Evan J. Chou</h1>
            </div>
            <ul id='list'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/skills'>Blog</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;