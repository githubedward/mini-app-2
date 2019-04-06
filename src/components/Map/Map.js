import "mapbox-gl/dist/mapbox-gl.css";
import React, { Component } from "react";
import ReactMapGL, { NavigationControl, Marker, Popup } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import { GeoJsonLayer } from "deck.gl";
// components/styles
import CityPin from "./CityPin";
import CityInfo from "./CityInfo";
import styles from "./Map.module.css";
// others

const MAP_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const MAP_STYLE = process.env.REACT_APP_MAPSTYLE;

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "100%",
        height: "100%",
        latitude: 43.6532,
        longitude: -79.3832,
        zoom: 13,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null,
      searchResult: null
    };
  }

  mapRef = React.createRef();

  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  resize = () => {
    this.handleViewportChange({
      width: this.state.viewport.width,
      height: this.state.viewport.width
    });
  };

  renderMarker = (place, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={place.longitude}
        latitude={place.latitude}
      >
        <CityPin
          size={20}
          onClick={() => this.setState({ popupInfo: place })}
        />
      </Marker>
    );
  };

  renderMarkerResult = place => {
    return (
      <Marker
        className={styles.pindrop}
        longitude={place.longitude}
        latitude={place.latitude}
      >
        <CityPin size={30} />
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
    const { center } = event.result;
    const searchResult = {
      longitude: center[0],
      latitude: center[1]
    };
    this.setState({
      ...this.state,
      searchResult
    });
  };

  render() {
    const { viewport, searchResult } = this.state;
    return (
      <section className={styles.container}>
        <ReactMapGL
          ref={this.mapRef}
          {...viewport}
          mapboxApiAccessToken={MAP_TOKEN}
          onViewportChange={this.handleViewportChange}
          mapStyle={MAP_STYLE}
        >
          {searchResult && this.renderMarkerResult(searchResult)}
          <div className={styles.map_nav}>
            <NavigationControl onViewportChange={this.handleViewportChange} />
          </div>

          <Geocoder
            zoom={13}
            minLength={4}
            mapRef={this.mapRef}
            onResult={this.handleOnResult}
            onViewportChange={this.handleGeocoderViewportChange}
            mapboxApiAccessToken={MAP_TOKEN}
            position="top-right"
          />
        </ReactMapGL>
      </section>
    );
  }
}
