import "./visitChart.scss"
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
    
  } from "recharts";

 
  const data = [
    {
      name: "Jan",
      new: 590,
      returners: 800,
      total: 1390,
      
    },
    {
      name: "Feb",
      new: 610,
      returners: 850,
      total: 1460,
    },
    {
      name: "March",
      new: 800,
      returners: 1000,
      total: 1800,
    },
    {
      name: "May",
      new: 810,
      returners: 1040,
      total: 1050,
    },
    {
      name: "June",
      new: 1000,
      returners: 1200,
      total: 2200,
    },
    {
      name: "July",
      new: 1100,
      returners: 1300,
      total: 2400,
    }
  ];

const VisitChart = () => {
  return (
    <div className="visitChart">
        <div className="title">
            <h5>Total Visit</h5>
        </div>
        <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="new" fill="#8884d8" stroke="red" />
        <Bar dataKey="returners" barSize={20} fill="orange" />
        <Line type="monotone" dataKey="total" stroke="yellow" />
        
      </ComposedChart>
        </ResponsiveContainer>
        
    </div>
    </div>
  )
}

export default VisitChart