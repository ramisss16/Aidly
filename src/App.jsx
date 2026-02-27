// import Navbar from "../component/navbar";
// import { Outlet } from "react-router-dom";

// import Addambulace from "./Ambulance/Addambulance";

// const App = () => {
//   return (
//     <div>
//         <Navbar />
//       <Outlet />
//     </div>
    
    
//   );
// };

// export default App;


// import AmbulanceNav from "../component/AmbulanceNav";

import Ambulancenav from "../component/AmbulanceNav"
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <Ambulancenav/>
      <Outlet/>
    </div>
  )
}

export default App;



