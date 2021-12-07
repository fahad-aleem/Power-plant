import create from "zustand";
import Data from "../data.json";
import { persist, devtools } from "zustand/middleware";

// filtering the states from the data object.
const handleGetAllStates = () => {
  let ar = [];
  Data.map((plant) => {
    !ar.includes(plant.States) && ar.push(plant.States);
  });
  return ar;
};

const useSelector = create(
  devtools(
    persist(
      (set) => ({
        allData: Data, // all the json data are stored in this.
        filteredData: [], // the data that is filtered by either number of plants or by state.
        selectedPlant: {}, // when the marker is clicked, the selected plant are stored here to be displayed in the info window.
        allStates: handleGetAllStates(), // all the States of the plants are stored here after filtering.
        selectedState: "", // the selected state is stored here.

        // action that filtes the data by the state name
        handleGetPlantsByState: (stateName) => {
          // this function is used to filter the plants by state.
          set((state) => ({
            filteredData: state.allData.filter(
              (plant) => plant.States === stateName
            ),
            selectedState: stateName,
          }));
        },
        // An action that is used to set the selected plant information in the state.
        // it is triggered, when the map marker is clicked.
        handleSetSelectedPlant: (plant) => {
          set(() => ({
            selectedPlant: plant,
          }));
        },
        // function that is used to filter the plants by number of plants.
        // it is triggered, when the state is selected.
        getCountsData: (count) => {
          set(() => ({
            filteredData: Data.slice(0, count), // get the top N plants.
          }));
        },
      }),
      {
        name: "powerplant", // unique name
        getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
      }
    )
  )
);

export default useSelector;
