import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";
import PropTypes from "prop-types";
import { List, Item, Button } from "./ContactList.styles";

const ContactList = ({ options, onDelete }) => {
  return (
    <List>
      {options.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </Item>
        );
      })}
    </List>
  );
};

const mapStateToProps = (state) => {
  const { filter, items } = state.contacts;

  const visibleContacts = items.filter((el) => {
    return el.name.toLowerCase().includes(filter.toLowerCase());
  });

  return {
    options: visibleContacts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(contactsActions.remove(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
