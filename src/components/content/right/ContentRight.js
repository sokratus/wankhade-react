import React from "react";
import styled from "styled-components";
// import TextBlock from "./TextBlock";
import CVBlock from "./CVBlock";

const Right = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30%;
`;

const contentRight = () => {
  return (
    <Right>
      <CVBlock />
    </Right>
  );
};

export default contentRight;
