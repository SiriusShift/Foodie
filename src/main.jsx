import * as React from "react";
import * as ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import ErrorPage from "./pages/ErrorPage";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import './index.css';
import { AuthProvider } from "./contexts/AuthContext"


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signin",
    element: <Signin />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);