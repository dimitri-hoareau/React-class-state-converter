import React from "react";
import "./style.scss";
import PropTypes, { checkPropTypes } from "prop-types";

const Currencies = (props) => {
  return (
    <div className="currencies">
      <div className="currencies-title">Currencies</div>
      <ul className="currencies-list">
        {props.list.map((objetCurrency) => (
          <li
            key={objetCurrency.name}
            className="currency"
            onClick={() => {
              props.onCurrencyClick(objetCurrency);
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
