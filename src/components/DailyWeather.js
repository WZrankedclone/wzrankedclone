import React, { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import {fetchData } from "../store/landingPageStore";

class DailyWeather extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  async componentDidMount() {
     await this.props.fetchData(this.props.searchValue)
  }

  render() {
    console.log("1 this is state WE HAVE IT HERE", this.props.current);
    if(this.props.current.length === 0) {
      return <div>loading</div>
    }
    return (
      <div>
        <Container>
          <Row className="dailyCityWeather">
            <Col>
              <Card>
                <Row>
                  <Col xs={14} md={10}>
                    <Card.Body>city name</Card.Body>
                    <Card.Body>temperature</Card.Body>
                    <Card.Body>description</Card.Body>
                  </Col>
                  <Col xs={4} md={2}>
                    <Card.Body>picture</Card.Body>
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
                    <Card.Text>40.4pm</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="text-center">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Sunset</Card.Title>
                    <Card.Text>45pm</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="text-center">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Moonrise</Card.Title>
                    <Card.Text>12pm</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="text-center">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Moonset</Card.Title>
                    <Card.Text>12pm</Card.Text>
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

const mapDispatch = (dispatch) => {
  return {
    fetchData: (dVal) => {
      dispatch(fetchData(dVal));
    },
  };
};

export default connect(mapState, mapDispatch)(DailyWeather);
