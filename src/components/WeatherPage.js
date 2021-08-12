import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import DailyWeather from "./DailyWeather";
import HourlyWeather from "./HourlyWeather";
import ThreeDayPage from "./ThreeDayPage";
import NavbarPage from "./navbar";
import { fetchData, setView, setTempType} from "../store/landingPageStore";
import { Card, Container, Row, Button, Col } from "react-bootstrap";
import "./styles/WeatherPage.css";

const styles = {
  transition: "all 0.2s ease-out",
};
class WeatherPage extends Component {
  constructor() {
    super();
    this.state = {
      opacity: 1,
    };
    this.handleClick = this.handleClick.bind(this);
    this.onHide = this.onHide.bind(this);
    this.handleChangeTemp = this.handleChangeTemp.bind(this);
  }

  componentDidMount() {
    this.props.fetchData(this.props.searchValue);
  }

  onHide() {
    this.setState({
      opacity: 0,
    });
  }

  async handleClick(e) {
    e.preventDefault();
    await this.onHide();
    setTimeout(
      function () {
        this.props.setView(e.target.innerHTML);
      }.bind(this),
      200
    );
    setTimeout(
      function () {
        this.setState({ opacity: 1 });
      }.bind(this),
      300
    );
  }

  handleChangeTemp(){
    this.props.setTempType()
  }

  render() {
    if (this.props.forecast.length === 0) {
      return <div>loading</div>;
    }
    return (
      <div className="mainpage">
        <NavbarPage />
        <div className="buttonBar">
          <button className="weatherButton" onClick={this.handleClick}>
            Daily
          </button>
          <button className="weatherButton" onClick={this.handleClick}>
            Three Day
          </button>
          <button className="weatherButton" onClick={this.handleClick}>
            Hourly
          </button>
          <label className="switch">
            <input className="switch-input" type="checkbox" onChange={this.handleChangeTemp}/>
            <span className="switch-label" data-on="C" data-off="F"></span>
            <span className="switch-handle"></span>
          </label>
        </div>
        <div className="weatherContainer">
          {this.props.view === "Daily" ? (
            <div style={{ ...styles, opacity: this.state.opacity }}>
              <DailyWeather />
            </div>
          ) : this.props.view === "Hourly" ? (
            <div style={{ ...styles, opacity: this.state.opacity }}>
              <HourlyWeather />
            </div>
          ) : (
            <div style={{ ...styles, opacity: this.state.opacity }}>
              <ThreeDayPage />
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    forecast: state.landingPage.forecast,
    view: state.landingPage.view,
    searchValue: state.landingPage.searchValue,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchData: (dVal) => {
      dispatch(fetchData(dVal));
    },
    setView: (view) => {
      dispatch(setView(view));
    },
    setTempType: () => {
      dispatch(setTempType());
    },
  };
};

export default connect(mapState, mapDispatch)(WeatherPage);
