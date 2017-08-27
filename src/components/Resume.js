import React from 'react';
import Nav from './Nav';
import jobs from "../data/jobs";

function Resume(){
	return (
		<div>
			<Nav/>
			<div className="resume">
				<div className="contact-info-block">
          <h1>Treasure Porth</h1>
          <h2>treasure.porth@gmail.com</h2>
					<h2><strong><a href="index.html">treasureporth.com</a></strong></h2>
					<h2><a href="http://github.com/trezp"><strong><i className="fa fa-code-fork"></i> Github</strong></a></h2>
				</div>
			
				<div className="technical-skills">
					<h3>Technical Skills</h3>
					<p>JavaScript + jQuery, HTML/CSS, SASS+LESS+Bootstrap, Jade, Node, Express + Mongoose,
						MongoDB, Python, responsive design, git and github.
						Familiarity with Angular, Django, SQL</p>
				</div>
			
				<h3>Education</h3>
				<ul>
					<li><strong>Full Stack Web Developer Bootcamp</strong>, Python/Django-based, PDX Code Guild, 2014</li>
					<li><strong>Master of Arts</strong>, Postsecondary and Adult Education, Portland State University, 2011</li>
					<li><strong>Bachelor of Arts</strong>, General, magna cum laude, Portland State University, 2009</li>
				</ul>
			
				<h3>Work Experience</h3>
        {jobs.map((job)=>{
        return (
          <div key={job.job_title}>
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

			</div>
		</div>
	);
}

export default Resume;