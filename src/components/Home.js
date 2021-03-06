import React from 'react';
import { NavLink } from 'react-router-dom';

function loadScripts(src){
  const scriptTag = document.createElement('script');
  scriptTag.async = false;
  scriptTag.src = src;
  document.querySelector('body').appendChild(scriptTag);
}

function makeParticleDiv(){
  const particleDiv = document.createElement('div');
  const root = document.getElementById('root');
  particleDiv.setAttribute('id', "particles-js");
  document.body.insertBefore(particleDiv, root);
}

function removeScripts(element){
  const elem = document.getElementById(element);
  elem.parentNode.removeChild(elem);
}

class Home extends React.Component {
  componentWillMount(){
    makeParticleDiv();
    loadScripts("js/particles-config.js"); 
  }

  componentWillUnmount(){
    removeScripts('particles-js');
  }
  render(){
    return (
      <div className="home">
        <header>
          <h1>Hi, I'm Treasure</h1>
          <h3><span>Coding </span>is what I do</h3>
          <NavLink to='/portfolio'><i className="fa fa-arrow-circle-right"></i></NavLink>
        </header>
      </div>
      )
  }
}

const HomeNav = (props)=>{
  return (
    <nav>
        <ul className="nav-base landing-page">
          <li><NavLink to='/portfolio' activeClassName="selected" className="btn-transparent">Enter</NavLink></li>
          {/* <li><NavLink to='/about' activeClassName="selected" className="btn-transparent">About Me</NavLink></li>
          <li><NavLink to='/portfolio' activeClassName="selected" className="btn-transparent">Projects</NavLink></li>
          <li><NavLink to='/resume' activeClassName="selected" className="btn-transparent">Resume</NavLink></li>
          <li><a href="http://github.com/trezp" className="btn-transparent" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><a href="https://www.linkedin.com/in/treasureporth" className="btn-transparent" target="_blank" rel="noopener noreferrer">LinkedIn</a></li> */}
        </ul>
    </nav>
  )
}

export default Home;
