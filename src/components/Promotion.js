import "../style/Promotion.css";
import shoe6 from "../assets/shoe6.png";
function Promotion() {
  return (
    <div className="promotionMain">
      <div className="promotionImage">
        <img alt="jordan 1" src={shoe6} />
      </div>
      <div className="promotionText">
        <h1>-50% Black Friday Sale</h1>
        <p>
          The Black Friday has started the only thing you need to do is to click
          on the button below and you will be able to access to one of the best
          offers at Toni where you are able to buy a shoe for half it price.
        </p>
        <button className="addButton check"> Check it out</button>
      </div>
    </div>
  );
}
export default Promotion;
