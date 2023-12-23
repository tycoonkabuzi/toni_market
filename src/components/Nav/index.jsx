import logo from "../../assets/logo.png";
import logoWhite from "../../assets/logowhite.png";

import searchLogo from "../../assets/search.png";
import bagLogo from "../../assets/bag.png";
import Cart from "../Cart";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Main = styled.nav`
  margin-top: 60px;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-around;
  align-items: center;

  ${(props) =>
    props.scroll &&
    ` background-color: black;
    margin-top: 0;
    color: white;
    height: 60px;
    margin-top: 0px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 2;
    transition: ease-in-out 0.3s;

   `}
`;

const Icons = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  width: 100px;
`;
const NavLinks = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 400px;
`;
const NavLink = styled(Link)`
  list-style: none;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #e04646;
  }
  ${(props) => (props.active ? `color: red; font-weight:800` : "")}
`;
const Logo = styled.img`
  width: 50px;
`;
const IconImage = styled.img`
  width: 20px;
`;

function Nav() {
  const [scroll, setScroll] = useState(false);
  const [close, setClose] = useState(false);
  function handleCloseTrigger() {
    setClose(true);
  }
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
    if (window.scrollY >= 120) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  return (
    <Main scroll={scroll}>
      <NavLink to="/">
        <Logo src={scroll ? logoWhite : logo} />
      </NavLink>
      <NavLinks>
        <NavLink
          to="/"
          active={active.home}
          onClick={() => handleActiveness("home")}
        >
          Home
        </NavLink>
        <NavLink
          active={active.collection}
          onClick={() => handleActiveness("collection")}
        >
          Collection
        </NavLink>
        <NavLink
          active={active.brand}
          onClick={() => handleActiveness("brand")}
        >
          Brand
        </NavLink>
        <NavLink active={active.blog} onClick={() => handleActiveness("blog")}>
          Blog
        </NavLink>
      </NavLinks>
      <Icons>
        <NavLink>
          <IconImage alt="logo" src={searchLogo} />
        </NavLink>
        <NavLink>
          <IconImage alt="bagLogo" src={bagLogo} onClick={handleCloseTrigger} />
        </NavLink>
      </Icons>
      {close ? <Cart toClose={close} setToClose={setClose} /> : close}
    </Main>
  );
}
export default Nav;
