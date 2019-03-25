import React, { Component } from "react";
import RegAuth from "./Forms/RegAuth";

export default class index extends Component {
  render() {
    const { props } = this;
    return <RegAuth {...props} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};
