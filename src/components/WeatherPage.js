import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import DailyWeather from "./DailyWeather";
import HourlyWeather from "./HourlyWeather";
import ThreeDayPage from "./ThreeDayPage";
import NavbarPage from "./navbar";
import { fetchData, setView } from "../store/landingPageStore";
import { Card, Container, Row, Button, Col } from "react-bootstrap";

class WeatherPage extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(e) {
    e.preventDefault();
    this.props.setView(e.target.innerHTML);
  }

  componentDidMount() {
    this.props.fetchData(this.props.searchValue);
  }

  render() {
    if (this.props.forecast.length === 0) {
      return <div>loading</div>;
    }
    return (
      <div className="mainpage">
        <NavbarPage />
        <Container>
          <Row>
            <Col xs={14} md={10}>
              {this.props.view === "Daily" ? (
                <DailyWeather />
              ) : this.props.view === "Hourly" ? (
                <HourlyWeather />
              ) : (
                <ThreeDayPage />
              )}
            </Col>
            <Col xs={4} md={2}>
              <Card>
                <Button className="Daily" onClick={this.handleClick}>
                  Daily
                </Button>
                <Button className="ThreeDay" onClick={this.handleClick}>
                  Three Day
                </Button>
                <Button className="Hourly" onClick={this.handleClick}>
                  Hourly
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
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
  };
};

export default connect(mapState, mapDispatch)(WeatherPage);
