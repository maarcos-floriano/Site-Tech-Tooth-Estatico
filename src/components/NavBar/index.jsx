import PropTypes from "prop-types";
import { Button } from "@mui/material";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <>
      <div className="navbar">
        <div>
          <h1 className="navbar-title">Tech Tooth</h1>
        </div>
        <ul className="navbar-links">
          {props.items.map((item, index) => (
            <li key={index} className="navbar-item">
              <a href={item.href} className="navbar-link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div>
        <Button variant="contained">Solicitar Demosntração</Button>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
