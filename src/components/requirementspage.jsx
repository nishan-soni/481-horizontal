import TablePage from "./tablepage";
import Filter from "./filter";
import ReqTable from "./reqtable";
import { ResponsivePie } from "@nivo/pie";
import { useState } from "react";

function RequirementsPage(props) {
  const { data } = props;
  const [filteredData, setFilteredData] = useState(data)

  return (
    <div className="w-full h-[88dvh] flex flex-row">
      <div className=" w-3/4 h-full  p-3 overflow-y-scroll">
        <ReqTable data={filteredData} />
      </div>
      <div className="border-l-2 h-[88dvh] sticky top-0 flex-grow overflow-y-scroll">
        <div className="h-1/3 border-b-2">
          <div className="w-full py-4 text-center text-2xl border-b-2">
            Credits
          </div>
          <div className=" w-full h-full shadow-inner">
            <ResponsivePie
              data={[
                {
                  id: "Completed",
                  value: data["credits_completed"],
                  color: "rgb(80, 200, 120)",
                },
                {
                  id: "Remaining",
                  value: data["credits_remaining"],
                  color: "rgb(255, 104, 101)",
                },
              ]}
              margin={{ top: 20, right: 100, bottom: 100, left: 100 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              colors={({ id, data }) => data[`color`]}
            />
          </div>
        </div>
        <Filter data={data} setFilteredData = {setFilteredData}/>
      </div>
    </div>
  );
}

export default RequirementsPage;
