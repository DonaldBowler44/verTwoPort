import './project.css';
import matrix from "../img/matrixsite.png";
import appView from "../img/appview.png";
import videothumb from "../img/videothumb.png";
import { ProjectBox } from "./projectBox/ProjectBox";
import { ProjectBoxTwo } from './projectBox/ProjectBoxThree';
import { ProjectBoxThree } from './projectBox/ProjectBoxTwo';
import {
  FaGithub
} from "react-icons/fa";

function Project() {
  return (
    <div className="projContainer">
    <div className="projBox">
        <h1 className='prohead'>Projects</h1>
        <div className="serviceContainer bd_grid">
          <div className='serviceImage'>
            <ProjectBox imgName={matrix} box_name={"PortfolioOne"} />
            <ProjectBoxTwo imgName={appView} box_name={"SleepTrackerApp"} />
            <ProjectBoxThree imgName={videothumb} box_name={"VideoSite"} />
          </div>
        </div>

        <div className='desBox_text_Section'>
          <div className='desText'>
            <p className='pTag'>Hover over the image to see the description, or click the icon below to visit my main repository of projects on my Github.</p>
            </div>
            <a href="https://github.com/DonaldBowler44" className="github-link">
            <FaGithub size={56} />
          </a>
        </div>
    </div>
</div>
  );
}

export default Project;
