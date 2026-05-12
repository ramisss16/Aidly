// const mongoose = require("mongoose");

// const clinicSchema = new mongoose.Schema({
//   adminId: {
//     type: String,
//     unique: true
//   },

//   clinicName: { type: String, required: true },
//   adminName: { type: String, required: true },

//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },

//   phone: { type: String, required: true },

//   address: String,
//   city: String,
//   state: String,
//   pincode: String,

//   licenseNumber: String,
//   licenseDocument: String, 

//   specialistsCount: {
//   type: String,
//   enum: ["single", "multiple"]
//   },
  
//   doctorsCount: {
//   type: String
// },
// visitMode: {
//   type: String,
//   enum: ["online", "offline"]
// },

//   hasSupportStaff: {
//   type: Boolean
// },

//   isVerified: { type: Boolean, default: false }

// },
  
// { timestamps: true });

// module.exports = mongoose.model("Clinic", clinicSchema); 


const mongoose = require("mongoose");

const clinicSchema = new mongoose.Schema({
  adminId: {
    type: String,
    unique: true
  },

  clinicName: {
    type: String,
    required: true
  },

  adminName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  address: String,
  city: String,
  state: String,
  pincode: String,

  licenseNumber: String,

  // CLOUDINARY FILE URLS
  licenseDocument: String,
  aadhaarDocument: String,
  panDocument: String,
  clinicLogo: String,

  specialistsCount: {
    type: String,
    enum: ["single", "multiple"]
  },

  doctorsCount: String,

  visitMode: {
    type: String,
    enum: ["online", "offline"]
  },

  hasSupportStaff: Boolean,

  isVerified: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

module.exports = mongoose.model("Clinic", clinicSchema);