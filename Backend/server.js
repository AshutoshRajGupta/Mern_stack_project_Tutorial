const express = require("express");
require("dotenv").config();
const workoutRoutes = require("./routes/workouts");

//starting express app
const app = express();

//Routes
app.use("/api/workouts", workoutRoutes);

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("Listening on port no ", process.env.PORT, "!!!");
});
