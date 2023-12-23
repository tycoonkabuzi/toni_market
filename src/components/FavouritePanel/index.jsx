import positive from "../../assets/positive.png";
import negative from "../../assets/negative.png";
import favouriteData from "../../database/favouriteData";
import next from "../../assets/next.png";
import previous from "../../assets/previous.png";
import { Fragment, useState } from "react";
import styled from "styled-components";
const MainFavourite = styled.div`
  width: 1000px;
  margin: auto;
  padding-bottom: 100px;
  text-align: center;
`;
const FavouriteSection = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-items: center;
  justify-content: center;
  gap: 40px;
`;
const BouttonCaroussel = styled.img`
  background-color: #cccccc;
  width: 50px;
  border-radius: 50px;
  gap: 20px;
  &:hover {
    box-shadow: 1px 1px 2px #828282;
  }
`;
const Shoes = styled.div`
  width: 990px;
  overflow: hidden;
`;
const ItemContainer = styled.div`
  margin-top: 100px;
  display: flex;
  gap: 50px;
  justify-content: space-between;
  transition: 1s ease-in-out;
`;
const Item = styled.div`
  background-color: #efefef;
  padding-bottom: 20px;
  padding-top: 50px;
  border-radius: 15px;
`;
const ItemPicture = styled.img`
  width: 150px;
`;
const AddToBag = styled.button`
  background-color: #525252;
  border: none;
  color: white;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  margin-left: 30px;
  margin-right: 30px;
`;
const Stars = styled.img`
  width: 15px;
  padding: 5px;
`;

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
    <MainFavourite>
      <Fragment>
        <h1>Your Favourite shoes to wear</h1>
        <p>Here is a small list of your favourite shoes </p>
      </Fragment>
      <FavouriteSection>
        <BouttonCaroussel src={previous} onClick={handlePrevious} />
        <Shoes>
          <Fragment>
            <ItemContainer style={{ transform: `translateX(${translateX}px)` }}>
              {favouriteData.map((shoe) => (
                <Item>
                  <ItemPicture alt="Jordan Air H34 " src={shoe.picture} />
                  <h3>{shoe.shoeName}</h3>
                  <h4>{shoe.price}</h4>
                  <Fragment>
                    {toStar(shoe).map(() => (
                      <Stars alt="stars" src={positive} />
                    ))}
                  </Fragment>

                  <AddToBag className="addButton">Add to bag</AddToBag>
                </Item>
              ))}
            </ItemContainer>
          </Fragment>
        </Shoes>
        <BouttonCaroussel src={next} onClick={handleNext} />
      </FavouriteSection>
    </MainFavourite>
  );
}
export default FavouritePanel;
