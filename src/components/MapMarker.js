import React from "react";
import { Marker } from "@react-google-maps/api";
import { InfoWindow } from "@react-google-maps/api";
import { useState } from "react";
import useSelector from "../store/store";

const MapMarker = (props) => {
  const [toggle, setToggle] = useState(false);
  const handleSetSelectedPlant = useSelector(
    (state) => state.handleSetSelectedPlant
  );

  const selectedPlant = useSelector((state) => state.selectedPlant);

  return (
    <Marker
      position={{ lat: parseFloat(props.LAT), lng: parseFloat(props.LON) }}
      onClick={(e) => {
        setToggle(!toggle);
        handleSetSelectedPlant(props.data);
      }}
      label={props.data.States}
      clusterer={props.clusterer}
    >
      {/* if the marker is clicked, saved the selected plant to the store */}
      {selectedPlant.Plant_name === props.data.Plant_name && (
        <InfoWindow
          onCloseClick={() => {
            setToggle(false);
            handleSetSelectedPlant({});
          }}
          visible={toggle}
          position={{
            lat: parseFloat(props.LAT) + 0.05,
            lng: parseFloat(props.LON),
          }}
        >
          <div>
            <ul>
              <li>State: {props.data.States}</li>
              <li>Plant Name: {props.data.Plant_name}</li>
              <li>Owner Name: {props.data.Owner_name}</li>
            </ul>
            <h4>Annual Net Power Generation:</h4>
            <ul>
              <li>Coal Generation: {props.data.net_caol_generation} MWh</li>
              <li>Oil Generation: {props.data.net_oil_generation} MWh</li>
              <li>Gas Generation: {props.data.net_gas_generation} MWh</li>
            </ul>
            <h4>Annual Generation Percentage:</h4>
            <ul>
              <li>
                Coal Generation Percentage:{" "}
                {props.data.coal_generation_percentage}
              </li>
              <li>
                Oil Generation Percentage:{" "}
                {props.data.oil_generation_percentage}
              </li>
              <li>
                Gas Generation Percentage:{" "}
                {props.data.gas_generation_percentage}
              </li>
            </ul>
          </div>
        </InfoWindow>
      )}
    </Marker>
  );
};

export default MapMarker;
