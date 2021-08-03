import React, { Component } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { connect } from "react-redux";

class DailyWeather extends Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.forecast.length === 0) {
      return <div>loading</div>;
    }
    return (
      <div>
        <Container>
          <Row className="dailyCityWeather">
            <Col>
              <Card>
                <Row>
                  <Col xs={14} md={10}>
                    <Card.Body>{this.props.location.name}</Card.Body>
                    <Card.Body>{this.props.current.temp_f}°</Card.Body>
                    <Card.Body>{this.props.current.condition.text}</Card.Body>
                  </Col>
                  <Col xs={4} md={2}>
                    <Image src={this.props.current.condition.icon} roundedCircle /> 
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <br></br>
          <Card>
            <br></br>
            <Row className="dailyCityInfo">
              <Col>
                <Card className="text-center">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Sunrise</Card.Title>
                    <Card.Text>{this.props.forecast[0].astro.sunrise}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="text-center">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Sunset</Card.Title>
                    <Card.Text>{this.props.forecast[0].astro.sunset}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="text-center">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Moonrise</Card.Title>
                    <Card.Text>{this.props.forecast[0].astro.moonrise}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="text-center">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Moonset</Card.Title>
                    <Card.Text>{this.props.forecast[0].astro.moonset}</Card.Text>
                  </Card.Body>
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
  };
};

export default connect(mapState, null)(DailyWeather);
