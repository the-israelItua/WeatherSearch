import React, { Component } from "react";
import { Link } from "react-router-dom";
import WeatherCard from "./WeatherCard";
import Spinner from "./Spinner";

class WeatherList extends Component {
  render() {
    const weatherComp =
      this.props.data === null ? (
        <Spinner />
      ) : (
        this.props.data.map((item) => (
          <WeatherCard
            key={item.id}
            city={item.name}
            country={item.sys.country}
            condition={item.weather[0].main}
            humidity={item.main.humidity}
            temp={item.main.temp}
            message={item.weather[0].description}
          />
        ))
      );

    return (
      <div className="container-fluid">
        <div className="row">
          <Link to="/search">
            <button className="btn btn-info m-3">Find City</button>
          </Link>
        </div>
        <div className="row">{weatherComp}</div>
      </div>
    );
  }
}

export default WeatherList;
