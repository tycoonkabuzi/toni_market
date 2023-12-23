import close from "../../assets/close.png";
import shoe5 from "../../assets/shoe5.png";
import styled from "styled-components";
const Main = styled.div`
  background-color: rgb(192, 192, 192);
  position: absolute;
  width: 300px;
  top: 0;
  right: 10px;
  z-index: 1;
  border-radius: 20px;
  padding-bottom: 30px;
  margin-top: 50px;
  right: 50px;
  color: #4f4f4f;
`;
const MainItem = styled.div`
  border-bottom: 1px solid rgb(218, 218, 218);
`;
const Close = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-around;
`;
const CloseIcon = styled.img`
  width: 20px;
  order: 2;
`;

const InBag = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-around;
`;
const InBagPicture = styled.img`
  width: 90px;
  order: 2;
`;
const Total = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;
const Bottom = styled.div`
  width: 150px;
  margin: auto;
`;
const AddtoBag = styled.button`
  background-color: #525252;
  border: none;
  color: white;
  width: 150px;
  height: 40px;
  border-radius: 10px;
`;

function Cart({ setToClose }) {
  function handleCloseTrigger() {
    setToClose(false);
  }
  return (
    <Main>
      <Close>
        <CloseIcon src={close} onClick={handleCloseTrigger} />
        <h1> Summary</h1>
      </Close>

      <MainItem>
        <InBag>
          <InBagPicture alt="item " src={shoe5} />
          <div>
            <p>Element</p>
            <h4> $150</h4>
          </div>
        </InBag>
        <InBag>
          <InBagPicture alt="item " src={shoe5} />
          <div>
            <p>Element</p>
            <h4> $150</h4>
          </div>
        </InBag>
      </MainItem>
      <Bottom>
        <Total>
          <h6>Total</h6>
          <h1>$5000</h1>
        </Total>

        <AddtoBag className="addButton">Check-out </AddtoBag>
      </Bottom>
    </Main>
  );
}
export default Cart;
