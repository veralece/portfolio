import EducationListItem from '../components/EducationListItem';
import WorkListItem from '../components/WorkListItem';
import educationData from '../content/education.json';
import experienceData from '../content/experience.json';
function Resume(props) {
    return (
        <main>
            <article className="grid" name="Resume">
                <section className="container shadow">
                    <h1>Education</h1>
                    <ul>
                        {educationData.education.map((e, i) => {
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
                        {experienceData.experience.map((e, i) => {
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