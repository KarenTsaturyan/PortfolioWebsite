import React from 'react'
import ProjectItem from './ProjectItem'
import './Project.css' //projectItem's css code is here either
import { ProjectList } from '../../info/ProjectList'



function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
      {ProjectList.map((project, idx)=>(
        <ProjectItem id={idx} name={project.name} img={project.img} />
      ))}
      </div>  
    </div>
  )
}

export default Projects