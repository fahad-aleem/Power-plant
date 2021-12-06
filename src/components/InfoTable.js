import React from "react";
import Typography from "@mui/material/Typography";
import useSelector from "../store/store";
import Box from "@mui/material/Box";

const InfoTable = () => {
  const selectedPlantDetails = useSelector((state) => state.selectedPlant);
  return (
    <div className="info-box">
      <Typography variant="h4" color="initial">
        Plant Details
      </Typography>
      {selectedPlantDetails.Plant_name ? (
        <div className="info-box-content">
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                State
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.States}
              </Typography>
            </Box>
          </div>
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                Name
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.Plant_name}
              </Typography>
            </Box>
          </div>
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                Owner Name
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.Owner_name}
              </Typography>
            </Box>
          </div>
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                Country
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.Coutry_name}
              </Typography>
            </Box>
          </div>
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                Net Coal Generation
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.net_caol_generation} MWh
              </Typography>
            </Box>
          </div>
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                Net Oil Generation
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.net_oil_generation} MWh
              </Typography>
            </Box>
          </div>
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                Net Gas Generation
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.net_gas_generation} MWh
              </Typography>
            </Box>
          </div>
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                Net Nuclear Generation
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.net_nuclear_generation} MWh
              </Typography>
            </Box>
          </div>
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                Net Solar Generation
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.net_solar_generation} MWh
              </Typography>
            </Box>
          </div>
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                Net Geothermal Generation
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.net_geothermal_generation} MWh
              </Typography>
            </Box>
          </div>
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                Net Fossil Generation
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.net_fossil_generation} MWh
              </Typography>
            </Box>
          </div>
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                Net Unknown Fuel Generation
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.net_unknownfuel_generation} MWh
              </Typography>
            </Box>
          </div>
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                Net Non-renewables Generation
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.net_nonrenewables_generation} MWh
              </Typography>
            </Box>
          </div>
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                Net Non Hydro Renewables Generation
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.net_nonhydrorenewables_generations} MWh
              </Typography>
            </Box>
          </div>
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                Net Combustion Generation
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.net_combustion_generation} MWh
              </Typography>
            </Box>
          </div>
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                Net Non Combustions Generation
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.net_noncombusition_generation} MWh
              </Typography>
            </Box>
          </div>
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                Net Coal Generation Percentage
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.coal_generation_percentage}
              </Typography>
            </Box>
          </div>
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                Net Oil Generation Percentage
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.oil_generation_percentage}
              </Typography>
            </Box>
          </div>
          <div className="info-box-item">
            <Box
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="space-between"
              pr={3}
            >
              <Typography variant="h6" color="initial">
                Net Gas Generation Percentage
              </Typography>
              <Typography variant="subtitle" color="initial">
                {selectedPlantDetails.gas_generation_percentage}
              </Typography>
            </Box>
          </div>
        </div>
      ) : (
        <Typography align="center" variant="h6" color="initial">
          Select the plant
        </Typography>
      )}
    </div>
  );
};

export default InfoTable;
