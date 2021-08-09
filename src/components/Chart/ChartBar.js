import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chartBar">
      <div className="chartBar__inner">
        <div className="chartBar__fill" style={{ height: barFillHeight }}></div>
        <div className="chartBar__label">{props.label}</div>
      </div>
    </div>
  );
};

export default ChartBar;
