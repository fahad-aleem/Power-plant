import create from "zustand";
import Data from "../data.json";
import { persist, devtools } from "zustand/middleware";

const useStore = create(
  devtools(
    persist(
      (set, get) => ({
        allData: Data,
        filteredData: [],
        selectedPlant: {},
        allStates: [],
        handleGetPlantsByState: (stateName) => {
          set((state) => ({
            filteredData: state.allData.filter(
              (plant) => plant.States === stateName
            ),
          }));
        },
        handleGetAllStates: () => {
          let ar = [];

          get().allData.map((plant) => {
            !ar.includes(plant.States) && ar.push(plant.States);
          });

          set(() => ({
            allStates: ar,
          }));
        },
        handleSetSelectedPlant: (plant) => {
          set(() => ({
            selectedPlant: plant,
          }));
        },
        getCountsData: (count) => {
          set(() => ({
            filteredData: Data.slice(0, count),
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

export default useStore;
