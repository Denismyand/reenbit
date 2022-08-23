import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../types";
import { users } from "../users";

const contacts: Users = users.sort(
  (a, b) =>
    b.messages[b.messages.length - 1].time -
    a.messages[a.messages.length - 1].time
);

const contactSlice = createSlice({
  name: "users",
  initialState: contacts,
  reducers: {
    changeContactList(state, action: { payload: Users }) {
      return (state = action.payload);
    },
  },
});

export default contactSlice.reducer;
export const { changeContactList } = contactSlice.actions;
