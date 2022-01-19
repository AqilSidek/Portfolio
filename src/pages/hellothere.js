import * as React from 'react'
import Fade from 'react-reveal'
import LazyLoad from 'react-lazy-load'
import { container, linktext, heroimage, aboutcolumns, box, abouthdr, contactsection, contactaccent, contactlinks } from '../components/main.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

// images & icons
import { faLinkedin, faGithub, faGit } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import wee from '../images/Me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const AboutPage = () => {
    return (
        <LazyLoad>
            <div className={container}>

                <Navbar />
                {/* split into 2 columns */}
                <div className={aboutcolumns}>
                    {/* hero image */}
                    <div className={box}>
                        <Fade left>
                            <img src={wee} alt='Wee its me sliding down a giant concrete wave' className={heroimage} />
                        </Fade>
                    </div>

                    {/* text about me */}
                    <div className={box}>
                        <Fade right cascade>
                            <div>
                                <h1 className={abouthdr}>About Me</h1>
                            </div>
                            <div>
                                <p>
                                    I am a front end web developer that blends strong technical skills, excellent communication abilities,
                                    and a knack for UI/UX design to deliver stunning, intuitive websites.<br /><br />

                                    My skills helped me win first place at the 2019 Arts-Tech Fusion Hackathon organized by Shiftkey Labs in
                                    Halifax, Canada. I was also one of 114 participants chosen out of a pool of over 300 to join the 2019
                                    Creativity and Innovation Bootcamp.<br /><br />

                                    Additionally, I was the only non-leadership retail employee in North America to lead the user testing of
                                    a new business-facing app feature for Nike.
                                </p>
                            </div>
                        </Fade>
                    </div>
                </div>

                {/* get in touch */}
                <div className={contactsection}>
                    <div className={contactaccent}></div>
                    <div>
                        <Fade down>
                            <h1>Get In Touch</h1>
                        </Fade>
                    </div>
                    <Fade left cascade>
                        <div className={contactlinks}>
                            <a href={`mailto:${'aqil.sidek2@gmail.com'}`}><FontAwesomeIcon icon={faEnvelope} size='2x' /></a>
                            <a href={`mailto:${'aqil.sidek2@gmail.com'}`} className={linktext}><p>aqil.sidek2@gmail.com</p></a>
                        </div>

                        <div className={contactlinks}>
                            <a href='https://linkedin.com/in/aqilsidek'><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
                            <a href='https://linkedin.com/in/aqilsidek' className={linktext}><p>https://linkedin.com/in/aqilsidek</p></a>
                        </div>

                        <div className={contactlinks}>
                            <a href='https://github.com/AqilSidek'><FontAwesomeIcon icon={faGithub} size='2x' /></a>
                            <a href='https://github.com/AqilSidek' className={linktext}><p>https://github.com/AqilSidek</p></a>
                        </div>
                    </Fade>
                </div>

                <Fade up>
                    <Footer />
                </Fade>
            </div>
        </LazyLoad>
    )
}

export default AboutPage