export default function Link(props) {
    const { url, content } = props;
    return (
        <a href={url}>{content}</a>
    );
}