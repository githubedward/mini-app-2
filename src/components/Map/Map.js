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
      searchResult: null
    };
  }

  static propTypes = {
    center: PropTypes.object.isRequired,
    places: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          address: PropTypes.string.isRequired,
          position: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired
          }),
          name: PropTypes.string.isRequired,
          place_id: PropTypes.string.isRequired,
          vicinity: PropTypes.string.isRequired
        })
      ),
      placeInfo: PropTypes.any
    })
  };

  static defaultProps = {
    center: {
      lat: 43.6532,
      lng: -79.3832
    },
    places: {
      data: [],
      placeInfo: null
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

  render() {
    const {
      center,
      places,
      showInfoBoxAction,
      closeInfoBoxAction
    } = this.props;
    const { placeInfo } = places;
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
          {helpers.chkLength(places.data) &&
            // render places markers
            places.data.map(place => {
              return (
                <Marker
                  key={place.place_id}
                  lat={place.position.lat}
                  lng={place.position.lng}
                  onMouseOver={() => !placeInfo && showInfoBoxAction(place)}
                  onMouseLeave={closeInfoBoxAction}
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
