import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const CompanyWrapper = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid white;
`;

const CompanyPosition = styled.h2`
  font-size: 2.2rem;
  line-height: 2.6rem;
  margin: 0;
`;

const CompanyNameWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
`;

const CompanyName = styled.div`
  & > p {
    margin: 0;
  }
`;

const CompanyDuration = styled.div`
  margin-left: 0.5rem;
  /* padding-left: 0.5rem; */

  &::before {
    content: "•";
    margin-right: 0.5rem;
  }
`;

class Company extends React.Component {
  render() {
    const { position, name, duration, desc } = this.props.details;
    return (
      <>
        <CompanyWrapper>
          <CompanyPosition>{position}</CompanyPosition>
          <CompanyNameWrapper>
            <CompanyName>
              <ReactMarkdown source={name} />
            </CompanyName>
            <CompanyDuration>{duration}</CompanyDuration>
          </CompanyNameWrapper>
          <ReactMarkdown source={desc} />
        </CompanyWrapper>
      </>
    );
  }
}

export default Company;
