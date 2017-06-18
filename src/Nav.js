import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ()=> (
    <header>
      <ul>
          <li><NavLink to='/cats'>Cats</NavLink></li>
          <li><NavLink to='/flowers'>Flowers</NavLink></li>
          <li><NavLink to='/rainbows'>Rainbows</NavLink></li>
      </ul>
    </header>

)

export default Nav;
