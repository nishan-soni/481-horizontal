import TablePage from "../../components/tablepage";
import Filter from "../../components/filter";
import ReqTable from "../../components/reqtable";


const Major = () => {
  
  return (
    <>
      <div className="w-full h-full flex flex-row">
        <div className="w-full h-full bg-stone-50 shadow-inner">
          <ReqTable/>
        </div>
        <TablePage>

          <Filter />
        </TablePage>
      </div>
    </>
  );
};

export default Major;
