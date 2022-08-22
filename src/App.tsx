import React from "react";
import "./style/App.css";
import { Contacts } from "./components/Contacts";
import { Chat } from "./components/Chat";

export default function App() {
  return (
    <div className="application">
      <Contacts />
      <Chat />
    </div>
  );
}
