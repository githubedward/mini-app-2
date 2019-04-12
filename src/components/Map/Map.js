import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
// components/styles
import SearchBox from "./SearchBox";
import Marker from "./Marker";
import PinItWindow from "./PinItWindow";
import PlaceInfoWindow from "./PlaceInfoWindow";
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
      placeInfo: null,
      places: [
        {
          address: "Distillery District, Toronto, ON M5A, Canada",
          position: {
            lat: 43.65030549999999,
            lng: -79.35958
          },

          name: "Distillery District",
          place_id: "ChIJCcYBxz3L1IkRFmpW29wp58M",
          vicinity: "Old Toronto"
        },
        {
          address: "Graffiti Alley, Toronto, ON M5V, Canada",
          position: {
            lat: 43.64770849999999,
            lng: -79.39951880000001
          },
          name: "Graffiti Alley",
          place_id:
            "EidHcmFmZml0aSBBbGxleSwgVG9yb250bywgT04gTTVWLCBDYW5hZGEiLiosChQKEgm9eRhd3DQriBGJA-KXpt7jsRIUChIJpTvG15DL1IkRd8S0KlBVNTI",
          vicinity: "Old Toronto"
        },
        {
          address: "301 Front St W, Toronto, ON M5V 2T6, Canada",
          position: {
            lat: 43.6425662,
            lng: -79.38705679999998
          },
          name: "CN Tower",
          place_id: "ChIJmzrzi9Y0K4gRgXUc3sTY7RU",
          vicinity: "301 Front Street West, Toronto"
        }
      ]
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

  onSearchInput = searched => {
    this.onClosePinInfoWindow();
    const place = {
      position: {
        lat: searched.geometry.location.lat(),
        lng: searched.geometry.location.lng()
      },
      place_id: searched.place_id,
      vicinity: searched.vicinity,
      address: searched.formatted_address,
      name: searched.name
    };
    this.setState({
      searchResult: place,
      placeInfo: null
    });
  };

  onPinAPlace = () => {
    const { places, searchResult } = this.state;
    const newPlace = { ...searchResult };
    this.setState({
      places: places.concat(newPlace),
      searchResult: null
    });
  };

  onClosePinInfoWindow = () => {
    this.setState({
      searchResult: null
    });
  };

  onClosePlaceInfoWindow = () => {
    this.setState({
      placeInfo: null
    });
  };

  onShowPlaceInfoWindow = place => {
    this.setState({
      placeInfo: place
    });
  };

  onAPILoaded = (map, maps) => {
    this.setState({
      mapsApiLoaded: true,
      mapInstance: map,
      mapsAPI: maps
    });
  };

  // renderSearchedMarker(map, maps) {
  //   const position = this.state.searchResult.position;
  //   let marker = new maps.Marker({
  //     position: position,
  //     map
  //   });
  // }

  render() {
    const { center } = this.props;
    const {
      mapsApiLoaded,
      mapsAPI,
      mapInstance,
      searchResult,
      places,
      placeInfo
    } = this.state;
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
          {helpers.chkLength(places) &&
            // render places markers
            places.map(place => {
              return (
                <Marker
                  key={place.place_id}
                  lat={place.position.lat}
                  lng={place.position.lng}
                  onMouseOver={() => this.onShowPlaceInfoWindow(place)}
                  onMouseLeave={this.onClosePlaceInfoWindow}
                />
              );
            })}
          {searchResult && (
            // render search result marker
            <Marker
              lat={searchResult.position.lat}
              lng={searchResult.position.lng}
              result={true}
            />
          )}
          {searchResult && (
            <PinItWindow
              place={searchResult}
              lat={searchResult.position.lat}
              lng={searchResult.position.lng}
              onClick={this.onPinAPlace}
              onClose={this.onClosePinInfoWindow}
            />
          )}
          {placeInfo && (
            // render selected place info window
            <PlaceInfoWindow
              place={placeInfo}
              lat={placeInfo.position.lat}
              lng={placeInfo.position.lng}
            />
          )}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
