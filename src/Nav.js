import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ()=> (
    <nav className="main-nav">
      <ul>
      	<li><NavLink exact to='/' activeClassName="selected">Home</NavLink></li>
      	<li><NavLink to='/about' activeClassName="selected">About</NavLink></li>
        <li><NavLink to='/portfolio' activeClassName="selected">Portfolio</NavLink></li>
        <li><NavLink to='/resume' activeClassName="selected">Resume</NavLink></li>
      </ul>
    </nav>
)

export default Nav;
