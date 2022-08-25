import React, { useEffect, useRef, useState } from "react";
import { Message, User } from "../utils/types";
import styles from "../styles/chat.module.css";
import { MiniProfile } from "./MiniProfile";
import { getDateTime } from "../utils/reusableFunctions";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/slices/contactsSlice";

let timer: NodeJS.Timeout;

export function Chat({
  contact,
  setContact,
}: {
  contact: User;
  setContact: (contact: User) => void;
}) {
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef<null | HTMLDivElement>(null);

  const getJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) =>
        updateMessages({
          message: data.value,
          type: "received",
          time: Date.now(),
        })
      );
  };

  const dispatch = useDispatch();

  function receiveResponse() {
    clearTimeout(timer);
    timer = setTimeout(() => getJoke(), 10000);
  }

  function sendMessage() {
    updateMessages({ message: newMessage, type: "sent", time: Date.now() });
  }

  function updateMessages(message: Message) {
    let updatedContact = {
      ...contact,
      messages: [...contact.messages, message],
    };
    setContact(updatedContact);
  }

  useEffect(() => {
    function scrollToBottom() {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
    function addMessageToHistory() {
      dispatch(addMessage(contact));
    }
    scrollToBottom();
    addMessageToHistory();
  }, [contact, dispatch]);

  return (
    <div className={styles.chat}>
      <div className={styles.chatHeader}>
        <MiniProfile user={contact} />
        <p className={styles.userName}>{contact.name}</p>
      </div>
      <div className={styles.chatWindow}>
        {contact.messages.map((message) => (
          <ChatMessage key={message.time} contact={contact} message={message} />
        ))}
        <div ref={scrollRef} />
      </div>
      <form
        className={styles.chatInputSection}
        onSubmit={(e) => {
          e.preventDefault();
          receiveResponse();
          setNewMessage("");
        }}
      >
        <input
          className={styles.newMessageInput}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder={"Type your message"}
        />
        <button
          className={styles.newMessageSendButton}
          type="submit"
          onClick={() => sendMessage()}
          disabled={newMessage === ""}
        />
      </form>
    </div>
  );
}

function ChatMessage({
  contact,
  message,
}: {
  contact: User;
  message: Message;
}) {
  return (
    <div className={styles.chatMessage}>
      {message.type === "received" && (
        <img
          className={styles.chatSenderPic}
          src={contact.profilePic}
          alt={contact.name}
        />
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
        <p className={styles.chatMessageDate}>{getDateTime(message.time)}</p>
      </div>
    </div>
  );
}
