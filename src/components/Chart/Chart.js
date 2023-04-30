import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValue=props.dataPoints.map(x=>x.value);
    const maxValue=Math.max(...dataPointValue);

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
};

export default Chart;
