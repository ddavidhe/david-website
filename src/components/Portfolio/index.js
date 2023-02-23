import './index.css';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

function Portfolio() {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, []);


    return (
        <>
        <div className="container portfolio-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['M', 'y', ' ', 'P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                        index={15} />
                </h1>
                <p>Here are a few of my personal projects I've done! (STILL WORK IN PROGRESS)</p>
                <p>I also have this neat animated cube which is showcasing my various skills</p>
            </div>
        </div>
        <Loader type="ball-grid-pulse" />
        </>
    )


};


export default Portfolio