import React from "react";
import "./styles/App.css";
import { ContactsState } from "./utils/types";
import { useSelector } from "react-redux";
import { LoginPage } from "./components/googleSignIn";
import { ChatApp } from "./components/ChatApp";

export default function App() {
  const authUser = useSelector((state: ContactsState) => state.auth);

  return authUser && authUser !== "" ? <ChatApp /> : <LoginPage />;
}
