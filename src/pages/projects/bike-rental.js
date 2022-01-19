import * as React from 'react'
import { projcontainer, quicknotes, columns, projecthdr, projdetails, boldtxt, screenshots, screenshotimg } from './projects.module.css'
import { linktext2 } from '../../components/main.module.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import BikeRental1 from '../../images/BikeRental/TopView.png'
import BikeRental2 from '../../images/BikeRental/BikeRental1.png'
import BikeRental3 from '../../images/BikeRental/BikeRental2.png'
import BikeRental4 from '../../images/BikeRental/BikeRental3.png'
import LazyLoad from 'react-lazy-load'
import Fade from 'react-reveal'

const BikeRentalPage = () => {
    return (
        <LazyLoad>
            <div className={projcontainer}>

                <Navbar />
                <div className={projecthdr}>
                    <Fade down><h1>Bike Rental Booking System</h1></Fade>
                </div>

                
                <div className={quicknotes}>
                    {/* column1 */}
                    <LazyLoad>
                        <Fade left>
                    <div className={columns}>
                        {/* type */}
                        <div>
                            <div className={boldtxt}><h4>Type:</h4></div>
                            <div><p>Individual Project</p></div>
                        </div>

                        {/* my role  */}
                        <div className={boldtxt}><h4>My Role:</h4></div>
                        <div><p>Front End Developer</p><br />UI/UX Designer</div>

                        {/* timeline */}
                        <div className={boldtxt}><h4>Timeline:</h4></div>
                        <div><p>1 week</p></div>
                    </div>
                    </Fade>
                    </LazyLoad>
                    

                    {/* column2 */}
                    <LazyLoad>
                    <Fade right>
                    <div className={columns}>
                        {/* summary */}
                        <div className={boldtxt}><h4>Summary:</h4></div>
                        <div>
                            <p>
                                This is a front end component for a bike rental booking system.
                        </p>
                        </div>

                        {/* hosted project link */}
                        <div className={boldtxt}><h4>Hosted Project Link</h4></div>
                        <div><a href='aqilsidek.github.io/TopView-Bike-Rental' className={linktext2}><p>aqilsidek.github.io/TopView-Bike-Rental</p></a></div>

                        {/* project source code */}
                        <div className={boldtxt}><h4>Project Source Code:</h4></div>
                        <div><a href='github.com/AqilSidek/Topview-Bike-Rental' className={linktext2}><p>github.com/AqilSidek/TopView-Bike-Rental</p></a></div>
                    </div>
                    </Fade>
                    </LazyLoad>
                </div>

                {/* photos */}
                <LazyLoad>
                    <div className={screenshots}>
                        <Fade left>
                            <img src={BikeRental1} className={screenshotimg} />
                        </Fade>

                        <Fade up>
                            <img src={BikeRental2} className={screenshotimg} />
                        </Fade>

                        <Fade right>
                            <img src={BikeRental3} className={screenshotimg} />
                        </Fade>

                        <Fade down>
                            <img src={BikeRental4} className={screenshotimg} />
                        </Fade>
                    </div>
                </LazyLoad>


                {/* project details */}
                <div className={projdetails}>
                    <Fade up><div className={boldtxt}><h4>Project Details</h4></div></Fade>
                    <Fade down>
                        <div>
                            <p>
                                This project was a coding challenge to create the front end component for a bicycle rental booking system. With the freedom to utilize
                        any tech stack, I opted to use ReactJS as I knew I could build a more robust and scalable front end platform.<br /><br />

                        The website is responsive and dynamically calculates the total price of selected items. Information on each item is from a JSON file and
                        the site keeps track of items in the cart using React States.
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

export default BikeRentalPage