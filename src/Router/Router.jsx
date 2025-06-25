import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root/Root";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import PrivateRoute from "../AuthContext/PrivateRoute";
import AddTask from "../Pages/AddTask/AddTask";
import BrowseTask from "../Pages/BrowseTask/BrowseTask";
import MyPostedTask from "../Pages/MyPostedTask/MyPostedTask";
import TaskDetails from "../Components/DetailsTask/TaskDetails";
import Error from "../Pages/Error/Error";
import Loading from "../Components/Loading/Loading";
import FeatureDetails from "../Components/DetailsTask/FeatureDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "/signin", Component: SignIn },
      { path: "/signup", Component: SignUp },
      {
        path: "/addtask",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/browse-tasks",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () =>
          fetch(
            "https://freelance-task-marketplace-server-gilt.vercel.app/add-task"
          ),
        Component: BrowseTask,
      },
      {
        path: "/my-posted-tasks",
        element: (
          <PrivateRoute>
            <MyPostedTask></MyPostedTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/browse-tasks/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) =>
          fetch(
            `https://freelance-task-marketplace-server-gilt.vercel.app/add-task/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <TaskDetails></TaskDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/feature-details/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) =>
          fetch(
            `https://freelance-task-marketplace-server-gilt.vercel.app/feature-tasks/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <FeatureDetails></FeatureDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
