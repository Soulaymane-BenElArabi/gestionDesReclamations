import Nav from "./Nav";
import Footer from "./Footer";
import Side from "./Side";
import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Side />
        <Footer />
      </div>
    );
  }
}

export default Landing;
