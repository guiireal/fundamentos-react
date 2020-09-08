import React from "react";

import "./App.css";

import Card from "./components/layout/Card";

import First from "./components/basics/First";
import WithParams from "./components/basics/WithParams";
import Random from "./components/basics/Random";
import Family from "./components/basics/Family";
import Member from "./components/basics/Member";

import StudentList from "./components/repetition/StudentList";
import ProductTable from "./components/repetition/ProductTable";

import EvenOrOdd from "./components/conditional/EvenOrOdd";
import UserInfo from "./components/conditional/UserInfo";

import DirectParent from "./components/communication/DirectParent";
import IndirectParent from "./components/communication/IndirectParent";

export default () => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <div className="container">
      <Card title="#01 - Primeiro Componente" color="##FA6900">
        <First />
      </Card>
      <Card title="#02 - Com Parâmetros" color="#E9466F">
        <WithParams title="Componente" />
      </Card>
      <Card title="#03 - Desafio Aleatório" color="#E8B71A">
        <Random min={1} max={60} />
      </Card>
      <Card title="#04 - Componente com Filhos" color="#00C8F8">
        <Family lastName="França">
          <Member firstName="Guilherme" />
          <Member firstName="Danielle" />
          <Member firstName="Alessandra" />
          <Member firstName="Renatta" />
        </Family>
      </Card>
      <Card title="#05 - Repetição" color="#FF4C65">
        <StudentList />
      </Card>
      <Card title="#06 - Produtos" color="#FA6900">
        <ProductTable />
      </Card>
      <Card title="#07 - Renderização Condicional" color="#00C8F8">
        <EvenOrOdd number={20} />
        <UserInfo user={{ name: "Guilherme" }} />
        <UserInfo user={{ email: "joao@gmail.com" }} />
      </Card>
      <Card title="#08 - Comunicação Direta" color="#59323C">
        <DirectParent />
      </Card>
      <Card title="#09 - Comunicação Indireta" color="#8bad39">
        <IndirectParent />
      </Card>
    </div>
  </div>
);
