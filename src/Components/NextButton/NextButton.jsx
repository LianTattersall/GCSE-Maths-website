import { Link } from "react-router-dom";
import "./NextButton.css";

function NextButton({ label, path }) {
  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <button className="next-button">{label}</button>
    </Link>
  );
}

export default NextButton;
