import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import DailyWeather from "./DailyWeather";
import HourlyWeather from "./HourlyWeather";
import ThreeDayPage from "./ThreeDayPage";
import NavbarPage from "./navbar";
import { fetchData, setView } from "../store/landingPageStore";
import { Card, Container, Row, Button, Col } from "react-bootstrap";

const styles = {
  transition: "all 0.2s ease-out"
}
class WeatherPage extends Component {
  constructor() {
    super();
    this.state = {
      opacity: 1,

  };
    this.handleClick = this.handleClick.bind(this);
    this.onHide = this.onHide.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchData(this.props.searchValue);
  }

  onHide() {
    this.setState({
      opacity: 0
    });
  }

  async handleClick(e) {
    e.preventDefault();
    await this.onHide()
    setTimeout(
      function() {
          this.props.setView(e.target.innerHTML);;
      }
      .bind(this),
      200
  );
    setTimeout(
      function() {
          this.setState({ opacity: 1 });
      }
      .bind(this),
      300
  );
  }

  render() {
    console.log(1111, this.state)
    if (this.props.forecast.length === 0) {
      return <div>loading</div>;
    }
    return (
      <div className="mainpage">
        <NavbarPage />
        <Container>
          <Row>
            <Col xs={14} md={10}>
              <div>
              {this.props.view === "Daily" ? (
                <div style={{...styles, opacity: this.state.opacity}}>
                  <DailyWeather/>
                </div>
              ) : this.props.view === "Hourly" ? (
                <div style={{...styles, opacity: this.state.opacity}}>
                  <HourlyWeather/>
                  </div>
              ) : (
                <div style={{...styles, opacity: this.state.opacity}}>
                  <ThreeDayPage/>
                  </div>
              )}

              </div>
            </Col>
            <Col xs={4} md={2}>
              <Card>
                <Button className="Daily" onClick={this.handleClick}>
                  Daily
                </Button>
                <Button className="ThreeDay" onClick={this.handleClick}>
                  Three Day
                </Button>
                <Button className="Hourly" onClick={this.handleClick}>
                  Hourly
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    forecast: state.landingPage.forecast,
    view: state.landingPage.view,
    searchValue: state.landingPage.searchValue,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchData: (dVal) => {
      dispatch(fetchData(dVal));
    },
    setView: (view) => {
      dispatch(setView(view));
    },
  };
};

export default connect(mapState, mapDispatch)(WeatherPage);
