import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="header-title">Converter</h1>
      <p className="header-amount">{props.amount} euro</p>
    </div>
  );
};

Header.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default Header;
