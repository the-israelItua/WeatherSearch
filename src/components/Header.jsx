import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-dark">
        <a href="/" className="navbar-brand" style={{ color: "white" }}>
          <i className="fa fa-steam"></i>W-Channel
        </a>
      </nav>
    );
  }
}

export default Header;
