import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Input } from "./Filter.styles";
import contactsActions from "../../redux/contacts/contacts-actions";

const Filter = ({ type, label, value, onChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <Input
        type={type}
        onChange={onChange}
        placeholder={label}
        value={value}
      />
    </>
  );
};

Filter.defaultProps = {
  type: "text",
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsActions.filter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
