import React, { Component } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
// components/styles
import SearchBox from "./SearchBox";
import OwnMarker from "./Marker";
import PinItWindow from "./PinItWindow";
// import styles from "./Map.module.css";
// others
import mapStyle from "./mapstyles/customDefault.json";
import * as helpers from "../../utils/functions";

const MAP_TOKEN = process.env.REACT_APP_MAP_TOKEN;

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapsApiLoaded: false,
      mapInstance: null,
      mapsAPI: null,
      searchResult: null,
      places: [],
      pinit: null
    };
  }

  static propTypes = {
    center: PropTypes.object.isRequired
  };

  static defaultProps = {
    center: {
      lat: 43.6532,
      lng: -79.3832
    }
  };

  onSearchInput = place => {
    console.log(place);
    this.setState({
      searchResult: place
    });
  };

  onPinAPlace = () => {
    const { places, pinit } = this.state;
    const newPlace = { ...pinit };
    this.setState({
      places: places.concat(newPlace),
      pinit: null,
      searchResult: null
    });
  };

  onShowPinItWindow = () => {
    const { searchResult } = this.state;
    const place = {
      lat: searchResult.geometry.location.lat(),
      lng: searchResult.geometry.location.lng(),
      place_id: searchResult.place_id,
      vicinity: searchResult.vicinity,
      address: searchResult.formatted_address,
      name: searchResult.name
    };
    console.log(place);
    this.setState({
      pinit: place
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
    const {
      mapsApiLoaded,
      mapsAPI,
      mapInstance,
      searchResult,
      places,
      pinit
    } = this.state;
    const PlacesJSX = places.map(place => {
      return (
        <OwnMarker
          key={place.id}
          lat={place.lat}
          lng={place.lng}
          onClick={() => {
            console.log(place);
          }}
        />
      );
    });
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
          {helpers.chkLength(places) && PlacesJSX}
          {searchResult && (
            <OwnMarker
              text={searchResult.name}
              lat={searchResult.geometry.location.lat()}
              lng={searchResult.geometry.location.lng()}
              onClick={this.onShowPinItWindow}
              result={true}
            />
          )}
          {pinit && (
            <PinItWindow
              place={pinit}
              lat={pinit.lat}
              lng={pinit.lng}
              onClick={this.onPinAPlace}
            />
          )}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
