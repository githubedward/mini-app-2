import React, { Component } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
// components/styles
import SearchBox from "./SearchBox";
import Marker from "./Marker";
// import styles from "./Map.module.css";
// others
import mapStyle from "./mapstyles/customDefault.json";

const MAP_TOKEN = process.env.REACT_APP_MAP_TOKEN;

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapsApiLoaded: false,
      mapInstance: null,
      mapsAPI: null,
      searchResult: null
    };
  }

  static propTypes = {
    places: PropTypes.array.isRequired,
    center: PropTypes.object.isRequired
  };

  static defaultProps = {
    center: {
      lat: 43.6532,
      lng: -79.3832
    }
  };

  onSearchInput = place => {
    this.setState({
      searchResult: place
    });
  };

  onAPILoaded = (map, maps) => {
    this.setState({
      mapsApiLoaded: true,
      mapInstance: map,
      mapsAPI: maps
    });
  };

  render() {
    const { center } = this.props;
    const { mapsApiLoaded, mapsAPI, mapInstance, searchResult } = this.state;
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        {mapsApiLoaded && (
          <SearchBox
            map={mapInstance}
            mapsAPI={mapsAPI}
            onSearchInput={this.onSearchInput}
          />
        )}
        <GoogleMapReact
          bootstrapURLKeys={{
            key: MAP_TOKEN,
            libraries: ["places", "geometry"]
          }}
          center={center}
          zoom={13}
          options={{
            styles: mapStyle,
            draggableCursor: "auto",
            draggingCursor: "auto",
            fullscreenControl: false
          }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => {
            this.onAPILoaded(map, maps);
          }}
        >
          <Marker
            onClick={() => alert("click")}
            lat={center.lat}
            lng={center.lng}
          />
          {searchResult && (
            <Marker
              ref={this.SearchBox}
              text={searchResult.name}
              lat={searchResult.geometry.location.lat()}
              lng={searchResult.geometry.location.lng()}
            />
          )}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
