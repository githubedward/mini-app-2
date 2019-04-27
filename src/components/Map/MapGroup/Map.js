import React, { Component } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
// components/styles
import SearchBox from "./SearchBox";
import Marker from "./Marker";
import PinItWindow from "./PinItWindow";
import PlaceInfoWindow from "./PlaceInfoWindow";
import styles from "./styles/Map.module.css";
// others
import { mapOptions } from "../helpers/functions";
import * as helpers from "utils/functions";

const MAP_TOKEN = process.env.REACT_APP_MAP_TOKEN;

class Map extends Component {
  state = {
    mapsApiLoaded: false,
    mapInstance: null,
    mapsAPI: null,
    searchResult: null,
    clickedPlace: null
  };

  componentDidMount() {
    this.props.getAllPlaces();
  }

  static propTypes = {
    center: PropTypes.object.isRequired,
    places: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          address: PropTypes.string.isRequired,
          lat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          lng: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          name: PropTypes.string.isRequired,
          place_id: PropTypes.string.isRequired,
          vicinity: PropTypes.string,
          type: PropTypes.string.isRequired
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
      lat: searched.geometry.location.lat(),
      lng: searched.geometry.location.lng(),
      place_id: searched.place_id,
      vicinity: searched.vicinity,
      address: searched.formatted_address,
      name: searched.name,
      type: searched.types[0]
    };
    this.setState({
      searchResult: place
    });
  };

  onPinAPlace = () => {
    const { searchResult } = this.state;
    const newPlace = { ...searchResult };
    this.props.addPlaceAction(newPlace);
    this.setState({
      searchResult: null
    });
  };

  onClosePinInfoWindow = () => {
    this.setState({
      searchResult: null
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
      <div style={{ height: "102vh", width: "100vw", position: "fixed" }}>
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
          options={mapOptions}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => {
            this.onAPILoaded(map, maps);
          }}
        >
          {helpers.chkLength(places.data) &&
            // render places markers

            places.data.map(place => {
              const pinned = place.users.find(
                user => user.id === this.props.user_id
              );
              return (
                <Marker
                  key={place.place_id}
                  lat={place.lat}
                  lng={place.lng}
                  onMouseOver={() =>
                    !placeInfo && showInfoBoxAction({ ...place, pinned })
                  }
                  onMouseLeave={closeInfoBoxAction}
                  type={place.type}
                  pinned={pinned}
                  active={
                    (placeInfo &&
                      (placeInfo.place_id === place.place_id && true)) ||
                    false
                  }
                />
              );
            })}
          {searchResult && (
            // render search result marker
            <Marker
              lat={searchResult.lat}
              lng={searchResult.lng}
              result={true}
              type={searchResult.type}
            />
          )}
          {searchResult && (
            // render add place window
            <PinItWindow
              place={searchResult}
              lat={searchResult.lat}
              lng={searchResult.lng}
              onClick={this.onPinAPlace}
              onClose={this.onClosePinInfoWindow}
            />
          )}
          {placeInfo && (
            // render place info window on hover
            <PlaceInfoWindow
              place={placeInfo}
              lat={placeInfo.lat}
              lng={placeInfo.lng}
              pinned={placeInfo.pinned}
            />
          )}
        </GoogleMapReact>
        <div className={styles.logo}>Pinit</div>
      </div>
    );
  }
}

export default Map;
