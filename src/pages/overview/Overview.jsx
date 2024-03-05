import { useEffect, useState } from "react";
import TablePage from "../../components/tablepage";
import { useData } from '../../DataProvider';
import PieChart from '../../components/pieChart'
import { formatData } from '../../Data/Utilities'
import Card from "../../components/Card"
import welcome from "../../assets/welcome.jpg"
import buildingCard from "../../assets/buildingCard.jpg"
import greekCard from "../../assets/greekCard.jpg"
import stockCard from "../../assets/stockCard.jpg"
import codeCard from "../../assets/codeCard.jpg"
import acctCard from "../../assets/acctCard.jpg"
import Gpa from "../../components/Gpa";


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
        <div className="flex flex-col w-full h-full p-14 gap-y-8 rounded-r-none bg-stone-50 shadow-inner">

          {/* Greeting */}
          <div className="w-full h-full relative">
            <img src={welcome} alt="" className="absolute inset-0 w-full h-full rounded-2xl object-cover shadow-lg" />
            <div className="absolute border-1 border-gray-200 inset-0 flex flex-col justify-between backdrop-blur-sm rounded-2xl p-4 text-white">
              <div className="flex flex-row justify-between">
                <p className="text-4xl font-bold">Talia Ferris</p>
                <p className="text-xl font-semibold">Year 3</p>
              </div>
              <div>
                <p className="text-xl font-semibold">Human Resources</p>
                <p className="text-2xl font-semibold">Bachelor of Commerce</p>
              </div>
            </div>
          </div>

          {/* Semester */}
          <div className="w-full h-full">
            <p className="text-3xl font-semibold my-5">Winter</p>
            <div className="w-full h-full lg:h-3/4 grid grid-cols-2 lg:grid-cols-5 rounded-3xl gap-2">
              <Card imgsrc={greekCard} course={"GRST 205"}/>
              <Card imgsrc={acctCard} course={"ACCT 341"}/>
              <Card imgsrc={codeCard} course={"CPSC 329"}/>
              <Card imgsrc={stockCard} course={"OPMA 301"}/>
              <Card imgsrc={buildingCard} course={"OPMA 401"}/>
            </div>
          </div>

        </div>
        <TablePage>
          <div className="flex flex-col justify-between h-full bg-yellow-20">
          {data != null && <PieChart data={newData} details={true} mb={"125"} />}
          <Gpa/>
          </div>
        </TablePage>
      </div>
    </>
  );
};

export default Overview;