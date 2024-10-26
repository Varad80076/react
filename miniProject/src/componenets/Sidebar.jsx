import NavBar from "../componenets/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFile,
  faFileLines,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    // image
    <div className="bg-gray-700 text-white w-full sticky right-0 flex sm:flex-col sm:w-72 h-fit sm:h-[663px]">
      <figure className="mt-10 mx-2 hidden sm:block">
        <img
          src="https://images.unsplash.com/photo-1727162334294-170987f6b31b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
          alt=""
        />
      </figure>
      {/* toggle button */}

      <div className="w-full sm:hidden">
        <NavBar />
      </div>
      {/* toggle button end */}
      <h2 className="my-3 sm:my-5 ml-3 text-xs sm:text-xl justify-center items-center sm:mx-0 hidden sm:block">
        Varad Badgujar
      </h2>
      <hr className="sm:block" />

      <ul className=" mx-2 my-3 sm:my-11 flex sm:flex-col gap-1 sm:gap-0 hidden sm:block">
        <li className="mb-2">
          <Link
            className="btn text-white hover:border-gray-500 bg-gray-800 shadow-2xl  rounded-xl  text-xs sm:text-base"
            to="/"
          >
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li className="mb-2">
          <Link
            className="btn  shadow-xl bg-gray-800 rounded-xl text-white hover:border-gray-500 text-xs sm:text-base"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} /> About
          </Link>
        </li>
        <li className="mb-2">
          <Link
            className="btn  shadow-white-900 bg-gray-800 rounded-xl  text-white hover:border-gray-500 text-xs sm:text-base"
            to="/project"
          >
            <FontAwesomeIcon icon={faFileLines} /> Projects
          </Link>
        </li>
        <li className="mb-2">
          <Link className="btn  rounded-xl text-white hover:border-gray-500 text-xs bg-gray-800 sm:text-base"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </Link>
        </li>
        <li className="mb-2">
          <Link className="btn  rounded-xl text-white hover:border-gray-500 text-xs bg-gray-800 sm:text-base"
to="/resume"          
          >
            <FontAwesomeIcon icon={faFile} /> Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
