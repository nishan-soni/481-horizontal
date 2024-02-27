import Filter from "./filter";

const TablePage = () => {
  return (
    <div className="flex flex-row h-full w-full justify-end">
        <div className="w-[28%] border-l-2">
            <Filter/>
        </div>
    </div>
  );
};

export default TablePage;
