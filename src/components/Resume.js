import React from 'react';
import Nav from './Nav';
import jobs from "../data/jobs";
import { NavLink } from 'react-router-dom';

function Resume(){
	return (
		<div>
			<Nav/>
			<div className="resume">
        <h1>Treasure Porth</h1>
        <div className="block-contact">
          <h2><a className="link-default" href="http://github.com/trezp"><i className="fa fa-code-fork"></i> Github </a></h2>
          <h2><a className="link-default" href="mailto:treasure.porth@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i> treasure.porth@gmail.com </a></h2>
          <h2><NavLink className="link-default" exact to='/'> <i className="fa fa-globe" aria-hidden="true"></i> treasureporth.com </NavLink></h2>
        </div>
        
        <div>
          <h2>Technical Skills</h2>
          <ul className="block-tech-skills">
            <li><span>Languages</span>: JavaScript (including ES6), familiar with Python</li>
            <li><span>Reponsive Design/Development</span>: HTML/CSS, SASS, LESS, PUG, Bootstrap</li>
            <li><span>Front End:</span> React, JQuery, familiarity with Angular 1.x</li>
            <li><span>Backend:</span> Node, Express, Mongoose, MongdoDB. Familiar with Django, postgreSQL</li> 
          </ul>	
        </div>
			
        <h2>Work Experience</h2>
        {jobs.map((job)=>{
        return (
          <div key={job.job_title} className="block-work-exp">
            <h3>{job.job_title}</h3>
            <h4>{job.company}</h4>
            <p>{job.start_date} - {job.end_date}</p>
              <ul> {job.job_duties.map((duty)=>{ 
                  return (
                    <li key={duty}>{duty}</li>
                  )
                })}
              </ul>
          </div>
          )
        })}

        <h2>Education</h2>
        <ul className="block-ed">
          <li><span>Full Stack Web Developer Bootcamp</span>, Python/Django-based, PDX Code Guild, 2014</li>
          <li><span>Master of Arts</span>, Postsecondary and Adult Education, Portland State University, 2011</li>
          <li><span>Bachelor of Arts</span>, General, magna cum laude, Portland State University, 2009</li>
        </ul>
        <a className="btn-primary" href="https://docs.google.com/document/d/1rZknCiqQTbn6WeBj5cQE5h6th2sWFMmroZeyj6g86i0/edit?usp=sharing"><i className="fa fa-file-o" aria-hidden="true"></i> View as Google Doc</a>
      </div>
      
		</div>
	);
}

export default Resume;