import React from "react"
import { projectList } from "../Helpers/ProjectsList"
import { Link, useParams } from "react-router-dom"
import { DiGithubBadge } from "react-icons/di";
import "../Styles/ProjectDisplay.css"

function ProjectDisplay(){
    const { id } = useParams()
    const project = projectList[id];

    return (
        <div className="project">
            <h1> {project.name}</h1>
            <img src={project.image}  />
            <p><strong>Description:   </strong>{project.desc} </p>
            <p><strong>Tech Used:</strong>{project.tech}</p>
            <Link to={project.linkofProject} target={'_blank'} ><DiGithubBadge /></Link>  
        </div>
    );
}

export default ProjectDisplay