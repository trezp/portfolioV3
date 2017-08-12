import React from 'react';
import projects from '../data/projects';


function ProjectList(props){

  return (
    <ul className="project-container">
      {projects.map((project) =>{
        return (
          <li key={project.id}  className="project">
            <h3>{project.title}</h3>
            <img src={project.thumbnail}/>
            <h4>{project.tagline}</h4>
            <h6>{project.technologies}</h6>
            <p>{project.description}</p>
          </li>
        )
    })}
    </ul>
  )
}

export default ProjectList;
