import js from '../images/javascript_tutorial.jpg';
import restaurant from '../images/restaurant.jpg';
import zero1 from '../images/zero-bal-1.jpg';
import zero2 from '../images/zero-bal-2.jpg';
import todo1 from '../images/todo-1.jpg';
import todo2 from '../images/todo-2.jpg';
import logger from '../images/logger.jpg';
function ProjectItem(props) {
    const { projectName, problem, approach, solution, results, url, imgs } = props;
    let imgComponent;
    switch (imgs) {
        case 'js':
            imgComponent = <img alt="javascript tutorial site example" src={js} />
            break;
        case 'res':
            imgComponent = <img alt="restaurant site example" src={restaurant} />
            break;
        case 'zero':
            imgComponent = (
                <>
                    <img alt="zero balance app example 1" src={zero1} />
                    <img alt="zero balance app example 2" src={zero2} />
                </>
            );
            break;
        case 'todo':
            imgComponent = (
                <>
                    <img alt="to-do app example 1" src={todo1} />
                    <img alt="to-do app example 2" src={todo2} />
                </>
            );
            break;
        case 'logger':
            imgComponent = <img alt="exercise logger app example" src={logger} />
            break;
        default:
            imgComponent = "";
            break;
    }
    return (
        <section className="container shadow">
            {url ? <h2><a href={url}>{projectName}</a></h2> : <h2>{projectName}</h2>}
            <p><strong>Problem: </strong>{problem}</p>
            <p><strong>Approach: </strong>{approach}</p>
            <p><strong>Solution: </strong>{solution}</p>
            <p><strong>Results: </strong>{results}</p>
            {url ? <a href={url}>Link to {projectName}</a> : ""}
            {imgComponent}
        </section>
    );
}

export default ProjectItem;