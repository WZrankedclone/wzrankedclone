import React, { Component } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class NavbarPage extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">TBD</Navbar.Brand>
            <Nav className="me-auto">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">button</Button>
              </Form>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarPage;
