// libraries
import React from "react";
import Fade from "react-reveal";
import LazyLoad from "react-lazy-load";

// component
import Footer from "../../Footer.js";

// CSS
import "./Pages.css";

// images
import React1 from "../../../media/React/React1.PNG";
import React2 from "../../../media/React/React2.PNG";
import React3 from "../../../media/React/React3.PNG";
import React4 from "../../../media/React/React4.PNG";
import React5 from "../../../media/React/React5.PNG";
import React6 from "../../../media/React/React6.PNG";

export default class ReactPortfolio extends React.Component {
  render() {
    return (
      // overall div
      <div className="content-container">
        {/* title */}
        <LazyLoad>
          <Fade>
            <div className="page-header">
              <h1 className="header">React-based Portfolio</h1>
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
                    UI/UX Designer
                  </h4>
                </div>
                <div>
                  <h5>Timeline:</h5>{" "}
                  <h4 className="column-text">July 2019 - ongoing</h4>
                </div>
              </div>
            </Fade>

            <Fade right>
              {/* second column */}
              <div className="column-two">
                <div>
                  <h5>Summary: </h5>

                  <h4 className="column-text">
                    This website was built to practice and teach myself React
                    while simultaneously showcasing my other coding, and UI/UX
                    projects.
                    <br />
                    <br />
                    Similar to my photography portfolio, this will page will
                    grow with my skills.
                  </h4>
                </div>
                <div>
                  <h5>Project Source Code: </h5>
                  <h4>
                    <a
                      href="https://github.com/AqilSidek/Portfolio"
                      className="link-text-2"
                    >
                      <h4 className="column-text">
                        github.com/AqilSidek/Portfolio
                      </h4>
                    </a>
                  </h4>
                </div>
              </div>
            </Fade>
          </div>
        </LazyLoad>

        {/* images */}
        <LazyLoad>
          <div className="screenshots">
            {/* image 1 */}
            <Fade right>
              <div>
                <img src={React1} alt="React1" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 2 */}
            <Fade up>
              <div>
                <img src={React2} alt="React2" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 3 */}
            <Fade down>
              <div>
                <img src={React3} alt="React3" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 4 */}
            <Fade right>
              <div>
                <img src={React4} alt="React4" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 5 */}
            <Fade left>
              <div>
                <img src={React5} alt="React5" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 6 */}
            <Fade up>
              <div>
                <img src={React6} alt="React6" className="screenshot-img" />
              </div>
            </Fade>
          </div>
        </LazyLoad>

        {/* project description */}
        <LazyLoad>
          <Fade left cascade>
            <div>
              <h5>About the Project: </h5>
              <h4 className="column-text">
                With ReactJS becoming one of the most popular web development
                technologies and ReactJS proficiency becoming a very desirable
                skill, I knew I had to learn it. I decided to create a portfolio
                for my web development and UI/UX projects using ReactJS. The
                libraries I used during the project include Create React App,
                React Router, and React Icons.
              </h4>
              <br />
              <br />
              <h4 className="column-text">
                On the backend, I set up a cloud server via DigitalOcean then deployed 
                the React code using Nginx. I also added a script to the package.json file 
                to automate the deployment of any updates to my website.
              </h4>
              <br />
              <br />
              <h4 className="column-text">
                I started by looking at the portfolios of other front end web
                developers and UI/UX designers, as well as looking to websites
                such as Dribble for inspiration. From there, I created several
                framework sketches to help structure out my website and to help
                determine the user experience I wanted visitors to experience.
                <br />
                <br />
              </h4>
            </div>
          </Fade>
        </LazyLoad>

        <Footer />
      </div>
    );
  }
}
