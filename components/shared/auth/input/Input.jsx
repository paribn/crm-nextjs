import React from "react";
import styles from "./input.module.scss";
const Input = ({ className, title, ...props }) => {
  return (
    <label className={className}>
      <span>{title}</span>
      <input {...props} />
    </label>
  );
};

export default Input;
