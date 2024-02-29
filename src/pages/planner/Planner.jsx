import { useEffect, useState } from "react";
import TablePage from "../../components/tablepage";
import { useData } from '../../DataProvider';
import PieChart from '../../components/pieChart'

const Planner = () => {

  const [newData, setNewData] = useState(null);
  const { data } = useData();


  useEffect(() => {
    if (data != null) {
      setNewData(formatData())
    }

    // console.log(newData);
  }, [data])

  function formatData() {
    const ratios = [];
    const totalProgression = data["Talia Ferris"]["total-progression"];

    const emptySegment = {
      "id": "Remain",
      "label": "Remain",
      "value": 120 - (17 * 3),
    }
    ratios.push(emptySegment);

    for (let courseType in totalProgression) {
      let course = courseType.replace(/-courses$/, "");
      course = course.charAt(0).toUpperCase() + course.slice(1);

      const newSegment = {
        "id": course,
        "label": course,
        "value": totalProgression[courseType] * 3,
      }
      ratios.push(newSegment);
    }

    // console.log(ratios);

    return ratios;

  }

  return (
    <>
      <div className="w-full h-full flex flex-row">
        <div className="w-full h-full">Planner</div>
        <TablePage>
          {
            data != null && <PieChart data={newData} />
          }
        </TablePage>
      </div>
    </>
  );
};

export default Planner;