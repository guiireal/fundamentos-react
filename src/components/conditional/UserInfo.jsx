import React from "react";
import If, { Else } from "./If";

export default ({ user }) => (
  <div>
    <span>Seja bem vindo </span>
    <If test={user && user.name}>
      <strong>{user.name}</strong> !
      <Else>
        <strong>Amigão</strong> !
      </Else>
    </If>
  </div>
);
