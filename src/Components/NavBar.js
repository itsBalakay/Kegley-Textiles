import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
// import "../css/nav.css";
import "../css/nav.css";

function NavBar(props) {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <div className="Navbar">
        <div className="leftSide">
          <h2>logo</h2>
        </div>
        <div className="rightSide">
          <div className="links" id={showLinks ? "hidden" : ""}>
            <Link
              to="/"
              className="link-nav"
              onClick={() => setShowLinks(false)}
            >
              Home
            </Link>
            <Link
              to="/AboutUs"
              className="link-nav"
              onClick={() => setShowLinks(false)}
            >
              About
            </Link>
            <Link
              to="/ContactUs"
              className="link-nav"
              onClick={() => setShowLinks(false)}
            >
              Contact Us
            </Link>
          </div>
          <button onClick={() => setShowLinks(!showLinks)}>
            <ReorderIcon />
          </button>
        </div>
      </div>
      <div id={showLinks ? "pushdown" : ""}></div>
    </>
  );
}

export default NavBar;
