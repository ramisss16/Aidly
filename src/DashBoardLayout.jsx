import { Outlet } from "react-router-dom";
import AmbulanceNav from "../component/AmbulanceNav";

function DashboardLayout() {
  return (
    <div>
      <AmbulanceNav />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;