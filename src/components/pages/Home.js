// libraries
import React from "react";
import { Events, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import Fade from "react-reveal";

// component
import Footer from "../Footer.js";

// CSS files
import "../../App.css";
import "./Home.css";

// images
import splash from "../../media/giphy.gif";
import arrow from "../../media/thin-arrowheads-pointing-down.png";
import reactTab from "../../media/portfolio-screen.png";
import sizeyTab from "../../media/sizey-screen.png";
import fridgePhone from "../../media/fridge-screen.png";
import photoTab from "../../media/photo-screen.png";
import aiskrimTab from "../../media/ais-krim-screen.png";
import bikeTab from "../../media/topview-screen.png";

export default class Home extends React.Component {
  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
  }

  scrollTo() {
    var Scroll = require("react-scroll");
    var scroll = Scroll.animateScroll;

    scroll.scrollTo(100);
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    return (
      <div>
        {/* splash screen */}
        <div className="content-container">
          <div className="splash-screen">
            <Fade>
              <p className="header">I am Aqil Sidek, a&nbsp;</p>
              <img src={splash} className="splash-gif" alt="dedicated" />
              <p className="header">
                Front End Developer &
                <br />
                UI/UX Designer
              </p>
            </Fade>
          </div>

          {/* scroll button */}
          <div className="arrow">
            <a onClick={() => scroll.scrollTo(500)}>
              <img src={arrow} alt="arrow" />
            </a>
          </div>
        </div>

        {/* project summaries */}
        <div>
          {/* TopView Bike Rental */}
          <LazyLoad>
            <Fade>
              <div className="content-container">
                <div className="summary-right">
                  <Fade left>
                    <div className="summary-text-right">
                      <p className="summary">
                      A front end prototype for a bicycle rental system built
                        using ReactJS.
                      </p>
                      <Link to="/bike-rental/" className="link-text">
                        <p>Learn more about the prototype ></p>
                      </Link>
                      <a href="https://aqilsidek.github.io/TopView-Bike-Rental"
                        className="link-text"
                      >
                        <p>Check out the prototype ></p>
                      </a>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="summary-image-right">
                      <img
                        src={bikeTab}
                        alt="React-Based Portfolio"
                        height="350vw"
                      />
                    </div>
                  </Fade>
                </div>
              </div>
            </Fade>
          </LazyLoad>

          {/* Sizey browser-extension UI */}
          <LazyLoad>
            <Fade>
              <div className="content-container">
                <div className="summary-left">
                  <Fade right>
                    <div className="summary-text-left">
                      <p className="summary">
                        A browser extension that takes the guesswork out of
                        figuring out your size.
                      </p>
                      <Link to="/sizey/" className="link-text">
                        <p>Learn more about Sizey ></p>
                      </Link>
                    </div>
                  </Fade>
                  <Fade left>
                    <div className="summary-image-left">
                      <img
                        src={sizeyTab}
                        alt="Sizey Browser Extension"
                        height="350vw"
                      />
                    </div>
                  </Fade>
                </div>
              </div>
            </Fade>
          </LazyLoad>

          {/* Fridge app UI */}
          {/* <LazyLoad>
            <Fade>
              <div className="content-container">
                <div className="summary-phone">
                  <Fade left>
                    <div className="summary-text-phone">
                      <p className="summary">
                        An app that tracks the contents of your fridge and
                        pantry to suggest recipes accordingly.
                      </p>
                      <Link to="/fridge/" className="link-text">
                        <p>Learn more about Fridge ></p>
                      </Link>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="summary-image-phone">
                      <img src={fridgePhone} alt="Fridge App" height="400vw" />
                    </div>
                  </Fade>
                </div>
              </div>
            </Fade>
          </LazyLoad> */}

          {/* Photography portfolio website */}
          <LazyLoad>
            <Fade>
              <div className="content-container">
                <div className="summary-right">
                  <Fade left>
                    <div className="summary-text-right">
                      <p className="summary">
                        A photography portfolio I built using HTML, CSS, and JavaScript.
                      </p>
                      <Link to="photography-portfolio" className="link-text">
                        <p>Learn more about my coded photography portfolio ></p>
                      </Link>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="summary-image-right">
                      <img src={photoTab} alt="Ais Krim" height="350vw" />
                    </div>
                  </Fade>
                </div>
              </div>
            </Fade>
          </LazyLoad>
        </div>

        <LazyLoad>
          <Fade up>
            <Footer />
          </Fade>
        </LazyLoad>
      </div>
    );
  }
}
