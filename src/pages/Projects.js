import ProjectItem from '../components/ProjectItem';
function Projects(props) {
    const projectItems = [
        {
            projectTitle: "To-do App",
            problem: "I needed a task manager app that suited my needs without being too complex.",
            approach: "I looked at other to-do apps and noted features that I liked as well as features I think they could have improve on.",
            solution: "Created to-do app with an emphasis on creating tasks as simply as possible.",
            results: " Main functionality of the app finished, though has not been published due to the backend needing its own server to run the database and I don’t have the resources for that right now.",
            url: "",
        },
        {
            projectTitle: "JavaScript Array Tutorial",
            problem: "Tutorials usually don’t provide supplemental information to help users understand coding syntax, convention, or terminology.",
            approach: "Visited other tutorial websites to determine what supplemental information was missing from the functions and wrote down the content I wanted to supply for the tutorial website.",
            solution: "Created tutorial for JavaScript arrays that included a text area box to interpret and execute JavaScript on the webpage, examples of JavaScript array functions with buttons to automatically paste the code into the interpreter so that users can run the example for themselves, and a reference to help new learners understand the syntax of the JavaScript functions and terminology.",
            results: "Peers applauded the thorough tutorial and the technical capabilities of the site.", 
            url: "https://www.public.asu.edu/~jppenalo/tutorial/index.html",
        },
        {
            projectTitle: "Onboarding Project",
            problem: "New employees often started work without much to run with (such as IT equipment, keys, etc.), which led to their supervisor/staff scrambling to get the new hire everything they needed. Objective was to organize information and processes to ensure new hires hit the ground running.",
            approach: "Met with stakeholders to gather goals & requirements. Then met with secondary stakeholders to understand operational processes. As features were completed, I met with stakeholders to get feedback and adjust as necessary.",
            solution: "Create an app that will facilitate the request process for supervisors/staff. They will use the app to make requests for items such as IT equipment, furniture, and keys. Once The user submits the requirements, the app will send emails to the necessary departments utilizing an email template the department created.",
            results: "Colleagues and staff were pleased to find that they no longer had to recall requirements for their new hires because the app laid it out for them. App was later revisited with new features and UI, which increased the usability of the app. Unfortunately, since this belongs to an old employer, I can't show the results.", 
            url: "",
        },
        {
            projectTitle: "Restaurant Website",
            problem: "Local business owner did not have a website for their restaurant.",
            approach: "Met with business owner to gather requirements, goals, and learn the history of the restaurant, primarily for the “About us” section. Then studied other restaurant sites to derive inspiration and note pitfalls to avoid. Created wireframes to go over the layout of the site and started plotting content for the main pages.",
            solution: "A website that provided information on main services, a menu page, a catering page to determine estimate of a catering.",
            results: "Website that displayed main functions of the restaurant, an online menu, and a catering calculator that displays an estimate. Business owner was pleased with the design and aesthetic choices, as well as the catering calculator since that helped cut down time they needed to spend talking to the customer.", 
            url: "http://www.public.asu.edu/~jppenalo/TierraCaliente/index.html",
        },
        {
            projectTitle: "Zero Balance Calculator",
            problem: "Budgeting normally comes in the form of spreadsheets, but I wanted to create an app that makes it easy to add/remove income, expenses, and funds without having to manually adjust cells on a spreadsheet.",
            approach: "Looked at a typical Zero Balance budget sheet and broken it down into its smallest functional unit, then designed a top-down layout that a user would be able to follow.",
            solution: "An application that accepts input for financial items (e.g. an expense or income) and calculates the balances for each category and the final balance.",
            results: "Peers were happy to find the site intuitive and helpful since many of them were students with financial struggles.", 
            url: "https://www.public.asu.edu/~jppenalo/zerobalancejq/index.html",
        },
    ];
    return (
        <main>
            <article name="Projects" className="grid">
                <h1>Projects</h1>
                {projectItems.map((p, i) => {
                    return <ProjectItem
                        projectName={p.projectTitle}
                        problem={p.problem}
                        approach={p.approach}
                        solution={p.solution}
                        results={p.results}
                        url={p.url}
                    />
                })}
            </article>
        </main>
    );
}

export default Projects;