import React, { Component } from "react";
import Slide from "react-reveal/Slide";
import "./styles/WelcomePage.css";

class WelcomePage extends Component {
  render() {
    return (
      <div id="welcomeContainer">
        <Slide left cascade>
          <h1>WELCOME</h1>
          <h1>TO</h1>
          <h1>OUR</h1>
          <h1>WEATHER</h1>
          <h1>APP</h1>
        </Slide>
      </div>
    );
  }
}

export default WelcomePage;
