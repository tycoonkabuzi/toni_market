import plus from "../../assets/plus.png";

import styled, { css, keyframes } from "styled-components";
import Data from "../../database/favouriteData";
import Filter from "../Filter";
import { useEffect, useState } from "react";

const Main = styled.div`
  background-color: rgb(250, 247, 247);
  height: 800px;
`;
const Menu = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  align-items: center;
  justify-content: start;
  padding-top: 50px;
  padding-left: 5%;
  gap: 300px;
`;
const FilterButton = styled.div`
  background-color: rgb(255, 255, 255);
  width: 90px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid gray;
  &:hover {
    border: 1px solid red;
  }
`;
const Plus = styled.img`
  width: 20px;
`;
const ListElement = styled.li`
  color: #363636;
  list-style: none;
  cursor: pointer;
  &:hover {
    color: red;
  }
  ${(props) => (props.active ? `color:red;font-weight: 800;` : ``)};
`;
const MainContent = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 30px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding-left: 10%;

  padding-top: 50px;
`;
const Item = styled.div`
  padding-bottom: 20px;
`;
const ShoeBackground = styled.div`
  background-color: rgb(241, 241, 241);
  width: 200px;
  height: 200px;
  transform: scale(1);
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  animation: ${(props) =>
    props.isAnimated
      ? css`
          ${fadeIn} 0.5s ease-in-out
        `
      : ``};
`;
const Shoe = styled.img`
  padding-top: 20px;
  width: 200px;
  transform: scale(1);
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
const ShoeTitle = styled.div`
  width: 200px;
  line-height: 1px;
  text-align: left;
`;
// keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
function TheStore() {
  const [active, setActive] = useState({
    men: true,
    women: false,
    kids: false,
  });
  const [genre, setGenre] = useState(() => {
    const filteredData = Data.filter((shoe) => shoe.for === "men"); // Replace 'men' with the desired value
    return filteredData;
  });
  const [close, setClose] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    setIsAnimated(true);
    // clean  up the animation when the componennt is unmount
    return () => {
      setIsAnimated(false);
    };
  }, []);
  function handleActive(item) {
    setGenre(() => {
      const filteredData = Data.filter((shoe) => shoe.for === item);
      return filteredData;
    });

    setActive((props) => {
      const updateState = { ...props, [item]: !props[item] };

      for (let element in updateState) {
        if (element !== item) {
          updateState[element] = false;
        }
      }
      return updateState;
    });
  }
  function handleOpenCloseFilter() {
    setClose(!close);
  }
  return (
    <Main>
      <Menu>
        <ListElement>
          <FilterButton onClick={handleOpenCloseFilter}>
            <p>Filter</p>
            <Plus alt="plus" src={plus} />
          </FilterButton>
          {close ? <Filter /> : ""}
        </ListElement>

        <ListElement active={active.men} onClick={() => handleActive("men")}>
          Men
        </ListElement>
        <ListElement
          active={active.women}
          onClick={() => handleActive("women")}
        >
          Women
        </ListElement>
        <ListElement active={active.kids} onClick={() => handleActive("kids")}>
          Kids
        </ListElement>
      </Menu>

      <MainContent className="store">
        {genre.map((shoe) => (
          <Item>
            <ShoeBackground isAnimated={isAnimated}>
              <Shoe alt={shoe.shoeName} src={shoe.picture} />
            </ShoeBackground>
            <ShoeTitle>
              <h4>{shoe.shoeName}</h4>
              <p> {shoe.price}</p>
            </ShoeTitle>
          </Item>
        ))}
      </MainContent>
    </Main>
  );
}
export default TheStore;
