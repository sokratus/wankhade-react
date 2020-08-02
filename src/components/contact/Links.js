import React from "react";

const link = props => {
  return (
    <div>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.title}
      </a>
    </div>
  );
};

export default link;
