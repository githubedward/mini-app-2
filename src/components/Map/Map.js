import React from "react";
import _ from "lodash";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { SearchBox } from "react-google-maps/lib/components/places/SearchBox";
//
import styles from "./Map.module.css";
import mapStyle from "./mapstyles/customDefault.json";

const MAP_TOKEN = process.env.REACT_APP_MAP_TOKEN;
const google = window.google;

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${MAP_TOKEN}&v=3.exp&libraries=geometry,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  lifecycle({
    componentDidMount() {
      const refs = {};

      this.setState({
        bounds: null,
        center: { lat: 43.6532, lng: -79.3832 },
        searchResult: {},
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter()
          });
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: google => {
          const places = refs.searchBox.getPlaces();
          const bounds = new google.maps.LatLngBounds();

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location
          }));
          const nextCenter = _.get(
            nextMarkers,
            "0.position",
            this.state.center
          );

          this.setState({
            center: nextCenter,
            searchResult: nextMarkers
          });
          // refs.map.fitBounds(bounds);
        }
      });
    }
  }),
  withScriptjs,
  withGoogleMap
)(
  (
    props,
    {
      bounds,
      center,
      searchResult,
      onMapMounted,
      onBoundsChanged,
      onSearchBoxMounted,
      onPlacesChanged
    }
  ) => (
    <GoogleMap
      // ref={props.onMapMounted}
      defaultOptions={{
        styles: mapStyle,
        zoomControl: true,
        mapTypeControl: false,
        fullscreenControl: false
      }}
      defaultZoom={13}
      center={props.center}
      onBoundsChanged={onBoundsChanged}
    >
      {console.log(props)}
      <SearchBox
        ref={onSearchBoxMounted}
        bounds={bounds}
        controlPosition={window.google.maps.ControlPosition.TOP_RIGHT}
        onPlacesChanged={onPlacesChanged}
      >
        <input
          className={styles.searchbox}
          type="text"
          placeholder="Where to?"
        />
      </SearchBox>
      {/* {props.isMarkerShown && <Marker position={searchResult.position} />} */}
    </GoogleMap>
  )
);

class Map extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <MyMapComponent isMarkerShown={true} />
      </div>
    );
  }
}

export default Map;
