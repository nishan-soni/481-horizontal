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
  const [courseNodeData, setCourseNodeData] = useState(null);
  const { data } = useData();

  useEffect(() => {
    if (data != null) {
      setChartData(formatData(data))
    }
    console.log("newData", chartData);
  }, [data])



  return (
    <>
      <div className="w-full h-full flex flex-row">
        <Canvas data={data}/>
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
              Object.values(data['Talia Ferris']['courses']).map((course) => (
                <CourseDrawerNode key={course.title + course.id} course={course} />
              ))
            }
          </CourseDrawer>

          {data != null && <PieChart data={chartData} details={false} />}
        </TablePage>
      </div>
    </>
  );
};

export default Planner;