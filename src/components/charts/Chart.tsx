import { ResponsiveContainer, LineChart, Line,Tooltip } from "recharts";
import "./chart.scss";
import { Link } from "react-router-dom";
import {AiFillCaretDown,AiFillCaretUp } from "react-icons/ai"

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

type Props={
    title:string,
    number:number | string,
    percentage:number,
}

const Chart = (props:Props) => {
  return (
    <div className="cartContainer">
      <div className="leftChart">
        <h5 className="title">{props.title}</h5>
        <span className="number">{props.number}</span>
        <Link to="/" className="link">View All</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            
            <LineChart width={300} height={100} data={data}>
            <Tooltip
            contentStyle={{background:"transparent",border:"none"}}
            labelStyle={{display:"none"}}
            position={{x:20,y:30}}
            />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <div className="percDiv">
            {props.percentage>0? <AiFillCaretUp style={{color:"green"}}/> : <AiFillCaretDown style={{color:"red"}}/>}
          <span className="percentage" style={{color: props.percentage>0?"green":"red"}}>{props.percentage}%</span>
          </div>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default Chart;
