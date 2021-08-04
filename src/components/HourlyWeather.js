import React, { Component } from "react";
import { Carousel, Card, Row, Col, Image, CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import "../LandingPage.css";

class HourlyWeather extends Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.forecast.length === 0) {
      return <div>loading</div>;
    }
    return (
      <div>
        {mapHourly(this.props.forecast)}
        {/* <Card bg={"dark"}>
          <Carousel prevLabel="" nextLabel="" variant="dark">
            {get24Hours(this.props.forecast).forEach((el) => {
              return (
                <Carousel.Item >
                  <CardGroup className="testings">
                    {el.map((hours) => {
                      return (
                        <Card className="text-center" key={hours.time}>
                          <Card.Body>{console.log(hours.time)}</Card.Body>
                          <Card.Body>{console.log(hours.temp_f)}</Card.Body>
                          <Card.Body>
                            {console.log(hours.condition.text)}
                          </Card.Body>
                          <Card.Body>
                            {console.log(hours.chance_of_rain)}%
                          </Card.Body>
                        </Card>
                      );
                    })}
                  </CardGroup>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Card> */}

        {/* <Card bg={"dark"}>
          <Carousel prevLabel="" nextLabel="" variant="dark">
            <Carousel.Item>
              <CardGroup className="testings">
                <Card className="text-center">
                  <Card.Body>1</Card.Body>
                  <Card.Body>2</Card.Body>
                  <Card.Body>3</Card.Body>
                  <Card.Body>4</Card.Body>
                </Card>
                <Card className="text-center">
                  <Card.Body>1</Card.Body>
                  <Card.Body>2</Card.Body>
                  <Card.Body>3</Card.Body>
                  <Card.Body>4</Card.Body>
                </Card>
                <Card className="text-center">
                  <Card.Body>1</Card.Body>
                  <Card.Body>2</Card.Body>
                  <Card.Body>3</Card.Body>
                  <Card.Body>4</Card.Body>
                </Card>
              </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
              <CardGroup className="testings">
                <Card className="text-center">
                  <Card.Body>11</Card.Body>
                  <Card.Body>22</Card.Body>
                  <Card.Body>33</Card.Body>
                  <Card.Body>44</Card.Body>
                </Card>
                <Card className="text-center">
                  <Card.Body>11</Card.Body>
                  <Card.Body>22</Card.Body>
                  <Card.Body>33</Card.Body>
                  <Card.Body>44</Card.Body>
                </Card>
                <Card className="text-center">
                  <Card.Body>11</Card.Body>
                  <Card.Body>22</Card.Body>
                  <Card.Body>33</Card.Body>
                  <Card.Body>44</Card.Body>
                </Card>
              </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
              <CardGroup className="testings">
                <Card className="text-center">
                  <Card.Body>111</Card.Body>
                  <Card.Body>222</Card.Body>
                  <Card.Body>333</Card.Body>
                  <Card.Body>444</Card.Body>
                </Card>
                <Card className="text-center">
                  <Card.Body>111</Card.Body>
                  <Card.Body>222</Card.Body>
                  <Card.Body>333</Card.Body>
                  <Card.Body>444</Card.Body>
                </Card>
                <Card className="text-center">
                  <Card.Body>111</Card.Body>
                  <Card.Body>222</Card.Body>
                  <Card.Body>333</Card.Body>
                  <Card.Body>444</Card.Body>
                </Card>
              </CardGroup>
            </Carousel.Item>
          </Carousel>
        </Card> */}
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

// function getHourlyWeather(arr, time){
//   let counter = 0;
//   let carItem = 4;
//   for(let i = 0; i < 3; i++){
//     arr[i].hour.map(hours =>{
//       if(carItem === 4){
//         return(
//           <div></div>
//         )

//     }
//    })
//   }
// }

function get24Hours(arr) {
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

function mapHourly(prop){ //mapHourly(this.props.forecast)
  return(
    <Card bg={"dark"}>
          <Carousel prevLabel="" nextLabel="" variant="dark">
            {get24Hours(prop).forEach((el) => {
              return (
                <Carousel.Item >
                  <CardGroup className="testings">
                    {el.map((hours) => {
                      return (
                        <Card className="text-center" key={hours.time}>
                          <Card.Body>{console.log(hours.time)}</Card.Body>
                          <Card.Body>{console.log(hours.temp_f)}</Card.Body>
                          <Card.Body>
                            {console.log(hours.condition.text)}
                          </Card.Body>
                          <Card.Body>
                            {console.log(hours.chance_of_rain)}%
                          </Card.Body>
                        </Card>
                      );
                    })}
                  </CardGroup>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Card>
  )
}

// GOAL [ [{1}{2}{3}{4}] ... [{20}{21}{22}{23}] ]
