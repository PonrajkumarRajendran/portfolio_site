import "./navigation-container.styles.scss";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink as Link } from "react-router-hash-link";
const NavigationContainer = ({ classValue, closeFunction }) => {
  return (
    <div
      onClick={closeFunction}
      className={`navigation-container ${classValue}`}
    >
      <div className="navigation-box">
        <div className="backbutton">
          <FontAwesomeIcon
            onClick={closeFunction}
            className="backbutton-icon"
            icon={faArrowLeft}
          />
        </div>
        <div className="navigation-icons">
          <Link className="navigation-icon" to={"#home-tab"} smooth>
            <span onClick={closeFunction}>Home</span>
          </Link>
          <Link className="navigation-icon" to={"#about-tab"} smooth>
            <span onClick={closeFunction}>About</span>
          </Link>
          <Link className="navigation-icon" to={"#projects-tab"} smooth>
            <span onClick={closeFunction}>Projects</span>
          </Link>
          <Link className="navigation-icon" to={"#contact-tab"} smooth>
            <span onClick={closeFunction}>Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationContainer;
