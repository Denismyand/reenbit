import { configureStore } from "@reduxjs/toolkit";
import { contactsReducers } from "./slices/contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducers.contacts,
    auth: contactsReducers.authentificator,
  },
});
