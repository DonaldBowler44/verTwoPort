import BackGround from "../../background/background";
import Project from "../../project/project";
import Sidebar from "../../sidebar/sidebar";
import "./projectcontainer.css";

function ProjectContainer() {
    return (
      <div className="PCApp">

        <BackGround />
        <Sidebar />
        <Project />
      </div>
    );
  }
  
  export default ProjectContainer;