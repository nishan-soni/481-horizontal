import FilterItem from "./filteritem";

const Filter = () => {
  return (
    <div className="h-full flex flex-col items-center py-6">
        <div className="text-3xl text-center"><strong>Filter</strong></div>
        <div id="filter-items" className="mt-10 flex-1 w-full flex-col p-3">
            <FilterItem name={"Level"} options={["100", "200", "300", "400", "500", "600"]}/>
            <FilterItem name={"Status"} options={["Complete", "Incomplete", "In Progress"]}/>
            <FilterItem name={"Semester Taken"} options={["Fall", "Winter", "Summer", "Spring"]}/>
        </div>
        <button>
            Apply Filters
        </button>
    </div>
  );
};

export default Filter;
