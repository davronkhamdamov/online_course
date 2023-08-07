import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default Layout
