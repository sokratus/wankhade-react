import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  width: 40%;
`;
const MainContent = styled.div`
  /* background: black; */
`;

const PageContainer = () => (
  <PageWrapper>
    <MainContent>This is main content</MainContent>
  </PageWrapper>
);

export default PageContainer;
