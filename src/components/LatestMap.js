import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import MapMarker from "./MapMarker";
import useSelector from "../store/store";
import { MarkerClusterer } from "@react-google-maps/api";

const containerStyle = {
  height: "100%",
  minHeight: "100vh",
};

function MapContainer() {
  const filteredState = useSelector((state) => state.filteredData); // all  the filtered data
  return (
    <LoadScript googleMapsApiKey="AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU">
      <GoogleMap
        gestureHandling="greedy"
        mapContainerStyle={containerStyle}
        options={{
          mapTypeControl: false, // disable map type control
          fullscreenControl: false, // disable fullscreen
          streetViewControl: false, // disable street view
          gestureHandling: "greedy", // disable ctrl + to zoom view screen
        }}
        center={{
          lat: parseFloat(filteredState[0].LAT),
          lng: parseFloat(filteredState[0].LON),
        }}
        zoom={4}
      >
        <MarkerClusterer
          clusterClass="cluster"
          options={{
            imagePath:
              "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
          }}
          minimumClusterSize={2}
        >
          {(clusterer) => {
            return filteredState.map((item, index) => (
              <MapMarker
                key={index}
                LAT={item.LAT}
                LON={item.LON}
                data={item}
                clusterer={clusterer}
              />
            ));
          }}
        </MarkerClusterer>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapContainer);
