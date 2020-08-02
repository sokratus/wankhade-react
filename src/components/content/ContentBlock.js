import React from "react";
import styled from "styled-components";
// import TextBlock from "./TextBlock";
import ContentLeft from "./left/ContentLeft";
import ContentRight from "./right/ContentRight";

const Wrapper = styled.div`
  display: flex;
`;

// const Left = styled.div``;

// const Right = styled.div``;

const contentBlock = () => {
  return (
    <Wrapper>
      <ContentLeft />
      <ContentRight />
    </Wrapper>
  );
};

export default contentBlock;
