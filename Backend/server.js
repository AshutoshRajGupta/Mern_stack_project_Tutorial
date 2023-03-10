const express = require("express");
require("dotenv").config();
const workoutRoutes = require("./routes/workouts.js");
const mongoose=require('mongoose')

//starting express app
const app = express();

//Middleware
app.use(express.json())

//Routes
app.use("/api/workouts", workoutRoutes);


// connect to db
mongoose.connect(process.env.MONG_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 