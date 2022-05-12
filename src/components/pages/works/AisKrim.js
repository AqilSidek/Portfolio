// libraries
import React from "react";
import LazyLoad from "react-lazy-load";
import Fade from "react-reveal";

// component
import Footer from "../../Footer.js";

// CSS
import "./Pages.css";

// images
import AisKrim1 from "../../../media/AisKrim/AisKrim1.png";
import AisKrim2 from "../../../media/AisKrim/AisKrim2.png";
import AisKrim3 from "../../../media/AisKrim/AisKrim3.png";
import AisKrim4 from "../../../media/AisKrim/AisKrim4.png";
import AisKrim5 from "../../../media/AisKrim/AisKrim5.png";
import AisKrim6 from "../../../media/AisKrim/AisKrim6.png";
import AisKrim7 from "../../../media/AisKrim/AisKrim7.png";

export default class AisKrim extends React.Component {
  render() {
    return (
      // overall div
      <div className="content-container">
        {/* title */}
        <LazyLoad>
          <Fade>
            <div className="page-header">
              <h1 className="header">Ais Krim</h1>
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
                  <h4 className="column-text">Individual UI Project</h4>
                </div>
                <div>
                  <h5>My Role:</h5>{" "}
                  <h4 className="column-text">UI/UX Designer</h4>
                </div>
                <div>
                  <h5>Timeline:</h5> <h4 className="column-text">1 week</h4>
                </div>
              </div>
            </Fade>

            {/* second column */}
            <Fade right>
              <div className="column-two">
                <h5>Summary: </h5>

                <h4 className="column-text">
                  This project was an exercise in designing a website using
                  Adobe XD, as well as, refreshing my knowledge of the design process.
                  <br />
                  <br />
                  In the future, this website can be implemented using React or
                  HTML and CSS.
                </h4>
              </div>
            </Fade>
          </div>
        </LazyLoad>

        {/* images */}
        <LazyLoad>
          <div className="screenshots">
            {/* image 1 */}
            <Fade up>
              <div>
                <img
                  src={AisKrim1}
                  alt="SAisKrim1"
                  className="screenshot-img"
                />
              </div>
            </Fade>

            {/* image 2 */}
            <Fade right>
              <div>
                <img src={AisKrim2} alt="AisKrim2" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 3 */}
            <Fade down>
              <div>
                <img src={AisKrim3} alt="AisKrim3" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 4 */}
            <Fade right>
              <div>
                <img src={AisKrim4} alt="AisKrim4" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 5 */}
            <Fade left>
              <div>
                <img src={AisKrim5} alt="AisKrim5" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 6 */}
            <Fade up>
              <div>
                <img src={AisKrim6} alt="AisKrim6" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 7 */}
            <Fade down>
              <div>
                <img src={AisKrim7} alt="AisKrim7" className="screenshot-img" />
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
                This project was a personal exercise in familiarising myself with using UI software, 
                specifically Adobe XD. It was also a personal exercise in going through the motions of 
                designing a website.
                <br />
                <br />
              </h4>
              <h4 className="column-text">
                I created a basic user story for the website, in this case a new local ice cream business. 
                I then put myself into the role of the designer/developer, researching what kinds of 
                information other local eateries and dessert shops offered on their information. Then, I 
                created the designs using Adobe XD, for the hypothetical client to review before I started 
                writing any code.
                <br />
                <br />
              </h4>
              <h4 className="column-text">
                Most of the time, when a potential customer visits a restaurant's website, it is usually either 
                to check the menu, find out it's location, and/or to find the restaurant's contact information. 
                With this mind, I visited multiple restaurant's websites and studies the user interface and 
                experience of each one. I noticed that many restaurants placed such information on separate pages.
                Upon further exploration, I realized that for most restaurants, a simple one-page scroll 
                could suffice. Thus, this is the concept I applied when designing the website.
              </h4>
            </div>
          </Fade>
        </LazyLoad>

        <LazyLoad>
          <Fade up>
            <Footer />
          </Fade>
        </LazyLoad>
      </div>
    );
  }
}
