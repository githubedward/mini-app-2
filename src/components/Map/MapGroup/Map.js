import React, { Component } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
// components/styles
import SearchBox from "./SearchBox";
import Marker from "./Marker";
import ActiveInfoWindow from "./ActiveInfoWindow";
import PlaceInfoWindow from "./PlaceHoverWindow";
import styles from "./styles/Map.module.css";
// others
import { mapOptions } from "../helpers/functions";
import * as helpers from "../../../utils/functions";

const MAP_TOKEN = process.env.REACT_APP_MAP_TOKEN;

class Map extends Component {
  state = {
    mapsApiLoaded: false,
    mapInstance: null,
    mapsAPI: null,
    unPinnedPlace: null,
    searchedMarker: false
  };

  componentDidMount() {
    this.props.getAllPlaces();
  }

  static propTypes = {
    center: PropTypes.object.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      fullname: PropTypes.string.isRequired
    }),
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
      placeInfo: PropTypes.any,
      activePlaceInfo: PropTypes.any
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
    this.props.closeInfoBoxAction();
    const place = {
      lat: searched.geometry.location.lat(),
      lng: searched.geometry.location.lng(),
      place_id: searched.place_id,
      vicinity: searched.vicinity,
      address: searched.formatted_address,
      name: searched.name,
      type: searched.types[0]
    };
    const isNewPlace = this.props.places.data.indexOf(
      exPlace => exPlace.place_id === place.place_id
    );
    if (isNewPlace !== 0) this.setState({ searchedMarker: true });
    this.props.showActivePlaceAction(place);
  };

  onPinAPlace = () => {
    const newPlace = { ...this.props.places.activePlaceInfo };
    this.props.addPlaceAction(newPlace);
    this.props.closeInfoBoxAction();
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
      user,
      places,
      showHoverPlaceAction,
      showActivePlaceAction,
      closeInfoBoxAction
    } = this.props;
    const { placeInfo, activePlaceInfo } = places;
    const { mapsApiLoaded, mapsAPI, mapInstance, searchedMarker } = this.state;
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
                user => user.id === this.props.user.id
              );
              return (
                <Marker
                  key={place.place_id}
                  lat={place.lat}
                  lng={place.lng}
                  onMouseOver={() => {
                    if (!activePlaceInfo)
                      showHoverPlaceAction({ ...place, pinned });
                  }}
                  onClick={() => {
                    showActivePlaceAction({ ...place, pinned });
                  }}
                  onMouseLeave={() => !activePlaceInfo && closeInfoBoxAction()}
                  type={place.type}
                  pinned={pinned}
                  active={
                    (placeInfo && placeInfo.place_id === place.place_id) ||
                    (activePlaceInfo &&
                      activePlaceInfo.place_id === place.place_id) ||
                    false
                  }
                />
              );
            })}
          {activePlaceInfo && searchedMarker && (
            <Marker
              lat={activePlaceInfo.lat}
              lng={activePlaceInfo.lng}
              result={searchedMarker}
              type={activePlaceInfo.type}
            />
          )}
          {activePlaceInfo && (
            // render add place window
            <ActiveInfoWindow
              place={activePlaceInfo}
              lat={activePlaceInfo.lat}
              lng={activePlaceInfo.lng}
              onClick={!activePlaceInfo.pinned && this.onPinAPlace}
              onClose={closeInfoBoxAction}
              pinned={activePlaceInfo.pinned}
              user={user}
            />
          )}
          {placeInfo && (
            // render place info window on hover
            <PlaceInfoWindow
              place={placeInfo}
              lat={placeInfo.lat}
              lng={placeInfo.lng}
              pinned={placeInfo.pinned}
              user={user}
            />
          )}
        </GoogleMapReact>
        <div className={styles.logo}>Pinit</div>
      </div>
    );
  }
}

export default Map;
