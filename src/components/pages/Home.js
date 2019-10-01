// libraries
import React from "react";
import { Events, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

// css files
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

import Footer from "../Footer.js";

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
            <p class="header">I am Aqil Sidek, a&nbsp;</p>{" "}
            <img src={splash} className="splash-gif" alt="dedicated" />
            <p className="header">
              UI/UX Designer &
              <br />
              Front End Developer.
            </p>
          </div>

          {/* scroll button */}
          <div className="arrow">
            <a onClick={() => scroll.scrollTo(900)}>
              <img src={arrow} alt="arrow" />
            </a>
          </div>
        </div>

        {/* project summaries */}
        {/* <Router> */}
          <div>
            {/* React-based portfolio website */}
            <div className="content-container">
              <div className="summary-right">
                <div className="summary-text-right">
                  <p className="Summary">
                    A website built entirely using ReactJS showcasing my coding
                    and UI/UX design work.
                  </p>
                  <Link to="/react-portfolio/" className="link-text">
                    <p>Learn more about my React-based portfolio ></p>
                  </Link>
                </div>
                <div className="summary-image-right">
                  <img src={reactTab} alt="Sizey" height="350vw" />
                </div>
              </div>
            </div>

            {/* Sizey browser-extension UI */}
            <div className="content-container">
              <div className="summary-left">
                <div className="summary-text-left">
                  <p className="summary">
                    A browser extension that takes the guesswork out of figuring
                    out your size.
                  </p>
                  <Link to="/sizey/" className="link-text">
                    <p>Learn more about Sizey ></p>
                  </Link>
                </div>
                <div className="summary-image-left">
                  <img
                    src={sizeyTab}
                    alt="Sizey Browser Extension"
                    height="350vw"
                  />
                </div>
              </div>
            </div>

            {/* Fridge app UI */}
            <div className="content-container">
              <div className="summary-phone">
                <div className="summary-text-phone">
                  <p className="summary">
                    An app that tracks the contents of your fridge and pantry to
                    suggest recipes accordingly.
                  </p>
                  <Link to="/fridge/" className="link-text">
                    <p>Learn more about Fridge ></p>
                  </Link>
                </div>
                <div className="summary-image-phone">
                  <img src={fridgePhone} alt="Fridge App" height="550vw" />
                </div>
              </div>
            </div>

            {/* Photography portfolio website */}
            <div className="content-container">
              <div className="summary-left">
                <div className="summary-text-left">
                  <p className="summary">
                    A photography portfolio I built using HTML, CSS, and
                    JavaScript.
                  </p>
                  <Link to="/photography-portfolio/" className="link-text">
                    <p>Learn more about my coded photography portfolio ></p>
                  </Link>
                </div>
                <div className="summary-image-left">
                  <img
                    src={photoTab}
                    alt="Photography Portfolio"
                    height="350vw"
                  />
                </div>
              </div>
            </div>

            {/* Ais Krim website UI */}
            <div className="content-container">
              <div className="summary-right">
                <div className="summary-text-right">
                  <p className="summary">
                    A website concept for a vegan frozen yogurt shop.
                  </p>
                  <Link to="/aiskrim/" className="link-text">
                    <p>Learn more about Ais Krim ></p>
                  </Link>
                </div>
                <div className="summary-image-right">
                  <img src={aiskrimTab} alt="Ais Krim" height="350vw" />
                </div>
              </div>
            </div>

            {/* TopView Bike Rental */}
            <div className="content-container">
              <div className="summary-left">
                <div className="summary-text-left">
                  <p className="summary">
                    A front end prototype for a bicycle rental system built
                    using ReactJS.
                  </p>
                  <Link to="/photography-portfolio/" className="link-text">
                    <p>Learn more about the prototype ></p>
                  </Link>
                  <a
                    href="https://aqilsidek.github.io/TopView-Bike-Rental"
                    className="link-text"
                  >
                    <p>Check out the prototype ></p>
                  </a>
                </div>
                <div className="summary-image-left">
                  <img
                    src={bikeTab}
                    alt="Photography Portfolio"
                    height="350vw"
                  />
                </div>
              </div>
            </div>
          </div>
        <Footer />
        </div>
    );
  }
}
