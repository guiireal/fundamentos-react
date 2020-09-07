import React from "react";

export default ({ firstName, lastName }) => {
  return (
    <div>
      <span>
        {firstName} <strong>{lastName}</strong>
      </span>
    </div>
  );
};
