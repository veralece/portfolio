import photo from '../images/javierpenaloza.jpg';
function About(props) {
    const text = <section className="container shadow">
        <p>Hello, you can call me Javi. I’m an Arizona native
        who aspires to be involved in mental health or
        animals, hopefully in the capacity as a full-stack
        engineer. I still have a ways to go but I’m making
        good progress towards that goal.</p>
        <p>I was initially a music major who focused on
        voice, but I wanted a career that was more
        flexible. I still love music, and I want to
        participate in choirs once I have the time for it.
        I’m a huge data/stat and a game nerd, so I like
        to approach things as though they were a
        game, from weightlifting, riding bikes, or even
        my job! I find that I derive more enjoyment from
        them that way. I still love and play board/video
        games, but I try to make them a social occasion
    rather than a personal hobby.</p></section>

    const img = <img className="container shadow" alt="Javier Penaloza" src={photo} />
    return (
        <main>
            <article className="grid">
                {img}
                {text}
            </article>
        </main>
    );
}

export default About;