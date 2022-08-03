import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./about.styles.scss";
const About = () => {
  const contactClick = (value) => {
    let url;
    switch (value) {
      case "github":
        url = "https://github.com/PonrajkumarRajendran";
        break;
      case "linkedin":
        url = "https://www.linkedin.com/in/pon-raj-kumar-rajendran-994b81184/";
        break;
      case "twitter":
        url = "https://twitter.com/PonrajK90243169";
        break;
    }
    window.open(url);
  };
  return (
    <div className="about-container" id="about-tab">
      <div className="aboutpage-top-container">
        <div className="aboutpage-right-container">
          <span className="aboutpage-welcome-message">
            Hi, Raj here. Nice to meet you!
          </span>
          <span className="aboutpage-content-message">
            Since beginning my journey 5 years ago as a Full Stack Developer in
            TCS, I have worked with banks in designing and developing enterprise
            level web applications using Java, C# and Front End tools. I am
            naturally curious, confident, creative and constantly working on
            improving my chops one design problem at a time
          </span>
        </div>
      </div>
      <div className="aboutpage-contact-icons">
        <FontAwesomeIcon
          onClick={() => contactClick("github")}
          className="aboutpage-contact-icon"
          icon={faGithub}
        />
        <FontAwesomeIcon
          onClick={() => contactClick("linkedin")}
          className="aboutpage-contact-icon"
          icon={faLinkedinIn}
        />
        <FontAwesomeIcon
          onClick={() => contactClick("twitter")}
          className="aboutpage-contact-icon"
          icon={faTwitter}
        />
      </div>
      <div className="aboutpage-bottom-blocks">
        <div className="aboutpage-bottom-block">
          <div className="ap-block-1-image"></div>
          <span className="ap-block-title">BACK-END</span>
          <span className="ap-block-second-title">You can speak to me in</span>
          <span className="ap-block-languges">Java, C#, SQL, NodeJS, GIT</span>
          <span className="ap-block-second-title">My toolbag contains</span>
          <span className="ap-block-tool">Spring</span>
          <span className="ap-block-tool">.NET Core</span>
          <span className="ap-block-tool">MS SQL, MongoDB, Firebase</span>
          <span className="ap-block-tool">ExpressJS</span>
          <span className="ap-block-second-title">Dev tools</span>
          <span className="ap-block-tool">BitBucket</span>
          <span className="ap-block-tool">GitHub</span>
          <span className="ap-block-tool">Netlify, Heroku</span>
        </div>
        <div className="aboutpage-bottom-block">
          <div className="ap-block-2-image"></div>
          <span className="ap-block-title">FRONT-END</span>
          <span className="ap-block-second-title">You can speak to me in</span>
          <span className="ap-block-languges">HTML, CSS, Javascript</span>
          <span className="ap-block-second-title">My toolbag contains</span>
          <span className="ap-block-tool">ReactJS</span>
          <span className="ap-block-tool">Angular</span>
          <span className="ap-block-tool">TypeScript</span>
          <span className="ap-block-tool">NPM</span>
          <span className="ap-block-tool">SASS</span>
          <span className="ap-block-tool">Bootstrap</span>
        </div>
      </div>
    </div>
  );
};

export default About;
