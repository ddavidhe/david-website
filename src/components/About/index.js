import './index.css'
import { useEffect, useState } from 'react'
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faRunning } from '@fortawesome/free-solid-svg-icons' */
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

function About() {
    const [letterClass, setLetterClass] = useState('text-animate')

    const defaultText = "Click any of the buttons on the left to learn more about me!"

    const [title, setTitle] = useState("Hobby here :3");
    const [text, setText] = useState(defaultText);

  function badminton() {
    setTitle("Badminton");
    setText(
    "oh yknow, text"
    );
  }

  function math() {
    setTitle("Math");
    setText(
        "yay math"
    );
  }

  function compsci() {
    setTitle("Computer Science");
    setText(
        "ew cs"
    );
  }

  function anime() {
    setTitle("Anime");
    setText(
        "weeb"
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
                <p>I'm currently a 1B student at UW, looking for job</p>
                <p>I want to be a wagie</p>
                <p>more talking?</p>
            </div>
            <div className='buttons'>
                <button className="about-button" onClick={badminton}>1</button>
                <button className="about-button" onClick={math}>2</button>
                <button className="about-button" onClick={compsci}>3</button>
                <button className="about-button" onClick={anime}>4</button>
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