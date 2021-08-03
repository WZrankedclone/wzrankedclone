import React, { Component } from "react";
import { connect } from "react-redux";

class HourlyWeather extends Component {
  constructor(){
    super();
  }


render() {
	if (this.props.forecast.length === 0) {
		return <div>loading</div>;
	}
	return(
		<div>HelloWorld</div>
	)
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