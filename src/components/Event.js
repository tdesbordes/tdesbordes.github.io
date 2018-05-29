import React from "react";

const Event = ({
  id,
  img,
  month,
  day,
  eventUrl,
  category,
  title,
  place,
  description
}) => {
  return (
    <div className="fl w-100 w-third-ns pa2">
      <a href={eventUrl} className="db link grow shadow-hover tc br2">
        <div className="dt dt--fixed">
          <div className="dtc tc pb2">
            <img src={img} alt={id} className="w-100 db outline black-10 br2" />
          </div>
        </div>
        <div className="dt dt--fixed sans-serif">
          <div className="dtc tc w-20 pr2">
            <p className="tc ml0 red">
              {month}
              <br />
              {day}
            </p>
          </div>
          <div className="dtc tc black w-80">
            <p className="tl ml0 black f5-ns">{category}</p>
            <p className="tl ml0 gray f6-ns">
              {title}
              <br />
              {place}
              <br />
              <br /> {description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Event;
