import React from "react";
import styled from "@emotion/styled";
import useSelector from "../store/store";
import Details from "../components/DetailsContainer";
import { CountSelect, StateSelect } from "../components/Select";

const MainContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const filteredState = useSelector((state) => state.filteredData); // this is a state in which all the filtered data are stored. Seprated variable is used to retain the state of the data.

  return (
    <MainContainer>
      <h1 className="top-heading">Annual Net Generation of the Years</h1>
      <FlexContainer>
        <CountSelect />
        <StateSelect />
      </FlexContainer>
      {filteredState.length > 0 && <Details />}
    </MainContainer>
  );
};

export default Home;
