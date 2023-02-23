import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import './index.css';

function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'D', 'a', 'v', 'i', 'd', ' ', 'H', 'e', ',']
    const subArray = ['A', 's', 'p', 'i', 'r', 'i', 'n', 'g', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
      setTimeout(() => {
        return setLetterClass('text-animate-hover')
      }, 5000)
    }, []);
    

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className= {`${letterClass} _11`}>H</span>
                <span className= {`${letterClass} _12`}>i</span>
                <span className= {`${letterClass} _13`}>,</span>
                    <br/>
                <span className= {`${letterClass} _14`}>I</span>
                <span className= {`${letterClass} _15`}>'</span>
                <span className= {`${letterClass} _16`}>m</span>


                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray} 
                index = {17}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={subArray}
                index = {26}/>
                </h1>

                <h2> Mathematics student at UW, swimmer, board game enthusiast</h2>
                <Link to="/contact" className="flat-button"> CONTACT ME </Link>
            </div>   
        </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <img src="pythonlogo.png" alt="" className='pythonimage'/>
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

    );

}

export default Home