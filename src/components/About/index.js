import './index.css'
import { useEffect, useState } from 'react'
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faRunning } from '@fortawesome/free-solid-svg-icons' */
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

function About() {
    const [letterClass, setLetterClass] = useState('text-animate')

    const defaultText = "Click any of the buttons on the left to learn more about me!"

    const [title, setTitle] = useState("Hobbies will appear in the box below!");
    const [text, setText] = useState(defaultText);

  function badminton() {
    setTitle("Badminton");
    setText(
        "I was introduced to the sport of badminton at a young age, but my passion for the sport was never ignited until the 11th grade. After training at my local club facility for a year, I managed to win my way through the regional highschool tournament to represent the GHAC region at OFSAA, the provincial level. Now I am an executive member of the University of Waterloo Badminton Club, and play regularily with my friends."
    );
  }

  function swimming() {
    setTitle("Swimming");
    setText(
        "SOMETHING SOMETHING DANIEL ROMAG SWIMMING POOL NL"
    );
  }

  function music() {
    setTitle("Music");
    setText(
        "I am a phenominal classical trombonist with great music taste"
    );
  }

  function games() {
    setTitle("Games");
    setText(
        "uh i really have a trong passion for board games, and classic game ssuch as tic tac toe. I love the simplicity yet intricuite strategy that still happens."
    );
  }

    useEffect(() => {
        setTimeout(() => {
        return setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        index={15}
                        />
                </h1>
                <p>Hi there! My name is David He (as you know), and this is my website! I'm currently a 1B student at The University of Waterloo, and am fascinated to learn all about the world of software and data.</p>
                <p> My programming journey began in 2018, where I took my very first elementary programming course. The realization that I could create whatever I wanted and at the cost of nothing was a true revelation, and that's when I fell in love with programming.</p>
                <p>I love the process of learning more than anything, and try to apply this mentality into everything I do. This mentality shows itself most my hobbies, which you can learn more about through the buttons on the left.</p>
            </div>
            <div className='buttons'>
                <button className="about-button" onClick={badminton}>Badminton</button>
                <button className="about-button" onClick={swimming}>Swimming</button>
                <button className="about-button" onClick={music}>Music</button>
                <button className="about-button" onClick={games}>Games</button>
            </div>
            <div className="about-body">
                <div className="about-heading">{title}</div>
                <p className="about-text">{text}</p>
            </div>
        </div>

        <Loader type="ball-grid-pulse" />
        </>
    )

};

export default About