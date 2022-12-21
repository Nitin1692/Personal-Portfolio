import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import { GithubFilled } from '@ant-design/icons'
import '../styles/projectdisplay.css'

 
function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    function handleClick(e) {
      if( project.Name === "Dédié Décor" ){
        e.preventDefault();
        window.location.href = "https://github.com/Nitin1692/dedie-decor-frontend-and-backend"
      }
      if( project.Name === "DNA Classification" ){
        e.preventDefault();
        window.location.href = "https://github.com/Nitin1692/DNA-Classfication"
      }
      if( project.Name === "Advanced Mining Helmet" ){
        e.preventDefault();
        alert("Don't Have a Github Repo")
      }
      if( project.Name === "Smart Irrigation System" ){
        e.preventDefault();
        alert("Don't Have a Github Repo")
      }
      if( project.Name === "Smart Scanner" ){
        e.preventDefault();
        window.location.href = "https://github.com/Nitin1692/Smart-Scanner"
      }
      if( project.Name === "Internet Speed Test" ){
        e.preventDefault();
        window.location.href = "https://github.com/Nitin1692/Internet-Speed-Test"
      }
    }
  return (
    <div className="project">
        <h1> {project.Name}</h1>
        <img src={project.Image} />
        <p>
            <b>Used:</b> {project.Used}
        </p>
        <GithubFilled onClick={handleClick}  />
    </div>
  )
}

export default ProjectDisplay
