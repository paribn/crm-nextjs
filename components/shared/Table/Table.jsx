import React from "react";
import styles from "./table.module.scss";
import { FrameIcon } from "@/assets/images/auth/vector";

export default function Table({ headers, children }) {
  return (
    <div className={styles.table__container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            {headers?.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            <th>
              <FrameIcon />
              <FrameIcon />
              <FrameIcon />
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
