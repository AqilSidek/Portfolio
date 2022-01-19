import * as React from 'react'
import {
    projcontainer,
    quicknotes,
    columns,
    boldtxt,
    projecthdr,
    projdetails,
    screenshots,
    screenshotimg
} from './projects.module.css'
import { linktext2 } from '../../components/main.module.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import LazyLoad from 'react-lazy-load'
import Fade from 'react-reveal'

// screenshots
import Screenshot1 from '../../images/PhotoPortfolio/Capture1.png'
import Screenshot2 from '../../images/PhotoPortfolio/Capture4.png'
import Screenshot3 from '../../images/PhotoPortfolio/Capture5.png'
import Screenshot5 from '../../images/PhotoPortfolio/Capture9.png'
import Screenshot6 from '../../images/PhotoPortfolio/Capture11.png'
import Screenshot7 from '../../images/PhotoPortfolio/Capture13.png'
import Screenshot8 from '../../images/PhotoPortfolio/Capture15.png'

const PhotographyPage = () => {
    return (
        <LazyLoad>
            <div className={projcontainer}>
                <Navbar />

                <div className={projecthdr}>
                    <Fade down>
                        <h1>Photography Portfolio Website</h1>
                    </Fade>
                </div>

                <div className={quicknotes}>
                    {/* column1 */}
                    <div className={columns}>
                        {/* type */}
                        <div className={boldtxt}><h4>Type:</h4></div>
                        <div><p>Individual Project</p></div>

                        {/* my role  */}
                        <div className={boldtxt}><h4>My Role:</h4></div>
                        <div><p>Web Developer<br />UI/UX Designer</p></div>

                        {/* timeline */}
                        <div className={boldtxt}><h4>Timeline:</h4></div>
                        <div><p>4 months</p></div>
                    </div>

                    {/* column2 */}
                    <div className={columns}>
                        {/* summary */}
                        <div className={boldtxt}><h4>Summary:</h4></div>
                        <div>
                            <p>
                                The purpose of this website was to teach myself web development skills and to explore the field of web development.<br /><br />

                                The website is an ongoing project/testing ground wehre I experiment with new elements and designs.
                            </p>
                        </div>

                        {/* hosted project link */}
                        <div className={boldtxt}><h4>Hosted Project Link</h4></div>
                        <div><a href='web.cs.dal.ca/~sidek' className={linktext2}><p>web.cs.dal.ca/~sidek</p></a></div>
                        {/* project source code */}
                        <div className={boldtxt}><h4>Project Source Code:</h4></div>
                        <div><a href='github.com/AqilSidek/Photography-Portfolio' className={linktext2}><p>github.com/AqilSidek/Photography-Portfolio</p></a></div>
                    </div>
                </div>

                {/* photos */}
                <div className={screenshots}>

                    {/* image 1 */}
                    <Fade down>
                        <div>
                            <img src={Screenshot1} className={screenshotimg} />
                        </div>
                    </Fade>

                    {/* image 2 */}
                    <Fade left>
                        <div>
                            <img src={Screenshot2} className={screenshotimg} />
                        </div>
                    </Fade>

                    {/* image 3 */}
                    <Fade up>
                        <div>
                            <img src={Screenshot5} className={screenshotimg} />
                        </div>
                    </Fade>

                    {/* image 4 */}
                    <Fade right>
                        <div>
                            <img src={Screenshot6} className={screenshotimg} />
                        </div>
                    </Fade>

                    {/* image 5 */}
                    <Fade down>
                        <div>
                            <img src={Screenshot7} className={screenshotimg} />
                        </div>
                    </Fade>

                    {/* image 6 */}
                    <Fade left>
                        <div>
                            <img src={Screenshot8} className={screenshotimg} />
                        </div>
                    </Fade>

                    {/* image 7 */}
                    <Fade up>
                        <div>
                            <img src={Screenshot3} className={screenshotimg} />
                        </div>
                    </Fade>
                </div>

                {/* project details */}
                <LazyLoad>
                    <div className={projdetails}>
                        <Fade up><div className={boldtxt}><h4>Project Details</h4></div></Fade>
                        <Fade down>
                            <div>
                                <p>
                                    This was my first endeavor into web development. Being a computer science student (at the time) and avid amateur
                                    photographer, I wanted to create a platform to showcase my skills and works. Once I migrated my portfolio to React,
                                    I pivoted this site to exclusively showcase my photography.<br /><br />

                                    This site has undergone a few redesigns, currently being in its 3rd iteration.
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

export default PhotographyPage