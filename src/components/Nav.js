import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = ()=>{
  return (
    <nav>
        <ul className="main-nav">
          {/* <li><NavLink exact to='/' activeClassName="selected" className="btn-transparent">Home</NavLink></li> */}
          <li><NavLink to='/about' activeClassName="selected" className="btn-transparent">About</NavLink></li>
          <li><NavLink to='/portfolio' activeClassName="selected" className="btn-transparent">Code</NavLink></li>
          <li><NavLink to='/resume' activeClassName="selected" className="btn-transparent">Resume</NavLink></li>
          <li><a href="http://github.com/trezp" activeClassName="selected" className="btn-transparent">Github</a></li>
          <li><a href="https://www.linkedin.com/in/treasureporth" activeClassName="selected" className="btn-transparent">LinkedIn</a></li>
          
        </ul>
    </nav>
  )
}

export default Nav;