import { ResponsivePie } from '@nivo/pie'
// import Filter from "./filter"

const TablePage = ({children}) => {
  return (
    <div className="flex flex-row h-full w-[28%] justify-end shadow-md">
      <div className="w-full border-l-2">
        {children}
      </div>
    </div>
  );
};

export default TablePage;
