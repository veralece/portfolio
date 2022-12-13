import projects from '../content/projects.json';
import ProjectItem from '../components/ProjectItem';
function Projects(props) {
    return (
        <main>
            <article name="Projects" className="grid">
                <h1>Projects</h1>
                {projects.projects.map((p, i) => {
                    return <ProjectItem
                        key={i}
                        projectName={p.projectTitle}
                        problem={p.problem}
                        approach={p.approach}
                        solution={p.solution}
                        results={p.results}
                        url={p.url}
                        techStack={p.techStack}
                    />
                })}
            </article>
        </main>
    );
}

export default Projects;