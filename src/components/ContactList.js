import React from "react";
import { Link } from "react-router-dom";
import ContactCart from "./ContactCart";

export default function ContactList(props) {
  console.log(props);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Dip",
  //     email: "cds@gmail.com",
  //   },
  // ];
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCart
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="ui main container ">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui right floated primary button">
            Add Contact
          </button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>;
    </div>
  );
}
