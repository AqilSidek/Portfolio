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
import Mac1 from "../../../media/Sizey/Mac1.png";
import Mac2 from "../../../media/Sizey/Mac2.png";
import Mac3 from "../../../media/Sizey/Mac3.png";
//   screenshot images
import Sizey1 from "../../../media/Sizey/Sizey1.png";
import Sizey2 from "../../../media/Sizey/Sizey2.png";
import Sizey3 from "../../../media/Sizey/Sizey3.png";
import Sizey4 from "../../../media/Sizey/Sizey4.png";
import Sizey5 from "../../../media/Sizey/Sizey5.png";
import Sizey6 from "../../../media/Sizey/Sizey6.png";
import Sizey7 from "../../../media/Sizey/Sizey7.png";
import Sizey8 from "../../../media/Sizey/Sizey8.png";
import Sizey9 from "../../../media/Sizey/Sizey9.png";
import Sizey10 from "../../../media/Sizey/Sizey10.png";
import Sizey11 from "../../../media/Sizey/Sizey11.png";

export default class Sizey extends React.Component {
  render() {
    return (
      // overall div
      <div className="content-container">
        {/* title */}
        <LazyLoad>
          <Fade>
            <div className="page-header">
              <h1 className="header">Sizey</h1>
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
                  <h4 className="column-text">Collaborative UI/UX Project</h4>
                </div>
                <div>
                  <h5>My Role:</h5>{" "}
                  <h4 className="column-text">UI/UX Designer</h4>
                </div>
                <div>
                  <h5>Timeline:</h5> <h4 className="column-text">4 months</h4>
                </div>
              </div>
            </Fade>

            <Fade right>
              {/* second column */}
              <div className="column-two">
                <h5>Summary: </h5>

                <h4 className="column-text">
                  My team and I were tasked with creating a human-computer
                  interaction solution to a real world problem of our choice.
                  <br />
                  <br />
                  We decided to tackle the issue of sizing inconsistencies when
                  shopping online for clothes, and explored solutions to help
                  take the guesswork out of choosing the correct size.
                  <br />
                  <br />
                  In the future, this idea could be developed using React as the
                  front-end technology.
                </h4>
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
                  <img src={Mac1} alt="Mac1" className="exp-img-left" />
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

            {/* exposition/blurb 2 */}
            <div className="exposition-left">
              <Fade left>
                <div>
                  <img src={Mac2} alt="Mac2" className="exp-img-right" />
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

            {/* exposition/blurb 3 */}
            <div className="expositions-right">
              <Fade left>
                <div>
                  <img src={Mac3} alt="Mac3" className="exp-img-left" />
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

        <LazyLoad>
          {/* screenshots */}
          <div className="screenshots">
            {/* image 1 */}
            <Fade right>
              <div>
                <img src={Sizey1} alt="Sizey1" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 2 */}
            <Fade down>
              <div>
                <img src={Sizey2} alt="Sizey2" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 3 */}
            <Fade left>
              <div>
                <img src={Sizey3} alt="Sizey3" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 4 */}
            <Fade up>
              <div>
                <img src={Sizey4} alt="Sizey4" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 5 */}
            <Fade left>
              <div>
                <img src={Sizey5} alt="Sizey5" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 6 */}
            <Fade right>
              <div>
                <img src={Sizey6} alt="Sizey6" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 7 */}
            <Fade left>
              <div>
                <img src={Sizey7} alt="Sizey7" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 8 */}
            <Fade right>
              <div>
                <img src={Sizey8} alt="Sizey8" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 9 */}
            <Fade down>
              <div>
                <img src={Sizey9} alt="Sizey9" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 10 */}
            <Fade up>
              <div>
                <img src={Sizey10} alt="Sizey10" className="screenshot-img" />
              </div>
            </Fade>

            {/* image 11 */}
            <Fade up>
              <div>
                <img src={Sizey11} alt="Sizey11" className="screenshot-img" />
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
                During this project, my team and I discovered literature that
                examined the relatively slow uptake of shopping for clothes
                online as opposed to other products such as electronics. A major
                factor was that potential buyers were unsure which size would
                fit them best. Hesitation with the possibility of having to deal
                with sizing returns was another contributing factor. More
                specifically, the lack of a physical store/person creates a
                sense of lack of accountability.
                <br />
                <br />
              </h4>
              <h4 className="column-text">
                Based on that, we realized that a tool that could help with
                determining or suggesting sizes would greatly help customers'
                confidence when shopping online for clothes. In the interest of
                avoiding scope creep in the project, we opted to work based on
                the assumption that most people would be doing their online
                shopping on a computer rather than a mobile device, and that
                most companies would have their sizing measurements made
                available to the tool. We decided on the idea of a browser
                extension as it would be the best platform to enable use across
                multiple websites.
                <br />
                <br />
              </h4>
              <h4 className="column-text">
                I was responsible for designing both the interface elements and
                the user's experience of our proposed solution.
                <br />
                <br />
              </h4>
              <h4 className="column-text">
                This idea could easily be expanded into a crowd-sourced system
                that has an extensive database on various clothes' sizes. This
                could then allow for trend analyses and more accurate size
                suggestions.
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
