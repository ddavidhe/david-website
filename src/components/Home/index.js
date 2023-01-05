import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.css';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'D', 'a', 'v', 'i', 'd', ' ', 'H', 'e', ',']
    const subArray = ['U', 'W', ' ', 'S', 't', 'u', 'd', 'e', 'n', 't']

    useEffect(() => {
      setTimeout(() => {
        return setLetterClass('text-animate-hover')
      }, 3000)
    }, []);
    

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className= {letterClass}>H</span>
                <span className= {`${letterClass} _12`}>i</span>
                <span className= {`${letterClass} _13`}>,</span>
                    <br/>
                <span className= {`${letterClass} _14`}>I</span>
                <span className= {`${letterClass} _15`}>'</span>
                <span className= {`${letterClass} _16`}>m</span>


                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray} 
                index = {15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={subArray}
                index = {25}/>
                </h1>
                <h2> gacha addict, aspiring programmer</h2>
                <Link to="/contact" className="flat-button"> CONTACT ME </Link>
            </div>

        </div>

    );

}

export default Home