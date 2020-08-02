import React from "react";
import styled from "styled-components";
import Header from "./Header";
import ContactLinks from "./contact/ContactLinks";
import ContentBlock from "./content/ContentBlock";

const Container = styled.main`
  margin: 0 auto;
  padding: 5rem;
  max-width: 124rem;
`;

const Home = props => (
  <div>
    <Container>
      <Header headerTitle="Abhijeet Wankhade" />
      <ContactLinks />
      <ContentBlock />
    </Container>
  </div>
);

export default Home;
