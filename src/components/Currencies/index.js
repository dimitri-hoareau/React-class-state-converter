import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

const Currencies = (props) => {
  return (
    <div className="currencies">
      <div className="currencies-title">Currencies</div>
      <ul className="currencies-list">
        {props.list.map((objetCurrency) => (
          <li key={objetCurrency.name} className="currency">
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
      name: isRequired,
    }).isRequired
  ).isRequired,
};

export default Currencies;
