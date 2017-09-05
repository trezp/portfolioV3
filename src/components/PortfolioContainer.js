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
		<div className="portfolio-container">
      <Router>
        <div>
          <PortfolioNav/>
          <Switch>
              <Route exact path="/portfolio" component={Websites}/>
              <Route path="/portfolio/apps" component={Apps}/>
          </Switch>
        </div>
      </Router>
  	</div>
	);
}

const PortfolioNav = ()=>{
  return (
    <ul className="portfolio-nav">
      <li><NavLink exact to='/portfolio' activeClassName="selected" className="link-default">Websites</NavLink></li>
      <li><NavLink to='/portfolio/apps' activeClassName="selected"className="link-default">Apps</NavLink></li>
    </ul>
  )
}

const Websites = () => {
  return (
    <div>
      <p>{websites.description}</p>
        <div className="grid">
        {websites.websites.map((website, index)=>{
          return (
            <div className="grid-item" key={index}>
              <h3>{website.title}</h3>
              <img src={website.thumbnail} alt={website.alt}/>
            </div>
          )
        })}
        </div>
    </div>
  );
}

function Apps(props){
	return (
		<div className="block-app">
    {projects.map((project, index)=>{
      return (
        <div key={index} className="proj"> 
            <h2 className="top">{project.title}</h2>
            <span><img src={project.thumbnail} alt={project.tagline}/></span>
            <p>{project.tagline}</p>
        </div>
      )
    })}
  </div>
	);
}


export default PortfolioContainer;
