import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

class SearchPage extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button className="btn btn-info m-3">Back</button>
        </Link>
        <Search handleTextSearch={this.props.handleTextSearch} />
      </div>
    );
  }
}

export default SearchPage;
