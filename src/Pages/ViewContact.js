import imageUser from "../assests/user.jpg";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Contacts from "./Contacts";
import blob1 from "../blob1.svg";
import blob2 from "../blob2.svg";
const ViewContact = ({ contacts }) => {
  const params = useParams();
  const id = params.id;

  const contact = contacts.filter((c) => c.id == id);
  return (
    <div>
      <img src={blob1} alt="blob1" className="circle5" />
      <img src={blob2} alt="blob2" className="circle6" />
      <div className="showcontact">
        <img src={imageUser} alt="user" className="profile"></img>
        <h1 className="profileName">{contact.map((c) => c.name)}</h1>
        <h3 className="phoneCard">
          <FaPhone style={{ marginRight: "15px" }} />
          <span>{contact.map((c) => c.phoneNumber)}</span>
        </h3>
        <button className="postCard">
          <FaEnvelope style={{ marginRight: "20px", fontSize: "17px" }} />
          <span>{contact.map((c) => c.email)}</span>
        </button>
        <button className="postCard">
          <FaMapMarkerAlt style={{ marginRight: "20px", fontSize: "17px" }} />
          <span>{contact.map((c) => c.nationality)}</span>
        </button>
      </div>
    </div>
  );
};

export default ViewContact;
