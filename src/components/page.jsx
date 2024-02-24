import Nav from "./nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "../pages/overview/Overview";
import Major from "../pages/major/Major";
import Minor from "../pages/minor/Minor";
import Planner from "../pages/planner/Planner";

// This is the main page of the website
const Page = () => {
  return (
    <div className="flex flex-row flex-1">
      <BrowserRouter>
        {/* Nav Bar area */}
        <div id="nav" className="w-1/5 border-r-2 border-r-gray h-full">
          <Nav />
        </div>
        {/*  Content for each tab*/}
        <div id="content" className="flex-1">
          <Routes>
            <Route element={<Overview />} path="/" />
            <Route element={<Major />} path="/major" />
            <Route element={<Minor />} path="/minor" />
            <Route element={<Planner />} path="/planner" />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Page;
