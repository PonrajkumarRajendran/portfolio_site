import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navigation-button.styles.scss";
const NavigationButton = ({ clickFunction, classValue }) => {
  return (
    <div className={`navigation-button-container ${classValue}`}>
      <FontAwesomeIcon
        onClick={clickFunction}
        className="navigation-button-icon"
        icon={faBars}
      />
    </div>
  );
};

export default NavigationButton;
