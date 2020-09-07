import React from "react";

export default ({ min, max }) => {
  const random = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2>Valor aleatório</h2>
      <p>
        <strong>Valor Mínimo:</strong>
        {min}
      </p>
      <p>
        <strong>Valor Máximo:</strong>
        {max}
      </p>
      <p>
        <strong>Valor Escolhido:</strong>
        {random}
      </p>
    </div>
  );
};