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

  /**
   * TODO: remove dummy data
   */
  const sample = {
    credits_completed: 21,
    credits_remaining: 16,
    reqtitle: "Major in Computer Science",
    reqs: [
      {
        name: "9 Units of CPSC Courses at the 300 level or above.",
        credits: 9,
        outof: 9,
        completion: "incomplete",
        courses: [
          {
            course: "CPSC 329",
            sem: "Winter 2022",
            grade: "B-",
            status: "complete",
            credits: 3,
            reqsSatisfied: true,
          },
          {
            course: "CPSC 331",
            sem: "Winter 2023",
            grade: "A-",
            status: "complete",
            credits: 3,
            reqsSatisfied: true,
          },
          {
            course: "CPSC 359",
            sem: "Winter 2024",
            grade: "A+",
            status: "in progress",
            credits: 3,
            reqsSatisfied: true,
          },
        ],
      },
    ],
  };

  const sample2 = {
    credits_completed: 21,
    credits_remaining: 16,
    reqtitle: "Major in Computer Science",
    reqs: [
      {
        name: "Logic Requirement",
        credits: 3,
        outof: 3,
        completion: "complete",
        courses: [
          {
            course: "PHIL 279",
            sem: "Fall 2021",
            grade: "A",
            status: "complete",
            reqsSatisfied: true,
          },
        ],
      },
    ],
  };

  const sample3 = {
    credits_completed: 21,
    credits_remaining: 16,
    reqtitle: "Major in Computer Science",
    reqs: [
      {
        name: "21 units from Computer Science 251, 331, 351, 355, 413, 449 and 457",
        credits: 9,
        outof: 21,
        completion: "incomplete",
        courses: [
          {
            course: "CPSC 251",
            sem: "Winter 2022",
            grade: "B-",
            status: "complete",
            credits: 3,
            reqsSatisfied: true,
          },
          {
            course: "CPSC 331",
            sem: "Winter 2023",
            grade: "A-",
            status: "complete",
            credits: 3,
            reqsSatisfied: true,
          },
          {
            course: "CPSC 351",
            sem: "Winter 2024",
            grade: "A+",
            status: "in progress",
            credits: 3,
            reqsSatisfied: true,
          },
          {
            course: "CPSC 355",
            sem: "Fall 2023",
            grade: "A+",
            status: "complete",
            credits: 3,
            reqsSatisfied: true,
          },
          {
            course: "CPSC 413",
            sem: "Winter 2024",
            grade: "N/A",
            status: "in progress",
            credits: 3,
            reqsSatisfied: true,
          },
          {
            course: "CPSC 457",
            sem: "Winter 2024",
            grade: "N/A",
            status: "in progress",
            credits: 3,
            reqsSatisfied: true,
          },
        ],
      },
    ],
  };

  const sample4 = {
    credits_completed: 21,
    credits_remaining: 16,
    reqtitle: "Major in Computer Science",
    reqs: [
      {
        name: "Ethics Requirement",
        completion: "incomplete",
        credits: 0,
        outof: 3,
        courses: [
          {
            course: "PHIL 314",
            sem: "N/A",
            grade: "N/A",
            status: "incomplete",
            credits: 3,
            reqsSatisfied: true,
          },
        ],
      },
    ],
  };

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

        <div className="w-full h-full min-h-full flex flex-col ">

          <div className="flex flex-col w-full h-full min-h-full p-14 pb-8 gap-y-8 rounded-r-none  bg-stone-50">

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

          <div className="flex w-full flex-col h-fit p-14 pt-0 gap-y-8 rounded-r-none bg-stone-50 border-x-[1px] border-gray-200">

            {/* Incomplete */}
            <div className="w-full">
              <p className="text-3xl font-semibold my-5">Incomplete</p>
              <div className="flex flex-col gap-3">
                <Requirements header={"Computer Science 251, 331, 351, 355, 413, 449 and 457"} progress={"9/21"} data={sample3}></Requirements>
                <Requirements header={"CPSC Courses at the 300 level or above"} progress={"9/9"} data={sample}></Requirements>
                <Requirements header={"Ethics Requirement"} progress={"0/3"} data={sample4}></Requirements>
                {/* <Requirements header={"6 units Computer Science 453 and 585"} progress={"3/6"} data={sample}></Requirements> */}
              </div>
            </div>

            {/* Complete */}
            <div className="w-full">
              <p className="text-3xl font-semibold my-5">Complete</p>
              <div className="flex flex-col gap-3">
                <Requirements header={"Logic Requirement"} progress={"3/3"} data={sample2}></Requirements>
                {/* <Requirements header={"Minor In Management"} progress={"6/6"} data={sample}></Requirements> */}
                {/* <Requirements header={"3 units from Physics 211, 221 or 227"} progress={"3/3"} data={sample}></Requirements> */}
                {/* <Requirements header={"3 units from Computer Science 433, 531 or 535"} progress={"3/3"} data={sample}></Requirements> */}
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