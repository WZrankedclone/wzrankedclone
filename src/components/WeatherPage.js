import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import DailyWeather from "./DailyWeather";
import HourlyWeather from "./HourlyWeather";

import NavbarPage from './navbar'
import { fetchData } from "../store/landingPageStore";
import {
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";

class WeatherPage extends Component {
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.fetchData(this.props.searchValue);
  }

  render() {
    if (this.props.forecast.length === 0) {
      return <div>loading</div>;
    }
    return (
      <div className="mainpage">
        <NavbarPage/>
        <Container>
          <Row>
            <Col xs={14} md={10}>
              {/* <DailyWeather /> */}
              <HourlyWeather/>
            </Col>
            <Col xs={4} md={2}>
              <Card>
                <Card.Body>This is the toggle</Card.Body>
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
    searchValue: state.landingPage.searchValue,
    forecast: state.landingPage.forecast,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchData: (dVal) => {
      dispatch(fetchData(dVal));
    },
  };
};

export default connect(mapState, mapDispatch)(WeatherPage);

