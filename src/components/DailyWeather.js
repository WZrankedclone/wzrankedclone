import React, { Component } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { connect } from "react-redux";
import "./styles/DailyWeather.css";

class DailyWeather extends Component {
  constructor() {
    super();
    this.removeZero = this.removeZero.bind(this);
    this.tempType = this.tempType.bind(this);
  }

  removeZero(time) {
    if (time[0] === "0") {
      return time.slice(1);
    }
    return time;
  }

  tempType(type){
    if(type === "f"){
      return this.props.current.temp_f
    } else {
      return this.props.current.temp_c
    }
  }

  render() {
    if (this.props.forecast.length === 0) {
      return <div>loading</div>;
    }
    return (
      <div>
        <Container>
          <Card id="dailyCityWeather" className="containerShadow">
            <Row>
              <Col >
                <Card.Body id="dailyLocationName">
                  {this.props.location.name}
                </Card.Body>
                <Card.Body id="dailyTemp">
                  {this.tempType(this.props.tempType)}°
                </Card.Body>
                <Card.Body id="dailyCondition">
                  {this.props.current.condition.text}
                </Card.Body>
                <Card.Body id="dailyRain">
                  Chance of rain{" "}
                  {this.props.forecast[0].day.daily_chance_of_rain}%
                </Card.Body>
              </Col>
              <Col  id="dailyImageContainer">
                <Image id="dailyImageIcon" src={this.props.current.condition.icon} roundedCircle />
              </Col>
            </Row>
          </Card>
          <br></br>
          <Card id="astroContainer" className="containerShadow">
            <br></br>
            <Row className="dailyCityInfo">
              <Col>
                <Card id="dailySunriseContainer" className="containerShadow">
                  <Card.Img
                    id="dailySunriseImage"
                    src="/images/icons8-sunrise-96.png"
                  />
                  <Card.Title id="dailySunriseTitle">Sunrise</Card.Title>
                  <Card.Text id="dailySunriseTime">
                    {this.removeZero(this.props.forecast[0].astro.sunrise)}
                  </Card.Text>
                </Card>
              </Col>
              <Col>
                <Card id="dailySunsetContainer" className="containerShadow">
                  <Card.Img
                    id="dailySunsetImage"
                    src="/images/icons8-sunset-96.png"
                  />
                  <Card.Title id="dailySunsetTitle">Sunset</Card.Title>
                  <Card.Text id="dailySunsetTime">
                    {this.removeZero(this.props.forecast[0].astro.sunset)}
                  </Card.Text>
                </Card>
              </Col>
              <Col>
                <Card id="dailyMoonriseContainer" className="containerShadow">
                  <Card.Img
                    id="dailyMoonriseImage"
                    src="/images/icons8-moonrise-96.png"
                  />

                  <Card.Title id="dailyMoonriseTitle">Moonrise</Card.Title>
                  <Card.Text id="dailyMoonriseTime">
                    {this.removeZero(this.props.forecast[0].astro.moonrise)}
                  </Card.Text>
                </Card>
              </Col>
              <Col>
                <Card id="dailyMoonsetContainer" className="containerShadow">
                  <Card.Img
                    id="dailyMoonsetImage"
                    src="/images/icons8-moonset-96.png"
                  />

                  <Card.Title id="dailyMoonsetTitle">Moonset</Card.Title>
                  <Card.Text id="dailyMoonsetTime">
                    {this.removeZero(this.props.forecast[0].astro.moonset)}
                  </Card.Text>
                </Card>
              </Col>
            </Row>
            <br></br>
          </Card>
        </Container>
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

export default connect(mapState, null)(DailyWeather);
