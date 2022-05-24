import imageUser from "../assests/user.jpg";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import AddContact from "../Pages/AddContact";

const Contact = ({ contact, onDelete, onEdit }) => {
  return (
    <div className="contact">
      <Link
        to={`contactview/${contact.id}`}
        style={{ width: "70%", textDecoration: "none" }}
      >
        <div className="contactUser">
          <img src={imageUser} alt="user" className="imgUser"></img>
          <div>
            <p className="name">{contact.name}</p>
            <p className="phone">{contact.phoneNumber}</p>
            <p className="mail">{contact.email}</p>
          </div>
        </div>
      </Link>

      <div>
        <button className="iconBtn" onClick={() => onDelete(contact.id)}>
          <MdDelete className="Delete" />
        </button>
        <button className="iconBtn" onClick={() => onEdit(contact)}>
          <MdEdit className="EditIcon" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
