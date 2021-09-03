import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  if (props.dataPoints.length > 0) {
    const amounts = props.dataPoints.map((dataPoint) => dataPoint.value);
    const maxValue = Math.max(...amounts);
    return (
      <div className="chart">
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
            label={dataPoint.label}
          />
        ))}
      </div>
    );
  }
  return <></>;
};
export default Chart;
