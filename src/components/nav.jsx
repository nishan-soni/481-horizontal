import ucalgarylogo from "../assets/logo.png"
import { Link } from "react-router-dom"
import NavLink from "./navlink";

// Nav bar content
const Nav = () => { 
    return (
      <div className="min-h-full flex flex-col items-center py-6 px-3">
        <img src={ucalgarylogo} alt = "logo" className=" max-w-full h-auto" width="75%"/>
        <div className="flex-1 flex flex-col justify-evenly items-center">
          <Link to="/"><NavLink>Overview</NavLink></Link>
          <Link to="/major"><NavLink>Major Requirements</NavLink></Link>
          <Link to="/minor"><NavLink>Minor Requirements</NavLink></Link>
          <Link to="/concentration"><NavLink>Concentration Requirements</NavLink></Link>
          <Link to="/planner"><NavLink>Degree Planner</NavLink></Link>
        </div>
      </div>
    );
  };
  
  export default Nav;