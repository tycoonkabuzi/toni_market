import "../../style/Cart.css";
import close from "../../assets/close.png";
import shoe5 from "../../assets/shoe5.png";
function Cart({ setToClose }) {
  function handleCloseTrigger() {
    setToClose(false);
  }
  return (
    <div className="cartMain">
      <div className="close">
        <img alt="close" src={close} onClick={handleCloseTrigger} />
        <h1> Summary</h1>
      </div>

      <div>
        <div className="itemsBag">
          <img alt="item " src={shoe5} />
          <div>
            <p>Element</p>
            <h4> $150</h4>
          </div>
        </div>
        <div className="itemsBag">
          <img alt="item " src={shoe5} />
          <div>
            <p>Element</p>
            <h4> $150</h4>
          </div>
        </div>
        <div className="total">
          <h6>Total</h6>
          <h1>$5000</h1>
        </div>
        <button className="addButton">Check-out </button>
      </div>
    </div>
  );
}
export default Cart;
