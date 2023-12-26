import logo from "../../assets/logo.png";
import logoWhite from "../../assets/logowhite.png";
import search from "../../assets/search.png";
import searchWhite from "../../assets/searchWhite.png";
import bag from "../../assets/bag.png";
import bagWhite from "../../assets/bagWhite.png";
import Cart from "../Cart";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

// css in js
const Main = styled.nav`
  position: relative;
  margin-top: 60px;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-around;
  align-items: center;
  z-index: 1;

  ${(props) =>
    props.scroll &&
    ` background-color: black;
    margin-top: 0;
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
  color: #4d4d4d;
  text-decoration: none;
  cursor: pointer;
  ${(props) =>
    props.scroll &&
    `
    color: white;
   `}
  ${(props) => (props.location !== `/` ? `color: #ffffff;` : ``)}

  &:hover {
    color: #e04646;
  }
  ${(props) => (props.active ? `color: red; font-weight:800` : ``)}
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
  const location = useLocation();

  function handleCloseTrigger() {
    setClose(true);
  }

  const active = {
    home: location.pathname === "/",
    collection: location.pathname === "/collection",
    brand: location.pathname === "/brand",
    blog: location.pathname === "/blog",
  };
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
        <Logo src={scroll || location.pathname !== "/" ? logoWhite : logo} />
      </NavLink>
      <NavLinks>
        <NavLink
          to="/"
          active={active.home}
          scroll={scroll}
          location={location.pathname}
        >
          Home
        </NavLink>
        <NavLink
          to="/collection"
          active={active.collection}
          scroll={scroll}
          location={location.pathname}
        >
          Collection
        </NavLink>
        <NavLink
          active={active.brand}
          scroll={scroll}
          location={location.pathname}
        >
          Brand
        </NavLink>
        <NavLink
          active={active.blog}
          scroll={scroll}
          location={location.pathname}
        >
          Blog
        </NavLink>
      </NavLinks>
      <Icons>
        <NavLink>
          <IconImage
            alt="logo"
            src={scroll || location.pathname !== "/" ? searchWhite : search}
          />
        </NavLink>
        <NavLink>
          <IconImage
            alt="bagLogo"
            src={scroll || location.pathname !== "/" ? bagWhite : bag}
            onClick={handleCloseTrigger}
          />
        </NavLink>
      </Icons>
      {close ? <Cart toClose={close} setToClose={setClose} /> : close}
    </Main>
  );
}
export default Nav;
