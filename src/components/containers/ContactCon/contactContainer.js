import Contact from "../../Contact/contact";
import BackGround from "../../background/background";
import Sidebar from "../../sidebar/sidebar";
import "./contactContainer.css"

function ContactContainer() {
    return (
      <div className="CCApp">

        <BackGround />
        <Sidebar />
        <Contact />
        
      </div>
    );
  }
  
  export default ContactContainer;