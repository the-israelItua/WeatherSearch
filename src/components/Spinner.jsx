import React, { Component } from "react";

class Spinner extends Component {
  render() {
    return (
      <div className="spinner-border spin" role="status">
        <span className="sr-only">Loading</span>
      </div>
    );
  }
}

export default Spinner;
