import BackGround from "./components/background/background";
import Home from "./components/home/home";
import Sidebar from "./components/sidebar/sidebar";
import "./homecontainer.css";

function HomeContainer() {
    return (
      <div className="HCApp">

        <BackGround />
        <Sidebar />
        <Home />
      </div>
    );
  }
  
  export default HomeContainer;