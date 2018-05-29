import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="BannerTop bg-gold sans-serif">
      <div className="mw9 center pa4 pt5-ns ph7-l">
        <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
          <span className="bg-black-90 lh-copy white pa1 tracked-tight">
            What do to in Memphis in 2018 ?
          </span>
        </h3>
        <h4 className="f3 fw1 bg-black-90 sans-serif i white measure">
          Throughout the year, the city offers you great experiences.
        </h4>
      </div>
    </header>
  );
};

export default Header;
