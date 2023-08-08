import "./App.css"
import { AuthProvider } from "./context/Auth.context"
import root from "./routes/Router"
import { RouterProvider } from "react-router-dom"

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={root} />
    </AuthProvider>
  )
}

export default App
