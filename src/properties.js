/* Edit this file to add an event and its corresponding image*/

/* import images corresponding to each event*/
import art from "./img/art.jpg";
import concert from "./img/concert.jpg";
import crowd from "./img/crowd.jpg";
import dinner from "./img/dinner.jpg";
import sport from "./img/sport.jpg";

/* edit the link of the video */

export const videoLink = "https://www.youtube.com/embed/KrbPlr4Wskc";

/* add new events to the list*/
export const events = [
  {
    id: 1,
    img: art,
    month: "May",
    day: "25",
    eventUrl: "http://thrivingcities.com/",
    category: "ARTS",
    title: "Art Expo",
    place: "GALLERY, Memphis, TN",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut vitae commodi qui ea fugiat temporibus est eum ipsam doloribus odit asperiores sit dolor."
  },
  {
    id: 2,
    img: concert,
    month: "May",
    day: "21",
    eventUrl: "http://thrivingcities.com/",
    category: "CONCERT",
    title: "Elvis",
    place: "Stadium, Memphis, TN",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut vitae commodi qui ea fugiat temporibus est eum ipsam doloribus odit asperiores sit dolor."
  },
  {
    id: 3,
    img: crowd,
    month: "May",
    day: "13",
    eventUrl: "http://thrivingcities.com/",
    category: "CROWD",
    title: "Fireworks",
    place: "City Hall, Memphis, TN",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut vitae commodi qui ea fugiat temporibus est eum ipsam doloribus odit asperiores sit dolor."
  },
  {
    id: 4,
    img: dinner,
    month: "April",
    day: "31",
    eventUrl: "http://thrivingcities.com/",
    category: "DINNER",
    title: "Cocktail",
    place: "Hilton Memphis, Memphis, TN",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut vitae commodi qui ea fugiat temporibus est eum ipsam doloribus odit asperiores sit dolor."
  },
  {
    id: 5,
    img: sport,
    month: "April",
    day: "12",
    eventUrl: "http://thrivingcities.com/",
    category: "SPORT",
    title: "Sunday Marathon",
    place: "Crowne Plaza Memphis Downtown, Memphis, TN",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut vitae commodi qui ea fugiat temporibus est eum ipsam doloribus odit asperiores sit dolor."
  },
  {
    id: 6,
    img: dinner,
    month: "March",
    day: "03",
    eventUrl: "http://thrivingcities.com/",
    category: "BAR",
    title: "Irish Pub",
    place: "903 Cooper Street, Memphis, TN",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut vitae commodi qui ea fugiat temporibus est eum ipsam doloribus odit asperiores sit dolor."
  }
];
