import mapStyle from "./mapDefaultStyle.json";

export function mapOptions(maps) {
  return {
    styles: mapStyle,
    draggableCursor: "auto",
    draggingCursor: "auto",
    fullscreenControl: false,
    zoomControlOptions: {
      position: maps.ControlPosition.RIGHT_CENTER
    }
  };
}
