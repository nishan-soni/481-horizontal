import { useState } from "react";
import FilterItem from "./filteritem";

const Filter = ({data, setFilteredData }) => {
  const [filters, setFilters] = useState({"Course Type": {}, "Level": {}, "Status": {}, "Semester Taken": {}, "Start Year": {}, "End Year": {}});
  return (
    <div className="flex flex-col items-center max-w-full">
      <div className="text-2xl text-center border-b-2 w-full py-4">
        Filter Courses
      </div>
      <div id="filter-items" className="w-full flex-col shadow-inner p-7">
        <FilterItem
          name={"Course Type"}
          type="combobox"
          options={["CPSC", "STAT", "PHIL", "MATH"]}
          filterState={[filters, setFilters]}
        />
        <FilterItem
          name={"Level"}
          type="multi-select"
          options={["100", "200", "300", "400", "500"]}
          filterState={[filters, setFilters]}
        />
        <FilterItem
          name={"Status"}
          type="multi-select"
          options={["Complete", "Incomplete", "In Progress"]}
          filterState={[filters, setFilters]}
        />
        <FilterItem
          name={"Semester Taken"}
          type="multi-select"
          options={["Fall", "Winter", "Summer", "Spring"]}
          filterState={[filters, setFilters]}
        />
        <FilterItem
          name={"Semester Taken"}
          type="dropdown"
          options={["None", "2024", "2023", "2022", "2021"]}
          filterState={[filters, setFilters]}
        />
        <FilterItem
          name={"End Year"}
          type="dropdown"
          options={["None", "2024", "2023", "2022", "2021"]}
          filterState={[filters, setFilters]}
        />
      </div>
      <div className="py-4 w-full flex flex-col items-center">
        <button className="p-2 rounded-md border-2 shadow-sm">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
