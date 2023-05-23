import "./sidebar.css"
import {
  FaHome,
  FaLaptop,
  FaWrench
} from "react-icons/fa";
import {
  HiOutlineMail
} from "react-icons/hi";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="wrapper">
        <div className="sidebar">
          <ul>
            <li>
            <Link to="/home">
                <span className="icon"><FaHome /></span>
                <span className="item">Home</span>
              </Link>
            </li>
            <li>
            <Link to="/service">
                <span className="icon"><FaLaptop /></span>
                <span className="item">Services</span>
                </Link>
            </li>
            <li>
            <Link to="/project">
                <span className="icon"><FaWrench /></span>
                <span className="item">Projects</span>
              </Link>
            </li>
            <li>
            <Link to="/contact">
                <span className="icon"><HiOutlineMail /></span>
                <span className="item">Contact</span>
                </Link>
            </li>
          </ul>
        </div>

     </div>
    );
  }
  
  export default Sidebar;
  