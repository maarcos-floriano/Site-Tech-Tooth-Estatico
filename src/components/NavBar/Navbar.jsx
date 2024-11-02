import PropTypes from "prop-types";
import "./Navbar.css";
import logo from "../../assets/Tech-Tooth-Logo.svg";

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
        <div className="box" onClick={() => { window.location.href = '#home'; }}>
          <img className="logo" src={logo} width={'250px'} />
          <h1 className="navbar-title">TECH TOOTH</h1>
        </div>

        <div className="navbar-content">
          <ul className="navbar-links">
            {props.items.map((item, index) => (
              <li key={index} className="navbar-item">
                <a href={item.href} className="navbar-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="contained" style={{width: '40%', backgroundColor: '#007bff'}} onClick={() => { window.location.href = '#contato'; }}>Solicitar Demonstração</Button>
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
