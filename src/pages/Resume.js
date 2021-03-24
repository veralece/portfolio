import EducationListItem from '../components/EducationListItem';
import WorkListItem from '../components/WorkListItem';
function Resume(props) {
    const education = [
        {
            college: "Arizona State University",
            degree: "MS, Graphic Information Technology",
            graduated: false,
            acquisitionDate: "December 2022"
        },
        {
            college: "Arizona State University",
            degree: "BAS, Internet & Web Development",
            graduated: false,
            acquisitionDate: "July 2021"
        },
        {

            college: "Arizona Western College",
            degree: "AAS, Computer Information Systems",
            graduated: true,
            acquisitionDate: "May 2019"
        }];

    const experience = [
        {
            date: "Janurary 2021 - Currently",
            jobTitle: "Programmer Analyst Assistant",
            organization: "City of Tempe",
            duties: [
                "Overseeing maintenance of 40+ applications varying from small to large",
                "Debugging code in legacy applications",
                "Writing detailed documentation for the smaller, older applications"
            ]
        },
        {
            date: "October 2019 - Janurary 2021",
            jobTitle: "Service Desk Technician II",
            organization: "Arizona Western College",
            duties: [
                "Scripting and automation through PowerShell",
                "Configuration of Internal Web Applications",
                "Deploying/managing ITSM System"
            ]
        },
        {
            date: "Janurary 2017 - October 2019",
            jobTitle: "Service Desk Technician I",
            organization: "Arizona Western College",
            duties: [
                "Utilizing Microsoft 365 applications to enhance business processes of operational staff",
                "End-user support",
                "Deploying Windows images"
            ]
        }
    ];
    return (
        <main>
            <article className="grid" name="Resume">
                <section className="container shadow">
                    <h1>Education</h1>
                    <ul>
                        {education.map((e, i) => {
                            return <EducationListItem
                                key={i}
                                college={e.college}
                                degree={e.degree}
                                graduated={e.graduated}
                                acquisitionDate={e.acquisitionDate}
                            />
                        })}
                    </ul>
                </section>

                <section className="container shadow">
                    <h1>Work History</h1>
                    <ul>
                        {experience.map((e,i) => {
                            return <WorkListItem 
                                key={i}
                                organization={e.organization}
                                jobTitle={e.jobTitle}
                                duties={e.duties}
                                date={e.date}
                            />
                        })}
                    </ul>
                </section>
            </article>
        </main>
    );
}

export default Resume;