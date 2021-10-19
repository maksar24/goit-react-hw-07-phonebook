import { useState } from "react";
import { Form } from "./Components/Form/Form";
import { ContactList } from "./Components/ContactList/ContactList";
import { Filter } from "./Components/Filter/Filter";
import { Wrapper } from "./App.styles";
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} from "./redux/contacts/slices/contactsSlice";
import { CustomLoader } from "./Components/Loader/Loader";

export default function App() {
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const [createContact] = useCreateContactMutation();
  const [filter, setFilter] = useState("");

  const normalizedFilter = filter.toLowerCase();
  const showContacts = () => {
    if (filter === "") {
      return data;
    }
    return data.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filterData = showContacts();

  const getSearchName = (e) => {
    setFilter(e.target.value);
  };

  function addNewContact(newContact) {
    const similarName = data.map((el) => el.name);

    if (similarName.includes(newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      createContact(newContact);
    }
  }

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <Form onSubmit={addNewContact} />
      <h2>Contacts</h2>
      <Filter getSearchName={getSearchName} label="Enter contact name" />
      {isFetching && <CustomLoader />}
      {data && <ContactList options={filterData} onDelete={deleteContact} />}
    </Wrapper>
  );
}
