import React from "react";
import styles from "./textArea.module.scss";
const TextArea = () => {
  return (
    <div className={styles.textarea__container}>
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        placeholder="Enter your description here..."
      ></textarea>
    </div>
  );
};

export default TextArea;
