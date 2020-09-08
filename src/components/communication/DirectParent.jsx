import React from "react";

import DirectChild from "./DirectChild";

export default (props) => {
  return (
    <div>
      <DirectChild name="Júnior" age={10} isNerd={true}></DirectChild>
      <DirectChild name="Gabriel" age={20} isNerd={false}></DirectChild>
    </div>
  );
};
