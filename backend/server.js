const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser'); 
const cors = require('cors');

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// ROUTES
const hospitalRoutes = require('./routes/HospitalRoutes');
const hospitalAmbulanceRoutes = require("./routes/hospitalAmbulanceRoutes");
const privateAmbulanceRoutes = require("./routes/privateAmbulanceRoutes");
const patientRoutes = require('./routes/patientRoutes');
const clinicRoutes = require("./routes/clinicRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const prescriptionRoutes = require("./routes/prescriptionRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const onlineDoctorRoutes = require("./routes/onlineDoctorRoutes");
const authRoutes = require("./routes/authRoutes");


app.use("/api/hospital", hospitalRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/hospital-ambulance", hospitalAmbulanceRoutes);
app.use("/api/private-ambulance", privateAmbulanceRoutes);

app.use("/api/attendance", attendanceRoutes);

// 🔥 MAIN MODULE (IMPORTANT)
app.use("/api/clinic", clinicRoutes);


// OPTIONAL (later phase)
app.use("/api/appointments", appointmentRoutes);
app.use("/api/prescriptions", prescriptionRoutes);
app.use("/api/online-doctor", onlineDoctorRoutes);

app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});