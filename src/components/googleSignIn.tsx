import React from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { changeUser, setContacts } from "../utils/slices/contactsSlice";

export function GoogleLogin() {
  const dispatch = useDispatch();

  function getContacts(user: string) {
    let storedContacts = localStorage.getItem(`Chats of user ${user}`);
    if (storedContacts && storedContacts !== "") {
      dispatch(setContacts(JSON.parse(storedContacts)));
    }
  }

  function handleAuthorizeUser(user: string) {
    dispatch(changeUser(user));
  }

  const login = useGoogleLogin({
    onSuccess: (response) => {
      handleAuthorizeUser(response.authuser);
      getContacts(response.authuser);
    },
    flow: "auth-code",
  });

  return <button onClick={login}>Log in </button>;
}

export function GoogleLogout() {
  const dispatch = useDispatch();

  function handleUnAuthorizeUser() {
    dispatch(changeUser(""));
  }

  function handleLogout() {
    handleUnAuthorizeUser();
    googleLogout();
  }

  return <button onClick={handleLogout}> Logout</button>;
}
