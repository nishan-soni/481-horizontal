import TablePage from "../../components/tablepage";
import Filter from "../../components/filter";


const Major = () => {
  return (
    <>
      <div className="w-full h-full flex flex-row">
        <div className="w-full h-full">Major</div>
        <TablePage>
          {/* Made a children prop for TablePage so that I can use TablePage in another file without the filter component*/}
          <Filter />
        </TablePage>
      </div>
    </>
  );
};

export default Major;
