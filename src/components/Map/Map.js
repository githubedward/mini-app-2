import React, { Component } from "react";
import ReactMapGL, { NavigationControl, Marker, Popup } from "react-map-gl";
// components/styles
import CityPin from "./CityPin";
import CityInfo from "./CityInfo";
import styles from "./Map.module.css";
// others
import CITIES from "./cities.json";

const MAP_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 43.6532,
        longitude: -79.3832,
        zoom: 13,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null
    };
  }

  _renderCityMarker = (city, index) => {
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

  _renderPopup() {
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
            <button type='button' onClick={() => alert("clicked")}>Button</button>
          </form>
        </Popup>
      )
    );
  }

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  render() {
    const { viewport } = this.state;
    return (
      <section className={styles.container}>
        <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          mapboxApiAccessToken={MAP_TOKEN}
          onViewportChange={this._updateViewport}
          mapStyle="mapbox://styles/devedward/cju265bst1xsg1fo18srfxmyr"
        >
          {CITIES.map(this._renderCityMarker)}

          {this._renderPopup()}
          <div className={styles.map_nav}>
            <NavigationControl onViewportChange={this._updateViewport} />
          </div>
        </ReactMapGL>
      </section>
    );
  }
}
