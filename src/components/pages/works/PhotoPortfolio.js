// libraries
import React from "react";
import LazyLoad from "react-lazy-load";
import Fade from "react-reveal";

// component
import Footer from "../../Footer.js";

// CSS
import "./Pages.css";
import "../../../App.css";

// images
//   images for exposition/blurbs
import Photo1 from "../../../media/PhotoPortfolio/Capture0.png";
import Photo2 from "../../../media/PhotoPortfolio/Capture2.png";
import Photo3 from "../../../media/PhotoPortfolio/Capture3.png";
//   screenshot images
import Screenshot1 from "../../../media/PhotoPortfolio/Capture1.png";
import Screenshot2 from "../../../media/PhotoPortfolio/Capture4.png";
import Screenshot3 from "../../../media/PhotoPortfolio/Capture5.png";
import Screenshot4 from "../../../media/PhotoPortfolio/Capture7.png";
import Screenshot5 from "../../../media/PhotoPortfolio/Capture9.png";
import Screenshot6 from "../../../media/PhotoPortfolio/Capture11.png";
import Screenshot7 from "../../../media/PhotoPortfolio/Capture13.png";
import Screenshot8 from "../../../media/PhotoPortfolio/Capture15.png";

export default class PhotoPortfolio extends React.Component {
  render() {
    return (
      // overall div
      <div className="content-container">
        {/* title */}

        <LazyLoad>
          <Fade>
            <div className="page-header">
              <h1 className="header">Photography Portfolio</h1>
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
                    Web Developer
                    <br />
                    UI/UX Designer
                  </h4>
                </div>
                <div>
                  <h5>Timeline:</h5> <h4 className="column-text">4 months</h4>
                </div>
              </div>
            </Fade>

            {/* second column */}
            <Fade right>
              <div className="column-two">
                <div>
                  <h5>Summary: </h5>
                  <h4 className="column-text">
                    The purpose of this website was to teach myself web
                    development skills and to explore the field. It is also the
                    platform I use as my photography portfolio.
                    <br />
                    <br />
                    The website is an ongoing project/testing ground where I
                    experiment with new elements and designs.
                  </h4>
                </div>
                <div>
                  <h5>Hosted Project Link: </h5>
                  <a
                    href="https://web.cs.dal.ca/~sidek"
                    className="link-text-2"
                  >
                    <h4 className="column-text">web.cs.dal.ca/~sidek</h4>
                  </a>
                </div>
                <div>
                  <h5>Project Source Code: </h5>
                  <a
                    href="https://github.com/AqilSidek/Photography-Portfolio"
                    className="link-text-2"
                  >
                    <h4 className="column-text">
                      github.com/AqilSidek/Photography-Portfolio
                    </h4>
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </LazyLoad>

        {/* images */}
        <LazyLoad>
          <div className="section-split">
            {/* exposition/blurb 1 */}
            <div className="expositions-right">
              <Fade left>
                <div>
                  <img src={Photo1} alt="Photo1" className="exp-img-left" />
                </div>
              </Fade>
              <Fade right>
                <div className="exp-txt-right">
                  <p>
                    Sizey is a browser extension that uses locally-stored data
                    to suggest sizes when shopping for clothes online
                  </p>
                </div>
              </Fade>
            </div>

            <div className="exposition-left">
              <Fade left>
                <div>
                  <img src={Photo2} alt="Photo2" className="exp-img-right" />
                </div>
              </Fade>
              <Fade right>
                <div className="exp-txt-left">
                  <p>
                    The user can input their information either by scanning
                    themselves via the webcam or inputting their dimensions
                    manually.
                  </p>
                </div>
              </Fade>
            </div>

            <div className="expositions-right">
              <Fade left>
                <div>
                  <img src={Photo3} alt="Photo3" className="exp-img-left" />
                </div>
              </Fade>
              <Fade right>
                <div className="exp-txt-right">
                  <p>
                    Sizey will then compare the information available on the
                    site with the user's information and make a suggestion.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </LazyLoad>

        {/* screenshots */}
        <LazyLoad>
          <div className="screenshots">
            {/* image 1 */}
            <Fade down>
              <div>
                <img
                  src={Screenshot1}
                  alt="Screenshot1"
                  className="screenshot-img"
                />
              </div>
            </Fade>

            {/* image 2 */}
            <Fade left>
              <div>
                <img
                  src={Screenshot2}
                  alt="Screenshot2"
                  className="screenshot-img"
                />
              </div>
            </Fade>

            {/* image 3 */}
            <Fade up>
              <div>
                <img
                  src={Screenshot5}
                  alt="Screenshot5"
                  className="screenshot-img"
                />
              </div>
            </Fade>

            {/* image 4 */}
            <Fade right>
              <div>
                <img
                  src={Screenshot6}
                  alt="Screenshot6"
                  className="screenshot-img"
                />
              </div>
            </Fade>

            {/* image 5 */}
            <Fade down>
              <div>
                <img
                  src={Screenshot7}
                  alt="Screenshot7"
                  className="screenshot-img"
                />
              </div>
            </Fade>

            {/* image 6 */}
            <Fade left>
              <div>
                <img
                  src={Screenshot8}
                  alt="Screenshot8"
                  className="screenshot-img"
                />
              </div>
            </Fade>

            {/* image 7 */}
            <Fade up>
              <div>
                <img
                  src={Screenshot4}
                  alt="Screenshot4"
                  className="screenshot-img"
                />
              </div>
            </Fade>

            {/* image 8 */}
            <Fade right>
              <div>
                <img
                  src={Screenshot3}
                  alt="Screenshot3"
                  className="screenshot-img"
                />
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
                This was my first endeavor into web development. Being an avid amateur 
                photographer, I wanted to create a platform to showcase my photography, 
                as well as refine my web development skills.
                It was built using HTML, CSS, and a sprinkling of JavaScript.
                <br />
                <br />
              </h4>
              <h4 className="column-text">
                This site has undergone a few redesigns, currently being in its 3rd iteration.
                <br />
                <br />
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
