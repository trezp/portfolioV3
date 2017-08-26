import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = ()=>{
  return (
    <div className="main-container">
      <nav>
          <ul className="main-nav">
            <li><NavLink exact to='/' activeClassName="selected" className="btn-primary">Home</NavLink></li>
            <li><NavLink to='/about' activeClassName="selected" className="btn-primary">About</NavLink></li>
            <li><NavLink to='/portfolio' activeClassName="selected" className="btn-primary">Code</NavLink></li>
            <li><NavLink to='/resume' activeClassName="selected" className="btn-primary">Resume</NavLink></li>
          </ul>
      </nav>
    </div>
  )
}

export default Nav;