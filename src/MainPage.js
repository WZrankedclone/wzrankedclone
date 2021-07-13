import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { value: "" };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {}

  async handleChange(e) {
    this.setState({ value: e.target.value });
  }

  async handleClick(e) {
    e.preventDefault();
    console.log("this is state", this.state.value);
    fetch(
      `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=${this.state.value}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "9dafef2defmshb8713a2c67eba8ap12e8cfjsn8f171764478a",
          "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data.data.covid19Stats))
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
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

export default App;
