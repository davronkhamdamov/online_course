import "./Header.css"
const Header = () => {
  return (
    <header>
      <div className="d-flex align-items-center gap-4 w-75">
        <div className="d-flex align-items-center justify-content-center">
          <p className="icon_text">Online course</p>
        </div>
        <div className="categories">
          <p>Categories</p>
        </div>
        <div className="searchWrapper">
          <input type="text" placeholder="Search anything" />
        </div>
      </div>
      <div className="authWrapper">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header>
  )
}

export default Header
