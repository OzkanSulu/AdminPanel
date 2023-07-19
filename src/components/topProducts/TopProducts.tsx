import { PieChart, Pie,  Cell, ResponsiveContainer } from "recharts";
import "./topProducts.scss";


const data = [
  { name: "Macbook Air", value:400, color:"#0088FE",id:1 },
  { name: "Airpods", value:300, color:"#00C49F", id:2 },
  { name: "Thinkpad X1", value:200, color:"#FFBB28",id:3 },
  { name: "Razer Mouse", value:200, color: "#FF8042",id:4 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TopProducts = () => {
  return (
    <div className="topProducts">
      <div className="title">
        <h5>Top Selling Products</h5>
      </div>
      <div className="pieChart">
        <div className="graph">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart >
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="text">
            {data.map(data=>(
                <div key={data.id}>
                    <div className="row">
                    <div className="space" style={{backgroundColor:`${data.color}`}}></div>
                    <span>{data.name}</span>
                    </div>
                    
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
