import { combineReducers } from "redux";
import actions from "./contacts-actions";
import { createReducer } from "@reduxjs/toolkit";

const items = createReducer([], {
  [actions.add]: (state, { payload }) => {
    const similarName = state.map((el) => el.name);

    if (similarName.includes(payload.name)) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }
    return [payload, ...state];
  },
});

const filter = createReducer("", {
  [actions.filter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
