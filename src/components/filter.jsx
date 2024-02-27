import FilterItem from "./filteritem";

const Filter = () => {
  return (
    <div className="h-full flex flex-col items-center py-6">
        <div className="text-3xl text-center"><strong>Filter</strong></div>
        <div id="filter-items" className="mt-10 flex-1 w-full flex-col justify-evenly p-3">
            <FilterItem name={"Level"} options={[]}/>
        </div>
        <button>
            Apply Filters
        </button>
    </div>
  );
};

export default Filter;
