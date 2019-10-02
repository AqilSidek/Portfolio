import React from "react";
import { IconContext } from "react-icons";

// CSS
import "../pages/works/Pages.css";
import "../../App.css";

import Footer from "../Footer.js";
// images & icons
import Me from "../../media/Me.jpg";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default class Contact extends React.Component {
  render() {
    const email = "aqil.zakwan@outlook.com";
    return (
      <div className="content-container">
        {/* About Me */}
        <div className="brief-section">
          {/* Image of me sliding down */}
          <div>
            <img src={Me} alt="Me sliding down" className="about-img" />
          </div>

          {/* Blurb about me */}
          <div className="column-two">
            <h2 className="about-header">About Me</h2>
            <h4 className="about-descr">
              I am a front end web developer that blends strong technical
              skills, excellent communication abilities, and a knack for UI/UX
              design to deliver stunning, intuitive websites.
              <br />
              <br />
              My skills helped me win first place at the 2019 Arts-Tech Fusion
              Hackathon organized by ShiftKey Labs in Halifax. I was also one of
              114 participants chosen out of a pool of 300 to join the 2019
              Creativity and Innovation Bootcamp.
            </h4>
          </div>
        </div>

        {/* Contact Information */}

        <div className="contact-info">
          <h2 className="contact-header">Get In Touch</h2>
          {/* Email */}
          <div className="contact-details">
            <IconContext.Provider
              value={{
                color: "black",
                size: "3.5em",
                className: "global-class-name"
              }}
            >
              <div className="icon">
                <a href={`mailto:${this.props.email}`}>
                  <FaEnvelope />
                </a>
              </div>
            </IconContext.Provider>
            <div>
              <h4 className="subheading">
                <a href={`mailto:${this.props.email}`} className="link-text-2">
                  aqil.zakwan@outlook.com
                </a>
              </h4>
            </div>
          </div>
          {/* LinkedIn */}
          <div className="contact-details">
            <IconContext.Provider
              value={{
                color: "rgb(0,119,181)",
                size: "3.5em",
                className: "global-class-name"
              }}
            >
              <div className="icon">
                <a href="https://www.linkedin.com/in/aqilsidek" className="link-text-2"><FaLinkedin /></a>
              </div>
            </IconContext.Provider>
            <div>
              <h4 className="subheading"><a href="https://www.linkedin.com/in/aqilsidek" className="link-text-2">https://www.linkedin.com/in/aqilsidek</a></h4>
            </div>
          </div>
          {/* GitHub */}
          <div className="contact-details">
          <IconContext.Provider
              value={{
                color: "black",
                size: "3.5em",
                className: "global-class-name"
              }}
            >
            <div className="icon">
              <FaGithub />
            </div>
            </IconContext.Provider>
            <div>
              <h4 className="subheading"><a href="https://github.com/AqilSidek" className="link-text-2">https://github.com/AqilSidek</a></h4>
            </div>
          </div>
          {/* Resume */}
          {/* <div className="contact-details">
            <div className="icon">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="subheading">aqil.zakwan@outlook.com</h4>
            </div>
          </div> */}
        </div>

        <Footer />
      </div>
    );
  }
}
