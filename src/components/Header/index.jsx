import styled, { keyframes } from "styled-components";
import Data from "../../database/headerData";
import { useEffect, useState } from "react";
// keyFrames annimations
const blue = "#47A7ED";
const purpule = "#CC53E8";
const green = "#42CB81";
const red = "#E04646";
const gray = "#b7b7b7";
const updownAnimation = keyframes`
    0% {
        transform: translateY(-90px);
        opacity: 0;
    }

    100% {
          transform: translateY(0);
          opacity: 1;
    }`;
const rightLeftAnimation = keyframes`  0% {
        transform: translateX(100px);
    }
    100% {
        transform: translateX(0);
    }`;
const rightToLeftImageAnimation = keyframes` 0% {
        transform: translateX(100px) rotate(-26deg);

    }

    100% {
        transform: translateX(0) rotate(-26deg);
    }`;

const Main = styled.div`
  padding-top: 100px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  grid-gap: 20px;
  height: 600px;
`;
const TextContainer = styled.div`
  background-color: none;
`;
const Text = styled.h1`
  font-size: 80px;
  width: 650px;
  text-align: left;
  line-height: 80px;
  animation: ${updownAnimation} 2s ease-in;
`;
const CircleShoes = styled.div`
  width: 400px;
  height: 400px;
  ${(props) =>
    props.active && props.currentIndex === 0
      ? `background-color:${blue};`
      : props.active && props.currentIndex === 1
      ? ` background-color: ${purpule};`
      : props.active && props.currentIndex === 2
      ? ` background-color:${green};`
      : props.active && props.currentIndex === 3
      ? ` background-color: ${red}; `
      : ""};
  border-radius: 100%;
  position: relative;
  animation: ${rightLeftAnimation} 1.5s ease-in-out;
`;
const Shoes = styled.img`
  width: 500px;
  transform: rotate(-26deg);
  position: absolute;
  right: -30px;
  top: 100px;
  animation: ${rightToLeftImageAnimation} 4s ease-in-out;
`;
const ContainerDots = styled.div`
  background-color: rgb(232, 232, 232);
  width: 150px;
  height: 30px;
  border-radius: 100px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  align-items: center;
  justify-content: space-around;
  padding: 0 5px 0 5px;
  margin: auto;
`;
const Dot = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${(props) =>
    props.active.blue
      ? "blue"
      : props.active.purpule
      ? "purple"
      : props.active.red
      ? "red"
      : props.active.green
      ? "green"
      : ` ${gray}`};

  ${(props) =>
    props.active && props.currentIndex === 0
      ? `background-color: ${blue};width: 20px;
    height: 20px;
    border: solid 3px rgb(255, 255, 255);`
      : props.active && props.currentIndex === 1
      ? ` background-color: ${purpule}; width: 20px;
    height: 20px;
    border: solid 3px rgb(255, 255, 255);`
      : props.active && props.currentIndex === 2
      ? ` background-color: ${green}; width: 20px;
    height: 20px;
    border: solid 3px rgb(255, 255, 255);`
      : props.active && props.currentIndex === 3
      ? ` background-color:${red} ; width: 20px;
    height: 20px;
    border: solid 3px rgb(255, 255, 255);`
      : ""};
`;
const Price = styled.div`
  position: absolute;
  right: -50px;
  top: -20px;
  line-height: 5px;
`;
const CurrentPrice = styled.h1`
  font-weight: 800;
`;
const PreviousPrice = styled.p`
  text-decoration: line-through;
`;
const GrayPart = styled.span`
  color: ${gray};
`;

function Header() {
  // creating useState for the current index.
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState({
    blue: true,
    purpule: false,
    red: false,
    green: false,
  });
  const [animation, setAnimation] = useState({});

  useEffect(() => {
    let current;
    setAnimation({
      transform: "translateX(-20px)",
      transition: "ease-in 1s ",
    });
    const interval = setInterval(() => {
      const numberOfElements = Data.length;
      setCurrentIndex((prev) => {
        current = (prev + 1) % numberOfElements;
        return current;
      });
      setActive((prev) => {
        const keys = Object.keys(active);
        const indexWhatColor = keys[current];
        const updateColor = {
          ...prev,
          [indexWhatColor]: !prev[indexWhatColor],
        };
        for (const element in updateColor) {
          if (element !== indexWhatColor) {
            updateColor[element] = false;
          }
        }
        return updateColor;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, [currentIndex, active]);

  function toGray(word) {
    const grayPart = word.text.split(" ", 2).join(" ");
    return grayPart;
  }
  function toBlack(word) {
    const inBlackArray = word.text.split(" ");
    const inBlack = inBlackArray.slice(2).join(" ");
    return inBlack;
  }
  function handleCurrousel(number, color) {
    setActive((prev) => {
      const updateState = { ...prev, [color]: !prev[color] };
      for (const element in updateState) {
        if (element !== color) {
          updateState[element] = false;
        }
      }
      return updateState;
    });
    setCurrentIndex(number);
  }

  return (
    <Main style={animation}>
      <TextContainer>
        <Text>
          <GrayPart>{toGray(Data[currentIndex])} </GrayPart>
          {toBlack(Data[currentIndex])}
        </Text>

        <ContainerDots>
          <Dot
            active={active.blue}
            currentIndex={currentIndex}
            onClick={() => handleCurrousel(0, "blue")}
          />
          <Dot
            active={active.purpule}
            currentIndex={currentIndex}
            onClick={() => handleCurrousel(1, "purpule")}
          />
          <Dot
            active={active.red}
            currentIndex={currentIndex}
            onClick={() => handleCurrousel(2, "red")}
          />
          <Dot
            active={active.green}
            currentIndex={currentIndex}
            onClick={() => handleCurrousel(3, "green")}
          />
        </ContainerDots>
      </TextContainer>
      <div>
        <CircleShoes active={active} currentIndex={currentIndex}>
          <Shoes
            alt="shoe main showing front page "
            src={Data[currentIndex].pic}
          />
          <Price>
            <CurrentPrice>${Data[currentIndex].price}</CurrentPrice>
            <PreviousPrice>${Data[currentIndex].oldPrice}</PreviousPrice>
          </Price>
        </CircleShoes>
      </div>
    </Main>
  );
}
export default Header;
