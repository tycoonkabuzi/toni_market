import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import "../../style/Footer.css";
function Footer() {
  function getDate() {
    const date = new Date();
    return date.getFullYear();
  }
  return (
    <div>
      <div className="mainFooter">
        <div className="firstItem">
          <img alt="logo" src={logo} />
          <p>
            We would like to give to our users a better experience and we
            believe that through toni we can get to that.
          </p>
        </div>

        <div>
          <h3> About us</h3>
          <ul>
            <li>Beauty</li>
            <li>Chain</li>
            <li>Creativity</li>
          </ul>
        </div>

        <div>
          <h3> Resources</h3>
          <ul>
            <li>Beauty</li>
            <li>Chain</li>
            <li>Creativity</li>
          </ul>
        </div>

        <div>
          <h3>Get in Touch</h3>

          <ul className="socialMedia">
            <li>
              <img alt="Facebook" src={facebook} />
              Facebook
            </li>
            <li>
              <img alt="Instagram" src={instagram} />
              Instagram
            </li>

            <li>
              <img alt="Twitter" src={twitter} />
              Twitter
            </li>
          </ul>
        </div>
      </div>
      <div className="bottomFooter"> Toni Creation {getDate()}</div>
    </div>
  );
}
export default Footer;
