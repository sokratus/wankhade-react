import React from "react";
import Company from "./Company";
import Freelance from "./Freelance";
import CompanyInfo from "../../../data/companyInfo";
import FreelanceInfo from "../../../data/freelanceinfo";
import Title from "../../styles/Title";

class cvBlock extends React.Component {
  state = {
    companies: CompanyInfo,
    freelance: FreelanceInfo
  };

  render() {
    console.log(this.state);

    return (
      <>
        <Title title="CV ⏳" />
        <div>
          {Object.keys(this.state.companies).map(key => (
            <Company key={key} details={this.state.companies[key]} />
          ))}
        </div>
        <Title title="Side Projects 🪓" />
        <div>
          {Object.keys(this.state.freelance).map(key => (
            <Freelance key={key} details={this.state.freelance[key]} />
          ))}
        </div>
      </>
    );
  }
}

export default cvBlock;
