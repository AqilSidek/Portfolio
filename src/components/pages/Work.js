// libraries
import React from "react";
import { Link } from "react-router-dom";

// css
import "../../App.css";
import "./Work.css";

// images
import sizeyTab from "../../media/sizey-screen.png";
import fridgePhone from "../../media/fridge-screen.png";
import photoTab from "../../media/photo-screen.png";
import aiskrimTab from "../../media/ais-krim-screen.png";
import portfolioTab from "../../media/portfolio-screen.png";
import topviewTab from "../../media/topview-screen.png";

import Footer from "../Footer.js";

function Work() {
  return (
    <div className="content-container">
      <div className="page-header">
        <h1 className="header">Work</h1>
        <h4 className="subheading subheading-text">
          Please click on the projects to learn more.
        </h4>
      </div>

      {/* first row */}
      <div className="projects">
        {/* first element */}
        <div className="elements">
          <div className="photo">
            <Link to="/react-portfolio/">
              <img src={portfolioTab} alt="Portfolio" width="300vw" />
            </Link>
          </div>
          <div className="description">
            {" "}
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
        </div>

        {/* second element */}
        <div className="elements">
          <div className="photo">
            <Link to="/sizey/">
              <img src={sizeyTab} alt="Sizey" width="300vw" />
            </Link>
          </div>
          <div className="description">
            {" "}
            <h4>
              <strong>Sizey</strong>
            </h4>
            <p className="subheading-text">
              A browser extension that takes the guesswork out of figuring out
              your size.
            </p>
            <Link to="/sizey/" className="link-text small-text">
              <p>Learn more about Sizey ></p>
            </Link>
          </div>
        </div>
        {/* third element */}
        <div className="elements">
          <div className="photo">
            <Link to="/fridge/">
              <img src={fridgePhone} alt="Fridge" height="220vh" />
            </Link>
          </div>
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
        </div>
      </div>

      {/* second row */}
      <div className="projects">
        {/* first item */}
        <div className="elements">
          <div className="photo">
            <Link to="/bike-rental/">
              <img src={topviewTab} alt="TopView Bike Rental" width="300vw" />
            </Link>
          </div>
          <div className="description">
            <h4>
              <strong>TopView Bike Rental</strong>
            </h4>
            <p className="subheading-text">
              Front end prototype for a bike rental booking service built using
              JavaScript and ReactJS library.
            </p>
            <Link to="/bike-rental/" className="link-text small-text">
              <p>Learn more about the bike rental booking prototype ></p>
            </Link>
          </div>
        </div>
        {/* second item */}
        <div className="elements">
          <div className="photo">
            <Link to="photo-portfolio">
              <img src={photoTab} alt="Photography Portfolio" width="300vw" />
            </Link>
          </div>
          <div className="description">
            <h4>
              <strong>Photography Portfolio</strong>
            </h4>
            <p className="subheading-text">
              Website I built using HTML, CSS, and JavaScript.
            </p>
            <Link to="/photography-portfolio/" className="link-text small-text">
              <p>Learn more about my coded photoraphy portfolio ></p>
            </Link>
          </div>
        </div>
        {/* third item */}
        <div className="elements">
          <div className="photo">
            <Link to="/aiskrim">
              <img src={aiskrimTab} alt="Ais Krim" width="300vw" />
            </Link>
          </div>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Work;
