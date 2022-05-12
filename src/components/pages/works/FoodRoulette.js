//libraries
import React from 'react'
import Fade from 'react-reveal'
import LazyLoad from 'react-lazy-load'

//component
import Footer from '../../Footer.js'

//CSS
import './Pages.css'

//images
import comingSoon from '../../../media/FoodRoulette/comingsoon.jpeg'

export default class FoodRoulette extends React.Component {
    render() {
        return(
            //overall div
            <div className="content-container">
                {/* title */}
                <LazyLoad>
                    <Fade>
                        <div className="page-header">
                            <h1 className="header">FoodRoulette</h1>
                        </div>
                    </Fade>
                </LazyLoad>

                {/* 2-column section */}
                <LazyLoad>
                    <div className="brief-section">
                        {/* first column */}
                        <Fade left>
                            <div className="column-one">
                                <div>
                                    <h5>Type:</h5>{" "}
                                    <h4 className="column-text">Individual Project</h4>
                                </div>
                                <div>
                                    <h5>My Role:</h5>{" "}
                                    <h4 className="column-text">
                                        Front End Web Developer
                                        <br />
                                        iOS Developer
                                        <br />
                                        UI/UX Designer
                                    </h4>
                                </div>
                                <div>
                                    <h5>Timeline:</h5>{" "}
                                    <h4 className="column-text">March 2020 - ongoing</h4>
                                </div>
                            </div>
                        </Fade>
                        
                        <Fade right>
                            {/* second column */}
                            <div className="column-two">
                                <div>
                                    <h5>Summary: </h5>
                                    
                                    <h4 className="column-text">
                                        This iOS app was started to help my wife 
                                        decide where to have lunch prior to the pandemic lockdowns.
                                        <br />
                                        <br />
                                        The app will generate a random number and use this 
                                        number to pick a restaurant from a list of restaurants in the vicinity.
                                        <br />
                                        <br />
                                        This list of restaurants in turn will be dynamically populated depending on your location.
                                    </h4>
                                </div>
                                <div>
                                    <h5>Project Source Code: </h5>
                                    <h4>
                                        <a href="https://github.com/AqilSidek/foodroulette-app" className="link-text-2">
                                            <h4 className="column-text">
                                                GitHub
                                            </h4>
                                        </a>  
                                        {/* <a href='https://github.com/AqilSidek' className='link-text-2'>
                                            <h4 className='column-text'>
                                                Web App (fix this link before going live)
                                            </h4>
                                        </a>
                                        <a href='https://github.com/AqilSidek' className='link-text-2'>
                                            <h4 className='column-text'>
                                                Web Demo (fix this link too)
                                            </h4>
                                        </a> */}
                                    </h4>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </LazyLoad>

                {/* images */}
                <div>
                    <LazyLoad>
                        <Fade>
                            <div className='comingsoon'>
                                <img src={comingSoon} alt="coming soon" className='comingsoon-img' />
                            </div>
                        </Fade>
                    </LazyLoad>
                </div>

                <Footer />
            </div>
        );
    }
}