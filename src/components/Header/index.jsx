import "../../style/Header.css";

import Data from "../../database/headerData";
import { useEffect, useState } from "react";

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
    <div className="main" style={animation}>
      <div className="mainText">
        <h1>
          <span className="grayPart">{toGray(Data[currentIndex])} </span>
          {toBlack(Data[currentIndex])}
        </h1>
        <div className="containerDots ">
          <span
            className={`blue ${active.blue ? "active" : ""}`}
            onClick={() => handleCurrousel(0, "blue")}
          ></span>
          <span
            className={`purpule ${active.purpule ? "active" : ""}`}
            onClick={() => handleCurrousel(1, "purpule")}
          ></span>
          <span
            className={`red ${active.red ? "active" : ""}`}
            onClick={() => handleCurrousel(2, "red")}
          ></span>
          <span
            className={`green ${active.green ? "active" : ""}`}
            onClick={() => handleCurrousel(3, "green")}
          ></span>
        </div>
      </div>
      <div>
        <div className={`containterShoe ${Data[currentIndex].color}`}>
          <img
            alt="shoe main showing front page "
            src={Data[currentIndex].pic}
          />
          <div className="price">
            <h1>${Data[currentIndex].price}</h1>
            <p>${Data[currentIndex].oldPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
