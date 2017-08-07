import React from 'react';
import projects from './projects';


function ProjectList(props){

  return (
    <ul>
      {projects.map((project) =>{
        return (
          <li key={project.id}  className="project-container">
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
