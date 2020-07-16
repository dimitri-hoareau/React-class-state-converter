import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="header-title">Converter</h1>
      <input
        type="number"
        onChange={(evt) => {
          console.log(evt.target.value);
          // Appeler une fonction pour lui donner
          // la valeur du nouveau state
          const { value } = evt.target;
          let number = parseInt(value, 10);
          if (!number) {
            number = 0;
          }
          props.onChange(number);
        }}
        value={props.amount}
        className="header-amount"
      />
    </div>
  );
};

Header.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default Header;
