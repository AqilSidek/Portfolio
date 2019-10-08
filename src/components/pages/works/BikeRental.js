// libraries
import React from "react";
import LazyLoad from "react-lazy-load";
import Fade from "react-reveal";

// CSS
import "./Pages.css";

// images
import BikeRental1 from "../../../media/BikeRental/TopView.PNG";
import BikeRental2 from "../../../media/BikeRental/BikeRental1.PNG";
import BikeRental3 from "../../../media/BikeRental/BikeRental2.PNG";
import BikeRental4 from "../../../media/BikeRental/BikeRental3.PNG";
import Footer from "../../Footer";

export default class BikeRental extends React.Component {
  render() {
    return (
      // overall div
      <div className="content-container">
        {/* title */}
        <LazyLoad>
          <Fade>
            <div className="page-header">
              <h1 className="header">Bike Rental Booking System</h1>
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
                    Front End Developer
                    <br />
                    UI/UX Designer
                  </h4>
                </div>
                <div>
                  <h5>Timeline:</h5> <h4 className="column-text">1 week</h4>
                </div>
              </div>
            </Fade>

            {/* second column */}
            <Fade right>
              <div className="column-two">
                <div>
                  <h5>Summary: </h5>

                  <h4 className="column-text">
                    This is a front end prototype for a bike rental booking
                    system created as part of my interview process for TopView
                    Sightseeing.
                  </h4>
                </div>
                <div>
                  <h5>Hosted Project Link: </h5>
                  <a
                    href="https://aqilsidek.github.io/TopView-Bike-Rental"
                    className="link-text-2"
                  >
                    <h4 className="column-text">
                      aqilsidek.github.io/TopView-Bike-Rental
                    </h4>
                  </a>
                </div>
                <div>
                  <h5>Project Source Code: </h5>
                  <h4>
                    <a
                      href="https://github.com/AqilSidek/TopView-Bike-Rental"
                      className="link-text-2"
                    >
                      <h4 className="column-text">
                        github.com/AqilSidek/TopView-Bike-Rental
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
                <img
                  src={BikeRental1}
                  alt="BikeRental1"
                  className="screenshot-img"
                />
              </div>
            </Fade>

            {/* image 2 */}
            <Fade down>
              <div>
                <img
                  src={BikeRental2}
                  alt="BikeRental2"
                  className="screenshot-img"
                />
              </div>
            </Fade>

            {/* image 2 */}
            <Fade up>
              <div>
                <img
                  src={BikeRental3}
                  alt="BikeRental3"
                  className="screenshot-img"
                />
              </div>
            </Fade>

            {/* image 3 */}
            <Fade left>
              <div>
                <img
                  src={BikeRental4}
                  alt="BikeRental4"
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
                This project was the coding challenge given as part of TopView
                Sightseeing's interview process. I was tasked with creating the
                front end for a bicycle rental booking system with the freedom
                to utilize any tech stack I wished. I opted to use ReactJS as I
                knew I could built a more robust front end platform.
                <br />
                <br />
              </h4>
              <h4 className="column-text">
                The website is responsive an dynamically calculates the total
                price of selected items. Information on each item is from a JSON
                file and the site keeps track of items in the cart using states.
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
