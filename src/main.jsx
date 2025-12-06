import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import "./index.css";
import App from "./App";
import LoginOptions from "./pages/LoginOption";
import LoginPage from "../src/pages/loginpage";   
import SignUp from "./pages/SignupHospital";
import BankDetails from "./pages/BankDetails";
import EmergencyDetails from "./pages/EmergencyDetails";
import TermsAndConditions from "./pages/TermsAndConditions";



const ErrorPage = () => <h1 className="text-center mt-20 text-3xl">Page Not Found</h1>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",    
        element: <LoginOptions />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/sign-up-hospital",
        element: <SignUp />,
      },
      {
        path: "/bank-details",
        element: <BankDetails />,
      },
      {
        path: "/emergency-details",
        element: <EmergencyDetails />,
      }, {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
