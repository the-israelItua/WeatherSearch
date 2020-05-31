import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WeatherList from "./components/weatherList";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage";

class App extends Component {
  state = { data: null };

  componentDidMount() {
    this.handleTextSearch();
  }
  handleTextSearch = async () => {
    const KEY = "1b267c7a69401a95599f62c53172ecf0";
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/group?id=2332459,2643743,2988507,1168579,2352778,2306104,1816670,1835848&units=metric&appid=${KEY}`
    );
    this.setState({ data: response.data.list });
  };

  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <WeatherList {...props} data={this.state.data} />
              )}
            />

            <Route path="/search" component={SearchPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
