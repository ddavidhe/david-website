import './index.css';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

import React from 'react';
import { portfolios } from '../../data/portfolio'

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
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img src={port.cover} className="portfolio-image" alt=""/>
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button className="btn" onClick={() => window.open(port.url)}>View</button>
                                </div>
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
                        strArray={"Portfolio".split("")}
                        index={15}
                />
            </h1>
            <div>{renderPortfolio(portfolios)}</div>
        </div>
        <Loader type="ball-grid-pulse" />
        </>
    )
};


export default Portfolio