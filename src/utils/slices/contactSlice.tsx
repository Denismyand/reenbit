import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../types";
import { users } from "../users";

let authUser = "";

const authentificator = createSlice({
  name: "googleAuth",
  initialState: authUser,
  reducers: {
    changeUser(state, action) {
      return (state = action.payload.toString());
    },
  },
});

let storedContacts = localStorage.getItem("contacts");

const contacts: Users = storedContacts ? JSON.parse(storedContacts) : users;

const contactList = createSlice({
  name: "users",
  initialState: contacts,
  reducers: {
    addMessage(state, action) {
      return (state = state.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
        return user;
      }));
    },
  },
});

export const contactsReducers = {
  contacts: contactList.reducer,
  authentificator: authentificator.reducer,
};
export const { addMessage } = contactList.actions;
export const { changeUser } = authentificator.actions;
