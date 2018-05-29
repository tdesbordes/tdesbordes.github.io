import React, { Component } from "react";
import "./App.css";
import "tachyons";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Video from "./components/Video";
import Footer from "./components/Footer";
import EventList from "./components/EventList";
import { events } from "./properties.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <EventList events={events} />
        <Video />
        <Footer />
      </div>
    );
  }
}

export default App;
