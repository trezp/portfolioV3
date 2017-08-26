import React from 'react';
import Nav from './Nav';
import projects from '../data/projects';
import websites from '../data/websites';

function Portfolio(props){
  
	return (
		<div id="portfolio" className="project-summary-row">
      <Nav/>
      {projects.map((project)=>{
        return (
          <div key={project.id}>
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

export default Portfolio;

