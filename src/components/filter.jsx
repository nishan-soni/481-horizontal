import FilterItem from "./filteritem";

const Filter = () => {
  return (
    <div className="h-2/3 overflow-y-scroll border-b-2 flex flex-col items-center py-8">
        <div className="text-2xl text-center"><strong>Course Filter</strong></div>
        <div id="filter-items" className="flex-1 w-full flex-col p-3">
            <FilterItem name={"Level"} type="multi-select" options={["100", "200", "300", "400", "500", "600"]}/>
            <FilterItem name={"Status"} type="multi-select" options={["Complete", "Incomplete", "In Progress"]}/>
            <FilterItem name={"Semester Taken"} type="multi-select" options={["Fall", "Winter", "Summer", "Spring"]}/>
            <FilterItem name={"Semester Taken"} type="dropdown" options={["Fall", "Winter", "Summer", "Spring"]}/>
        </div>
        <button>
            Apply Filters
        </button>
    </div>
  );
};

export default Filter;
