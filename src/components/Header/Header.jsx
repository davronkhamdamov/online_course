import "./Header.css"
import { Link, useLocation } from "react-router-dom"
import { IoMdOpen } from "react-icons/io"
import { useAuth } from "./../../context/Auth.context"
import Dropdown from "react-bootstrap/Dropdown"
const Header = () => {
  const location = useLocation()
  const { currentUser, logout } = useAuth()
  if (["/login", "/signup", "/forget-password"].includes(location.pathname)) {
    return
  }
  return (
    <header>
      <div className="d-flex align-items-center gap-4 w-75">
        <div className="d-flex align-items-center justify-content-center">
          <p className="icon_text">Online course</p>
        </div>
        <div className="categories">
          <p>Categories</p>
          <div className="dropDawnCategories">
            <div>
              {new Array(10).fill("#").map((e, i) => {
                return (
                  <div
                    key={i}
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      minWidth: "270px",
                      width: "100%",
                      height: "40px"
                    }}
                  >
                    Development
                    <IoMdOpen />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="searchWrapper">
          <input type="text" placeholder="Search anything" />
        </div>
      </div>
      {currentUser ? (
        <Dropdown>
          <Dropdown.Toggle>{currentUser.email} </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/profile">Profile</Dropdown.Item>
            <Dropdown.Item onClick={logout}>Log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <div className="authWrapper">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </header>
  )
}

export default Header
