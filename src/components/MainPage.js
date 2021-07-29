import React, { Component } from "react";
import { Link } from "react-router-dom";
import { setSearch, setToggle, getStats } from "../store/mainPageStore";
import { connect } from "react-redux";
import "../MainPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Button,
  InputGroup,
  FormControl,
  Dropdown,
} from "react-bootstrap";

class MainPage extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.pHandleChange = this.pHandleChange.bind(this);
  }
  componentDidMount() {}

  async handleChange(e) {
    this.props.setSearch(e.target.value);
  }

  async pHandleChange(p) {
    this.props.setToggle(p.target.innerHTML);
  }

  async handleClick(e) {
    e.preventDefault();
    console.log("HandleClick Worked");
    let fData;
    let platform = "battle";
    if (this.props.toggleValue === "PSN") {
      platform = "psn";
    } else if (this.props.toggleValue === "Xbox") {
      platform = "xbl";
    }

    // await fetch(
    //   `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/${this.props.searchValue}/${platform}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "x-rapidapi-key":
    //         "9dafef2defmshb8713a2c67eba8ap12e8cfjsn8f171764478a",
    //       "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
    //     },
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {console.log("Our Fetched Data",data); fData = data; console.log("OUR ACTION CREATOR INVOKED", getStats(data)); return getStats(data) })
    //   // .then((asd) => console.log("stats--->" ,asd, "state---->",this.props.THEstats))
    //   // .then((data) =>console.log(456,data))
    //   .catch((err) => {
    //     console.error(err);
    //   });
    // console.log("Our Data outside", fData)
    // getStats(fData)
    console.log("---->", "end of handle Click");
  }

  render() {
    console.log("state---->", this.props.THEstats);
    return (
      <div className="App">
        <header className="App-header">
          <div className="input">
            <br></br>
            <Card bg="light" className="searchBar">
              <InputGroup className="mb-3">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {this.props.toggleValue === ""
                      ? "BattleNET"
                      : this.props.toggleValue}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={this.pHandleChange}
                    >
                      BattleNET
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      onClick={this.pHandleChange}
                    >
                      PSN
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={this.pHandleChange}
                    >
                      Xbox
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <FormControl
                  placeholder="Enter Username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={this.handleChange}
                />
                <Button
                  variant="outline-secondary"
                  type="button"
                  onClick={this.handleClick}
                  id="submit"
                >
                  <Link to={"/stats"}>Button</Link>
                </Button>
              </InputGroup>
            </Card>
          </div>
        </header>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    searchValue: state.mainPage.searchValue,
    toggleValue: state.mainPage.toggleValue,
    THEstats: state.mainPage.THEstats,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setSearch: (sVal) => {
      dispatch(setSearch(sVal));
    },
    setToggle: (pVal) => {
      dispatch(setToggle(pVal));
    },
    getStats: (statsZ) => {
      dispatch(getStats(statsZ));
    },
  };
};

export default connect(mapState, mapDispatch)(MainPage);
