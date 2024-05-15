import "bootstrap/dist/css/bootstrap.css";
// import { FaBars } from "react-icons/fa6";
// import { IoClose } from "react-icons/io5";
import "./Navbar.css";

export default function Navbar() {
  // function handleToggle() {
  //   <FaBars display={"none"} />;
  // }

  return (
    <nav>
      <ul>
        <div className="logo">
          <li>
            Even<span>talk</span>
          </li>
        </div>

        <div className="nav__link">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Speaker</a>
          </li>
          <li>
            <a href="">Schedule</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <button>Buy ticket</button>
          {/* <FaBars
            size={25}
            cursor={"pointer"}
            display={"none"}
            onClick={handleToggle}
          /> */}
        </div>
      </ul>
    </nav>
  );
}
