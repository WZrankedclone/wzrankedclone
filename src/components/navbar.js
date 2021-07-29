import React, { Component } from "react";
import { Container, Navbar, Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


class NavbarPage extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">dubStats</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
              <Nav.Link href="/loadout">Loadout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarPage;
