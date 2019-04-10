import React, { Fragment } from "react";
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
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
// components/styles
import styles from "./Map.module.css";
import mapStyle from "./mapstyles/customDefault.json";
import IconSearch from "../shared/IconSearch";
import IconClose from "../shared/IconClose";
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
        formRef: null,
        bounds: null,
        center: { lat: 43.6532, lng: -79.3832 },
        searchResult: null,
        searching: false,
        formWindowPosition: null,
        onSetFormWindowPosition: pos => {
          this.setState({
            formWindowPosition: pos
          });
        },
        onFormMounted: ref => {
          this.setState({
            formRef: ref
          });
        },
        onClearForm: () => {
          this.setState({
            formRef: null
          });
        },
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
        onSearchingChanged: bool => {
          this.setState({
            searching: bool
          });
        },
        onPlacesChanged: () => {
          const place = refs.searchBox.getPlaces()[0];
          const bounds = new window.google.maps.LatLngBounds();

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
    searching,
    formWindowPosition,
    formRef,
    onClearForm,
    onInputMounted,
    onFormMounted,
    onSetFormWindowPosition,
    onMapMounted,
    onSearchBoxMounted,
    onPlacesChanged,
    onSearchingChanged,
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
        fullscreenControl: false,
        draggableCursor: "auto",
        draggingCursor: "auto"
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
        <div className={styles.searchbox}>
          <input
            ref={onInputMounted}
            className={styles.searchbox_input}
            type="text"
            placeholder="Where to explore?"
            onChange={!searching ? () => onSearchingChanged(true) : null}
          />
          {(searching && (
            // render x when input value > 0
            <button
              onClick={() => {
                onSearchingChanged(false);
              }}
            >
              <IconClose className={styles.searchbox_clear} />
            </button>
            // otherwise, render search icon
          )) || <IconSearch className={styles.searchbox_icon} />}
        </div>
      </SearchBox>

      {searchResult && (
        // search result marker
        <Fragment>
          <Marker
            position={searchResult}
            icon={searchResult && icon(google)}
            animation={google.maps.Animation.DROP}
          />
        </Fragment>
      )}
      {isMarkerShown &&
        places.map((position, index) => {
          return (
            <div key={index} className={styles.marker_container}>
              <MarkerWithLabel
                key={index}
                position={position}
                animation={google.maps.Animation.DROP}
                icon={icon(google)}
                labelAnchor={new google.maps.Point(18, 56)}
                onClick={() => {
                  onSetFormWindowPosition(null);
                  onSetFormWindowPosition(position);
                }}
              >
                <img
                  className={styles.marker_image}
                  src={
                    "https://media.licdn.com/dms/image/C5603AQHtvCohEUWq7Q/profile-displayphoto-shrink_200_200/0?e=1560384000&v=beta&t=nngy3wH1du8RQNeKirGZElRCfecKsWmfVoGHjqbsVsI"
                  }
                />
              </MarkerWithLabel>
              {formWindowPosition && (
                <InfoBox
                  defaultPosition={new google.maps.LatLng(formWindowPosition)}
                  options={{
                    closeBoxURL: ``,
                    enableEventPropagation: true,
                    alignBottom: true,
                    pixelOffset: new google.maps.Size(-18, -60)
                  }}
                >
                  <form
                    ref={onFormMounted}
                    className={styles.formBox}
                    onSubmit={e => {
                      e.preventDefault();
                      console.log(formRef[0].value);
                      // onClearForm();
                      console.log(e);
                    }}
                  >
                    <input />
                    <button>Submit</button>
                  </form>
                </InfoBox>
              )}
            </div>
          );
        })}
    </GoogleMap>
  );
});

class Map extends React.PureComponent {
  render() {
    const { places } = this.props;
    return (
      <div className={styles.container}>
        <MyMapComponent isMarkerShown={true} places={places} />
        {/* <div className={styles.logo}>MapSocial</div> */}
      </div>
    );
  }
}

export default Map;
