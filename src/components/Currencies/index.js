import React from "react";
import "./style.scss";
import PropTypes, { checkPropTypes } from "prop-types";

const Currencies = (props) => {
  const { list, onCurrencyClick, search, onFilterChange } = props;
  return (
    <div className="currencies">
      <input
        type="text"
        placeholder="Filter..."
        className="currencies-search"
        value={search}
        onChange={(evt) => {
          const content = evt.target.value;
          // Je voudrais changer dans mon state
          // cla propriété "search" pour qu'elle
          // contienne ce qui a été tapé
          console.log(content);
          onFilterChange(content);
        }}
      />
      <ul className="currencies-list">
        {list.map((objetCurrency) => (
          <li
            key={objetCurrency.name}
            className="currency"
            onClick={() => {
              onCurrencyClick(objetCurrency);
            }} // Au cclic j'execute la fonction RETURNED par handleClick
          >
            {objetCurrency.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

Currencies.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Currencies;
