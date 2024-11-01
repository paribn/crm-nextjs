import React from "react";
import styles from "./title.module.scss";
import Link from "next/link";
const Title = ({ title, desc, btnSubject }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>

      <Link href={"/dashboard/creation"} className={styles.button}>
        <span>{btnSubject}</span>
      </Link>
    </div>
  );
};

export default Title;
