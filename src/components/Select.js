import styled from "@emotion/styled";
import useSelector from "../store/store";

const Select = styled.select`
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.1 rem;
`;

const FormControl = styled.div`
  margin: 0rem 1rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Option = styled.option`
  font-size: 1.1rem;
`;

const CountSelect = () => {
  const handleGetCountsData = useSelector((state) => state.getCountsData); // function that will takes input the number of count and return top N plant
  const filteredState = useSelector((state) => state.filteredData); // this is a state in which all the filtered data are stored. Seprated variable is used to retain the state of the data.

  return (
    <FormControl>
      <Select
        label="Select Number of States"
        onChange={(e) => {
          handleGetCountsData(e.target.value);
        }}
        value={filteredState.length}
      >
        <Option value="">Select Number of Plants</Option>
        {[10, 50, 100, 200, 500, 700, 900, 701].map((item, index) => {
          return (
            typeof item === "number" && (
              <Option key={index} value={item}>
                {item}
              </Option>
            )
          );
        })}
      </Select>
    </FormControl>
  );
};

const StateSelect = () => {
  const allStates = useSelector((state) => state.allStates); // All the plant unique states are stored in this variable
  const handleGetPlantsByState = useSelector(
    (state) => state.handleGetPlantsByState
  ); // function that will is used to get the plants by state

  // get selected State of plant from the store
  const selectedState = useSelector((state) => state.selectedState);

  return (
    <FormControl fullWidth>
      <Select
        onChange={(e) => {
          handleGetPlantsByState(e.target.value);
        }}
        value={selectedState}
      >
        <Option value="">Select State of Plants </Option>
        {allStates.map((item, index) => {
          return (
            item !== "" && (
              <Option key={index} value={item}>
                {item}
              </Option>
            )
          );
        })}
      </Select>
    </FormControl>
  );
};

export { CountSelect, StateSelect };
