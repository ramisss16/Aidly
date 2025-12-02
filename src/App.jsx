import Navbar from "../component/navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
        <Navbar />
      <Outlet />
    </div>
    
    
  );
};

export default App;
