import React from "react";
import styled from "@emotion/styled";
const Box = styled.div`
  padding: 1rem;
`;
const H1 = styled.h1`
  font-size: 4rem;
  text-align: center;
  font-weight: 600;
`;
const User = () => {
  return (
    <Box my={2}>
      <H1>User Page</H1>
    </Box>
  );
};

export default User;
