import React from 'react';
import {NavLink} from 'react-router-dom'

class Home extends React.Component {
  render(){
	return (
	  <div className="home">
			<header>
				<h1>Treasure Porth</h1>
				<h3>Full Stack <span>JavaScript</span> Developer</h3>
				<HomeNav/>
			</header>
	  </div>
    )
  }
}

const HomeNav = (props)=>{
  return (
    <nav>
        <ul className="nav-base landing-page">
          <li><NavLink to='/about' activeClassName="selected" className="btn-transparent">About Me</NavLink></li>
          <li><NavLink to='/portfolio' activeClassName="selected" className="btn-transparent">Code</NavLink></li>
          <li><NavLink to='/resume' activeClassName="selected" className="btn-transparent">Resume</NavLink></li>
          <li><a href="http://github.com/trezp" className="btn-transparent">Github</a></li>
          <li><a href="https://www.linkedin.com/in/treasureporth" className="btn-transparent">LinkedIn</a></li>
        </ul>
    </nav>
  )
}

export default Home;
