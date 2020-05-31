import React, { Component } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

class Search extends Component {
  state = { text: "", data: null };

  onSearchBtnClick = async (text) => {
    const KEY = "1b267c7a69401a95599f62c53172ecf0";
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${KEY}`
    );
    this.setState({ data: response.data });
  };

  render() {
    const disp =
      this.state.data === null ? (
        <p className="text-muted">
          Enter a city in the serch bar and click the search icon.
        </p>
      ) : (
        <WeatherCard
          key={this.state.data.id}
          city={this.state.data.name}
          country={this.state.data.sys.country}
          condition={this.state.data.weather[0].main}
          humidity={this.state.data.main.humidity}
          temp={this.state.data.main.temp}
          message={this.state.data.weather[0].description}
        />
      );

    return (
      <div>
        <div className="container-fluid my-3">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={this.state.text}
                  aria-label="Username"
                  aria-describedby="basic"
                  onChange={(evt) => this.setState({ text: evt.target.value })}
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text bg-info"
                    id="basic"
                    onClick={() => this.onSearchBtnClick(this.state.text)}
                    style={{ color: "white" }}
                  >
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
        <div className="disp">{disp}</div>
      </div>
    );
  }
}

export default Search;
