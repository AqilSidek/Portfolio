import * as React from 'react'
import { container, featuredtxt, featuredproj, pageheader, allprojects, projelem, elemheader, linktext, linktext2 } from '../../components/main.module.css'
import portfolio from '../../images/portfolio-screen.png'
import sizey from '../../images/sizey-screen.png'
import fridge from '../../images/fridge-screen.png'
import topview from '../../images/topview-screen.png'
import photography from '../../images/photo-screen.png'
import aiskrim from '../../images/ais-krim-screen.png'
import foodroulette from '../../images/placeholder.png'
import { Link } from 'gatsby'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Fade from 'react-reveal'
import LazyLoad from 'react-lazy-load'

// main list of projects

const ProjectsIndex = () => {
    return (
        <div className={container}>
            <Navbar />
            <Fade down>
                <h1 className={pageheader}>My Projects</h1>
            </Fade>

            <LazyLoad>
                <div className={allprojects}>
                    {/* Portfolio */}
                    <Fade>
                        <div className={projelem}>
                            <Fade left>
                                <Link to='portfolio' className={linktext}><h3 className={elemheader}>Portfolio Website</h3></Link>
                                <Link to='portfolio'><img src={portfolio} alt='' className={featuredproj} /></Link>
                                <p className={featuredtxt}>
                                    Portfolio website to showcase my projects built with a mobile-first approach using Gatsby<br /><br />
                                    <Link to='portfolio' className={linktext2}>Learn more</Link>
                                </p>
                            </Fade>
                        </div>
                    </Fade>

                    {/* Sizey */}
                    <Fade>
                        <div className={projelem}>
                            <Fade up>
                                <Link to='sizey' className={linktext}><h3 className={elemheader}>Sizey UI</h3></Link>
                                <Link to='sizey'><img src={sizey} alt='' className={featuredproj} /></Link>
                                <p className={featuredtxt}>
                                    User interface design for a browser extension<br /><br />
                                    <Link to='sizey' className={linktext2}>Learn more</Link>
                                </p>
                            </Fade>
                        </div>
                    </Fade>

                    {/* TopView */}
                    <Fade>
                        <div className={projelem}>
                            <Fade right>
                                <Link to='bike-rental' className={linktext}><h3 className={elemheader}>Bike Rental Front End</h3></Link>
                                <Link to='bike-rental'><img src={topview} alt='' className={featuredproj} /></Link>
                                <p className={featuredtxt}>
                                    Front end component for a bike rental service built using React<br /><br />
                                    <Link to='bike-rental' className={linktext2}>Learn more</Link>
                                </p>
                            </Fade>
                        </div>
                    </Fade>

                    {/* Photography Portfolio */}
                    <Fade>
                        <div className={projelem}>
                            <Fade right>
                                <Link to='photoportfolio' className={linktext}><h3 className={elemheader}>Photography Portfolio Website</h3></Link>
                                <Link to='photoportfolio'><img src={photography} alt='' className={featuredproj} /></Link>
                                <p className={featuredtxt}>
                                    Portfolio to showcase my photography built using HTML, CSS, and JavaScript<br /><br />
                                    <Link to='photoportfolio' className={linktext2}>Learn more</Link>
                                </p>
                            </Fade>
                        </div>
                    </Fade>

                    {/* Ais Krim */}
                    <Fade>
                        <div className={projelem}>
                            <Fade down>
                                <Link to='icecream' className={linktext}><h3 className={elemheader}>Vegan Ice Cream Website</h3></Link>
                                <Link to='icecream'><img src={aiskrim} alt='' className={featuredproj} /></Link>
                                <p className={featuredtxt}>
                                    Website concept for a vegan ice cream shop<br /><br />
                                    <Link to='icecream' className={linktext2}>Learn more</Link>
                                </p>
                            </Fade>
                        </div>
                    </Fade>

                    {/* Food Roulette */}
                    {/* <Fade>
                        <div className={projelem}>
                            <Fade up>
                                <Link to='foodroulette' className={linktext}><h3 className={elemheader}>Food Roulette App</h3></Link>
                                <Link to='foodroulette'><img src={foodroulette} alt='' className={featuredproj} /></Link>
                                <p className={featuredtxt}>
                                    Location-based iOS app that generates a random restaurant to assist indecisive diners<br /><br />
                                    <Link to='foodroulette' className={linktext2}>Learn more</Link>
                                </p>
                            </Fade>
                        </div>
                    </Fade> */}

                    {/* Fridge */}
                    <Fade>
                        <div className={projelem}>
                            <Fade left>
                                <Link to='fridge' className={linktext}><h3 className={elemheader}>Fridge App UI</h3></Link>
                                <Link to='fridge'><img src={fridge} alt='' className={featuredproj} /></Link>
                                <p className={featuredtxt}>
                                    App to track contents of pantry and/or fridge, and suggest recipes based on availability<br /><br />
                                    <Link to='fridge' className={linktext}>Learn more</Link>
                                </p>
                            </Fade>
                        </div>
                    </Fade>
                </div>
            </LazyLoad>

            <LazyLoad>
                <Fade up>
                    <Footer />
                </Fade>
            </LazyLoad>
        </div>
    )
}

export default ProjectsIndex