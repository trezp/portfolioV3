import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = (props)=>{

  return (
    <nav>
        <ul className="nav-base main-nav">
          <li><NavLink exact to='/' className="btn-transparent">TRP</NavLink></li>
          <li><NavLink to='/about' activeClassName="selected" className="btn-transparent">About Me</NavLink></li>
          <li><NavLink to='/portfolio' activeClassName="selected" className="btn-transparent">Code</NavLink></li>
          <li><NavLink to='/resume' activeClassName="selected" className="btn-transparent">Resume</NavLink></li>
          <li><a href="http://github.com/trezp" className="btn-transparent" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><a href="https://www.linkedin.com/in/treasureporth" className="btn-transparent" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
    </nav>
  )
}

export default Nav;