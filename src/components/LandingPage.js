import React, { Component } from "react";
import { Link } from "react-router-dom";
import { setSearch } from "../store/landingPageStore";
import { connect } from "react-redux";
import "./styles/LandingPage.css";
import "./styles/WelcomePage.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const styles = {
  transition: "all 1.0s ease-out",
};

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      landingToggle: "start",
      opacity: 1,
      welcome: "Welcome To Our Weather App",
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
      3500
    );
    setTimeout(
      function () {
        this.setState({ landingToggle: "end" });
      }.bind(this),
      4500
    );
  }

  render() {
    if (this.state.landingToggle === "end") {
      return (
        <Fade>
          <div id="cover">
            <form id="landingForm">
              <div className="landingInputContainer">
                <input
                  className="landingInput"
                  type="text"
                  placeholder="Search City"
                  onChange={this.handleChange}
                />
                <Link to={"/weather"}>
                  <div className="td" id="landingCover">
                    <button className="landingButton" type="submit">
                      <div id="landingCircle"></div>
                      <span></span>
                    </button>
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </Fade>
      );
    } else {
      return (
        <div
          id="welcomeContainer"
          style={{ ...styles, opacity: this.state.opacity }}
        >
          <div id="welcomeText">
            <Zoom right cascade>
              {this.state.welcome}
            </Zoom>
          </div>
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
