import "./home.styles.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div className="homepage-container" id="home-tab">
      <div className="homepage-name-container">
        <span className="homepage-namecard">
          <span className="homepage-namecard-bold">PON RAJ KUMAR</span>{" "}
          RAJENDRAN
        </span>

        <span className="homepage-jobcard">Developer, Writer & Cook</span>
        <Link className="homepage-downloadCV-link" to={"/PONRAJKUMAR_Resume.pdf"} target="_blank" download>
          <span className="homepage-downloadCV">
            Download CV
            <FontAwesomeIcon
              className="homepage-downloadCV-icon"
              icon={faDownload}
            />
          </span>
        </Link>
      </div>
      <div className="homepage-info-container">
        <div className="homepage-image homepage-firstimage">
          <div className="homepage-firstimage-block"></div>
        </div>
        <div className="homepage-image homepage-secondimage">
          <div className="homepage-secondimage-block"></div>
        </div>
        <div className="homepage-image homepage-thirdimage">
          <div className="homepage-thirdimage-block"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
