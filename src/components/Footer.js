import React from "react";

const Footer = () => {
  return (
    <footer id="signup" className="pa4 pa5-l black-70 sans-serif">
      <section className="cf mb5">
        <div className="db dtc-ns black-70 tc tr-ns v-mid w-100 w-50-l fr">
          <a
            className="black-70 f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l "
            href="mailto:thrivingcities@mail.com"
          >
            Contact Us
          </a>
        </div>
        <div className="mb4 mb0-ns fl w-100 w-50-l">
          <p className="f4 fw6 mb2 f6 mt0">Sign up for our newsletter.</p>
          <input
            placeholder="Email Address"
            className="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box"
          />
          <input
            type="submit"
            className="input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray"
          />
        </div>
      </section>
      <div className="dt dt--fixed w-100">
        <div className="dn dtc-ns v-mid">
          <p className="f7 black-70 dib pr3 mb3">
            Copyright 2018 © ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="db dtc-ns black-70 tc tr-ns v-mid">
          <a
            href="https://www.facebook.com/"
            className="link dim dib mr3 black-70"
            title="Thriving Cities on Facebook"
          >
            <svg
              className="db w2 h2"
              data-icon="facebook"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <title>facebook icon</title>
              <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z" />
            </svg>
          </a>
          <a href="https://twitter.com/" className="link dim dib mr3 black-70">
            <svg
              className="db w2 h2"
              data-icon="twitter"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <title>twitter icon</title>
              <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4" />
            </svg>
          </a>
        </div>
      </div>
      <div className="db dn-ns">
        <p className="f7 black-70 mt4 tc">
          Copyright 2018 © ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
