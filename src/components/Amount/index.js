import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

const Amount = (props) => {
  return (
    <div className="amount">
      <p className="amount-value">{props.value}</p>
      <p className="amount-currency">{props.currency}</p>
    </div>
  );
};

Amount.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Amount;
