import React, { cloneElement } from "react";

export default ({ children, ...props }) => (
  <div>
    {children.map((child, i) => cloneElement(child, { ...props, key: i }))}
  </div>
);
