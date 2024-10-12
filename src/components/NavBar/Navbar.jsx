import PropTypes from "prop-types";
import "./Navbar.css";
import logo from "../../assets/Tech-Tooth-Logo.png";
import Button from "../Button/Button";
import { useState } from "react";

const Navbar = (props) => {
  const [listMenu, setListMenu] = useState(false);

  const showOptionsMenu = () => {
    if (!listMenu) {
      setListMenu(true);
    } else {
      setListMenu(false);
    }
  }

  return (
    <>
      <div className="navbar">
        <div className="box">
          <img className="logo" src={logo} width={'250px'} />
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
        <a href="#contato" className="a">
          <Button className="button" text="Solicitar Demonstração" padding="0.6rem 8%" radius="10px" />
        </a>


        <div className="mobile">
          {!listMenu &&
            <div className="menu" onClick={showOptionsMenu}>
              <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-list iconMenu" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
              </svg>
            </div>
          }
          </div>

          {listMenu &&
            <div className="closeBox">
              <div onClick={showOptionsMenu} className="div">
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-x-lg close" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </div>
              <ul>
                {props.items.map((item, index) => (
                  <li key={index} className="navbar-item">
                    <a href={item.href} className="navbar-link">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          }
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
