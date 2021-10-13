import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import contactReducer from "./contacts/contacts-reducer";
import { contactsApi } from "./contacts/slices/contactsSlice";

const middleware = [...getDefaultMiddleware(), contactsApi.middleware, logger];

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
