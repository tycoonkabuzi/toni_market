import logo from "../assets/logo.png";
import "../style/Nav.css";
import searchLogo from "../assets/search.png";
import bagLogo from "../assets/bag.png";
function Nav() {
  return (
    <nav>
      <img className="logo" alt="logo" src={logo} />
      <ul className="nav__links">
        <li className="active">Home</li>
        <li>Collection</li>
        <li>Brand</li>
        <li>Blog</li>
      </ul>
      <ul className="icons">
        <li>
          <img alt="logo" src={searchLogo} />
        </li>
        <li>
          <img alt="logo" src={bagLogo} />
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
