import "./Header.css"
import { Link, useLocation } from "react-router-dom"
import { IoMdOpen } from "react-icons/io"
const Header = () => {
  const location = useLocation()
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
      <div className="authWrapper">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </header>
  )
}

export default Header
