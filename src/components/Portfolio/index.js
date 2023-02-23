import './index.css';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import portfolioData from '../../data/portfolio.json'

function Portfolio() {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, []);


      const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, index) => {
                        return (
                            <div className="image-box" key={index}>
                                <img src={port.cover} className="portfolio-image" alt="mypenis" />
                            </div>
                        )
                    })
                }
            </div>
        );
      }
 
    return (
        <>
        <div className="container portfolio-page">
            <h1 className="page-title">
                <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                        index={15}
                />
            </h1>
            <div>{renderPortfolio(portfolioData.portfolio)}</div>
        </div>
        <Loader type="ball-grid-pulse" />
        </>
    )
};


export default Portfolio