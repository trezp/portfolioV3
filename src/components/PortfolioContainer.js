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

function Websites(props){
	return (
    <div>
      <p>{websites.description}</p>
      <div className="block-app">
        
        {websites.websites.map((website)=>{
          return (
            <div key={website.title} className="block-website">
              <h2>{website.title}</h2>
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
    {projects.map((project)=>{
      return (
        <div key={project.title}> 
          <div className="left">
            <h2 className="top">{project.title}</h2>
            <img src={project.thumbnail} alt=""/>
          </div>
        </div>
      )
    })}
  </div>
	);
}


export default PortfolioContainer;
