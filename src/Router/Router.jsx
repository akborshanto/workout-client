import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Signup/Signup";
import TrainerDetailsPage from "../Pages/TrainerDetailsPage/TrainerDetailsPage ";
import Trainers from "../Pages/Trainers/Trainers";
import Classes from "../Pages/Classes/Classes";
import TrainerBookPage from "../Pages/TrainerBookpage/TrainerBookPage";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import BeTrainerForm from "../Pages/TrainerDetailsPage/BecomeTrainerPage";
import DHome from "../Pages/Dashboard/D-Home/DHome";
import Profile from "../Pages/Dashboard/DProfile/Profile";
import PrivateRoute from "./PrivateRoute";
import Newsletter from "../Pages/Newsletter/Newsletter";
import DTrainers from "../Pages/Dashboard/DTrainers/DTrainers";
import DBlance from "../Pages/Dashboard/DBlance/DBlance";
import DAddClass from "../Pages/Dashboard/DAddClass/DAddClass";
import AdminRoute from "./AdminRoute";
import DAtivity from "../Pages/Dashboard/DAtivity/DAtivity";
import DAllApplication from "../Pages/Dashboard/DAllAplictions/DAllApplication";
import ApplicationDetails from "../Pages/Dashboard/DAllAplictions/ApplicationDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import TrainerRoute from "./TrainerRoute";
import DManageClasses from "../Pages/Dashboard/DManageClasses/DManageClasses";
import AddSession from "../Pages/Dashboard/DManageClasses/AddSession";
import ComonRoute from "./ComonRoute";
import AddForum from "../Pages/Dashboard/Addforum/AddForum";
import Community from "../Pages/Community/Community";
import Bookedtrainer from "../Pages/Dashboard/BookedTrainer/Bookedtrainer";



const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/trainerDetails",
        element: <TrainerDetailsPage />,
      },
      {
        path: "/become-a-trainer",
        element: (
          <PrivateRoute>
            <BeTrainerForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/trainers",
        element: <Trainers />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/trainers/:id",
        element: <TrainerDetailsPage />,
      },
      {
        path: "/trainerbooking",
        element: (
          <PrivateRoute>
            <TrainerBookPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DHome />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: (
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/activity",
            element: (
              <PrivateRoute>
                <DAtivity />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/bookedTrainers",
            element: (
              <PrivateRoute>
                <Bookedtrainer />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/subscriber",
            element: (
              <AdminRoute>
                <Newsletter />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/allTrainers",
            element: (
              <AdminRoute>
                <DTrainers />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/balance",
            element: (
              <AdminRoute>
                <DBlance />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/addClasses",
            element: (
              <AdminRoute>
                <DAddClass />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/allAplication",
            element: (
              <AdminRoute>
                <DAllApplication />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/applicationDetails/:id",
            element: (
              <AdminRoute>
                <ApplicationDetails />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/manageClasses",
            element: (
              <TrainerRoute>
                <DManageClasses />
              </TrainerRoute>
            ),
          },
          {
            path: "/dashboard/addSession",
            element: (
              <TrainerRoute>
                <AddSession />
              </TrainerRoute>
            ),
          },
          {
            path: "/dashboard/addForum",
            element: (
              <ComonRoute>
                <AddForum />
              </ComonRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default Router;
