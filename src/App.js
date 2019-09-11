import React from "react";

// css
import "./App.css";

// components
import Home from "./components/pages/home";
import Work from "./components/pages/work";
import Contact from "./components/pages/contact";

// react router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <Home />;
}

function WorkComp() {
  return <Work />;
}

function ContactPage() {
  return <Contact />;
}
function App() {
  return (
    <Router>
      <div className="container">
        <div className="navbar-wrapper">
          <div>
            <Link to="/">
              <img src={require("./media/aq.PNG")} />
            </Link>
          </div>
          <div className="links-wrapper">
            <div className="link-item">
              <Link to="/" className="link-text">Home</Link>
            </div>
            <div className="link-item">
              <Link to="/work/" className="link-text">Work</Link>
            </div>
            <div className="link-item">
              <Link to="/contact/" className="link-text">Contact</Link>
            </div>
          </div>
        </div>

        <Route path="/" exact component={Index} />
        <Route path="/work/" component={WorkComp} />
        <Route path="/contact/" component={ContactPage} />
      </div>
    </Router>
  );
}

export default App;

// Credits:
// <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
