import React from "react";
// import _ from "lodash";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { SearchBox } from "react-google-maps/lib/components/places/SearchBox";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";
// components/styles
import styles from "./Map.module.css";
import mapStyle from "./mapstyles/customDefault.json";
import { icon } from "./CustomMarkers";

const MAP_TOKEN = process.env.REACT_APP_MAP_TOKEN;

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
        searchResult: null,
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
        onPlacesChanged: () => {
          const place = refs.searchBox.getPlaces()[0];
          const bounds = new window.google.maps.LatLngBounds();
          console.log(place);

          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
          const searchResult = place.geometry.location;
          const nextCenter = place.geometry.location;

          this.setState({
            center: nextCenter,
            searchResult
          });
          // refs.map.fitBounds(bounds);
        }
      });
    },
    shouldComponentUpdate(prevState, nextState, nextProps) {
      console.log(prevState, nextProps);
      return prevState !== nextState;
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const { google } = window;
  const {
    center,
    bounds,
    searchResult,
    onMapMounted,
    onSearchBoxMounted,
    onPlacesChanged,
    isMarkerShown,
    places
  } = props;
  return (
    <GoogleMap
      ref={onMapMounted}
      defaultOptions={{
        styles: mapStyle,
        zoomControl: true,
        mapTypeControl: false,
        fullscreenControl: false
      }}
      defaultZoom={13}
      center={center}
      // onBoundsChanged={props.onBoundsChanged}
    >
      {console.log(props)}
      <SearchBox
        ref={onSearchBoxMounted}
        bounds={bounds}
        controlPosition={google.maps.ControlPosition.TOP_RIGHT}
        onPlacesChanged={onPlacesChanged}
      >
        <input
          className={styles.searchbox}
          type="text"
          placeholder="Where to explore?"
        />
      </SearchBox>
      {searchResult && (
        // search result marker
        <Marker
          position={searchResult}
          icon={searchResult && icon(google)}
          draggable={true}
          animation={google.maps.Animation.DROP}
        />
      )}
      {isMarkerShown &&
        places.map((position, index) => {
          return (
            <MarkerWithLabel
              key={index}
              position={position}
              animation={google.maps.Animation.DROP}
              icon={icon(google)}
              labelAnchor={new google.maps.Point(18, 32)}
            >
              <img
                className={styles.marker_image}
                src={
                  "https://media.licdn.com/dms/image/C5603AQHtvCohEUWq7Q/profile-displayphoto-shrink_200_200/0?e=1560384000&v=beta&t=nngy3wH1du8RQNeKirGZElRCfecKsWmfVoGHjqbsVsI"
                }
              />
            </MarkerWithLabel>
          );
        })}
    </GoogleMap>
  );
});

class Map extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <MyMapComponent isMarkerShown={true} places={this.props.places} />
        {/* <div className={styles.logo}>MapSocial</div> */}
      </div>
    );
  }
}

export default Map;
