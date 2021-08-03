import React, { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { setData, fetchData } from "../store/landingPageStore";

class DailyWeather extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${this.props.searchValue}&days=5`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "264df7a5b5mshcc5521dd5824c80p12f388jsn3db4bd2719d6",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((value) => {
        this.setState({
          data: value,
        });
      })
      .catch((err) => {
        console.error(err);
      });

  }

  render() {
    console.log("this is state WE HAVE IT HERE", this.state.data);
    if(this.props.data === []) {
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
    weatherValue: state.landingPage.weatherValue,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setData: (wVal) => {
      dispatch(setData(wVal));
    },
    // fetchData: (dVal) => {
    //   dispatch(fetchData(dVal));
    // },
  };
};

export default connect(mapState, mapDispatch)(DailyWeather);
