import React from "react";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l sans-serif">
      <div className="db dtc-l v-mid mid-gray w-100 w-25-l tc tl-l mb2 mb0-l">
        <img src={logo} className="di w2 h2 br-100 v-mid" alt="Memphis Moves" />Memphis
        Moves
      </div>
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <a
          className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
          href="#events"
          title="Events"
        >
          Events
        </a>
        <a
          className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
          href="#video"
          title="About"
        >
          About
        </a>
        <a
          className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
          href="#signup"
          title="SignUp"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
