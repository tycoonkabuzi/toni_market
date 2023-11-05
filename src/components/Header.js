import "../style/Header.css";
import shoe1 from "../assets/shoe1.png";
function Header() {
  return (
    <div className="main">
      <div className="mainText">
        <h1>
          <span className="grayPart">Choose your</span> trendy collection
        </h1>
        <div className="containerDots">
          <span className="blue"></span>
          <span className="purpule"></span>
          <span className="red"></span>
          <span className="green"></span>
        </div>
      </div>
      <div>
        <div className="containterShoe">
          <img alt="shoe main showing front page " src={shoe1} />
          <div className="price">
            <h2>$200.00</h2>
            <p>$359.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
