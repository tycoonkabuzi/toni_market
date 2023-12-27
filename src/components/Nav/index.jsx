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
  @media only screen and (max-width: 600px) {
    grid-template-columns: auto auto;
  }

  ${(props) =>
    props.scroll &&
    ` 
  background-color: black;
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
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    position: absolute;
    right: 0;
    padding-top: 100px;
    top: -100px;
    background-color: #242424;
    width: 50%;
    height: 500px;
    display: ${(props) => (props.display ? "grid" : "none")};
    color: white;
    grid-template-columns: auto;
    ${(props) => (props.scroll ? `top:-15px;` : "none")}
  }
`;
const HamburgerMenu = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    height: 50px;
    display: block;
    position: absolute;
    right: 50px;
    z-index: 1;
    margin-top: 23px;
  }
`;
const FirstLine = styled.span`
  ${(props) =>
    props.display
      ? `background-color:white; rotate:-45deg; margin-top:15px;`
      : `background-color:black; margin-top:0;`};
  display: block;
  width: 35px;
  height: 3px;
  margin-bottom: 5px;
  border-radius: 20px;
  ${(props) => (props.scroll ? `background-color:white; ` : `black`)}
`;
const SecondLine = styled.span`
  background-color: black;
  display: ${(props) => (props.display ? "none" : "block")};
  ${(props) => (props.scroll ? `background-color:white;` : `black`)};
  width: 25px;
  height: 3px;
  margin-bottom: 5px;
  border-radius: 20px;
`;
const ThirdLine = styled.span`
  ${(props) =>
    props.display
      ? `background-color:white; rotate:45deg;margin-top:-7.4px`
      : `background-color:black; margin-top:0;`};
  display: block;
  width: 35px;
  height: 3px;
  border-radius: 20px;
  ${(props) => (props.scroll ? `background-color:white;` : `black`)}
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
  ${(props) => (props.active ? `color: red; font-weight:800;` : ``)}

  @media only screen and (max-width: 600px) {
    color: white;
  }
`;
const Logo = styled.img`
  width: 50px;
`;
const IconImage = styled.img`
  width: 20px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

function Nav() {
  const [scroll, setScroll] = useState(false);
  const [close, setClose] = useState(false);
  const [display, setDisplay] = useState(false);
  const location = useLocation();

  function handleCloseTrigger() {
    setClose(true);
  }

  function handleDisplay() {
    setDisplay(!display);
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
      <HamburgerMenu onClick={handleDisplay} scroll={scroll}>
        <FirstLine display={display} scroll={scroll}></FirstLine>
        <SecondLine display={display} scroll={scroll}></SecondLine>
        <ThirdLine display={display} scroll={scroll}></ThirdLine>
      </HamburgerMenu>
      <NavLinks display={display} scroll={scroll}>
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
          to="/brand"
          active={active.brand}
          scroll={scroll}
          location={location.pathname}
        >
          Brand
        </NavLink>
        <NavLink
          to="/blog"
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
