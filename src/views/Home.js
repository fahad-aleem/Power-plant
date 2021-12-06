import React from "react";
// import useStore from "../store/store";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { InputLabel, Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";
// import Navbar from "../components/navbar";
import MapContainer from "../components/LatestMap";
import InfoTable from "../components/InfoTable";

import useSelector from "../store/store";
const Home = () => {
  const handleGetCountsData = useSelector((state) => state.getCountsData);
  const filteredState = useSelector((state) => state.filteredData);
  const handleGetAllStates = useSelector((state) => state.handleGetAllStates);
  const allStates = useSelector((state) => state.allStates);
  const handleGetPlantsByState = useSelector(
    (state) => state.handleGetPlantsByState
  );

  const [state, setState] = useState("");

  useEffect(() => {
    handleGetAllStates();
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <h1 className="top-heading">Annual Net Generation of the Years</h1>
        <Box display="flex">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Select Number of Plants
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              placeholder="Select Number of Plants"
              label="Select Number of States"
              onChange={(e) => {
                handleGetCountsData(e.target.value);
              }}
              value={filteredState.length}
            >
              {[10, 50, 100, 200, 500, 700, 900, 701].map((item, index) => {
                return (
                  typeof item === "number" && (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  )
                );
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ margin: "0 1rem" }}>
            <InputLabel id="demo-simple-select-label">Select State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              placeholder="Select State"
              label="Select State"
              onChange={(e) => {
                handleGetPlantsByState(e.target.value);
                setState(e.target.value);
              }}
              value={state}
            >
              {allStates.map((item, index) => {
                return (
                  item !== "" && (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  )
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Container>
      {filteredState.length > 0 && (
        <Grid container mt={3} spacing={3}>
          <Grid item xs={12} sm={8}>
            <MapContainer />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InfoTable />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Home;
