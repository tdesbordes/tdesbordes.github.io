import React from "react";
import "./Video.css";
import { videoLink } from "../properties.js";

const Video = () => {
  return (
    <div>
      <section id="video" className="tc pa5-ns lobster">
        <h1 className="f3 f2-m f1-l fw2 black-90 mv3  ">
          Live the Memphis experience
        </h1>
      </section>
      <section className="bt b--black-10 cf">
        <div className="aspect-ratio aspect-ratio--8x5">
          <iframe
            title="video"
            className="aspect-ratio--object"
            src={videoLink}
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
};

export default Video;
