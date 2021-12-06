import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import MapMarker from "./MapMarker";
import useSelector from "../store/store";

const containerStyle = {
  height: "100%",
  minHeight: "100vh",
};

function MapContainer() {
  const filteredState = useSelector((state) => state.filteredData);

  const handleGenerateRandomId = () => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: parseFloat(filteredState[0].LAT),
          lng: parseFloat(filteredState[0].LON),
        }}
        zoom={4}
      >
        {filteredState.map((item) => (
          <MapMarker
            key={handleGenerateRandomId()}
            LAT={item.LAT}
            LON={item.LON}
            data={item}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapContainer);
