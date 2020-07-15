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
    toto: "tata",
    age: 27,
  };

  toggle = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  render() {
    const { toggle } = this;
    const { open } = this.state;
    return (
      <div className="app">
        <Header amount={1} />
        <Toggler open={open} toggle={toggle} />
        {open && <Currencies list={data} />}

        <Amount value={1.09} currency="United States Dollar" />
      </div>
    );
  }
}

// == Composant
// const App = () => (
//   <div className="app">
//     <Header amount={1} />
//     <Currencies list={data} />
//     <Amount value={1.09} currency="United States Dollar" />
//   </div>
// );

// == Export
export default App;
