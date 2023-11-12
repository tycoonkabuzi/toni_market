import "../style/Header.css";

import Data from "../database/headerData";
import { useState } from "react";

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState({
    blue: false,
    purpule: false,
    green: false,
    red: false,
  });
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
    setCurrentIndex((prev) => {
      let current = prev + number;
      return current;
    });
  }

  return (
    <div className="main">
      <div className="mainText">
        <h1>
          <span className="grayPart">{toGray(Data[currentIndex])} </span>
          {toBlack(Data[currentIndex])}
        </h1>
        <div className="containerDots ">
          <span
            className={`blue ${active.blue ? "active" : ""}`}
            onClick={() => handleCurrousel(1, "blue")}
          ></span>
          <span
            className={`purpule ${active.purpule ? "active" : ""}`}
            onClick={() => handleCurrousel(2, "purpule")}
          ></span>
          <span
            className={`red ${active.red ? "active" : ""}`}
            onClick={() => handleCurrousel(3, "red")}
          ></span>
          <span
            className={`green ${active.green ? "active" : ""}`}
            onClick={() => handleCurrousel(4, "green")}
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
