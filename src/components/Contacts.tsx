import React from "react";
import styles from "../style/contacts.module.css";
import { getDate } from "../utils/reusableFunctions";
import { users } from "../utils/users";
import { User } from "../utils/types";
import yourProfilePic from "../utils/userProfilePic.jpg";

export function Contacts() {
  const sortedUsers = users.sort(
    (a, b) =>
      b.messages[b.messages.length - 1].time -
      a.messages[a.messages.length - 1].time
  );
  return (
    <>
      <div className={styles.contactsSection}>
        <div className={styles.userAndSearch}>
          <div className={styles.pictureAndStatus + " " + styles.online}>
            <img src={yourProfilePic} className={styles.profilePic} />
            <div className={styles.status}>{"🗸"}</div>
          </div>
          <input className={styles.searchBar} placeholder="Search" />
        </div>
        <div className={styles.contactList}>
          <p className={styles.chatHeader}>Chats</p>
          {sortedUsers.map((user) => {
            return <Contact user={user} />;
          })}
        </div>
      </div>
    </>
  );
}

function Contact({ user }: { user: User }) {
  return (
    <div className={styles.profile} key={user.id}>
      <div
        className={
          styles.pictureAndStatus +
          " " +
          (user.online ? styles.online : styles.offline)
        }
      >
        <img className={styles.profilePic} src={user.profilePic} />
        <div className={styles.status}>{user.online && "🗸"}</div>
      </div>
      <div>
        <p>{user.name}</p>
        <p className={styles.latestMessage}>
          {user.messages[user.messages.length - 1].message}
        </p>
      </div>
      <div className={styles.date}>
        {getDate(user.messages[user.messages.length - 1].time)}
      </div>
    </div>
  );
}
