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
import Requirements from "./Requirements";


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

        <div className="w-full h-full min-h-full flex flex-col">

          <div className="flex flex-col w-full h-full min-h-full p-14 pb-8 gap-y-8 rounded-r-none shadow-inner bg-stone-50">

            {/* Greeting */}
            <div className="w-full h-full max-h-full relative">
              <img src={welcome} alt="" className="absolute inset-0 w-full h-full rounded-2xl object-cover shadow-md" />
              <div className="absolute border-1 border-gray-200 inset-0 flex flex-col justify-between backdrop-blur-sm rounded-2xl p-4 text-white">
                <div className="flex flex-row justify-between">
                  <p className="text-4xl font-bold">Nathan Ferris</p>
                  <p className="text-xl font-semibold">Year 3</p>
                </div>
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="text-xl font-semibold">Faculty of Scince </p>
                    <p className="text-2xl font-semibold">Computer Science</p>
                  </div>
                  <p className="flex items-end font font-semibold">Enrollment Date: March 29, 2:30pm</p>
                </div>
              </div>
            </div>

            {/* Semester */}
            <div className="w-full h-full">
              <p className="text-3xl font-semibold my-5">Fall</p>
              <div className="w-full h-full max-h-full lg:h-3/4 grid grid-cols-2 lg:grid-cols-5 rounded-3xl gap-2 ">
                <Card imgsrc={greekCard} course={"GRST 205"} />
                <Card imgsrc={acctCard} course={"OPMA 301"} />
                <Card imgsrc={codeCard} course={"CPSC 441"} />
                <Card imgsrc={stockCard} course={"CPSC 433"} />
                <Card imgsrc={buildingCard} course={"CPSC 481"} />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col h-fit p-14 pt-0 gap-y-8 rounded-r-none bg-stone-50">
            
            {/* Incomplete */}
            <div className="w-full">
              <p className="text-3xl font-semibold my-5">Incomplete</p>
              <div className="flex flex-col gap-3">
                <Requirements>
                  <p>Intro Math Courses</p>
                  <p>1/2</p>
                </Requirements>
                <Requirements>
                  <p>Intro CPSC Courses</p>
                  <p>1/3</p>
                </Requirements>
              </div>
            </div>

            {/* Complete */}
            <div className="w-full">
              <p className="text-3xl font-semibold my-5">Complete</p>
              <div className="flex flex-col gap-3">
                <Requirements>
                  <p>300 Level Major Requirement</p>
                  <p>2/4</p>
                </Requirements>
                <Requirements>
                  <p>400 Level Major Requirement</p>
                  <p>0/3</p>
                </Requirements>
              </div>
            </div>
          </div>

        </div>

        <TablePage>
          <div className="flex flex-col justify-between h-full w-full  max-w-[18%] top-0 fixed">
            {data != null && <PieChart data={newData} details={true} mb={"125"} />}
            <Gpa />
          </div>
        </TablePage>
      </div>
    </>
  );
};

export default Overview;