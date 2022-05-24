import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import blob1 from "../blob1.svg";
import blob2 from "../blob2.svg";
import { useState } from "react";
import AddContact from "./AddContact";

const Contacts = ({ contacts, onDelete, onupdateContacts }) => {
  const [edit, setEdit] = useState({ id: null });

  const onEdit = (contact) => {
    setEdit({ id: contact.id, ...contact });
  };

  const AddContacts = (contact) => {
    onupdateContacts(contact, edit.id);
    setEdit({ id: null });
  };

  const message = () => {
    return (
      <div>
        <p className="cardtxt">Please Enter Add Contact</p>
        <Link to="/add" className="AddContact">
          Add Contact
        </Link>
      </div>
    );
  };

  const renderContact = () => {
    return (
      <div className="contacts">
        <Link to="/add" className="AddContact">
          Add Contact
        </Link>
        {contacts.map((contact) => {
          return (
            <Contact
              contact={contact}
              key={contact.id}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          );
        })}
      </div>
    );
  };
  return (
    <div>
      <img src={blob1} alt="blob1" className="circle3" />
      <img src={blob2} alt="blob2" className="circle4" />
      {edit.id ? (
        <AddContact onedit={edit} AddContacts={AddContacts} />
      ) : contacts.length ? (
        renderContact()
      ) : (
        message()
      )}
    </div>
  );
};

export default Contacts;
