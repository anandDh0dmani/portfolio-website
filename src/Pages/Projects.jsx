import ProjectItem from "../Components/ProjectItems"
import  {projectList}  from "../Helpers/ProjectsList"
import '../Styles/Projects.css'
function Projects() {
    return (
        <div className="projects">
            <h1>Personal Projects</h1>
            <div className="projectList">
                {projectList.map((project, index) => {
                    return <ProjectItem id={index} name={project.name} image={project.image} />
                })}
            </div>
        </div>
    )
}

export default Projects