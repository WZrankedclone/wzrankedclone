import React, { Component } from "react";
import { Carousel, Card, Image, CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import "../LandingPage.css";

class HourlyWeather extends Component {
  constructor() {
    super();
    this.mapHourly = this.mapHourly.bind(this)
    this.get24Hours = this.get24Hours.bind(this)
  }

  get24Hours(arr) {
    var today = new Date();
    var myTime = today.getHours();
    let carItem = 0;
    let result = [];
    for (let i = myTime; i < 24; i++) {
      if (carItem === 0) {
        carItem++;
        result.push([arr[0].hour[i]]);
      } else if (carItem === 3) {
        carItem = 0;
        result[result.length - 1].push(arr[0].hour[i]);
      } else {
        carItem++;
        result[result.length - 1].push(arr[0].hour[i]);
      }
    }
    for (let i = 0; i < myTime; i++) {
      if (carItem === 0) {
        carItem++;
        result.push([arr[1].hour[i]]);
      } else if (carItem === 3) {
        carItem = 0;
        result[result.length - 1].push(arr[1].hour[i]);
      } else {
        carItem++;
        result[result.length - 1].push(arr[1].hour[i]);
      }
    }
    return result;
  }

  mapHourly(arr) {
    return (
      <Card bg={"dark"}>
        <Carousel prevLabel="" nextLabel="" variant="dark">
          {this.get24Hours(arr).map((el) => {
            return (
              <Carousel.Item>
                <CardGroup className="testings">
                  {el.map((hours) => {
                    return (
                      <Card className="text-center" key={hours.time}>
                        <Card.Body>{hours.time}</Card.Body>
                        <Card.Body>{hours.temp_f}</Card.Body>
                        <Card.Body> <Image src={hours.condition.icon} roundedCircle /> {hours.condition.text}</Card.Body>
                        <Card.Body>{hours.chance_of_rain}%</Card.Body>
                      </Card>
                    );
                  })}
                </CardGroup>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Card>
    );
  }

  render() {
    if (this.props.forecast.length === 0) {
      return <div>loading</div>;
    }
    return (
      <div>
        {this.mapHourly(this.props.forecast)}
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
  };
};

export default connect(mapState, null)(HourlyWeather);