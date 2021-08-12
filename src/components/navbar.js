import React, { Component } from "react";
import { setSearch, fetchData } from "../store/landingPageStore";
import { connect } from "react-redux";
import "./styles/Navbar.css";

class NavbarPage extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleChange(e) {
    this.props.setSearch(e.target.value);
  }

  clearForm() {
    document.getElementById("navbarSearch").value = "";
  }

  async handleClick(e) {
    e.preventDefault();
    this.props.fetchData(this.props.searchValue);
    this.clearForm();
  }

  render() {
    return (
      <div id="navbar">
        <a id="navbarLogo" href="/">
          TBD-Logo
        </a>
        <form id="navbarForm">
          <input
            id="navbarSearch"
            type="text"
            placeholder="Search City"
            autocomplete="off"
            onChange={this.handleChange}
          />
          <button id="navbarButton" type="submit" onClick={this.handleClick}>
            <img
              id="navbarIcon"
              src="/images/icons8-search-60.png"
              alt="search icon"
            />
          </button>
        </form>
        <a id="navbarAbout" href="/about">
          About Us
        </a>
      </div>
    );
  }
}

const mapState = (state) => ({
  searchValue: state.landingPage.searchValue,
  current: state.landingPage.current,
  location: state.landingPage.location,
  forecast: state.landingPage.forecast,
});

const mapDispatch = (dispatch) => ({
  setSearch: (sVal) => {
    dispatch(setSearch(sVal));
  },
  fetchData: (dVal) => {
    dispatch(fetchData(dVal));
  },
});

export default connect(mapState, mapDispatch)(NavbarPage);
