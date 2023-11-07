import logo from "../assets/logo.png";
import logoWhite from "../assets/logowhite.png";
import "../style/Nav.css";
import searchLogo from "../assets/search.png";
import bagLogo from "../assets/bag.png";
import { useEffect, useState } from "react";

function Nav() {
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState({
    home: true,
    collection: false,
    brand: false,
    blog: false,
  });
  function handleActiveness(item) {
    setActive((prevElement) => {
      const updateState = { ...prevElement, [item]: !prevElement[item] };
      for (const element in updateState) {
        if (element !== item) {
          updateState[element] = false;
        }
      }
      return updateState;
    });
  }
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
        <li
          onClick={() => handleActiveness("home")}
          className={active.home ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => handleActiveness("collection")}
          className={active.collection ? "active" : ""}
        >
          Collection
        </li>
        <li
          onClick={() => handleActiveness("brand")}
          className={active.brand ? "active" : ""}
        >
          Brand
        </li>
        <li
          onClick={() => handleActiveness("blog")}
          className={active.blog ? "active" : ""}
        >
          Blog
        </li>
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
