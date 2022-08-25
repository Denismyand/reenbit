import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../types";
import { users } from "../users";

const storedUserId = localStorage.getItem(`current session`);

const authUser = storedUserId ? storedUserId : "";

const authentificator = createSlice({
  name: "googleAuth",
  initialState: authUser,
  reducers: {
    changeUser(state, action) {
      localStorage.setItem(`current session`, action.payload);
      return (state = action.payload);
    },
  },
});

const storedContacts = localStorage.getItem(`Chats of user ${authUser}`);

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
    setContacts(state, action) {
      return (state = action.payload);
    },
  },
});

export const contactsReducers = {
  contacts: contactList.reducer,
  authentificator: authentificator.reducer,
};
export const { addMessage, setContacts } = contactList.actions;
export const { changeUser } = authentificator.actions;
