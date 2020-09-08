import React from "react";

import IndirectChild from "./IndirectChild";

export default (props) => {
  const getInfo = (name, age, isNerd) => {
    console.log(name, age, isNerd);
  };

  return (
    <div>
      <div>Pai</div>
      <IndirectChild onClick={getInfo}></IndirectChild>
    </div>
  );
};
