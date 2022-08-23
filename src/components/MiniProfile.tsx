import React from "react";
import styles from "../styles/miniProfile.module.css";
import { MiniProfileData } from "../utils/types";

export function MiniProfile({ user }: { user: MiniProfileData }) {
  return (
    <div
      className={
        styles.pictureAndStatus +
        " " +
        (user.online ? styles.online : styles.offline)
      }
    >
      <img
        className={styles.profilePic}
        src={user.profilePic}
        alt={user.name}
      />
      <div className={styles.status}>{user.online && "🗸"}</div>
    </div>
  );
}
