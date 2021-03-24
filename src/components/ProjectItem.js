function ProjectItem(props) {
    const { projectName, problem, approach, solution, results, url } = props;
    return (
        <section className="container shadow">
            {url ? <h2><a href={url}>{projectName}</a></h2> : <h2>{projectName}</h2>}
            <p><strong>Problem: </strong>{problem}</p>
            <p><strong>Approach: </strong>{approach}</p>
            <p><strong>Solution: </strong>{solution}</p>
            <p><strong>Results: </strong>{results}</p>
            {url ? <a href={url}>Link to {projectName}</a> : ""}
        </section>
    );
}

export default ProjectItem;