import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const title = props => <Title>{props.title}</Title>;

export default title;
