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
  filteredContacts.sort(
    (a, b) =>
      b.messages[b.messages.length - 1].time -
      a.messages[a.messages.length - 1].time
  );
  const [selectedContact, setSelectedContact] = useState(filteredContacts[0]);

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
            return (
              <Contact
                key={contact.id}
                contact={contact}
                setSelectedContact={setSelectedContact}
              />
            );
          })}
        </div>
      </div>
      <Chat contact={selectedContact} setContact={setSelectedContact} />
    </div>
  );
}

function Contact({
  contact,
  setSelectedContact,
}: {
  contact: User;
  setSelectedContact: (contact: User) => void;
}) {
  return (
    <div className={styles.contact} onClick={() => setSelectedContact(contact)}>
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
