import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./planner-project.styles.scss";
const PlannerProject = () => {
  const gitClick = () => {
    window.open("https://github.com/PonrajkumarRajendran/planner");
  };
  const webPageClick = () => {
    window.open("https://plantodo.netlify.com");
  };
  return (
    <div className="plannerproject-container">
      <div className="plannerproject-left">
        <span className="plannerproject-left-title">WORKER APP</span>
        <span className="plannerproject-left-content">
          A people friendly work management app, with features such as Task
          Board, Daily planner and Calendar.
        </span>
        <span>
          <span className="pp-left-bold">Tech Stack:</span> ReactJS, NodeJs,
          ExpressJs, MongoDB, Netlify, Heroku
        </span>
        <div className="plannerproject-icons">
          <FontAwesomeIcon
            onClick={gitClick}
            className="plannerproject-icon"
            icon={faGithub}
          />
          <FontAwesomeIcon
            onClick={webPageClick}
            className="plannerproject-icon"
            icon={faArrowUpRightFromSquare}
          />
        </div>
      </div>

      <div className="plannerproject-right">
        <div className="plannerproject-images">
          <div className="pp-image pp-image-container-1">
            <div className="pp-image-1"></div>
          </div>
          <div className="pp-image pp-image-container-2">
            <div className="pp-image-2"></div>
          </div>
          <div className="pp-image pp-image-container-3">
            <div className="pp-image-3"></div>
          </div>
          <div className="pp-image pp-image-container-4">
            <div className="pp-image-4"></div>
          </div>
          <div className="pp-image pp-image-container-5">
            <div className="pp-image-5"></div>
          </div>
          <div className="pp-image pp-image-container-6">
            <div className="pp-image-6"></div>
          </div>
          <div className="pp-image pp-image-container-7">
            <div className="pp-image-7"></div>
          </div>
          <div className="pp-image pp-image-container-8">
            <div className="pp-image-8"></div>
          </div>
          <div className="pp-image pp-image-container-9">
            <div className="pp-image-9"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlannerProject;
