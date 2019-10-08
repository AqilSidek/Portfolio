// libraries
import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import Fade from "react-reveal";

// component
import Footer from "../Footer.js";

// CSS
import "../../App.css";
import "./Work.css";

// images
import sizeyTab from "../../media/sizey-screen.png";
import fridgePhone from "../../media/fridge-screen.png";
import photoTab from "../../media/photo-screen.png";
import aiskrimTab from "../../media/ais-krim-screen.png";
import portfolioTab from "../../media/portfolio-screen.png";
import topviewTab from "../../media/topview-screen.png";

function Work() {
  return (
    <div className="content-container">
      {/* Header and subheader */}
      <LazyLoad>
        <div className="page-header">
          <Fade>
            <h1 className="header">Work</h1>
          </Fade>
          <Fade up>
            <h4 className="subheading subheading-text">
              Please click on the projects to learn more.
            </h4>
          </Fade>
        </div>
      </LazyLoad>

      {/* -----------------------1st Row--------------------------------- */}
      <div className="projects">
        {/* first element */}
        <LazyLoad>
          <div className="elements">
            <Fade down>
              <div className="photo">
                <Link to="/react-portfolio/">
                  <img src={portfolioTab} alt="Portfolio" height="220vw" />
                </Link>
              </div>
            </Fade>
            <Fade up>
              <div className="description">
                <h4>
                  <strong>Portfolio</strong>
                </h4>
                <p className="subheading-text">
                  A website showcasing my UI/UX work, built entirely using
                  JavaScript and the ReactJS library.
                </p>
                <Link to="/react-portfolio/" className="link-text small-text">
                  <p>Learn more about my coded portfolio ></p>
                </Link>
              </div>
            </Fade>
          </div>
        </LazyLoad>

        {/* second element */}
        <LazyLoad>
          <div className="elements">
            <Fade down>
              <div className="photo">
                <Link to="/sizey/">
                  <img src={sizeyTab} alt="Sizey" height="220vw" />
                </Link>
              </div>
            </Fade>
            <Fade up>
              <div className="description">
                <h4>
                  <strong>Sizey</strong>
                </h4>
                <p className="subheading-text">
                  A browser extension that takes the guesswork out of figuring
                  out your size.
                </p>
                <Link to="/sizey/" className="link-text small-text">
                  <p>Learn more about Sizey ></p>
                </Link>
              </div>
            </Fade>
          </div>
        </LazyLoad>

        {/* third element */}
        <LazyLoad>
          <div className="elements">
            <Fade down>
              <div className="photo">
                <Link to="/fridge/">
                  <img src={fridgePhone} alt="Fridge" height="220vw" />
                </Link>
              </div>
            </Fade>
            <Fade up>
              <div className="description">
                <h4>
                  <strong>Fridge</strong>
                </h4>
                <p className="subheading-text">
                  An app that tracks the contents of your fridge and pantry to
                  suggest recipes accordingly.
                </p>
                <Link to="/fridge/" className="link-text small-text">
                  <p>Learn more about Fridge ></p>
                </Link>
              </div>
            </Fade>
          </div>
        </LazyLoad>
      </div>

      {/* -----------------------2nd Row--------------------------------- */}
      <div className="projects">
        {/* first item */}
        <LazyLoad>
          <div className="elements">
            <Fade down>
              <div className="photo">
                <Link to="/bike-rental/">
                  <img
                    src={topviewTab}
                    alt="TopView Bike Rental"
                    height="220vw"
                  />
                </Link>
              </div>
            </Fade>
            <Fade up>
              <div className="description">
                <h4>
                  <strong>TopView Bike Rental</strong>
                </h4>
                <p className="subheading-text">
                  Front end prototype for a bike rental booking service built
                  using JavaScript and ReactJS library.
                </p>
                <Link to="/bike-rental/" className="link-text small-text">
                  <p>Learn more about the bike rental booking prototype ></p>
                </Link>
              </div>
            </Fade>
          </div>
        </LazyLoad>

        {/* second item */}
        <LazyLoad>
          <div className="elements">
            <Fade down>
              <div className="photo">
                <Link to="/photography-portfolio/">
                  <img
                    src={photoTab}
                    alt="Photography Portfolio"
                    height="220vw"
                  />
                </Link>
              </div>
            </Fade>
            <Fade up>
              <div className="description">
                <h4>
                  <strong>Photography Portfolio</strong>
                </h4>
                <p className="subheading-text">
                  Website I built using HTML, CSS, and JavaScript.
                </p>
                <Link
                  to="/photography-portfolio/"
                  className="link-text small-text"
                >
                  <p>Learn more about my coded photoraphy portfolio ></p>
                </Link>
              </div>
            </Fade>
          </div>
        </LazyLoad>

        {/* third item */}
        <LazyLoad>
          <div className="elements">
            <Fade down>
              <div className="photo">
                <Link to="/aiskrim">
                  <img src={aiskrimTab} alt="Ais Krim" height="220vw" />
                </Link>
              </div>
            </Fade>
            <Fade up>
              <div className="description">
                <h4>
                  <strong>Ais Krim</strong>
                </h4>
                <p className="subheading-text">
                  Website concept for a vegan frozen yogurt shop.
                </p>
                <Link to="/aiskrim/" className="link-text small-text">
                  <p>Learn more about Ais Krim ></p>
                </Link>
              </div>
            </Fade>
          </div>
        </LazyLoad>
      </div>

      {/* Footer */}
      <LazyLoad>
        <Fade>
          <Footer />
        </Fade>
      </LazyLoad>
    </div>
  );
}

export default Work;
