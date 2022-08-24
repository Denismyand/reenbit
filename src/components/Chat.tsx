import React, { useState } from "react";
import { User } from "../utils/types";
import styles from "../styles/chat.module.css";
import { MiniProfile } from "./MiniProfile";
import { getDateTime } from "../utils/reusableFunctions";

export function Chat({ contact }: { contact: User }) {
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className={styles.chat}>
      <div className={styles.chatHeader}>
        <MiniProfile user={contact} />
        <p className={styles.userName}>{contact.name}</p>
      </div>
      <div className={styles.chatWindow}>
        {contact.messages.map((message) => (
          <div className={styles.chatMessage} key={message.time}>
            {message.type === "received" && (
              <img className={styles.chatSenderPic} src={contact.profilePic} />
            )}
            <div
              className={styles.chatMessageInfo}
              style={{
                textAlign: message.type === "received" ? "left" : "right",
              }}
            >
              <p
                className={
                  styles.chatMessageText +
                  " " +
                  (message.type === "received" ? styles.received : styles.sent)
                }
              >
                {message.message}
              </p>
              <p className={styles.chatMessageDate}>
                {getDateTime(message.time)}
              </p>
            </div>
          </div>
        ))}
      </div>
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
          placeholder={"Type your message"}
        />
        <button className={styles.newMessageSendButton} type="submit" />
      </form>
    </div>
  );
}
