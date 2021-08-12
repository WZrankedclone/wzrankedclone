import React, { Component } from "react";
import { Link } from "react-router-dom";
import { setSearch } from "../store/landingPageStore";
import { connect } from "react-redux";
import "./styles/LandingPage.css";
import "./styles/WelcomePage.css";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const styles = {
  transition: "all 1.0s ease-out",
};

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      landingToggle: "W",
      opacity: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(e) {
    this.props.setSearch(e.target.value);
  }

  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ opacity: 0 });
      }.bind(this),
      5000
    );
    setTimeout(
      function () {
        this.setState({ landingToggle: "L" });
      }.bind(this),
      6000
    );
  }

  render() {
    if (this.state.landingToggle === "L") {
      return (
        <Fade>
          <div className="App">
            <header className="App-header">
              <div className="input">
                <div className="backgroundBackLanding">
                  <div className="backgroundFrontLanding">
                    <div className="LandingSearchContainer">
                      <form>
                        <input
                          className="LandingSearchBar"
                          type="text"
                          placeholder="Search City"
                          onChange={this.handleChange}
                        />
                        <Link to={"/weather"}>
                          <button className="LandingButton">Search</button>
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </Fade>
      );
    } else {
      return (
        <div
          id="welcomeContainer"
          style={{ ...styles, opacity: this.state.opacity }}
        >
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
}

const mapState = (state) => {
  return {
    searchValue: state.landingPage.searchValue,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setSearch: (sVal) => {
      dispatch(setSearch(sVal));
    },
  };
};

export default connect(mapState, mapDispatch)(LandingPage);
