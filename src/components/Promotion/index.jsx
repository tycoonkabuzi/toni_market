import shoe6 from "../../assets/shoe6.png";
import styled from "styled-components";
const Main = styled.div`
  background-color: #679393;
  display: grid;
  grid-template-columns: auto auto;
  height: 300px;
  position: relative;
  z-index: 1;
  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
    height: 100%;
    padding-bottom: 100px;
  }
`;
const ShoePicture = styled.img`
  width: 500px;
  left: 10px;
  margin-top: -130px;
  @media only screen and (max-width: 600px) {
    width: 400px;
  }
`;
const Text = styled.div`
  width: 600px;
  text-align: left;
  margin-top: 40px;
  color: white;
  line-height: 20px;
  @media only screen and (max-width: 600px) {
    width: 500px;
    margin: auto;
  }
`;
const Check = styled.button`
  background-color: #525252;
  border: none;
  color: white;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  &:hover {
    background-color: #6b615c;
  }
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 50px;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;
function Promotion() {
  return (
    <Main>
      <ShoePicture alt="jordan 1" src={shoe6} />

      <Text>
        <Title>-50% Black Friday Sale</Title>
        <p>
          The Black Friday has started the only thing you need to do is to click
          on the button below and you will be able to access to one of the best
          offers at Toni where you are able to buy a shoe for half it price.
        </p>
        <Check> Check it out</Check>
      </Text>
    </Main>
  );
}
export default Promotion;
