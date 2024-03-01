import { useCallback, useEffect, useState } from "react";
import ReactFlow, { Background, useNodesState, useEdgesState, addEdge } from 'reactflow';
import TablePage from "../../components/tablepage";
import { useData } from '../../DataProvider';
import PieChart from '../../components/pieChart';
import { formatData } from '../../Data/Utilities';
import 'reactflow/dist/style.css';
import Canvas from './Canvas';


const Planner = () => {

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
        <Canvas />
        <TablePage>
          {
            data != null && <PieChart data={newData} details={false} />
          }
        </TablePage>
      </div>
    </>
  );
};

export default Planner;