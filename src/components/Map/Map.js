import "mapbox-gl/dist/mapbox-gl.css";
import React, { Component } from "react";
import MapGL, { NavigationControl, Marker, Popup } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import { GeoJsonLayer } from "deck.gl";
// components/styles
import CityPin from "./CityPin";
import CityInfo from "./CityInfo";
import styles from "./Map.module.css";
// others
import CITIES from "./cities.json";

const MAP_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const MAP_STYLE = process.env.REACT_APP_MAPSTYLE;

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: `100%`,
        height: `100%`,
        latitude: 43.6532,
        longitude: -79.3832,
        zoom: 13
      },
      popupInfo: null,
      searchResultLayer: null
    };
  }

  mapRef = React.createRef();

  renderCityMarker = (city, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={city.longitude}
        latitude={city.latitude}
      >
        <CityPin size={20} onClick={() => this.setState({ popupInfo: city })} />
      </Marker>
    );
  };

  renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo info={popupInfo} />
          <form>
            <input type="text" />
            <button type="button" onClick={() => alert("clicked")}>
              Button
            </button>
          </form>
        </Popup>
      )
    );
  }

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  handleOnResult = event => {
    console.log(event);
    this.setState({
      ...this.state,
      searchResultLayer: new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    });
  };

  render() {
    const { viewport } = this.state;
    return (
      <section className={styles.container}>
        <MapGL
          ref={this.mapRef}
          {...viewport}
          mapboxApiAccessToken={MAP_TOKEN}
          onViewportChange={this.handleViewportChange}
          mapStyle={MAP_STYLE}
        >
          {CITIES.map(this.renderCityMarker)}

          {this.renderPopup()}

          <div className={styles.map_nav}>
            <NavigationControl onViewportChange={this.handleViewportChange} />
          </div>

          <Geocoder
            minLength={4}
            mapRef={this.mapRef}
            // containerRef={this.geocoderContainerRef}
            onResult={this.handleOnResult}
            onViewportChange={this.handleViewportChange}
            mapboxApiAccessToken={MAP_TOKEN}
            // position="top-left"
          />
        </MapGL>
      </section>
    );
  }
}
