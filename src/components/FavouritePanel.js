import "../style/FavouritePanel.css";
import shoe1 from "../assets/shoe2.png";
import shoe2 from "../assets/shoe3.png";
import shoe3 from "../assets/shoe4.png";
function FavouritePanel() {
  return (
    <div>
      <div>
        <h1>Your Favourite shoes to wear</h1>
        <p>Here is a small list of your favourite shoes </p>
      </div>
      <div className="itemContainer">
        <div className="item">
          <img alt="Jordan Air H34 " src={shoe1} />
          <h3>Jordan Air H34</h3>
          <h4>$150.00</h4>
          <div className="favourite">
            <span className="positive"></span>
            <span className="negative"></span>
          </div>
          <button className="addButton">Add to bag</button>
        </div>

        <div className="item">
          <img alt="Jordan Air H34 " src={shoe2} />
          <h3>Jordan Air H34</h3>
          <h4>$150.00</h4>
          <div className="favourite">
            <span className="positive"></span>
            <span className="negative"></span>
          </div>
          <button className="addButton">Add to bag</button>
        </div>

        <div className="item">
          <img alt="Jordan Air H34 " src={shoe3} />
          <h3>Jordan Air H34</h3>
          <h4>$150.00</h4>
          <div className="favourite">
            <span className="positive"></span>
            <span className="negative"></span>
          </div>
          <button className="addButton">Add to bag</button>
        </div>
      </div>
    </div>
  );
}
export default FavouritePanel;
