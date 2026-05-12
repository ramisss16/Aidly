// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import "./index.css";

// import App from "./App";
// // import LoginOptions from "./pages/LoginOption";
// // import LoginPage from "../src/pages/loginpage";   
// // import SignUp from "./pages/SignupHospital";
// // import BankDetails from "./pages/BankDetails";
// // import EmergencyDetails from "./pages/EmergencyDetails";
// // import TermsAndConditions from "./pages/TermsAndConditions";
// // import Thankyou from "./pages/Thankyou";
// // import HospitalDashboard from "./pages/HospitalDashboard";
// // import AmbulanceNav from "../component/AmbulanceNav";
// // import AddAmbulance from "./Ambulance/Addambulance";
// // import AmbulancePage from "./Ambulance/Ambulace";
// // import Ambulancedas from "./Ambulance/ambulancedas";
// // import CrewDetails from "./Ambulance/CrewDetails";
// import ClinikDashboard from "./clinik/dashboard";





// const ErrorPage = () => <h1 className="text-center mt-20 text-3xl">Page Not Found</h1>;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     errorElement: <ErrorPage />,
//     children: [

//       {
//         path: "/",    
//         element: <Ambulancedas />,
//         errorElement: <ErrorPage />,
//         children: [
//            {
//         path: "Ambulance",    
//         element: <AmbulancePage />,
//       },
//         ]

//       },

//       {
//         path: "AddAmbulance",    
//         element: <AddAmbulance />,
//       },
//       {
//         path: "CrewDetails",    
//         element: <CrewDetails />,
//       },


//     ],
//   },
// ]);
// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <App />,
// //     errorElement: <ErrorPage />,
// //     children: [
// //       {
// //         path: "/",    
// //         element: <LoginOptions />,
// //       },
// //       {
// //         path: "/login",
// //         element: <LoginPage />,
// //       },
// //       {
// //         path: "/hospital-dashboard",
// //         element: <HospitalDashboard />,
// //       },
// //       {
// //         path: "/sign-up-hospital",
// //         element: <SignUp />,
// //       },
// //       {
// //         path: "/bank-details",
// //         element: <BankDetails />,
// //       },
// //       {
// //         path: "/emergency-details",
// //         element: <EmergencyDetails />,
// //       },
// //       {
// //         path: "/terms-and-conditions",
// //         element: <TermsAndConditions />,
// //       },
// //       {
// //         path: "/thank-you",
// //         element: <Thankyou />,
// //       }
// //     ],
// //   },
// // ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import LoginOptions from "./pages/LoginOption";
import Login from "./pages/Loginpage";
import HigherManager from "./modules/clinik/highermanager/HigherManagerdashboard";
import Doctordas from "./modules/clinik/doctor/DoctorDashboard";
import Receptionist from "./modules/clinik/receptionist/ReceptoinistDashboard";
import Servicemanager from "./modules/clinik/servicemanager/ServiceManager";
import AddPatientRecord from "./modules/common/AddPatient";
import ViewPatients from "./modules/common/PatientRecords";
import Patientsuccess from "./modules/common/Recordsuccess";
import AttendancePage from "./modules/common/Staffattendance";
import StaffsuccessMessage from "./modules/common/staffSuccess";
import AttendenceReacordPage from "./modules/common/AttendenceRecord";
import DashboardLayout from "./DashBoardLayout";
import RoleDashboard from "./Role";
import MyPatients from "./modules/clinik/doctor/Mypatient";
import Myapointment from "./modules/clinik/doctor/Today'sapointment";
import SignupHospital from "./pages/SignupHospital";
import SignupClinic from "./pages/SignupClinic";


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
        errorElement: <ErrorPage />,
      },

      {
        path: "/login/:role",
        element: <Login />
      },

      {
        path: "/sign-up-clinik",
        element: <SignupClinic />
      },


    ],
  },

  // dashboardnav

  {
    path: "/dashboard",
    element: <DashboardLayout />,

    children: [

      {
        path: ":role",
        element: <RoleDashboard/>,


      },

    
    ]
  },

 
    {
        path: "/dashboard/:role/addpatient",
        element: <AddPatientRecord />
      },

      {
        path: "/dashboard/:role/viewpatient",
        element: <ViewPatients />
      },
      {
        path: "/dashboard/:role/successful",
        element: <Patientsuccess />
      },

      {
        path: "/dashboard/:role/staffattendence",
        element: <AttendancePage />
      },

      {
        path: "/dashboard/:role/staffsuccessful",
        element: <StaffsuccessMessage />
      },

      {
        path: "/dashboard/:role/viewAttendence",
        element: <AttendenceReacordPage />
      },

      // for doctor

      {
        path: "/dashboard/doctor/mypatient",
        element: <MyPatients/>
      },

      {
        path: "/dashboard/doctor/today'sappointmment",
        element: <Myapointment/>
      },

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

