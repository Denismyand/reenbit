import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../types";
import { users } from "../users";

let storedContacts = localStorage.getItem("contacts");

const contacts: Users = storedContacts ? JSON.parse(storedContacts) : users;

const contactSlice = createSlice({
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

export default contactSlice.reducer;
export const { addMessage } = contactSlice.actions;
