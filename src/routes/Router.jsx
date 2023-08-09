import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import { PrivateRoutes } from "../utils/PrivateRoute"
import Signup from "./Auth/SignUp"
import Login from "./Auth/Login"
import Profile from "./Profile/Profile"
import ForgetPassword from "./Auth/ForgetPassword"
import UpdateProfile from "./Profile/Update"
import Home from "./Home/Home"
import Layout from "./layout/Layout"
import CourseDetails from "./Course_details/CourseDetails"

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/course/:id" element={<CourseDetails />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="forget-password" element={<ForgetPassword />} />
    </Route>
  )
)

export default Router
