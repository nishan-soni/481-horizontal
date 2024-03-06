import { useCallback, useEffect, useState } from "react";
import ReactFlow, { Background, useNodesState, useEdgesState, addEdge } from 'reactflow';
import TablePage from "../../components/tablepage";
import { useData } from '../../DataProvider';
import CourseDrawer from './CourseDrawer';
import PieChart from '../../components/pieChart';
import { formatData } from '../../Data/Utilities';
import Canvas from './Canvas';
import 'reactflow/dist/style.css';
import CourseDrawerNode from "./CourseDrawerNode";


const Planner = () => {

  const [chartData, setChartData] = useState(null);
  const [courseNodeList, setCourseNodeList] = useState([]);
  const { data } = useData();

  useEffect(() => {
    if (data != null) {
      setChartData(formatData(data))
      setCourseNodeList(Object.values(data['Nathan Ferris']['courses']));
      console.log("course nodes list: ", courseNodeList);
    }
    // console.log("newData", chartData);
  }, [data])

  useEffect(() => {
    console.log("coursenodeList ", courseNodeList)
  }, [courseNodeList])

  // const removeCourse = (course) => {
  //   console.log("removing course: ", course.title + " " + course.id);
  //   setCourseNodeList(courseNodeList.filter(elmnt => elmnt.id !== course.id && elmnt.title !== course.title));
  // };

  const removeCourse = useCallback((courseToRemove) => {
    setCourseNodeList(prevCourseNodeList => {
      const filteredList = prevCourseNodeList.filter(course =>
        course.id !== courseToRemove.id || course.title !== courseToRemove.title
      );
      console.log("After filtering: ", filteredList);
      return filteredList;
    });
  }, []);


  return (
    <>

      {/* <div className="absolute flex-1 flex flex-row items-start justify-between max-w-full max-h-full">
        <div className="flex justify-center items-center w-full top-0 h-full">
          <div className="flex flex-row  justify-center items-center max-w-96 w-full">
            <button className="flex items-center justify-center bg-green-100 border-2 border-green-300 p min-w-10 min-h-10 rounded-full hover:border-green-400 
           text-green-400 hover:text-stone-500 text-center font-semibold italic"
            >
              1'
            </button>
            <div className="bg-gradient-to-r from-green-300 to-amber-300 w-1/3 h-0.5"></div>
            <button className="flex items-center justify-center bg-amber-100 border-2 border-amber-300 p min-w-10 min-h-10 rounded-full hover:border-amber-400 
            text-amber-400 hover:text-stone-500 text-center font-semibold italic"
            >
              2'
            </button>
            <div className="bg-gradient-to-r from-amber-300 to-orange-300 w-1/3 h-0.5"></div>
            <button className="flex items-center justify-center bg-orange-100 border-2 border-orange-300 p min-w-10 min-h-10 rounded-full hover:border-orange-400 
            text-orange-400 hover:text-stone-500 text-center font-semibold italic"
            >
              3'
            </button>
            <div className="bg-gradient-to-r from-orange-300 to-stone-500 w-1/3 h-0.5"></div>
            <button className="flex items-center justify-center bg-red-100 border-2 border-red-300 p min-w-10 min-h-10 rounded-full hover:border-red-400 
            text-red-400 hover:text-stone-500 text-center font-semibold italic"
            >
              4'
            </button>
          </div>
        </div>

        <div className="flex justify-end min-w-fit w-[61%]">
        </div>
      </div> */}


      <div className="w-full h-full flex flex-row">
        <Canvas data={data} onRemove={course => removeCourse(course)} />
        <TablePage>
          {/* <CourseDrawer>
            {
              data != null ?
                Object.values(data['Nathan Ferris']['courses']).map((course) => {
                  // console.log("Mapping course: ", course);
                  <CourseDrawerNode course={course} />
                })
                :
                <CourseDrawer>
                  <div className="rounded-lg h-8 w-full bg-stone-100 border-2 border-stone-100 active:animate-pulse"></div >
                </CourseDrawer>
            }
          </CourseDrawer> */}
          <CourseDrawer>
            {data != null &&
              courseNodeList.map((course) => (
                <CourseDrawerNode key={course.title + course.id} course={course} onRemove={() => removeCourse(course)} />
              ))
            }
          </CourseDrawer>
          <div className="absolute flex justify-center items-center w-full gap-1 pt-2 text-stone-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
            <p>Help</p>
          </div>

          {data != null && <PieChart data={chartData} details={false} mb={"0"} />}
        </TablePage>
      </div>
    </>
  );
};

export default Planner;