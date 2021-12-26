import { projects1 } from "../data/projects"
import Project from "./Project"

const Projects = () => {
    return (
        <section id="projects" className="container mt-24 mb-8">
            <h1 className="sectionTitle">Projects</h1>
            <div className='sectionTitleBorderBottom mb-9'></div>
            {projects1.map((prj, i) => (
                <Project data={prj} key={i} />
            ))}
            <br />
        </section>
    )
}

export default Projects
