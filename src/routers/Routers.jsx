import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/home/Home";
import SignUp from "../signup/SignUp";
import Login from "../layout/login/Login";
import ErrorPage from "../layout/errorpage/ErrorPage";
import Dashboard from "../layout/dashboard/Dashboard";
import AllTask from "../components/AllTasks";
import OwnTasks from "../components/OwnTasks";
import AddTask from "../components/AddTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/allTasks",
        element: <AllTask />,
      },
      {
        path: "/dashboard/personalTasks",
        element: <OwnTasks />
      },
      {
        path: "/dashboard/addTask",
        element: <AddTask />
      },
    ],
  },
]);
