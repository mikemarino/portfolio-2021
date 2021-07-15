import React, { useEffect, useState } from 'react';
// import project from '../../../studio/schemas/project.js';
import sanityClient from "../../client.js";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type=="project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
            .catch(console.error)
    }, []);
    
    
    return (
        <main>
            <section>
                <h1>My Projects</h1>
                <h2>Welcome to my Projects Page</h2>
                <section>
                    {projectData && projectData.map((project, index)=>(
                    <article>
                        <h3><a href={project.link} alt="{project.title}">{project.title}</a></h3>
                        <div>
                            <span>
                                <strong>Finished on:</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong>Company</strong>: {project.place}
                            </span>
                            <span>
                                <strong>Type</strong>: {project.projectType}
                            </span>
                            <p>
                                {project.description}
                            </p>
                            <a href={project.link} rel="noopener noreferrer" target="_blank" >
                                View the Project{" "}
                                <span role="img">
                                    ::point_right::
                                    
                                </span>
                            </a>
                        </div>
                        </article>
                        ))}
                </section>
            </section>

        </main>

    );
}