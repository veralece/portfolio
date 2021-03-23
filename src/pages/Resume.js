import EducationListItem from '../components/EducationListItem';
function Resume(props) {
    const education = [
        <EducationListItem
            key="1"
            college="Arizona State University"
            degree="MS, Graphic Information Technology"
            graduated={false}
            acquisitionDate="December 2022"
        />,
        <EducationListItem
            key="2"
            college="Arizona State University"
            degree="BAS, Internet & Web Development"
            graduated={false}
            acquisitionDate="July 2021"
        />,
        <EducationListItem
            key="3"
            college="Arizona Western College"
            degree="AAS, Computer Information Systems"
            graduated={true}
            acquisitionDate="May 2019"
        />
    ]
    return (
        <main >
            <article className="grid" name="Resume">
                <section className="container shadow">
                    <h1>Education</h1>
                    <ul>
                        {[education]}
                    </ul>
                </section>

                <section className="container shadow">
                    <h1>Work History</h1>
                </section>
            </article>
        </main>
    );
}

export default Resume;