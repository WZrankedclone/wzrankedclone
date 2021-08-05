import React, { Component } from "react";
import { Link } from "react-router-dom";
import { setSearch } from "../store/landingPageStore";
import { connect } from "react-redux";
import "../LandingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Button,
  InputGroup,
  Form,
  FormControl,
  Dropdown,
} from "react-bootstrap";

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
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                    onChange={this.handleChange}
                  />
                  <Button variant="outline-success">
                    <Link to={"/weather"}>Search</Link>
                  </Button>
                </Form>
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
