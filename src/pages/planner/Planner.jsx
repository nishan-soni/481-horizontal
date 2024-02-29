import { useEffect } from "react";
import TablePage from "../../components/tablepage";
import { useData } from '../../DataProvider';

const Planner = () => {

  const { data } = useData();
  useEffect(() => {
    console.log(data);
  }, [])

  return (
    <>
      <div className="w-full h-full flex flex-row">
        <div className="w-full h-full">Planner</div>
        <TablePage />
      </div>
    </>
  );
};

export default Planner;