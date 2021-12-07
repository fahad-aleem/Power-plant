import React from "react";
import styled from "@emotion/styled";
import MapContainer from "./LatestMap";
import InfoTable from "./InfoTable";

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoContainerItem = styled.div`
  width: ${(props) => props.width};
  margin: 0 1rem;
`;

const DetailsContainer = () => {
  return (
    <InfoContainer container mt={3} spacing={3}>
      <InfoContainerItem width="70%">
        <MapContainer />
      </InfoContainerItem>
      <InfoContainerItem width="30%">
        <InfoTable />
      </InfoContainerItem>
    </InfoContainer>
  );
};

export default DetailsContainer;
