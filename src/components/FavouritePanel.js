import "../style/FavouritePanel.css";
import positive from "../assets/positive.png";
import negative from "../assets/negative.png";

import favouriteData from "../database/favouriteData";
import next from "../assets/next.png";
import previous from "../assets/previous.png";
import { useState } from "react";

function FavouritePanel() {
  const [translateX, setTranslateX] = useState(0);
  const [numberOfStars, setNumberOfStars] = useState(5);
  function handlePrevious() {
    setTranslateX(translateX + 800);
  }
  function handleNext() {
    setTranslateX(translateX - 800);
  }
  if (translateX === 800 || translateX === -4000) {
    setTranslateX(0);
  }
  function toStar(item) {
    const stars = Array.from({ length: item.stars }, (_, index) => 0);
    return stars;
  }

  return (
    <div>
      <div>
        <h1>Your Favourite shoes to wear</h1>
        <p>Here is a small list of your favourite shoes </p>
      </div>
      <div className="favoriteSection">
        <button className="buttonCarousel" onClick={handlePrevious}>
          <img alt="previous" src={previous} />
        </button>
        <div className="mainFavorite">
          <div
            className="itemContainer"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {favouriteData.map((shoe) => (
              <div className="item">
                <img alt="Jordan Air H34 " src={shoe.picture} />
                <h3>{shoe.shoeName}</h3>
                <h4>{shoe.price}</h4>
                <div className="stars">
                  <span>
                    {toStar(shoe).map(() => (
                      <img alt="stars" src={positive} />
                    ))}
                  </span>
                  <span> </span>
                </div>
                <div className="favourite">
                  <span className="positive"></span>
                  <span className="negative"></span>
                </div>
                <button className="addButton">Add to bag</button>
              </div>
            ))}
          </div>
        </div>
        <button className="buttonCarousel" onClick={() => handleNext()}>
          <img alt=" next" src={next} />
        </button>
      </div>
    </div>
  );
}
export default FavouritePanel;
