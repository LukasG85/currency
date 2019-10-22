import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import CurrencyConverter from "./components/CurrencyConverter";
import Transactions from "./components/Transactions";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <div className="App">
      <h1>currency converter</h1>
      <CurrencyConverter />
      <AddTransaction />
      <Transactions />
    </div>
  );
}

export default App;
