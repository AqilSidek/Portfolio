import * as React from 'react'
import { projcontainer, quicknotes, columns, body, boldtxt, projecthdr, projdetails, screenshots, screenshotimg } from './projects.module.css'
import LazyLoad from 'react-lazy-load'
import Fade from 'react-reveal'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import { linktext2 } from '../../components/main.module.css'
import AisKrim1 from '../../images/AisKrim/AisKrim1.png'
import AisKrim2 from '../../images/AisKrim/AisKrim2.png'
import AisKrim3 from '../../images/AisKrim/AisKrim3.png'
import AisKrim4 from '../../images/AisKrim/AisKrim4.png'
import AisKrim5 from '../../images/AisKrim/AisKrim5.png'
import AisKrim6 from '../../images/AisKrim/AisKrim6.png'
import AisKrim7 from '../../images/AisKrim/AisKrim7.png'

const IceCreamPage = () => {
    return (
        <LazyLoad>
            <div className={projcontainer}>

                <Navbar />
                <div className={projecthdr}>
                    <Fade down>
                        <h1>Ais Krim, vegan ice cream website</h1>
                    </Fade>
                </div>
                <div className={quicknotes}>
                    {/* column1 */}
                    <Fade left>
                        <div className={columns}>
                            {/* type */}
                            <div>
                                <div className={boldtxt}><h4>Type:</h4></div>
                                <div><p>Individual UI Project</p></div>
                            </div>

                            {/* my role  */}
                            <div className={boldtxt}><h4>My Role:</h4></div>
                            <div><p>UI/UX Role</p></div>

                            {/* timeline */}
                            <div className={boldtxt}><h4>Timeline:</h4></div>
                            <div><p>1 week</p></div>
                        </div>
                    </Fade>

                    {/* column2 */}
                    <Fade right>
                        <div className={columns}>
                            {/* summary */}
                            <div className={boldtxt}><h4>Summary:</h4></div>
                            <div>
                                <p>
                                    This project was an exercise in designing a website in Adobe XD as well as refreshing my knowledge of the design process.<br /><br />

                                    In the future, this website can be implemented using any number of web development technologies.
                                </p>
                            </div>

                            {/* project source code */}
                            <div className={boldtxt}><h4>Project Source Code:</h4></div>
                            <div><a href='' className={linktext2}><p></p></a></div>
                        </div>
                    </Fade>
                </div>

                {/* photos */}
                <LazyLoad>
                    <div className={screenshots}>
                        <Fade up>
                            <img src={AisKrim1} className={screenshotimg} />
                        </Fade>

                        <Fade right>
                            <img src={AisKrim2} className={screenshotimg} />
                        </Fade>

                        <Fade down>
                            <img src={AisKrim3} className={screenshotimg} />
                        </Fade>

                        <Fade right>
                            <img src={AisKrim4} className={screenshotimg} />
                        </Fade>

                        <Fade left>
                            <img src={AisKrim5} className={screenshotimg} />
                        </Fade>

                        <Fade up>
                            <img src={AisKrim6} className={screenshotimg} />
                        </Fade>

                        <Fade down>
                            <img src={AisKrim7} className={screenshotimg} />
                        </Fade>
                    </div>
                </LazyLoad>

                {/* project details */}
                <div className={projdetails}>
                    <Fade up><div className={boldtxt}><h4>Project Details</h4></div></Fade>
                    <Fade down>
                        <div>
                            <p>
                                This project was a personal exercise in familiarising myself with using UI software, especially Adobe XD. It was also a personal
                                exercise in going through the motions of designing a website.<br /><br />

                                I created a basic user story for the website, in this case a new local ice cream business. I then put myself into the role of
                                designer/developer, researching what kinds of information other local eateries and dessert shops offered on their information.
                                Then, I created the designs using Adobe XD, for the hypothetical client to review before I started writing any code.<br /><br />

                                Most of the time, when a potential customer vists a restaurant's website, it is usually either to check the menu, find out it's
                                location, and/or to find the restaurant's contact information. With this in mind, I visited multiple restaurants' websites and studied
                                the user interface and experience of each one. I noticed that many restaurants place such information on separate pages. Upon further
                                exploration, I realized that most restaurants, a simple one-page scroll would suffice. Thus, this is the concept I applied when
                                designing the website.
                            </p>
                        </div>
                    </Fade>
                </div>

                <LazyLoad>
                    <Fade up>
                        <Footer />
                    </Fade>
                </LazyLoad>
            </div>
        </LazyLoad>
    )
}

export default IceCreamPage