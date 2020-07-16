// == Import npm
import React from "react";
import Header from "../Header";
import Currencies from "../Currencies";
import Amount from "../Amount";
import Toggler from "../Toggler";

import "./styles.css";

import data from "../../data/currencies";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     open: true,
  //     toto: "tata",
  //     age: 27,
  //   };
  // }

  state = {
    open: true,
    search: "toto",
    baseAmount: 1,
    devise: {
      name: "United States Dollar",
      rate: 1.09,
    },
  };

  toggle = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  setSelectedCurrency = (currency) => {
    this.setState({
      devise: currency,
    });
  };

  render() {
    const { open, devise, baseAmount } = this.state;

    const roundedConversion = Math.round(baseAmount * devise.rate * 100) / 100;

    return (
      <div className="app">
        <Header amount={baseAmount} />
        <Toggler open={open} toggle={this.toggle} />
        {open && (
          <Currencies list={data} onCurrencyClick={this.setSelectedCurrency} />
        )}

        <Amount value={roundedConversion} currency={devise.name} />
      </div>
    );
  }
}

// == Export
export default App;
