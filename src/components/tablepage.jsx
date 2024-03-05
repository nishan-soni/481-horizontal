import { ResponsivePie } from '@nivo/pie'
// import Filter from "./filter"

const TablePage = ({children}) => {
  return (
    <div className="flex flex-row h-full w-[28%] justify-end">
      <div className="w-full border-l border-gray-200 relative">
        {children}
      </div>
    </div>
  );
};

export default TablePage;
