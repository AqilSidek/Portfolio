import React from "react";

import "./Pages.css";

import AisKrim1 from "../../../media/AisKrim/AisKrim1.png";
import AisKrim2 from "../../../media/AisKrim/AisKrim2.png";
import AisKrim3 from "../../../media/AisKrim/AisKrim3.png";
import AisKrim4 from "../../../media/AisKrim/AisKrim4.png";
import AisKrim5 from "../../../media/AisKrim/AisKrim5.png";
import AisKrim6 from "../../../media/AisKrim/AisKrim6.png";
import AisKrim7 from "../../../media/AisKrim/AisKrim7.png";

import Footer from "../../Footer.js";

export default class AisKrim extends React.Component {
  render() {
    return (
      // overall div
      <div className="content-container">
        {/* title */}
        <div className="page-header">
          <h1 className="header">Ais Krim</h1>
        </div>

        {/* 2-column section */}
        <div className="brief-section">
          {/* first column */}
          <div className="column-one">
            <div>
              <h5>Type:</h5>{" "}
              <h4 className="column-text">Individual UI Project</h4>
            </div>
            <div>
              <h5>My Role:</h5> <h4 className="column-text">UI/UX Designer</h4>
            </div>
            <div>
              <h5>Timeline:</h5> <h4 className="column-text">1 week</h4>
            </div>
          </div>

          {/* second column */}
          <div className="column-two">
            <h5>Summary: </h5>

            <h4 className="column-text">
              This project was an exercise in designing a website using Adobe
              XD.
              <br />
              <br />
              In the future, this website can be implemented using React or HTML
              and CSS.
            </h4>
          </div>
        </div>

        {/* images */}
        <div className="screenshots">
          <div>
            <img src={AisKrim1} alt="SAisKrim1" className="screenshot-img" />
          </div>
          <div>
            <img src={AisKrim2} alt="AisKrim2" className="screenshot-img" />
          </div>
          <div>
            <img src={AisKrim3} alt="AisKrim3" className="screenshot-img" />
          </div>
          <div>
            <img src={AisKrim4} alt="AisKrim4" className="screenshot-img" />
          </div>
          <div>
            <img src={AisKrim5} alt="AisKrim5" className="screenshot-img" />
          </div>
          <div>
            <img src={AisKrim6} alt="AisKrim6" className="screenshot-img" />
          </div>
          <div>
            <img src={AisKrim7} alt="AisKrim7" className="screenshot-img" />
          </div>
        </div>

        {/* project description */}
        <div>
          <h5>About the Project: </h5>
          <h4 className="column-text">
            During this project, my team and I discovered literature that
            examined the relatively slow uptake of shopping for clothes online
            as opposed to other products such as electronics. A major factor was
            that potential buyers were unsure which size would fit them best.
            Hesitation with the possibility of having to deal with sizing
            returns was another contributing factor. More specifically, the lack
            of a physical store/person creates a sense of lack of
            accountability.
            <br />
            <br />
            Most of the time, when a potential customer visits a restaurant's
            website, it is usually either to check the menu, find out it's
            location, and/or to find the restaurant's contact information. With
            this mind, I visited multiple restaurant's websites and studies the
            user interface and experience of each one. I noticed that many
            restaurants placed such information on separate pages.
            <br />
            <br />
            As I explored the websites, I realized that for most restaurants, a
            simple one-page scroll could suffice. Thus, this is the concept I
            applied when designing the website.
          </h4>
        </div>

        <Footer />
      </div>
    );
  }
}
