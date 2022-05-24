import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="pageNotFound">
      <p className="cardtxt">Page Not Found </p>
      <Link
        style={{ marginLeft: "1rem", color: "#f9f9f9", fontSize: "20px" }}
        to="/"
      >
        Go to Contacts page
      </Link>
    </div>
  );
};

export default NotFound;
