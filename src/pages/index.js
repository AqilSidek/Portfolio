import * as React from 'react'
import landingGIF from '../images/giphy.gif'
import portfolio from '../images/portfolio-screen.png'
import sizey from '../images/sizey-screen.png'
import topview from '../images/topview-screen.png'
import { container, feat, sechdr, landing, headeranim, landingtxt, featheader, featuredproj, featuredtxt, featuredsection, linktext } from '../components/main.module.css'
import { Link } from 'gatsby'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import LazyLoad from 'react-lazy-load'
import Fade from 'react-reveal'

const IndexPage = () => {
  return (
    <LazyLoad>
      <div className={container}>
        <Navbar />
        {/* header */}
        <Fade down>
          <div className={landing}>
            <div>
              <h1 className={landingtxt}>I am Aqil Sidek a <img src={landingGIF} alt='fun, passionate, resourceful, detailed, driven' className={headeranim} />
           Front End Developer & UI/UX Designer</h1>
            </div>
          </div>
        </Fade>

        {/* featured projects */}
        <div>
          <Fade up>
            <div>
              <h2 className={sechdr}>Featured Projects</h2>
            </div>
          </Fade>
          <div className={feat}>
            <Fade>
              {/* Portfolio */}
              <div className={featuredsection}>
                <Fade left>
                  <Link to='/projects/portfolio/' className={linktext}><h3 className={featheader}>Portfolio</h3></Link>
                  <Link to='/projects/portfolio/'><img src={portfolio} alt='screenshot of this portfolio' className={featuredproj} /></Link>
                  <p className={featuredtxt}>Responsive portfolio built with a mobile-first approach in Gatsby</p>
                </Fade>
              </div>
            </Fade>

            <Fade>
              {/* Sizey */}
              <div className={featuredsection}>
                <Fade left>
                  <Link to='/projects/sizey/' className={linktext}><h3 className={featheader}>Sizey UI</h3></Link>
                  <Link to='/projects/sizey/'><img src={sizey} alt='screenshot user interface design for a browser extension called Sizey' className={featuredproj} /></Link>
                  <p className={featuredtxt}>User interface design for a browser extension</p>
                </Fade>
              </div>
            </Fade>

            <Fade>
              <div className={featuredsection}>
                <Fade left>
                  <Link to='/projects/bike-rental' className={linktext}><h3 className={featheader}>Bike Rental Front End</h3></Link>
                  <Link to='/projects/bike-rental/' className={linktext}><img src={topview} alt='screenshot of front end component for a bike rental system' className={featuredproj} /></Link>
                  <p className={featuredtxt}>Front end component for bike rental system built in React</p>
                </Fade>
              </div>
            </Fade>
          </div>
        </div>

        <LazyLoad>
          <Fade down>
            <Footer />
          </Fade>
        </LazyLoad>
      </div>
      
    </LazyLoad>
  )
}

export default IndexPage
