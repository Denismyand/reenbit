import React from "react";
import { users } from "../utils/users";
import styles from "../style/contacts.module.css";
import { getDate } from "../utils/reusableFunctions";

export function Contacts() {
  const sortedUsers = users.sort(
    (a, b) =>
      b.messages[b.messages.length - 1].time -
      a.messages[a.messages.length - 1].time
  );
  return (
    <>
      <div className={styles.contactsSection}>
        <div className={styles.userAndSearch}></div>
        <p className={styles.chatHeader}>Chats</p>
        {sortedUsers.map((user) => {
          return (
            <div className={styles.profile} key={user.id}>
              <img className={styles.profilePic} src={user.profilePic} />
              <div>
                <p>{user.name}</p>
                <p className={styles.latestMessage}>
                  {user.messages[user.messages.length - 1].message}
                </p>
              </div>
              <p className={styles.date}>
                {getDate(user.messages[user.messages.length - 1].time)}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
