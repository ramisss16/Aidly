const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser'); 
const cors = require('cors');


app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(bodyParser.json()); // req.body

const PORT = process.env.PORT || 3000;

// import the router file
const hospitalRoutes = require('./routes/HospitalRoutes');
const ambulanceRoutes = require('./routes/ambulanceRoutes');

app.use("/hospital", hospitalRoutes);
app.use("/ambulance", ambulanceRoutes);



app.listen(PORT , () =>{
    console.log("server is running on port 300")
})