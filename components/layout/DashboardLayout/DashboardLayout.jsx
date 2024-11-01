"use client";

import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
import {
  BurgerIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  NotificationsIcon,
  PlusIcon,
  ProfileIcon,
} from "@/assets/images/auth/vector";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const pathName = usePathname();
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    setSidebar(false);
  }, [pathName]);

  return (
    <div className={styles.dashboard}>
      <aside className={`${sidebar ? styles.active : ""}`}>
        <div
          className={styles.sidebar__out}
          onClick={() => {
            setSidebar(false);
          }}
        ></div>
        <div className={`${styles.sidebar}`}>
          <div className={styles.logo}>
            <LogoIcon />
          </div>
          <div className={styles.navigations}>
            <ul>
              <li>
                <Link href={"/dashboard"}>
                  <HomeIcon />
                </Link>
              </li>
              <li>
                <Link href={"/dashboard/creation"}>
                  <PlusIcon />
                </Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link href={"/auth/login"}>
                  <LogoutIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div className={styles.dashboard__content}>
        <header className={styles.dashboard__header}>
          <button
            className={styles.sidebar__button}
            onClick={() => {
              setSidebar(true);
            }}
          >
            <BurgerIcon />
          </button>
          <div className={styles.buttons}>
            <NotificationsIcon />
            <ProfileIcon />
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
