import "./Footer.css"
const Footer = () => {
  return (
    <footer className="position-fixed bottom-0 w-100 d-flex justify-content-center text-white">
      <p className="mt-2">© {new Date().getFullYear()} powered By</p>
    </footer>
  )
}

export default Footer
