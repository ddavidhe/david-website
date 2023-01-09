import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
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

                <h2> mathematics student at UW, swimmer, gacha enthusiast</h2>
                <Link to="/contact" className="flat-button"> CONTACT ME </Link>
            </div>
        </div>
        <Loader type="ball-grid-pulse" />
        </>

    );

}

export default Home