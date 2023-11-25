import "../style/TheStore.css";
import plus from "../assets/plus.png";
import shoe10 from "../assets/shoe10.png";
import shoe11 from "../assets/shoe11.png";
import shoe13 from "../assets/shoe13.png";
import shoe14 from "../assets/shoe14.png";
import shoe15 from "../assets/shoe15.png";
import shoe16 from "../assets/shoe16.png";
import shoe17 from "../assets/shoe17.png";
function TheStore() {
  return (
    <div className="container">
      <div className="menu">
        <ul>
          <li>
            <div className="filter">
              <p>Filter</p>
              <img alt="plus" src={plus} />
            </div>
          </li>
          <li className="active"> Men</li>
          <li> Women</li>
          <li> Kids</li>
        </ul>
      </div>
      <div className="store">
        <div className="items">
          <div className="shoeBackground">
            <img alt="jordan1" src={shoe10} />
          </div>
          <div className="shoeTitle">
            <h4> Air Jordan Low Rectro</h4>
            <p> $200.00</p>
          </div>
        </div>

        <div className="items">
          <div className="shoeBackground">
            <img alt="jordan1" src={shoe11} />
          </div>
          <div className="shoeTitle">
            <h4> Air Jordan Low Rectro</h4>
            <p> $200.00</p>
          </div>
        </div>

        <div className="items">
          <div className="shoeBackground">
            <img alt="jordan1" src={shoe13} />
          </div>
          <div className="shoeTitle">
            <h4> Air Jordan Low Rectro</h4>
            <p> $200.00</p>
          </div>
        </div>

        <div className="items">
          <div className="shoeBackground">
            <img alt="jordan1" src={shoe14} />
          </div>
          <div className="shoeTitle">
            <h4> Air Jordan Low Rectro</h4>
            <p> $200.00</p>
          </div>
        </div>

        <div className="items">
          <div className="shoeBackground">
            <img alt="jordan1" src={shoe15} />
          </div>
          <div className="shoeTitle">
            <h4> Air Jordan Low Rectro</h4>
            <p> $200.00</p>
          </div>
        </div>

        <div className="items">
          <div className="shoeBackground">
            <img alt="jordan1" src={shoe16} />
          </div>
          <div className="shoeTitle">
            <h4> Air Jordan Low Rectro</h4>
            <p> $200.00</p>
          </div>
        </div>

        <div className="items">
          <div className="shoeBackground">
            <img alt="jordan1" src={shoe17} />
          </div>

          <div className="shoeTitle">
            <h4> Air Jordan Low Rectro</h4>
            <p> $200.00</p>
          </div>
        </div>

        <div className="items">
          <div className="shoeBackground">
            <img alt="jordan1" src={shoe14} />
          </div>
          <div className="shoeTitle">
            <h4> Air Jordan Low Rectro</h4>
            <p> $200.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TheStore;
