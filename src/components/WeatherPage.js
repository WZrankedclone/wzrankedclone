import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>GetLucky</Card.Title>
                  <Card.Text>is bad</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>K/d</Card.Title>
                  <Card.Text>99.56</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>K/d</Card.Title>
                  <Card.Text>99.56</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>K/d</Card.Title>
                  <Card.Text>99.56</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>K/d</Card.Title>
                  <Card.Text>99.56</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>K/d</Card.Title>
                  <Card.Text>99.56</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default WeatherPage;
