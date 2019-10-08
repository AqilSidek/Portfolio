// libraries
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// css
import "./App.css";

// components
import Home from "./components/pages/Home.js";
import Work from "./components/pages/Work.js";
import Contact from "./components/pages/Contact.js";
import Sizey from "./components/pages/works/Sizey";
import ReactPortfolio from "./components/pages/works/ReactPortfolio";
import Fridge from "./components/pages/works/Fridge";
import BikeRental from "./components/pages/works/BikeRental";
import PhotoPortfolio from "./components/pages/works/PhotoPortfolio";
import AisKrim from "./components/pages/works/AisKrim";
import Style from "./components/pages/Style";

function Index() {
  return <Home />;
}

function WorkComp() {
  return <Work />;
}

function ContactPage() {
  return <Contact />;
}

function StylePage() {
  return <Style />;
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="navbar-wrapper">
            <div>
              <Link to="/">
                <img src={require("./media/aq.PNG")} alt="icon" />
              </Link>
            </div>
            <div className="links-wrapper">
              <div className="link-item">
                <Link to="/" className="link-text">
                  Home
                </Link>
              </div>
              <div className="link-item">
                <Link to="/work/" className="link-text">
                  Work
                </Link>
              </div>
              <div className="link-item">
                <Link to="/contact/" className="link-text">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Navbar routes */}
          <Route path="/" exact component={Index} />
          <Route path="/work/" component={WorkComp} />
          <Route path="/contact/" component={ContactPage} />

          {/* Routes to specific project pages */}
            <Route path="/react-portfolio" component={ReactPortfolio} />
            <Route path="/sizey" component={Sizey} />
            <Route path="/fridge" component={Fridge} />
            <Route path="/bike-rental" component={BikeRental} />
            <Route path="/photography-portfolio" component={PhotoPortfolio} />
            <Route path="/aiskrim" component={AisKrim} />

            <Route path="/style" component={Style} />
        </div>
      </Router>
    );
  }
}

export default App;

// Credits:
// <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// 
