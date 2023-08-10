import "./Footer.css"
import { useLocation } from "react-router-dom"
const Footer = () => {
  const location = useLocation()
  if (["/login", "/signup", "/forget-password"].includes(location.pathname)) {
    return
  }
  return (
    <footer className="w-100 d-flex justify-content-center text-white">
      <p className="mt-2">© {new Date().getFullYear()} powered By</p>
    </footer>
  )
}

export default Footer
