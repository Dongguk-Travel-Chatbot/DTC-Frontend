/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ReactIconsFi = ({
  className,
  reactIconsFi = "https://c.animaapp.com/x2g7jTEH/img/react-icons-fi-fimorehorizontal@2x.png",
}) => {
  return <img className={`react-icons-fi ${className}`} alt="React icons fi" src={reactIconsFi} />;
};

ReactIconsFi.propTypes = {
  reactIconsFi: PropTypes.string,
};
