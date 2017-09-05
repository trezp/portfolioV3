import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch, 
  NavLink
 } from 'react-router-dom';

function About(props){
	return (
		<div>
      <div className="about">
        <div>
          <img src="images/colorheadshot.jpg" alt="Treasure Porth, Web Developer"/>
          <ul className="social-media">
            <li><a href="http://github.com/trezp"><i className="fa fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/treasureporth"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="http://trezp.github.io/"><i className="fa fa-rss"></i></a></li>
            <li><a href="mailto:treasure.porth@gmail.com"><i className="fa fa-envelope-o"></i></a></li>
          </ul>
        </div>
        <div>
          <h3>Driven. Insightful. Meticulous.</h3>
          <p>I'm a Full Stack JavaScript developer.
            I help run <a href="http://www.teamtreehouse.com/techdegrees">Treehouse's Full Stack JavaScript Techdegree program.</a> I'm happy as long as I have a problem to solve and something new to learn. I am passionate about doing meaningful work, providing affordable education, working with underserved
            populations, and not being evil. I love to travel and I'm really good at karaoke.
          </p>
          <ul className="about-nav">
            <li><NavLink exact to='/about/origins' className="btn-primary">Origin Story</NavLink></li>
            <li><NavLink exact to='/about/video' className="btn-primary">Sample Video</NavLink></li>
          </ul>
          <div>
            <Route path="/about/origins" component={Origin}/>
            <Route path="/about/video" component={Video}/>
          </div>
        </div>
      </div>
		</div>
	);
}

const Origin = ()=>{
  return (
    <h3>Origin Story</h3>
  )
}

const Video = ()=>{
  return (
    <iframe width="560" height="315" src="https://www.youtube.com/embed/kXjF0-yCmpk" frameBorder="0" allowfullscreen></iframe>
  )
}


export default About;
