import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DailyWeather from "./DailyWeather";
import NavbarPage from './navbar'
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Dropdown,
} from "react-bootstrap";

class WeatherPage extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="mainpage">
        <NavbarPage/>
        <Container>
          <Row>
            <Col xs={14} md={10}>
              <DailyWeather />
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

export default WeatherPage;
