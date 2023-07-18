import "./topBox.scss"
import {topDealUsers} from "../../data"

const TopBox = () => {
  return (
    <div className="topBox">
        <h1>Top Deals</h1>
        {topDealUsers.map(user=>(
            <div key={user.id} className="listItem">
                <div className="user">
                    <img src={user.img} alt={user.username}/>
                    <div className="userText">
                        <span className="username">{user.username}</span>
                        <div className="mailAmount">
                        <span className="email">{user.email}</span>
                        <span className="amount">${user.amount}</span>
                        </div>
                    </div>

                </div>
                
            </div>
        ))}
    </div>
  )
}

export default TopBox