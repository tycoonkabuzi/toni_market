import styled from "styled-components";
import shoe from "../../assets/shoe8.png";
import shoe10 from "../../assets/shoe10.png";
import shoe6 from "../../assets/shoe15.png";
const Main = styled.div`
  background-color: #f2f2f2;
  height: 1000px;
  position: relative;
  @media only screen and (max-width: 600px) {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 100px;
  }
`;
const Text = styled.div`
  color: #383838;
  rotate: -90deg;
  width: 800px;
  margin-left: -12%;
  text-align: center;
  position: relative;
  top: 50%;
  line-height: 15px;
  @media only screen and (max-width: 600px) {
    rotate: 0deg;
    top: 7%;
    left: 0;
    right: 0;
    line-height: 1px;
    width: 400px;
    margin: auto;
  }
`;

const Title = styled.h1`
  color: back;
  font-size: 100px;
  font-weight: 700;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 70px;
  }
`;
const Subtitle = styled.p`
  color: back;
  text-align: center;
  font-size: 40px;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
const ItemOne = styled.div`
  width: 300px;
  height: 600px;
  border-radius: 40px;
  background: radial-gradient(circle, #f23434, #851c1c);
  @media only screen and (max-width: 600px) {
    width: 450px;
    margin-top: 20%;
    margin-bottom: 20px;
  }
`;
const ItemTwo = styled.div`
  width: 300px;
  height: 600px;
  border-radius: 40px;
  background: radial-gradient(circle, rgb(217, 197, 45), rgb(120, 108, 24));
  margin-top: 50px;
  @media only screen and (max-width: 600px) {
    width: 450px;
    margin-top: 0;
    margin-bottom: 20px;
  }
`;
const ItemThree = styled.div`
  width: 300px;
  height: 600px;
  border-radius: 40px;
  background: radial-gradient(circle, rgb(58, 154, 116), rgb(23, 60, 45));
  margin-top: 100px;
  @media only screen and (max-width: 600px) {
    width: 450px;
    margin-top: 0;
  }
`;
const Items = styled.div`
  width: 60%;
  margin: auto;
  color: #ffffff;
  display: grid;
  grid-template-columns: auto auto auto;
  @media only screen and (max-width: 600px) {
    width: 75%;
    grid-template-columns: auto;
    margin: auto;
  }
`;
const Num = styled.h1`
  font-size: 50px;
  margin-left: 30px;
`;

const Picture = styled.img`
  width: 500px;
  margin: auto;
  position: relative;

  left: -45%;
  rotate: -20deg;
  @media only screen and (max-width: 600px) {
    left: -10%;
  }
`;
const TitleElement = styled.h4`
  margin-left: 30px;
`;
const Price = styled.h3`
  margin-left: 30px;
  color: #ffea83;
`;
function PriceRank() {
  return (
    <Main>
      <Text>
        <Title>Discover</Title>
        <Subtitle>New</Subtitle>
      </Text>
      <Items>
        <ItemOne>
          <Num>01</Num>

          <Picture src={shoe} />

          <TitleElement>Nike Freen 2028</TitleElement>
          <Price>$350.99</Price>
        </ItemOne>
        <ItemTwo>
          <Num>02</Num>

          <Picture src={shoe10} />

          <TitleElement>Nike Freen 2028</TitleElement>
          <Price>$220.99</Price>
        </ItemTwo>
        <ItemThree>
          <Num>03</Num>

          <Picture src={shoe6} />

          <TitleElement>Nike Freen 2028</TitleElement>
          <Price>$220.99</Price>
        </ItemThree>
      </Items>
    </Main>
  );
}
export default PriceRank;
