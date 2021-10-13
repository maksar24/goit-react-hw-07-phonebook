import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const add = createAction("contacts/add", (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const remove = createAction("contacts/remove", (id) => ({
  payload: id,
}));

const filter = createAction("contacts/filter");

export default {
  add,
  remove,
  filter,
};
