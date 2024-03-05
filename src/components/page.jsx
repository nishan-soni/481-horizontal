import Nav from "./nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "../pages/overview/Overview";
import Major from "../pages/major/Major";
import Minor from "../pages/minor/Minor";
import Planner from "../pages/planner/Planner";
import Concentration from "../pages/concentration/Concentration";
import TopBar from "./topbar";

// This is the main page of the website
const Page = () => {
  return (
    <div className="flex flex-row flex-1">
      <BrowserRouter>
        {/* Nav Bar area */}
        <div id="nav" className="w-1/5 border-r border-r-gray-200 h-full relative">
          <Nav />
        </div>
        <div className="flex flex-col flex-1">
          {/* Top bar*/}
          <div className="h-[12dvh] border-b border-b-gray-200 flex sticky top-0 bg-white z-10 shadow-[0_10px_20px_-5px_rgba(115,115,115,0.75]">
            <TopBar/>
          </div>
          {/*Content for each tab*/}
          <div id="content" className="flex-1">
            <Routes>
              <Route element={<Overview />} path="/" />
              <Route element={<Major />} path="/major" />
              <Route element={<Minor />} path="/minor" />
              <Route element={<Planner />} path="/planner" />
              <Route element={<Concentration />} path="/concentration" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Page;
