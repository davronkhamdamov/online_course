import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import { PrivateRoutes } from "../utils/PrivateRoute"
import Signup from "./Auth/SignUp"
import Login from "./Auth/Login"
import Profile from "./Profile/Profile"
import ForgetPassword from "./Auth/ForgetPassword"
import UpdateProfile from "./Profile/Update"

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Profile />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="forget-password" element={<ForgetPassword />} />
    </Route>
  )
)

export default Router
