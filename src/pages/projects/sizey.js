import * as React from 'react'
import {
    projcontainer,
    quicknotes,
    columns,
    boldtxt,
    projecthdr,
    projdetails,
    screenshots,
    screenshotimg,
    sectionsplit,
    expositionright,
    expositionleft,
    expimgright,
    expimgleft,
    exptextright,
    exptextleft,
    accent1,
    accent2,
    summarytxt
} from './projects.module.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import LazyLoad from 'react-lazy-load'
import Fade from 'react-reveal'

//images for expositions/blurbs
import Mac1 from '../../images/Sizey/Mac1.png'
import Mac2 from '../../images/Sizey/Mac2.png'
import Mac3 from '../../images/Sizey/Mac3.png'

//screenshots
import Sizey1 from '../../images/Sizey/Sizey1.png'
import Sizey2 from '../../images/Sizey/Sizey2.png'
import Sizey3 from '../../images/Sizey/Sizey3.png'
import Sizey4 from '../../images/Sizey/Sizey4.png'
import Sizey5 from '../../images/Sizey/Sizey5.png'
import Sizey6 from '../../images/Sizey/Sizey6.png'
import Sizey7 from '../../images/Sizey/Sizey7.png'
import Sizey8 from '../../images/Sizey/Sizey8.png'
import Sizey9 from '../../images/Sizey/Sizey9.png'
import Sizey10 from '../../images/Sizey/Sizey10.png'
import Sizey11 from '../../images/Sizey/Sizey11.png'

const SizeyPage = () => {
    return (
        <LazyLoad>
            <div className={projcontainer}>

                <Navbar />
                <div className={projecthdr}>
                    <Fade down>
                        <h1>Sizey Browser Extension</h1>
                    </Fade>
                </div>
                <div className={quicknotes}>
                    {/* column1 */}
                    <Fade left>
                        <div className={columns}>
                            {/* type */}
                            <div className={boldtxt}><h4>Type:</h4></div>
                            <div><p>Collaborative UI/UX Project</p></div>

                            {/* my role  */}
                            <div className={boldtxt}><h4>My Role:</h4></div>
                            <div><p>UI/UX Designer</p></div>

                            {/* timeline */}
                            <div className={boldtxt}><h4>Timeline:</h4></div>
                            <div><p>4 months</p></div>
                        </div>
                    </Fade>

                    <Fade right>
                        {/* column2 */}
                        <div className={columns}>
                            {/* summary */}
                            <div><h4>Summary:</h4></div>
                            <div>
                                <p className={summarytxt}>
                                    My team and I were tasked with creating a human-computer interaction solution to a real world problem of our choice.<br /><br />
                            We decided to tackle the issue of sizing inconsistencies when shopping online for clothes, and explored solutions to help take
                            the guesswork out of choosing the correct size.<br /><br />
                            In the future, this idea could be developed using React as the front-end technology.
                        </p>
                            </div>

                            {/* project source code */}
                            {/* <div className={boldtxt}><h4>Project Source Code:</h4></div>
                    <div><a href='' className={linktext2}><p></p></a></div> */}
                        </div>
                    </Fade>
                </div>

                {/* photos */}
                <LazyLoad>
                    <div className={sectionsplit}>
                        {/* exposition/blurb 1 */}
                        <div className={expositionright}>
                            <div className={accent1}></div>
                            <Fade left>
                                <div>
                                    <img src={Mac1} className={expimgleft} />
                                </div>
                            </Fade>
                            <Fade right>
                                <div className={exptextright}>
                                    <p> Sizey is a browser extension that uses locally-stored data to suggest sizes when shopping for clothes online</p>
                                </div>
                            </Fade>
                        </div>

                        {/* exposition/blurb 2 */}
                        <div className={expositionleft}>
                            <div className={accent2}></div>
                            <Fade right>
                                <div>
                                    <img src={Mac2} className={expimgright} />
                                </div>
                            </Fade>
                            <Fade left>
                                <div className={exptextleft}>
                                    <p> The user can input their information either by scanning themselves via the webcam or inputting their dimensions manually</p>
                                </div>
                            </Fade>
                        </div>

                        {/* exposition/blurb 3 */}
                        <div className={expositionright}>
                            <div className={accent1}></div>
                            <Fade left>
                                <div>
                                    <img src={Mac3} className={expimgleft} />
                                </div>
                            </Fade>
                            <Fade right>
                                <div className={exptextright}>
                                    <p>Sizey will then compare the information available on the site with the user's information and make a suggestion.</p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </LazyLoad>

                <LazyLoad>
                    <div className={screenshots}>
                        <Fade down>
                            <img src={Sizey1} className={screenshotimg} />
                        </Fade>

                        <Fade right>
                            <img src={Sizey2} className={screenshotimg} />
                        </Fade>

                        <Fade up>
                            <img src={Sizey3} className={screenshotimg} />
                        </Fade>

                        <Fade left>
                            <img src={Sizey4} className={screenshotimg} />
                        </Fade>

                        <Fade down>
                            <img src={Sizey5} className={screenshotimg} />
                        </Fade>

                        <Fade right>
                            <img src={Sizey6} className={screenshotimg} />
                        </Fade>

                        <Fade up>
                            <img src={Sizey7} className={screenshotimg} />
                        </Fade>

                        <Fade down>
                            <img src={Sizey8} className={screenshotimg} />
                        </Fade>

                        <Fade right>
                            <img src={Sizey9} className={screenshotimg} />
                        </Fade>

                        <Fade left>
                            <img src={Sizey10} className={screenshotimg} />
                        </Fade>

                        <Fade up>
                            <img src={Sizey11} className={screenshotimg} />
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
                                    During this project, my team and I discovered literature that examined the relatively slow uptake of shopping for clothes online 
                                    compared to other products such as electronics. A major factor we discovered during our literature research was that potential buyers 
                                    were unsure about which size would fit them best. Hesitation about the possibility of having to deal with sizing returns was another
                                    contributing factor. More specifically, the lack of a physical store/person in the case of online-only retailers created a sense of 
                                    lack of accountability.<br /><br /> \
                                    
                                    Based on that, we realized that a tool that could help with determining or suggesting sizes would greatly help customers' confidence 
                                    when shopping online for clothes. In the interest of avoiding scope creep in the project, we opted to work based on the assumption that 
                                    most people would be doing their online shopping on a computer rather than a mobile device, and that most companies would have their 
                                    sizing measurements made available to the tool. We decided on the idea of a browser extension as it would be the best platform to 
                                    enable use across multiple websites; something that other tools such as AdBlocker and Honey already do.<br /><br />
                                    
                                    I was responsible for designing both the interface elements and the user's experience of our proposed solution.<br /><br />
                                    
                                    The idea could easily be expanded into a crowd-sourced system that has an extensive database on various clothes' sizes. This could then 
                                    allow for trend analytics and more accurate size suggestions.
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

export default SizeyPage