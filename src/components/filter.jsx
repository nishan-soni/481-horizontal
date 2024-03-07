import FilterItem from "./filteritem";

const Filter = () => {
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
        />
        <FilterItem
          name={"Level"}
          type="multi-select"
          options={["100", "200", "300", "400", "500"]}
        />
        <FilterItem
          name={"Status"}
          type="multi-select"
          options={["Complete", "Incomplete", "In Progress"]}
        />
        <FilterItem
          name={"Semester Taken"}
          type="multi-select"
          options={["Fall", "Winter", "Summer", "Spring"]}
        />
        <FilterItem
          name={"Start Year"}
          type="dropdown"
          options={["None", "2024", "2023", "2022", "2021"]}
        />
        <FilterItem
          name={"End Year"}
          type="dropdown"
          options={["None", "2024", "2023", "2022", "2021"]}
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
