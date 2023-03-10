import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProjectItem({ Image,Name, id}) {
    const navigate = useNavigate();

  return (
    <div className="projectItem" onClick={() => {navigate("/project/" + id);}} >
        <div style={{ backgroundImage: `url(${Image})` }} className="bgImage" />
        <h1 className="Head"> {Name} </h1>
    </div>
  )
}

export default ProjectItem;
