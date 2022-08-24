import React, { useState } from "react";
import { User } from "../utils/types";
import styles from "../styles/chat.module.css";
import { MiniProfile } from "./MiniProfile";

export function Chat({ contact }: { contact: User }) {
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className={styles.chat}>
      <div className={styles.chatHeader}>
        <MiniProfile user={contact} />
        <p className={styles.userName}>{contact.name}</p>
      </div>
      <div className={styles.chatWindow}></div>
      <form
        className={styles.chatInputSection}
        onSubmit={(e) => {
          e.preventDefault();
          setNewMessage("");
        }}
      >
        <input
          className={styles.newMessageInput}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder={"Enter your message"}
        />
        <button className={styles.newMessageSendButton} type="submit" />
      </form>
    </div>
  );
}
