import React from "react";
import { Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function Header(props) {
  return (
    <div>
      <nav className="nav-wrap">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/AboutUs">
            <li>About</li>
          </Link>
          <Link to="ContactUs">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
