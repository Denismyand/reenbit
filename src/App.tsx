import React, { useState } from "react";
import "./styles/App.css";
import styles from "./styles/contacts.module.css";
import { getDate } from "./utils/reusableFunctions";
import { self } from "./utils/users";
import { ContactsSlice, User } from "./utils/types";
import { MiniProfile } from "./components/MiniProfile";
import { useSelector } from "react-redux";
import { Chat } from "./components/Chat";

export default function App() {
  const contacts = useSelector((state: ContactsSlice) => state.contacts);
  const [searchLine, setSearchLine] = useState("");
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchLine.toLowerCase()) ||
      contact.surname.toLowerCase().includes(searchLine.toLowerCase())
  );

  return (
    <div className="application">
      <div className={styles.contactsSection}>
        <div className={styles.userAndSearch}>
          <MiniProfile user={self} />
          <input
            value={searchLine}
            className={styles.searchBar}
            placeholder="Search"
            onChange={(e) => setSearchLine(e.target.value)}
          />
        </div>
        <div className={styles.contactList}>
          {filteredContacts.length > 0 && (
            <p className={styles.contactsHeader}>Chats</p>
          )}
          {filteredContacts.length < 1 && (
            <p className={styles.nothingIsFound}>{`Nothing is found 😢`}</p>
          )}
          {filteredContacts.map((contact) => {
            return <Contact contact={contact} />;
          })}
        </div>
      </div>
      <Chat />
    </div>
  );
}

function Contact({ contact }: { contact: User }) {
  return (
    <div className={styles.profile} key={contact.id}>
      <MiniProfile user={contact} />
      <div>
        <p>{contact.name}</p>
        <p className={styles.latestMessage}>
          {contact.messages[contact.messages.length - 1].message}
        </p>
      </div>
      <div className={styles.date}>
        {getDate(contact.messages[contact.messages.length - 1].time)}
      </div>
    </div>
  );
}
