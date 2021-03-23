function EducationListItem(props) {
    const { college, degree, acquisitionDate, graduated } = props;

    return (
        <li>
            <h2><strong>{degree}</strong>, <em>{college}</em></h2>
            <p>{graduated ? "Graduated" : "Anticipated Graduation"}: {acquisitionDate}</p>
        </li>
    )
}

export default EducationListItem;