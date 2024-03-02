import { useEffect } from "react";
import { ResponsivePie } from '@nivo/pie';
import { useData } from "../DataProvider";

const pieChart = ({ data, details }) => {

    // useEffect(() => {
    //     if (data != null) {
    //         console.log("nivo", data);
    //     }
    // }, [data])

    return (
        <div className="h-1/2">
            <ResponsivePie
                data={data}
                margin={{ top: 0, right: 50, bottom: 0, left: 50 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                colors={{ scheme: 'nivo' }}
                borderColor={{
                    from: 'color',
                    modifiers: [['darker', 0.2]]
                }}
                enableArcLinkLabels={false}
                // arcLinkLabelsSkipAngle={10}
                // arcLinkLabelsTextColor="#333333"
                // arcLinkLabelsThickness={2}
                // arcLinkLabelsColor={{ from: 'color' }}
                // arcLabelsSkipAngle={10}
                // arcLabelsTextColor={{
                //     from: 'color',
                //     modifiers: [['darker', 2]]
                // }}
                legends={details == true ? [
                    {
                        anchor: 'bottom',
                        direction: 'column',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 5,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ] : []} //else dont show the details
            />
        </div>
    );
};

export default pieChart;
