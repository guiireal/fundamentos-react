import React from "react";

export default ({ number }) => (
  <div>{number % 2 === 0 ? <span>Par</span> : <span>Ímpar</span>}</div>
);
