import "./navbar.scss"
import "../../styles/variable.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo"><h5>adminPanel</h5></div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon"/>
        <img src="/app.svg" alt="" className="icon"/>
        <img src="/expand.svg" alt="" className="icon"/>
        <div className="notification">
          <img src="/notifications.svg"></img>
          <span>1</span>
        </div>
        <div className="user">
          <img src="/samp.jpg" alt="user"/>
          <p>Admin</p>
        </div>
        <img src="/settings.svg" alt="" className="icon"/>
      </div>
    </div>
  )
}

export default Navbar