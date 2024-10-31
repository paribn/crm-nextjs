import React from "react";
import styles from "./button.module.scss";
const Button = ({ text, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default Button;
