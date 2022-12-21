import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'
import '../styles/projects.css'

function Projects() {
  return (
    <div className="projects">
        <h1 className="projectTitle"> My Personal Projects</h1>
        <div className="projectList">
            {ProjectList.map((project, idx) => {
                return (
                    <ProjectItem id={idx} name={project.Name}  />
                );
            })}
        </div>
    </div>
  )
}

export default Projects;
