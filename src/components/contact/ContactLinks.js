import React from "react";
import Link from "./Links";

const contactLinks = props => {
  return (
    <>
      <Link link="https://twitter.com/sokratus" title="twitter" />
      <Link link="#" title="linkedin" />
      <Link link="#" title="Dribbble" />
      <Link link="#" title="Email" />
    </>
  );
};

// class ContactLinks extends React.Component {
//   render() {
//     return (
//       <div>
//         <div className="link">
//           <a href="">Tweets</a>
//         </div>
//         <div className="link">
//           <a href="">LinkedIn</a>
//         </div>
//         <div className="link">
//           <a href="">Dribbble</a>
//         </div>
//         <div className="link">
//           <a href="">Email</a>
//         </div>
//       </div>
//     );
//   }
// }

export default contactLinks;
