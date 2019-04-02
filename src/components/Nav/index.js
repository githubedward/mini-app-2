import React, { Component } from "react";
// import PropTypes from "prop-types";
// components/styles
import NavBar from "./NavBar/NavBar";
import NavDisplay from "./NavDisplay/NavDisplay";
import "./index.css";

export default class index extends Component {
  render() {
    return (
      <section>
        <NavBar />
        <NavDisplay />
      </section>
    );
  }
}

index.propTypes = {};
