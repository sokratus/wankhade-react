import React from "react";
import styled from "styled-components";
import Title from "../../styles/Title";

const Body = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
`;

const textBlock = props => {
  return (
    <>
      <Title title={props.title} />
      <Body>{props.desc}</Body>
    </>
  );
};

export default textBlock;
