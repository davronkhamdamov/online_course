import "./App.css"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./context/Auth.context"
import root from "./routes/Router"
import { RouterProvider } from "react-router-dom"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <AuthProvider>
          <RouterProvider router={root} />
        </AuthProvider>
      </div>
    </Container>
  )
}

export default App
