import logo from "../assets/logo.png";
import logoWhite from "../assets/logowhite.png";
import "../style/Nav.css";
import searchLogo from "../assets/search.png";
import bagLogo from "../assets/bag.png";
import { useEffect, useState } from "react";
function Nav() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  return (
    <nav className={scroll ? "scrolled" : ""}>
      <img className="logo" alt="logo" src={scroll ? logoWhite : logo} />
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
