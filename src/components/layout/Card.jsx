import React from "react";

import "./Card.css";

export default ({ title, color, children }) => {
  const cardStyle = {
    backgroundColor: color || "#F00",
    borderColor: color || "#F00",
  };
  return (
    <div className="card" style={cardStyle}>
      <div className="card-title">{title}</div>
      <div className="card-content">{children}</div>
    </div>
  );
};
