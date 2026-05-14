const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploads");
const controller = require("../controllers/hospitalAmbulanceController");

router.post(
  "/register",
  upload.fields([
    { name: "driverPhoto", maxCount: 1 },
    { name: "driverIdProof", maxCount: 1 },
    { name: "vehicleRegistrationCertificate", maxCount: 1 },
    { name: "vehiclePhoto", maxCount: 1 }
  ]),
  controller.registerHospitalAmbulance
);
router.post("/login", controller.loginHospitalAmbulance);

module.exports = router;