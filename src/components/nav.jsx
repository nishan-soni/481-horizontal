import ucalgarylogo from "../assets/logo.png"
import { Link } from "react-router-dom"
import NavLink from "./navlink";
import { useState } from "react";


// Nav bar content
const Nav = () => {

  const [tab, setTab] = useState(window.location.pathname);

  return (
    <>

      {/* Logo */}
      <div className="w-full flex flex-col justify-center items-center py-2">
        <div className="flex flex-row items-center justify-center w-full h-20 gap-4 bg-gren-200">
          <img src={ucalgarylogo} alt="logo" className="object-contain h-3/5" />
          <p className="font-bold text-xl">Degree Requirements</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="w-full flex flex-col h-3/5 pl-10">
        <div className="flex-1 w-full flex flex-col justify-center gap-8 bg-red-20 text-lg font-light text-center">
          <Link className={` pl-4 py-2 rounded-2xl rounded-r-sm hover:font-normal hover:bg-stone-100 ease-in-out transition-all duration-300
            ${tab == "/" ? 'border-r-[6px] border-red-500  bg-red-50 text-red-500 font-normal' : ''}`}
            to="/"
            onClick={() => setTab("/")}
          >
            <div className="flex flex-row gap-2 items-center">
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.1 4H5c-.5 0-.9.4-.9.9V9c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9V5c0-.5-.4-.9-.9-.9Zm10 0H15c-.5 0-.9.4-.9.9V9c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9V5c0-.5-.4-.9-.9-.9Zm-10 10H5c-.5 0-.9.4-.9.9V19c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9v-4c0-.5-.4-.9-.9-.9Zm10 0H15c-.5 0-.9.4-.9.9V19c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9v-4c0-.5-.4-.9-.9-.9Z" />
              </svg>
              <NavLink>Overview</NavLink>
            </div>
          </Link>
          <Link className={` pl-4 py-2 rounded-2xl rounded-r-sm hover:font-normal hover:bg-stone-100 ease-in-out transition-all duration-300
            ${tab == "major" ? 'border-r-[6px] border-red-500  bg-red-50 text-red-500 font-normal' : ''}`}
            to="/major"
            onClick={() => setTab("major")}
          >
            <div className="flex flex-row gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
              <NavLink>Major Requirements</NavLink>
            </div>
          </Link>
          <Link className={` pl-4 py-2 rounded-2xl rounded-r-sm hover:font-normal hover:bg-stone-100 ease-in-out transition-all duration-300
            ${tab == "minor" ? 'border-r-[6px] border-red-500  bg-red-50 text-red-500 font-normal' : ''}`}
            to="/minor"
            onClick={() => setTab("minor")}
          >
            <div className="flex flex-row gap-2 items-center">
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 1-4 4h-1a3 3 0 0 0-3 3" />
              </svg>
              <NavLink>Minor Requirements</NavLink>
            </div>
          </Link>
          <Link className={` pl-4 py-2 rounded-2xl rounded-r-sm hover:font-normal hover:bg-stone-100 ease-in-out transition-all duration-300
            ${tab == "concentration" ? 'border-r-[6px] border-red-500  bg-red-50 text-red-500 font-normal' : ''}`}
            to="/concentration"
            onClick={() => setTab("concentration")}
          >
            <div className="flex flex-row gap-2 items-center">
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18.5A2.5 2.5 0 0 1 7.5 20h0a2.5 2.5 0 0 1-2.4-3.2 3 3 0 0 1-.8-5.2 2.5 2.5 0 0 1 .9-3.2A2.5 2.5 0 0 1 7 5a2.5 2.5 0 0 1 5 .5m0 13v-13m0 13a2.5 2.5 0 0 0 4.5 1.5h0a2.5 2.5 0 0 0 2.4-3.2 3 3 0 0 0 .9-5.2 2.5 2.5 0 0 0-1-3.2A2.5 2.5 0 0 0 17 5a2.5 2.5 0 0 0-5 .5m-8 5a2.5 2.5 0 0 1 3.5-2.3m-.3 8.6a3 3 0 0 1-3-5.2M20 10.5a2.5 2.5 0 0 0-3.5-2.3m.3 8.6a3 3 0 0 0 3-5.2" />
              </svg>
              <NavLink>Concentration Requirements</NavLink>
            </div>
          </Link>
          <Link className={` pl-4 py-2 rounded-2xl rounded-r-sm hover:font-normal hover:bg-stone-100 ease-in-out transition-all duration-300
            ${tab == "planner" ? 'border-r-[6px] border-red-500  bg-red-50 text-red-500 font-normal' : ''}`}
            to="/planner"
            onClick={() => setTab("planner")}
          >
            <div className="flex flex-row gap-2 items-center">
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m8 10.9 7-3.2m-7 5.4 7 3.2M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
              </svg>
              <NavLink>Degree Planner</NavLink>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;