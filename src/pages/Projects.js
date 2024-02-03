
import { useLoaderData } from "react-router-dom";

function Projects(props) {

  const projects = useLoaderData()

    return projects.map((project) => (
      <div className="projects-container">
        <div className="projects-main">
          <h1 className="projects-name">{project.name}</h1>
          <p className="projects-position">Website Development Project</p>
          <p className="projects-body">This is a project from General Assembly Seir-Seal Education Course</p>
        </div>  
        
        <div className="projects-sidebar">
        <div className="projects-image">
          <img src={project.image} alt={project.name}/><br></br>
        </div>

        <ul className="list">
          <li className="item">
            <a href={project.git}>
              <button>Github</button>
            </a>
          </li>
          <li>        
            <a href={project.live}>
              <button>live site</button>
            </a>
          </li>
        </ul>
        </div>

      </div>
    ));
}

export default Projects;
