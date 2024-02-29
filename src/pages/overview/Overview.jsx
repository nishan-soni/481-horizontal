import { useEffect, useState } from "react";
import TablePage from "../../components/tablepage";
import { useData } from '../../DataProvider';
import PieChart from '../../components/pieChart'
import { formatData } from '../../Data/Utilities'

const Overview = () => {

  const { data } = useData();
  const [newData, setNewData] = useState(null);


  useEffect(() => {
    if (data != null) {
      setNewData(formatData(data))
      // setStudent(Object.keys(data)[0])

    }

    // console.log(newData);
  }, [data])

  return (
    <>
      <div className="w-full h-full flex flex-row">
        <div className="flex flex-col w-full h-full p-14 gap-y-8">

          {/* Greeting */}
          <div className="flex flex-col justify-between w-full h-full bg-blue-300 rounded-3xl p-4">
            <div className="flex flex-row justify-between w-full">
              <p className="text-4xl font-bold">Talia Ferris</p>
              <p className="text-xl font-semibold">Year 3</p>
            </div>

            <div>
              <p className="text-xl font-semibold">Human Resources</p>
              <p className="text-2xl font-semibold">Bachelor of Commerce</p>
            </div>
          </div>

          <div className="w-full h-full">
            <p className="text-3xl font-semibold my-5">Winter</p>
            <div className="w-full h-full lg:h-3/4 grid grid-cols-2 lg:grid-cols-5 rounded-3xl gap-2">
              <div className="w-full h-full bg-yellow-200 border border-gray-300 hover:shadow-lg ease-in-out duration-300 rounded-2xl"> </div>
              <div className="w-full h-full bg-yellow-200 border border-gray-300 hover:shadow-lg ease-in-out duration-300 rounded-2xl"> </div>
              <div className="w-full h-full bg-yellow-200 border border-gray-300 hover:shadow-lg ease-in-out duration-300 rounded-2xl"> </div>
              <div className="w-full h-full bg-yellow-200 border border-gray-300 hover:shadow-lg ease-in-out duration-300 rounded-2xl"> </div>
              <div className="w-full h-full bg-yellow-200 border border-gray-300 hover:shadow-lg ease-in-out duration-300 rounded-2xl"> </div>
            </div>
          </div>

        </div>
        <TablePage>
          {data != null && <PieChart data={newData} details={true} />}
        </TablePage>
      </div>
    </>
  );
};

export default Overview;