import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { LandingPage, WeatherPage, About } from "./components";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/weather" component={WeatherPage} />
        <Route exact path="/about" component={About} />
      </Switch>
    );
  }
}

export default Routes;
