function WorkListItem(props) {
    const {date, jobTitle, duties, organization} = props;

    return (
        <li className="work-listitem">
            <h2><strong>{jobTitle}</strong>, <em>{organization}</em></h2>
            <p>{date}</p>
            <p>Duties</p>
            <ul>
                {duties.map((d,i) => {
                    return <li key={i}>{d}</li>
                })}
            </ul>
        </li>
    );
}

export default WorkListItem;