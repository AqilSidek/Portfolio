import * as React from 'react'
import { projcontainer, quicknotes, columns, boldtxt, projecthdr, projdetails, screenshots, screenshotimg } from './projects.module.css'
import { linktext2 } from '../../components/main.module.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import LazyLoad from 'react-lazy-load'
import Fade from 'react-reveal'
import React1 from '../../images/React/React1.png'
import React2 from '../../images/React/React2.png'
import React3 from '../../images/React/React3.png'
import React4 from '../../images/React/React4.png'
import React5 from '../../images/React/React5.png'
import React6 from '../../images/React/React6.png'

const PortfolioPage = () => {
    return (
        <LazyLoad>
            <div className={projcontainer}>

                <Navbar />
                <div className={projecthdr}>
                    <Fade down>
                        <h1>Portfolio Website</h1>
                    </Fade>
                </div>
                <div className={quicknotes}>
                    {/* column1 */}
                    <Fade left>
                        <div className={columns}>
                            {/* type */}
                            <div className={boldtxt}><h4>Type:</h4></div>
                            <div><p>Individual project</p></div>

                            {/* my role  */}
                            <div className={boldtxt}><h4>My Role:</h4></div>
                            <div><p>Front End Web Developer<br />UI/UX Designer</p></div>

                            {/* timeline */}
                            <div className={boldtxt}><h4>Timeline:</h4></div>
                            <div><p>July 2019 - ongoing</p></div>
                        </div>
                    </Fade>

                    {/* column2 */}
                    <Fade right>
                        <div className={columns}>
                            {/* summary */}
                            <div className={boldtxt}><h4>Summary:</h4></div>
                            <div>
                                <p>
                                    This website was built to teach myself and practice React while simultaneously showcasing my other coding and UI/UX projects<br /><br />
                                    Similar to my photography portfolio, this page will grow with my skills
                                </p>
                            </div>

                            {/* project source code */}
                            <div className={boldtxt}><h4>Project Source Code:</h4></div>
                            <div><a href='github.com/AqilSidek/Portfolio' className={linktext2}><p>github.com/AqilSidek/Portfolio</p></a></div>
                        </div>
                    </Fade>
                </div>

                {/* photos */}
                <LazyLoad>
                    <div className={screenshots}>
                        <Fade down>
                            <img src={React1} className={screenshotimg} />
                        </Fade>

                        <Fade right>
                            <img src={React2} className={screenshotimg} />
                        </Fade>

                        <Fade left>
                            <img src={React3} className={screenshotimg} />
                        </Fade>

                        <Fade left>
                            <img src={React4} className={screenshotimg} />
                        </Fade>

                        <Fade up>
                            <img src={React5} className={screenshotimg} />
                        </Fade>

                        <Fade right>
                            <img src={React6} className={screenshotimg} />
                        </Fade>
                    </div>
                </LazyLoad>

                {/* project details */}
                <LazyLoad>
                    <div className={projdetails}>
                        <Fade up><div className={boldtxt}><h4>Project Details</h4></div></Fade>
                        <Fade down>
                            <div>
                                <p>
                                    This portfolio is currently in its 3rd iteration; having initially been built in HTML, CSS, and JavaScript before being built in ReactJS,
                                    and finally with a mobile-first approach using Gatsby/React and CSS. <br /><br />

                                    With ReactJS becoming one of the most popular web development technologies and proficiency in it becoming desirable, I took it upon myself
                                    to learn it.<br /><br />

                                    I started by looking at the portfolios of front end developers and UI/UX designers, in addition to sites such as Dribble for inspiration.
                                    From there I created several framework sketches to plan out the content structure, design, and user experience I wanted visitors to experience.
                                </p>
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
        </LazyLoad>
    )
}

export default PortfolioPage