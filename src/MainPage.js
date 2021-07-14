import React, { Component } from "react";
import { setSearch } from "./mainPageStore";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {}

  async handleChange(e) {
    this.props.setSearch(e.target.value);
  }

  async handleClick(e) {
    e.preventDefault();
    console.log("this is state", this.props.searchValue);
    fetch(
      `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${this.props.searchValue}/battle`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "9dafef2defmshb8713a2c67eba8ap12e8cfjsn8f171764478a",
          "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    console.log("this.props", this.props);
    return (
      <div className="App">
        <header className="App-header">
          <div>DubStats</div>
          <div className="input">
            <input
              type="text"
              className="inputValue"
              placeholder="Enter username"
              onChange={this.handleChange}
            />
            <button type="button" onClick={this.handleClick} id="submit">
              button
            </button>
          </div>
        </header>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    searchValue: state.mainPage.searchValue,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setSearch: (sVal) => {
      dispatch(setSearch(sVal));
    },
  };
};

export default connect(mapState, mapDispatch)(App);
