// const mongoose = require("mongoose");

// const crewSchema = new mongoose.Schema({
//   operatorName: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   operatorMobile: {
//     type: String,
//     required: true,
//      match: /^\d{10}$/  // Indian mobile validation
//   },
//   operatorAadhaar: {
//     type: String,
//     required: true,
//     match: /^\d{12}$/       // 12 digit Aadhaar
//   },
//   operatorLicense: {
//     type: String,
//     required: true,
//     trim: true
//   },

//   coOperatorName: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   coOperatorMobile: {
//     type: String,
//     required: true,
//      match: /^\d{10}$/
//   },
//   coOperatorAadhaar: {
//     type: String,
//     required: true,
//     match: /^\d{12}$/
//   },
//   coOperatorLicense: {
//     type: String,
//     required: true,
//     trim: true
//   }
// });

// const ambulanceSchema = new mongoose.Schema({
//   type: {
//     type: String,
//     required: true,
//     enum: ["Basic", "ICU", "Oxygen"],
//   },

//   availability: {
//     type: String,
//     enum: ["Available", "NotAvailable"],
//     default: "Available"
//   },

//   rcNumber: {
//     type: String,
//     required: true,
//     unique: true,
//     uppercase: true,
//     trim: true
//   },

//   ownerName: {
//     type: String,
//     required: true,
//     trim: true
//   },

//   vehicleModel: {
//     type: String,
//     required: true,
//     trim: true
//   },

//   crew: {
//     type: crewSchema,
    
//   }

// }, {
//   timestamps: true
// });

// module.exports = mongoose.model("Ambulance", ambulanceSchema);

const mongoose = require("mongoose");

const crewSchema = new mongoose.Schema({
  operatorName: {
    type: String,
    required: true
  },

  operatorMobile: {
    type: String,
    required: true,
    match: /^\d{10}$/
  },

  operatorAadhaarNumber: {
    type: String,
    required: true,
    match: /^\d{12}$/
  },

  operatorAadhaarDocument: String,

  operatorLicenseNumber: {
    type: String,
    required: true
  },

  operatorLicenseDocument: String,

  coOperatorName: {
    type: String,
    required: true
  },

  coOperatorMobile: {
    type: String,
    required: true,
    match: /^\d{10}$/
  },

  coOperatorAadhaarNumber: {
    type: String,
    required: true,
    match: /^\d{12}$/
  },

  coOperatorAadhaarDocument: String,

  coOperatorLicenseNumber: {
    type: String,
    required: true
  },

  coOperatorLicenseDocument: String
});

const ambulanceSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["Basic", "ICU", "Oxygen"]
  },

  availability: {
    type: String,
    enum: ["Available", "NotAvailable"],
    default: "Available"
  },

  rcNumber: {
    type: String,
    required: true,
    unique: true
  },

  ownerName: {
    type: String,
    required: true
  },

  vehicleModel: {
    type: String,
    required: true
  },

  crew: crewSchema

}, { timestamps: true });

module.exports = mongoose.model("Ambulance", ambulanceSchema);