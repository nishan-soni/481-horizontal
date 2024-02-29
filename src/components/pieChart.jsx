import { useEffect } from "react";
import { ResponsivePie } from '@nivo/pie';
import { useData } from "../DataProvider";

const pieChart = ({ data }) => {

    // useEffect(() => {
    //     if (data != null) {
    //         console.log("nivo", data);
    //     }
    // }, [data])

    return (
        <div className="h-[500px]">
            <ResponsivePie
                data={data}
                margin={{ top: 0, right: 50, bottom: 80, left: 50 }}
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
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                legends={[
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
                ]}
            />
        </div>
    );
};

export default pieChart;
