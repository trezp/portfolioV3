import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch, 
  NavLink
 } from 'react-router-dom';

import projects from '../data/projects';
import websites from '../data/websites';

function PortfolioContainer(props){
	return (
		<div id="portfolio" className="project-summary-row">
      <Router>
        <div>
          <PortfolioNav/>
          <Switch>
              <Route exact path="/portfolio" component={Home}/>
              <Route path="/portfolio/pro" component={Pro}/>
              <Route path="/portfolio/personal" component={Personal}/>
          </Switch>
        </div>
      </Router>
  	</div>
	);
}

const PortfolioNav = ()=>{
  return (
    <ul>
      <li><NavLink exact to='/portfolio' activeClassName="selected">Portfolio</NavLink></li>
      <li><NavLink to='/portfolio/pro' activeClassName="selected">Professional Projects</NavLink></li>
      <li><NavLink to='/portfolio/personal' activeClassName="selected">Personal Projects</NavLink></li>
    </ul>
  )
}

function Home() {
  return (
    <h1>Home</h1>
  )
}
function Pro(props){
	return (
		<div id="portfolio" className="project-summary-row">
    <p>{websites.description}</p>
    {websites.websites.map((website)=>{
      return (
        <div key={website.id}>
          <h2>{website.title}</h2>
          <img src={website.thumbnail} alt={website.alt}/>
          <p>{website.description}</p>
        </div>
      )
    })}
  </div>
	);
}

function Personal(props){
	return (
		<div id="portfolio" className="project-summary-row">
    {projects.map((project)=>{
      return (
        <div key={project.id} className='block-project'>
          <h2>{project.title}</h2>
          <h3>{project.tagline}</h3>
          <p>{project.description}</p>
          <p>Technologies Used:</p>
            <ul> {project.technologies.map((tech)=>{ 
                return (
                  <li key={tech}>{tech}</li>
                )
              })}
            </ul>
        </div>
      )
    })}
  </div>
	);
}


export default PortfolioContainer;
