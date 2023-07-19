import TopBox from "../../components/topBox/topBox"
import "./home.scss"
import Chart from "../../components/charts/Chart"
import VisitChart from "../../components/visitChart/VisitChart"
import TopProducts from "../../components/topProducts/TopProducts"

const Home = () => {
  return (
    <div className="home">
      <div className="box box1"><TopBox/></div>
      <div className="box box2"><Chart title="Total User" number="11.456" percentage={38}/></div>
      <div className="box box3"><Chart title="Total Revenue" number="$48.413.13" percentage={8}/></div>
      <div className="box box4"><TopProducts/></div>
      <div className="box box5"><Chart title="Total Products" number="11.456" percentage={-.5}/></div>
      <div className="box box6"><Chart title="Total Ratio" number="11.456" percentage={1.2}/></div>
      <div className="box box7"><VisitChart/></div>
      <div className="box box8"><Chart title="Total Visit" number="38.456" percentage={4.6}/></div>
      <div className="box box9"><Chart title="Profit Earned" number="$16.456" percentage={1.6}/></div>
    
    </div>
  )
}

export default Home