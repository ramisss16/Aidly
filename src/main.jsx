import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
// import LoginOptions from "./pages/LoginOption";
// import LoginPage from "../src/pages/loginpage";   
// import SignUp from "./pages/SignupHospital";
// import BankDetails from "./pages/BankDetails";
// import EmergencyDetails from "./pages/EmergencyDetails";
// import TermsAndConditions from "./pages/TermsAndConditions";
// import Thankyou from "./pages/Thankyou";
// import HospitalDashboard from "./pages/HospitalDashboard";
// import AmbulanceNav from "../component/AmbulanceNav";
import AddAmbulance from "./Ambulance/Addambulance";
import AmbulancePage from "./Ambulance/Ambulace";
import Ambulancedas from "./Ambulance/ambulancedas";
import CrewDetails from "./Ambulance/CrewDetails";


 


const ErrorPage = () => <h1 className="text-center mt-20 text-3xl">Page Not Found</h1>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
   
      {
        path: "/",    
        element: <Ambulancedas />,
        errorElement: <ErrorPage />,
        children: [
           {
        path: "Ambulance",    
        element: <AmbulancePage />,
      },
        ]

      },
    
      {
        path: "AddAmbulance",    
        element: <AddAmbulance />,
      },
      {
        path: "CrewDetails",    
        element: <CrewDetails />,
      },
     
    
    ],
  },
]);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",    
//         element: <LoginOptions />,
//       },
//       {
//         path: "/login",
//         element: <LoginPage />,
//       },
//       {
//         path: "/hospital-dashboard",
//         element: <HospitalDashboard />,
//       },
//       {
//         path: "/sign-up-hospital",
//         element: <SignUp />,
//       },
//       {
//         path: "/bank-details",
//         element: <BankDetails />,
//       },
//       {
//         path: "/emergency-details",
//         element: <EmergencyDetails />,
//       },
//       {
//         path: "/terms-and-conditions",
//         element: <TermsAndConditions />,
//       },
//       {
//         path: "/thank-you",
//         element: <Thankyou />,
//       }
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
