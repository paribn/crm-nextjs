import React from "react";
import styles from "./Dashboard.module.scss";
import {
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  NotificationsIcon,
  PlusIcon,
  ProfileIcon,
} from "@/assets/images/auth/vector";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.dashboard}>
      <aside>
        <div className={styles.logo}>
          <LogoIcon />
        </div>
        <div className={styles.navigations}>
          <ul>
            <li>
              <Link href={"/"}>
                <HomeIcon />
              </Link>
            </li>
            <li>
              <Link href={"/create"}>
                <PlusIcon />
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <LogoutIcon />
            </li>
          </ul>
        </div>
      </aside>
      <div className={styles.dashboard__content}>
        <header className={styles.dashboard__header}>
          <NotificationsIcon />
          <ProfileIcon />
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
