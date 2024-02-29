import { useEffect, useState } from "react";
import TablePage from "../../components/tablepage";
import { useData } from '../../DataProvider';
import PieChart from '../../components/pieChart'
import { formatData } from '../../Data/Utilities'

const Overview = () => {

  const [newData, setNewData] = useState(null);
  const { data } = useData();


  useEffect(() => {
    if (data != null) {
      setNewData(formatData(data))
    }

    // console.log(newData);
  }, [data])

  return (
    <>
      <div className="w-full h-full flex flex-row">
        <div className="w-full h-full">Overview</div>
        <TablePage>
          {
            data != null && <PieChart data={newData} details={true} />
          }
        </TablePage>
      </div>
    </>
  );
};

export default Overview;