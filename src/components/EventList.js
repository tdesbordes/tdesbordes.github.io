import React from "react";
import Event from "./Event";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

const EventList = ({ events }) => {
  return (
    <article id="events">
      <div className="pa5-ns">
        <Fade top>
          <p className="f4 lh-copy measure-wide center lobster">
            The Seat of Shelby County has a packed programme for you this year!
            Top exhibitions, major sporting events, not-to-be-missed festivals,
            big gastronomic events, new entertainment for families … In 2018,
            one exciting moment rolls into another in Memphis. Whatever the
            season, the city is a fantastic place to be: come and see!
          </p>
        </Fade>
      </div>
      <section className="tc pa2-ns lobster">
        <h1 className="f3 f2-m f1-l fw2 black-90 mv3  ">Upcoming Events !</h1>
      </section>
      <Pulse>
        <div className="cf pa2 ml5-ns mr5-ns">
          <div>
            {events.map((event, i) => {
              return (
                <Event
                  key={i}
                  id={events[i].id}
                  img={events[i].img}
                  month={events[i].month}
                  day={events[i].day}
                  eventUrl={events[i].eventUrl}
                  category={events[i].category}
                  title={events[i].title}
                  place={events[i].place}
                  description={events[i].description}
                />
              );
            })}
          </div>
        </div>
      </Pulse>
    </article>
  );
};

export default EventList;
