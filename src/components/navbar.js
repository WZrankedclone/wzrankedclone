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
import { setSearch, fetchData } from "../store/landingPageStore";
import { connect } from "react-redux";

class NavbarPage extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleChange(e) {
    this.props.setSearch(e.target.value);
  }

  async handleClick(e) {
    e.preventDefault()
    this.props.fetchData(this.props.searchValue);
    
  }

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
                  onChange={this.handleChange}
                />
                <Button variant="outline-success" onClick={this.handleClick}>
                  Search
                </Button>
              </Form>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapState = (state) => ({
  searchValue: state.landingPage.searchValue,
  current: state.landingPage.current,
  location: state.landingPage.location,
  forecast: state.landingPage.forecast,
});

const mapDispatch = (dispatch) => ({
  setSearch: (sVal) => {
    dispatch(setSearch(sVal));
  },
  fetchData: (dVal) => {
    dispatch(fetchData(dVal));
  },
});

export default connect(mapState, mapDispatch)(NavbarPage);
