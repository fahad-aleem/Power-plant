import React from "react";
import useSelector from "../store/store";
import styled from "@emotion/styled";

const TableHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const InfoBoxItem = styled.div`
  border-bottom: 1px solid #efefef;
  padding: 0.5rem 0;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.span`
  font-size: 1rem;
  display: block;
  font-weight: 400;
  margin-right: 0.5rem;
  text-align: ${(props) => (props.align ? props.align : "left")};
`;

const InfoTable = () => {
  const selectedPlantDetails = useSelector((state) => state.selectedPlant);
  return (
    <div className="info-box">
      <TableHeading>Plant Details</TableHeading>
      {selectedPlantDetails.Plant_name ? (
        <div className="info-box-content">
          <InfoBoxItem>
            <FlexContainer
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
            >
              <Label variant="h6" color="initial">
                State
              </Label>
              <Label variant="subtitle" color="initial">
                {selectedPlantDetails.States}
              </Label>
            </FlexContainer>
          </InfoBoxItem>
          <InfoBoxItem className="info-box-item">
            <FlexContainer>
              <Label>Name</Label>
              <Label>{selectedPlantDetails.Plant_name}</Label>
            </FlexContainer>
          </InfoBoxItem>
          <InfoBoxItem className="info-box-item">
            <FlexContainer>
              <Label variant="h6" color="initial">
                Owner Name
              </Label>
              <Label variant="subtitle" color="initial">
                {selectedPlantDetails.Owner_name}
              </Label>
            </FlexContainer>
          </InfoBoxItem>
          <InfoBoxItem className="info-box-item">
            <FlexContainer
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Label variant="h6" color="initial">
                Country
              </Label>
              <Label variant="subtitle" color="initial">
                {selectedPlantDetails.Coutry_name}
              </Label>
            </FlexContainer>
          </InfoBoxItem>
          <InfoBoxItem className="info-box-item">
            <FlexContainer
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Label variant="h6" color="initial">
                Net Coal Generation
              </Label>
              <Label variant="subtitle" color="initial">
                {selectedPlantDetails.net_caol_generation} MWh
              </Label>
            </FlexContainer>
          </InfoBoxItem>
          <InfoBoxItem className="info-box-item">
            <FlexContainer
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Label variant="h6" color="initial">
                Net Oil Generation
              </Label>
              <Label variant="subtitle" color="initial">
                {selectedPlantDetails.net_oil_generation} MWh
              </Label>
            </FlexContainer>
          </InfoBoxItem>
          <InfoBoxItem className="info-box-item">
            <FlexContainer
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Label variant="h6" color="initial">
                Net Gas Generation
              </Label>
              <Label variant="subtitle" color="initial">
                {selectedPlantDetails.net_gas_generation} MWh
              </Label>
            </FlexContainer>
          </InfoBoxItem>
          <InfoBoxItem className="info-box-item">
            <FlexContainer
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Label variant="h6" color="initial">
                Net Nuclear Generation
              </Label>
              <Label variant="subtitle" color="initial">
                {selectedPlantDetails.net_nuclear_generation} MWh
              </Label>
            </FlexContainer>
          </InfoBoxItem>
          <InfoBoxItem className="info-box-item">
            <FlexContainer
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Label variant="h6" color="initial">
                Net Solar Generation
              </Label>
              <Label variant="subtitle" color="initial">
                {selectedPlantDetails.net_solar_generation} MWh
              </Label>
            </FlexContainer>
          </InfoBoxItem>
          <InfoBoxItem className="info-box-item">
            <FlexContainer
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Label variant="h6" color="initial">
                Net Geothermal Generation
              </Label>
              <Label variant="subtitle" color="initial">
                {selectedPlantDetails.net_geothermal_generation} MWh
              </Label>
            </FlexContainer>
          </InfoBoxItem>
          <InfoBoxItem className="info-box-item">
            <FlexContainer
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Label variant="h6" color="initial">
                Net Fossil Generation
              </Label>
              <Label variant="subtitle" color="initial">
                {selectedPlantDetails.net_fossil_generation} MWh
              </Label>
            </FlexContainer>
          </InfoBoxItem>
          <InfoBoxItem className="info-box-item">
            <FlexContainer
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Label variant="h6" color="initial">
                Net Unknown Fuel Generation
              </Label>
              <Label variant="subtitle" color="initial">
                {selectedPlantDetails.net_unknownfuel_generation} MWh
              </Label>
            </FlexContainer>
          </InfoBoxItem>
          <InfoBoxItem className="info-box-item">
            <FlexContainer
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Label variant="h6" color="initial">
                Net Non-renewables Generation
              </Label>
              <Label variant="subtitle" color="initial">
                {selectedPlantDetails.net_nonrenewables_generation} MWh
              </Label>
            </FlexContainer>
          </InfoBoxItem>
          <InfoBoxItem className="info-box-item">
            <FlexContainer
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Label variant="h6" color="initial">
                Net Non Hydro Renewables Generation
              </Label>
              <Label variant="subtitle" color="initial">
                {selectedPlantDetails.net_nonhydrorenewables_generations} MWh
              </Label>
            </FlexContainer>
          </InfoBoxItem>
          <InfoBoxItem className="info-box-item">
            <FlexContainer
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Label variant="h6" color="initial">
                Net Combustion Generation
              </Label>
              <Label variant="subtitle" color="initial">
                {selectedPlantDetails.net_combustion_generation} MWh
              </Label>
            </FlexContainer>
          </InfoBoxItem>
          <InfoBoxItem className="info-box-item">
            <FlexContainer
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Label variant="h6" color="initial">
                Net Non Combustions Generation
              </Label>
              <Label variant="subtitle" color="initial">
                {selectedPlantDetails.net_noncombusition_generation} MWh
              </Label>
            </FlexContainer>
          </InfoBoxItem>
          <InfoBoxItem className="info-box-item">
            <FlexContainer
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Label variant="h6" color="initial">
                Net Coal Generation Percentage
              </Label>
              <Label variant="subtitle" color="initial">
                {selectedPlantDetails.coal_generation_percentage}
              </Label>
            </FlexContainer>
          </InfoBoxItem>
          <InfoBoxItem className="info-box-item">
            <FlexContainer
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Label variant="h6" color="initial">
                Net Oil Generation Percentage
              </Label>
              <Label variant="subtitle" color="initial">
                {selectedPlantDetails.oil_generation_percentage}
              </Label>
            </FlexContainer>
          </InfoBoxItem>
          <InfoBoxItem className="info-box-item">
            <FlexContainer
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Label variant="h6" color="initial">
                Net Gas Generation Percentage
              </Label>
              <Label variant="subtitle" color="initial">
                {selectedPlantDetails.gas_generation_percentage}
              </Label>
            </FlexContainer>
          </InfoBoxItem>
        </div>
      ) : (
        <Label align="center">Select the plant</Label>
      )}
    </div>
  );
};

export default InfoTable;
