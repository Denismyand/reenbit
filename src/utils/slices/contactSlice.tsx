import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../types";
import { users } from "../users";

const contacts: Users = users;

const contactSlice = createSlice({
  name: "users",
  initialState: contacts,
  reducers: {
    addMessage(state, action) {
      let nextState = state.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
        return user;
      });
      return (state = nextState);
    },
  },
});

export default contactSlice.reducer;
export const { addMessage } = contactSlice.actions;
