// == Import npm
import React from "react";
import Header from "../Header";
import Currencies from "../Currencies";
import Amount from "../Amount";
import Toggler from "../Toggler";

import "./styles.css";

import data from "../../data/currencies";

/*

  Objectif: Manipuler les lifecycles
  
  Je souhaiterais, dés que mon composant App
  est rendu pour la première fois, lancer un setInterval
  d'une fonction qui fait un console.log("coucou"), toutes les secondes.

  Evidemment, je ne veux pas que ce console.log continue
  si mon app est démontée

  Trouver une solution :grin:

  BONUS

  Changer le titre de la page
  En fonction de la devise sélectionnée

*/

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     open: true,
  //     toto: "tata",
  //     age: 27,
  //   };
  // }

  constructor(props) {
    super(props);
    console.log("Ici je fais ce que je veux AVANT le rendu de mon composant");
  }

  state = {
    open: true,
    search: "",
    baseAmount: 1,
    devise: {
      name: "United States Dollar",
      rate: 1.09,
    },
  };

  updatePageTitle = () => {
    document.title = `Euro to ${this.state.devise.name} converter`;
  };

  componentDidMount() {
    console.log("Le composant App est monté");
    // Juste pour l'exemple, ici je pourrais
    // lancer une fonction, qui sera répétée toutes les secondes
    // avec un setInterval
    this.updatePageTitle();
    this.interval = setInterval(() => {}, 1000);
  }

  componentDidUpdate() {
    console.log("Le composant a été mis à jour dans le dom");
    this.updatePageTitle();
  }

  componentWillUnmount() {
    console.log("Je peux faire une derniere action avant de disparaitre");
    // Ici je pourrais arrêter le setIntervall que j'ai lancé
    // pour faire mes requêtes toutes les secondes
    clearInterval(this.interval);
  }

  getCurrencies = () => {
    const { search } = this.state;
    const list = data;

    // Si search est vide
    // Renvoyer la liste complète
    if (search.length === 0) {
      return list;
    }
    // Sinon
    // Renvoyer le tableau de devises filtré
    // pour ne conserver que celles dont le
    // .name inclue search
    return list.filter((deviseObject) => {
      // Je mets en minuscule le nom de la devise
      const deviseName = deviseObject.name.toLowerCase();
      // Je mets en minuscule le texte recherché
      const lowerSearch = search.toLowerCase();
      // Je renvoie true ou false si le nom de devise inclue le terme recherché
      return deviseName.includes(lowerSearch);
    });
  };

  changeSearch = (text) => {
    this.setState({
      search: text,
    });
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

  changeBaseAmount = (number) => {
    this.setState({
      baseAmount: number,
    });
  };

  render() {
    console.log("Je rend le composant");
    const { open, devise, baseAmount, search } = this.state;

    const roundedConversion = Math.round(baseAmount * devise.rate * 100) / 100;

    return (
      <div className="app">
        <Header amount={baseAmount} onChange={this.changeBaseAmount} />
        <Toggler open={open} toggle={this.toggle} />
        {open && (
          <Currencies
            search={search}
            onFilterChange={this.changeSearch}
            list={this.getCurrencies()}
            onCurrencyClick={this.setSelectedCurrency}
          />
        )}

        <Amount value={roundedConversion} currency={devise.name} />
      </div>
    );
  }
}

// == Export
export default App;
