import React from "react";
import styles from "../styles/googleAuth.module.css";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { changeUser, setContacts } from "../utils/slices/contactsSlice";

export function LoginPage() {
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
    onSuccess: (response: any) => {
      handleAuthorizeUser(response.authuser);
      getContacts(response.authuser);
    },
    flow: "auth-code",
  });

  return (
    <>
      <div className={styles.loginPage}>
        <div className={styles.loginWindonw}>
          <h2>Welcome</h2>
          <p>Please sign in with your google account</p>
          <button className={styles.logInButton} onClick={login} />
        </div>
      </div>
    </>
  );
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

  return (
    <button className={styles.logOutButton} onClick={handleLogout}>
      Logout
    </button>
  );
}
