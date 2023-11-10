import "../style/Header.css";

import Data from "../database/headerData";
import { useState } from "react";
function toGray(word) {
  const grayPart = word.text.split(" ", 2).join(" ");
  return grayPart;
}
function toBlack(word) {
  const inBlackArray = word.text.split(" ");
  const inBlack = inBlackArray.slice(2).join(" ");
  return inBlack;
}

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleCurrousel(number) {
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
        <div className="containerDots">
          <span className="blue" onClick={() => handleCurrousel(0)}></span>
          <span className="purpule" onClick={() => handleCurrousel(1)}></span>
          <span className="red" onClick={() => handleCurrousel(2)}></span>
          <span className="green" onClick={() => handleCurrousel(3)}></span>
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
