import "./projects.styles.scss";
import PlannerProject from "../project-list/planner-project/planner-project.component";
const Projects = () => {
  return (
    <div className="projects-container" id="projects-tab">
      <PlannerProject />
    </div>
  );
};

export default Projects;
