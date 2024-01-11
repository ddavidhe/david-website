import './index.css'
import { useEffect, useState } from 'react'
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faRunning } from '@fortawesome/free-solid-svg-icons' */
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

function About() {
    const [letterClass, setLetterClass] = useState('text-animate')

    const defaultText = "Click any of the buttons above to learn more about me!"

    const [title, setTitle] = useState("Hobbies will appear below this text!");
    const [text, setText] = useState(defaultText);

  function badminton() {
    setTitle("Badminton");
    setText(
        "I was introduced to the sport of badminton at a young age, but my passion for the sport was never ignited until the 11th grade. After training at my local club facility for a year, I managed to win my way through the regional highschool tournament to represent the GHAC region at OFSAA, the provincial level. Now, I enjoy badminton as an executive member of the University of Waterloo Badminton Club, where I can be found playing with my friends."
    );
  }

  function swimming() {
    setTitle("Swimming");
    setText(
        "Swimming was the sport that took the spotlight before badminton could. I never liked contact sports (still don't), so the prospect of an \"individual\" sport was right up my aisle. I was a member of the Burlington Aquatic Devilrays for over 6 years, two of which were at the regional level. The intense training that took place made me confident in my ability to also become a lifesaving professional, so I recently acquired my National Lifeguard certificate from the Lifesaving Society. Now, I try to swim at least once a week for my personal health, and it's always a nostalgic experience to dip into the pool."
    );
  }

  function music() {
    setTitle("Music");
    setText(
        "When all the band instruments were revealed, I thought the trombone's unique slide mechanism was the coolest. It was soon revealed that only I thought this. Being the sole trombone for nearly 5 years, I eventally sharpened my skills enough to meet people to felt the same way, and my passion for music grew. I got to preform on stage with orchestras and honor bands, experiences I can only credit music for. Now, I no longer play trombone, but my old concert music and practice etudes are now permanent residents in my daily playlists."
    );
  }

  function games() {
    setTitle("Games");
    setText(
        "As a child, I was always late to the newest technologies. I didn't get a phone until the 9th grade, so I had to entertain myself through other means, like play. Thankfully I have a wonderful sister, and we spent many afternoons and evenings playing board games. As an offline and portable form of entertainment, board games have provided me with countless hours of entertainment in the past. Most recently I've been learning Mahjong from playing rounds my parents, and I love that when played optimally, it requires a deep understanding of statistics and combinatorics, two fields of research that I hope to pursue in the future."
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
                        strArray={"About Me".split("")}
                        index={15}
                        />
                </h1>
                <p>Hi there! My name is David He, and this is my website! I'm currently a second year student at the University of Waterloo, majoring in Statistics with a minor in Computer Science.</p>
                <p>I'm looking to learn more about the world of data analytics and data science, and I have a growing passion for deep machine learning.</p>
                <p>I love the process of learning more than anything, and try to apply this mentality into everything I do. This mentality shows itself most my hobbies, which you can learn more about through the buttons on the screen.</p>
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