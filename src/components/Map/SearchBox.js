import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Map.module.css";

export default class SearchBox extends Component {
  static propTypes = {
    mapsAPI: PropTypes.shape({
      places: PropTypes.shape({
        SearchBox: PropTypes.func
      }),
      event: PropTypes.shape({
        clearInstanceListeners: PropTypes.func
      })
    }).isRequired,
    onSearchInput: PropTypes.func
  };

  static defaultProps = {
    onSearchInput: null
  };

  constructor(props) {
    super(props);

    this.searchInput = React.createRef();
  }

  componentDidMount() {
    const { map, mapsAPI } = this.props;
    this.searchBox = new mapsAPI.places.SearchBox(this.searchInput.current);
    this.searchBox.addListener("places_changed", this.onPlacesChanged);
    this.searchBox.bindTo("bounds", map);
  }

  componentWillUnmount() {
    this.props.mapsAPI.event.clearInstanceListeners(this.searchBox);
  }

  onPlacesChanged = () => {
    const { map, onSearchInput } = this.props;
    const selected = this.searchBox.getPlaces();
    const { 0: place } = selected;
    if (!place.geometry) return;
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(13);
    }

    onSearchInput(place);
    this.searchInput.current.blur();
  };

  render() {
    return (
      <div className={styles.searchBox}>
        <input
          ref={this.searchInput}
          placeholder="Where to go?"
          type="text"
          className={styles.searchBox_input}
        />
      </div>
    );
  }
}
