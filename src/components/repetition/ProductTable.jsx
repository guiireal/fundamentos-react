import React from "react";

import products from "../../data/products";

import "./ProductTable.css";

export default (props) => (
  <table className="product-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Preço</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product, i) => (
        <tr key={product.id} className={i % 2 === 0 ? "even" : "odd"}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>R$ {product.price.toFixed(2).replace(".", ",")}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
