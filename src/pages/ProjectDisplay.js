import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import { GithubFilled } from '@ant-design/icons'
import '../styles/projectdisplay.css'
 
function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
  return (
    <div className="project">
        <h1> {project.Name}</h1>
        <img src={project.Image} />
        <p>
            <b>Used:</b> {project.Used}
        </p>
        <GithubFilled  />
    </div>
  )
}

export default ProjectDisplay
