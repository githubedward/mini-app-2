import React, { Component } from "react";
import ReactMapGL from "react-map-gl";
import styles from "./Map.module.css";

class Map extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
      <section className={styles.container}>
        {/* <div className={styles.logo}>MapSocial</div> */}
        <ReactMapGL
          {...this.state.viewport}
          width="100%"
          height="100%"
          mapboxApiAccessToken="pk.eyJ1IjoiZGV2ZWR3YXJkIiwiYSI6ImNqb3A5cTRhNTB3dWYzdmx3aG5hZ25vNjIifQ.Sr_YY4RT2heuW8Nn0HakaA"
          onViewportChange={viewport => this.setState({ viewport })}
          mapStyle="mapbox://styles/devedward/cju265bst1xsg1fo18srfxmyr"
        />
      </section>
    );
  }
}

export default Map;
