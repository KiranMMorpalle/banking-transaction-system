import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import { AuthGuard } from "@kiranmmorpalle/common-types";
import Course from "./pages/course/Course";
import EditCourse from "./pages/course/EditCourse";
import AddCourse from "./pages/course/AddCourse";

const Register = lazy(() => import("./pages/auth/Register"));
const Login = lazy(() => import("./pages/auth/Login"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));

const NotFound = lazy(() =>
  import("@kiranmmorpalle/common-types").then((module) => ({
    default: module.NotFound,
  }))
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      // <AuthGuard>
      <Layout />
      // </AuthGuard>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        Component: Home,
      },
      {
        path: "courses",
        children: [
          {
            index: true,
            Component: Course,
          },
          {
            path: "add",
            Component: AddCourse,
          },
          {
            path: "edit/:id",
            Component: EditCourse,
          },
        ],
      },
    ],
  },
  {
    path: "auth",
    children: [
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "forgot-password",
        Component: ForgotPassword,
      },
      {
        path: "reset-password/:token",
        Component: ResetPassword,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default routes;
