// == Import npm
import React from "react";
import Header from "../Header";
import Currencies from "../Currencies";
import Amount from "../Amount";

import "./styles.css";

import data from "../../data/currencies";

// == Composant
const App = () => (
  <div className="app">
    <Header amount={1} />
    <Currencies list={data} />
    <Amount value={1.09} currency="United States Dollar" />
  </div>
);

// == Export
export default App;
