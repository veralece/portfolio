function Container(props) {
    const { content, className } = props;
    return (
        <section className={className}>
        {content}
        </section>
    )
}

export default Container;