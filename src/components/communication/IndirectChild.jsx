import React from "react";

export default ({ onClick }) => {
  return (
    <div>
      <div>Filho</div>
      <button onClick={() => onClick("João", 56, true)}>
        Fornecer Informações
      </button>
    </div>
  );
};
