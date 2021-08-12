import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Image } from "react-bootstrap";
import "./styles/LandingPage.css";

class ThreeDayPage extends Component {
  constructor() {
    super();
    this.tempType = this.tempType.bind(this)
  }

  tempType(type, prop){
    if(type === "f"){
      return prop.maxtemp_f
    } else {
      return prop.maxtemp_c
    }
  }

  render() {
    if (this.props.forecast.length === 0) {
      return <div>loading</div>;
    }
    
    return (
      <div>
        <Row>
          {this.props.forecast.map((day) => {
            return (
              <Col key={day.date}>
                <Card>
                  <Row>
                    <Col>
                      <Card.Body>{day.date}</Card.Body>
                      <Card.Body>{this.tempType(this.props.tempType, day.day)}</Card.Body>
                    </Col>
                    <Col>
                      <Image src={day.day.condition.icon} roundedCircle />
                    </Col>
                    <Col>
                      <Card.Body>{day.day.daily_chance_of_rain}%</Card.Body>
                      <Card.Body>{day.day.maxwind_mph} mph</Card.Body>
                    </Col>
                  </Row>
                  <Card>
                    <Row>
                      <Col>
                        <Card.Body>Humidity</Card.Body>
                        <Card.Body>{day.day.avghumidity}</Card.Body>
                      </Col>
                      <Col>
                        <Card.Body>UV</Card.Body>
                        <Card.Body>{day.day.uv} of 10</Card.Body>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card.Body>Sunrise</Card.Body>
                        <Card.Body>{day.astro.sunrise}</Card.Body>
                      </Col>
                      <Col>
                        <Card.Body>Sunset</Card.Body>
                        <Card.Body>{day.astro.sunset}</Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    searchValue: state.landingPage.searchValue,
    current: state.landingPage.current,
    location: state.landingPage.location,
    forecast: state.landingPage.forecast,
    tempType: state.landingPage.tempType,
  };
};
export default connect(mapState, null)(ThreeDayPage);
