import React, { useState } from "react";
import { connect } from "react-redux";
import { BlankPhonebook, Input, Button, Label } from "./Form.styles";
import contactsActions from "../../redux/contacts/contacts-actions";

function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handelChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(name, number);
    reset();
  };

  return (
    <BlankPhonebook onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handelChange}
          value={name}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handelChange}
          value={number}
        />
      </Label>
      <Button>Add contact</Button>
    </BlankPhonebook>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) => dispatch(contactsActions.add(name, number)),
});

export default connect(null, mapDispatchToProps)(Form);
