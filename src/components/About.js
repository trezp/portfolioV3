import React from 'react';
import Nav from './Nav';

function About(props){
	return (
		<div>
			<Nav/>
      <img src="images/colorheadshot.jpg" alt="Treasure Porth, Web Developer"/>
      <ul className="social-media">
        <li><a href="http://github.com/trezp"><i className="fa fa-github"></i></a></li>
        <li><a href="https://www.linkedin.com/in/treasureporth"><i className="fa fa-linkedin"></i></a></li>
        <li><a href="http://trezp.github.io/"><i className="fa fa-rss"></i></a></li>
        <li><a href="mailto:treasure.porth@gmail.com"><i className="fa fa-envelope-o"></i></a></li>
      </ul>
      <h3>Driven. Insightful. Meticulous.</h3>
      <p>I'm a Full Stack JavaScript developer.
        I help run <a href="http://www.teamtreehouse.com/techdegrees">Treehouse's Full Stack JavaScript Techdegree program.</a>
        I'm happy as long as I have a problem to solve and something new to learn. I am passionate about doing meaningful work, providing affordable education, working with underserved
        populations, and not being evil. I love to travel and I'm really good at karaoke.
      </p>
			<a href="resume.html" className="btn resume-button">View My Resume</a>
		</div>
	);
}

export default About;
