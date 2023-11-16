import "../style/Header.css";

import Data from "../database/headerData";
import { useEffect, useState } from "react";

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState({
    blue: true,
    purpule: false,
    green: false,
    red: false,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const numberOfElements = Data.length;
      setCurrentIndex((prev) => {
        const current = (prev + 1) % numberOfElements;
        console.log(current);
        const keys = Object.keys(active);
        const indexWhatColor = keys[current];

        console.log(indexWhatColor);
        setActive((prev) => {
          const updateColor = {
            ...prev,
            [indexWhatColor]: !prev[indexWhatColor],
          };
          console.log(updateColor);
          return updateColor;
        });
        /*

       

       
 if (current === 0) {
          setActive({
            blue: true,
            purpule: false,
            green: false,
            red: false,
          });
        } else if (current === 1) {
          setActive({
            blue: false,
            purpule: true,
            green: false,
            red: false,
          });
        } else if (current === 2) {
          setActive({
            blue: false,
            purpule: false,
            green: false,
            red: true,
          });
        } else if (current === 3) {
          setActive({
            blue: false,
            purpule: false,
            green: true,
            red: false,
          });
        }
*/
        return current;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);
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
    <div className="main">
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
