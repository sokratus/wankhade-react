import React from "react";
import Company from "./Company";
// import ReactMarkdown from "react-markdown";
import CompanyInfo from "../../../data/companyInfo";
import Title from "../../styles/Title";

class cvBlock extends React.Component {
  state = {
    companies: CompanyInfo
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
      </>
    );
  }
}

export default cvBlock;
