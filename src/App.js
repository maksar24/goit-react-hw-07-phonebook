import React from "react";
import Form from "./Components/Form/Form";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import { Wrapper } from "./App.styles";

export default function App() {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter label="Enter contact name" />
      <ContactList />
    </Wrapper>
  );
}
