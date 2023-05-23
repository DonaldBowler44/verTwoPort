import BackGround from "../background/background";
import Sidebar from "../sidebar/sidebar";
import Service from "../services/service";
import "./servicecontainer.css";

function ServiceContainer() {
    return (
      <div className="SCApp">

        <BackGround />
        <Sidebar />
        <Service />
      </div>
    );
  }
  
  export default ServiceContainer;