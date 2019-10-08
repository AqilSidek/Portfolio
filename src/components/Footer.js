// librries
import React from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

// CSS
import "./Footer.css";
import "../App.css";

// icons & media
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">

        {/* social media icons */}
        <div className="socmed">
          
          {/* LinkedIn */}
          <div className="contact-details">
            <IconContext.Provider
              value={{
                color: "black",
                size: "1.5em",
                className: "global-class-name"
              }}
            >
              <div className="icon">
                <a href="https://www.linkedin.com/in/aqilsidek">
                  <FaLinkedin />
                </a>
              </div>
            </IconContext.Provider>
          </div>

          {/* GitHub */}
          <div className="contact-details">
            <IconContext.Provider
              value={{
                color: "black",
                size: "1.5em",
                className: "global-class-name"
              }}
            >
              <div className="icon">
                <a href="https://github.com/AqilSidek">
                  <FaGithub />
                </a>
              </div>
            </IconContext.Provider>
          </div>

          {/* Email */}
          <div className="contact-details">
            <IconContext.Provider
              value={{
                color: "black",
                size: "1.5em",
                className: "global-class-name"
              }}
            >
              <div className="icon">
                <a href={`mailto:${this.props.email}`}>
                  <FaEnvelope />
                </a>
              </div>
            </IconContext.Provider>
          </div>

          {/* Instagram */}
          <div className="contact-details">
            <IconContext.Provider
              value={{
                color: "black",
                size: "1.5em",
                className: "global-class-name"
              }}
            >
              <div className="icon">
                <a href="https://www.instagram.com/aqsidek">
                  <FaInstagram />
                </a>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    );
  }
}
