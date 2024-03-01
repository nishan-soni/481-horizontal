import ucalgarylogo from "../assets/logo.png"
import { Link } from "react-router-dom"
import NavLink from "./navlink";

// Nav bar content
const Nav = () => {
  return (
    <div className="min-h-full w-full flex flex-col justify-center items-center py-6 px-3">
      <div className="flex flex-row items-center justify-center w-full h-20 gap-4">
        <img src={ucalgarylogo} alt="logo" className="object-contain h-3/4" />
        <p className="font-bold text-2xl">Degree Requirements</p>
      </div>
      <div className="flex-1 flex flex-col justify-evenly items-start">
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