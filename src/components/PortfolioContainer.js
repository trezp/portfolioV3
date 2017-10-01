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
              <Route exact path="/portfolio" component={AboutMe}/>
              <Route exact path="/websites" component={Websites}/>
              <Route exact path="/apps" component={Apps}/>
              <Route exact path="/video" component={Video}/>
          </Switch>
        </div>
      </Router>
  	</div>
	);
}

const PortfolioNav = ()=>{
  return (
    <ul className="portfolio-nav">
      <li><NavLink exact to='/portfolio' activeClassName="selected" className="link-default"s>About Me</NavLink></li>
      <li><NavLink exact to='/websites' activeClassName="selected" className="link-default">Websites</NavLink></li>
      <li><NavLink to='/apps' activeClassName="selected"className="link-default">Apps</NavLink></li>
      <li><NavLink exact to='/video' activeClassName="selected" className="link-default"s>Video</NavLink></li>
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

function AboutMe(){
  return (
    <div>
    <div className="about">
      <div>
        <img src="images/colorheadshot.jpg" alt="Treasure Porth, Web Developer"/>
        <ul className="social-media">
          <li><a href="http://github.com/trezp"><i className="fa fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/treasureporth"><i className="fa fa-linkedin"></i></a></li>
          <li><a href="mailto:treasure.porth@gmail.com"><i className="fa fa-envelope-o"></i></a></li>
        </ul>
      </div>
      <div>
        <h3>I'm a web developer and JavaScript Teacher.</h3>
        <p>I work at <a href="http://www.teamtreehouse.com">Treehouse</a>. I'm happy as long as I have a problem to solve and something new to learn. I am passionate about doing meaningful work, providing affordable education, working with underserved
          populations, and not being evil. I love to travel and I'm really good at karaoke.
        </p>
      </div>
    </div>
  </div>
  )
}

const Video = ()=>{
  return (
    <iframe width="560" height="315" src="https://www.youtube.com/embed/kXjF0-yCmpk" frameBorder="0" allowfullscreen></iframe>
  )
}



export default PortfolioContainer;
