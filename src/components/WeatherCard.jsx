import React, { Component } from "react";

class WeatherCard extends Component {
  imgSource = (condition) => {
    if (condition === "Cloud") {
      return "/Status-weather-clouds-icon.png";
    } else if (condition === "Clear") {
      return "/Status-weather-clear-icon.png";
    } else if (condition === "Rain") {
      return "/Status-weather-showers-day-icon.png";
    } else {
      return "/Weather-icon.png";
    }
  };

  render() {
    const { city, country, message, condition, humidity, temp } = this.props;
    return (
      <div className="col-md-3 my-3">
        <div className="card">
          <img
            src={process.env.PUBLIC_URL + this.imgSource(condition)}
            alt="Loading"
            className="card-img-top"
            width="30"
            height="120"
          />
          <div className="card-body">
            <h3 className="card-title text-muted">
              {city}, {country}
            </h3>

            <h5 className="card-text text-muted">{message}</h5>
            <p className="card-text text-muted">Humidity: {humidity}</p>
            <p className="card-text text-muted">Temperature: {temp}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
