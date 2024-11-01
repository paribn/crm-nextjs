import Image from "next/image";
import React from "react";
import styles from "./AuthLayout.module.scss";
import LoginBackground from "@/assets/images/auth/22.png";
import Dashboard from "@/assets/images/auth/Dashboard 1.png";
import { HelpIcon, LogoIcon } from "@/assets/images/auth/vector";

export default function AuthLayout({ children }) {
  return (
    <div className={styles.auth}>
      <div className={styles.auth__content}>
        <div className={styles.auth__content__logo}>
          <LogoIcon />
          <div className={styles.auth__content__logo__help}>
            <HelpIcon />
            <p>Help</p>
          </div>
        </div>

        <div className={styles.auth__content__body}>{children}</div>
      </div>

      <div className={styles.auth__image}>
        <h1 className={styles.auth__image__title}>
          Collaboration with influencers made easy.
        </h1>

        <Image src={LoginBackground} alt="Loginn background" />

        <Image
          className={styles.auth__image__dashboard}
          src={Dashboard}
          alt="Dashboard"
        />
      </div>
    </div>
  );
}
