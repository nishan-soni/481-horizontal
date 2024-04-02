import { useState } from "react";
import FilterItem from "./filteritem";

const Filter = ({ data, setFilteredData }) => {
  const [filters, setFilters] = useState({
    "Course Type": {},
    Level: {},
    Status: {},
    "Semester Taken": {},
    "Start Year": {},
    "End Year": {},
  });

  const applyFilters = () => {
    let new_data = JSON.parse(JSON.stringify(data));

    console.log(filters);
    let arr = Array.from(new_data["reqs"]);
    // console.log(arr)
    arr.forEach((item, index) => {
      // console.log(item)
      Array.from(item.courses).forEach((course, c_i) => {
        course["Course Type"] = course.course.split(" ")[0];
        course["Level"] = course.course.split(" ")[1].charAt(0) + "00";
        course["Semester Taken"] = course.sem.split(" ")[0];
        course["Status"] = course.status;
        if (course["Semester Taken"] !== "N/A") {
          course["Start Year"] = course.sem.split(" ")[1];
          course["End Year"] = course.sem.split(" ")[1];
        } else {
          course["Start Year"] = "";
          course["End Year"] = "";
        }
      });
    });

    new_data["reqs"] = arr;
    console.log(new_data);
    new_data["reqs"].forEach((r, r_i) => {
      new_data["reqs"][r_i].courses = Array.from(new_data["reqs"][r_i].courses);

      // Course Type
      if (
        Object.keys(filters["Course Type"]).length !== 0 &&
        filters["Course Type"].vals.length !== 0
      ) {
        new_data["reqs"][r_i].courses = new_data["reqs"][r_i].courses.filter(
          (c) => {
            return filters["Course Type"].vals.includes(c["Course Type"]);
          }
        );
      }

      // Multi Select Filters
      Object.keys(filters).forEach((f, f_i) => {
        if (filters[f].type == "multi-select") {
          if (Object.keys(filters[f]).length > 1) {
            let selected = [];
            Object.keys(filters[f]).forEach((opt, o_i) => {
              if (filters[f][opt]) {
                selected.push(opt.toLowerCase());
              }
            });
            if (selected.length > 1) {
              console.log(selected);
              new_data["reqs"][r_i].courses = new_data["reqs"][
                r_i
              ].courses.filter((c) => {
                console.log(c[f], f);
                return selected.includes(c[f].toLowerCase());
              });
            }
          }
        }
      });

      // Start Date
      if (
        Object.keys(filters["Start Year"]).length !== 0 &&
        filters["Start Year"].vals.length !== 0 &&
        filters["Start Year"].vals[0] !== "None"
      ) {
        new_data["reqs"][r_i].courses = new_data["reqs"][r_i].courses.filter(
          (c) => {
            console.log(parseInt(filters["Start Year"].vals[0]), parseInt(c["Start Year"]))
            return parseInt(filters["Start Year"].vals[0]) <= parseInt(c["Start Year"]);
          })
      } 

      // End Date
      if (
        Object.keys(filters["End Year"]).length !== 0 &&
        filters["End Year"].vals.length !== 0 &&
        filters["End Year"].vals[0] !== "None"
      ) {
        new_data["reqs"][r_i].courses = new_data["reqs"][r_i].courses.filter(
          (c) => {
            console.log(parseInt(filters["End Year"].vals[0]), parseInt(c["End Year"]))
            return parseInt(filters["End Year"].vals[0]) >= parseInt(c["End Year"]);
          })
      }
    });
    console.log(new_data);
    setFilteredData(new_data);
  };

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
          name={"Start Year"}
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
      <div className="py-4 w-full flex flex-row items-center justify-center space-x-3">
        <button
          onClick={applyFilters}
          className="p-2 rounded-md border-2 shadow-sm"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
