import React, { Component } from "react";
import Map from "./Map";

export default class index extends Component {
  render() {
    const locations = [
      { lat: 43.6426, lng: -79.3871 },
      { lat: 43.6503, lng: -79.3596 },
      { lat: 43.6185, lng: -79.3738 }
    ];
    return <Map places={locations} />;
  }
}
