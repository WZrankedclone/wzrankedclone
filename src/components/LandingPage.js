import React, { Component } from "react";
import { Link } from "react-router-dom";
import { setSearch } from "../store/landingPageStore";
import { connect } from "react-redux";
import "./styles/LandingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

class LandingPage extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(e) {
    this.props.setSearch(e.target.value);
  }

  render() {
    return (
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
    );
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
