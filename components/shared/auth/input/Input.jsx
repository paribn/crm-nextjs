import React from "react";
import styles from "./input.module.scss";

const Input = ({ className, title, errors, ...props }) => {
  return (
    <label className={className}>
      <span>{title}</span>
      <input {...props} />
      {errors && <p className={styles.error}>{errors}</p>}
    </label>
  );
};

export default Input;
