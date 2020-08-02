import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const FreelanceWrapper = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid white;
`;

const FreelanceName = styled.h2`
  font-size: 2.2rem;
  line-height: 2.6rem;
  margin-bottom: 0.5rem;
  & > p {
    margin: 0;
  }
`;

const FreelanceYear = styled.div`
  display: flex;
  margin: 1rem 0;
`;

class Freelance extends React.Component {
  render() {
    const { name, duration, desc } = this.props.details;
    return (
      <>
        <FreelanceWrapper>
          <FreelanceName>
            <ReactMarkdown source={name} />
          </FreelanceName>
          {duration !== "" ? <FreelanceYear>{duration}</FreelanceYear> : null}
          <div>{desc}</div>
        </FreelanceWrapper>
      </>
    );
  }
}

export default Freelance;
