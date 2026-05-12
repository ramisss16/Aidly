import { useParams } from "react-router-dom";
import Receptionist from "../src/modules/clinik/receptionist/ReceptoinistDashboard";
import HigherManager from "../src/modules/clinik/highermanager/HigherManagerdashboard";
import Servicemanager from "../src/modules/clinik/servicemanager/ServiceManager";
import Doctordas from "../src/modules/clinik/doctor/DoctorDashboard";

function RoleDashboard() {

  const { role } = useParams();

  if(role === "receptionist"){
    return <Receptionist/>
  }

  if(role === "highermanager"){
    return <HigherManager/>
  }

  if(role === "doctor"){
    return <Doctordas/>
  }

  if(role === "servicemanager"){
    return <Servicemanager/>
  }

  return <h1>Invalid Role</h1>

}

export default RoleDashboard;