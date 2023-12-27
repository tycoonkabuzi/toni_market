import positive from "../../assets/positive.png";
import negative from "../../assets/negative.png";
import favouriteData from "../../database/favouriteData";
import next from "../../assets/next.png";
import previous from "../../assets/previous.png";
import { Fragment, useState } from "react";
import styled from "styled-components";
const MainFavourite = styled.div`
  width: 100%;
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
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
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
  @media only screen and (max-width: 600px) {
    width: 211px;
    overflow: hidden;
    margin: auto;
  }
`;
const ItemContainer = styled.div`
  margin-top: 100px;
  display: flex;
  gap: 50px;
  justify-content: space-between;
  transition: 1s ease-in-out;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Item = styled.div`
  background-color: #efefef;
  padding-bottom: 20px;
  padding-top: 50px;
  border-radius: 15px;
  @media only screen and (max-width: 600px) {
    width: 20px;
    width: 100%;
  }
`;
const ItemPicture = styled.img`
  width: 150px;
  @media only screen and (max-width: 600px) {
    width: 120px;
  }
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
const TextContainer = styled.div`
  @media only screen and (max-width: 600px) {
    width: 50%;
    margin: auto;
  }
`;
const Title = styled.h1`
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
const SubTitle = styled.p``;

function FavouritePanel() {
  const [translateX, setTranslateX] = useState(0);
  const [numberOfStars, setNumberOfStars] = useState(5);
  function handlePrevious() {
    setTranslateX(translateX + 260);
  }
  function handleNext() {
    setTranslateX(translateX - 260);
  }
  if (translateX === 260 || translateX === -3380) {
    setTranslateX(0);
  }
  function toStar(item) {
    const stars = Array.from({ length: item.stars }, (_, index) => 0);
    return stars;
  }

  return (
    <MainFavourite>
      <TextContainer>
        <Title>Your Favourite shoes to wear</Title>
        <SubTitle>Here is a small list of your favourite shoes </SubTitle>
      </TextContainer>
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
