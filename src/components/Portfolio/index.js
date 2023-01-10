import './index.css';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
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
                <p>Here are a few of my personal projects I've done!</p>
                <p>I also have this neat animated cube which is showcasing my various skills</p>
            </div>
        </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <img src="/pythonlogo.png" alt="" className='pythonimage'/>
                </div>
                <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
            </div>
        </div>




        <Loader type="ball-grid-pulse" />
        </>
    )


};


export default Portfolio