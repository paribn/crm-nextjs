import React from "react";
import styles from "./title.module.scss";
const Title = ({ title, desc, btnSubject }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <button className={styles.button}>
        <span>{btnSubject}</span>
      </button>
    </div>
  );
};

export default Title;
