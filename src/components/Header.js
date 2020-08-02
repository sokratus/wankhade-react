import React from "react";

// const Header = props => (
//          <div>
//             {props.headerTitle}
//          </div>
// )

const header = props => <div className="header">{props.headerTitle}</div>;

// class Header extends React.Component {
//   render() {
//     return (
//       <PageContainer>
//         <div>{this.props.headerTitle}</div>;
//       </PageContainer>
//     );
//   }
// }

export default header;
