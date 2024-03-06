import TablePage from "./tablepage";
import Filter from "./filter";
import ReqTable from "./reqtable";
import { ResponsivePie } from "@nivo/pie";

function RequirementsPage(props) {
  const { data } = props;
  return (
    <div className="w-full h-full flex flex-row">
      <div className=" w-3/4 h-full shadow-inner p-3">
        <ReqTable data={data} />
      </div>
      <div className="border-l-2 flex-grow">
        <div className="h-1/3 border-b-2">
          <div className="w-full py-4 text-center text-2xl border-b-2">
            Credits
          </div>
          <div className="shadow-inner w-full h-full">
          <ResponsivePie
            data={[
              { id: "Completed", value: data["credits_completed"], color: 'rgb(80, 200, 120)' },
              { id: "Remaining", value: data["credits_remaining"], color :'rgb(238, 75, 43)'},
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
       
        <Filter /> 
      </div>
    </div>
  );
}

export default RequirementsPage;
