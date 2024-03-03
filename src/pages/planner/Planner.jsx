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
      setCourseNodeList(Object.values(data['Talia Ferris']['courses']));
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
      <div className="w-full h-full flex flex-row">
        <Canvas data={data} onRemove={course => removeCourse(course)} />
        <TablePage>
          {/* <CourseDrawer>
            {
              data != null ?
                Object.values(data['Talia Ferris']['courses']).map((course) => {
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
          {data != null && <PieChart data={chartData} details={false} mb={"0"} />}
        </TablePage>
      </div>
    </>
  );
};

export default Planner;