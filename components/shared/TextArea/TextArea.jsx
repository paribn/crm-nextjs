import React from "react";
import styles from "./textArea.module.scss";
const TextArea = ({ ...props }) => {
  return (
    <div className={styles.textarea__container}>
      <label htmlFor="description">Description</label>
      <textarea id="description" {...props}></textarea>
    </div>
  );
};

export default TextArea;
