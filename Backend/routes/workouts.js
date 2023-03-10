const express = require("express");
const Workout = require('../models/workoutModel')

const router = express.Router();

// Get all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "Get all workouts" });
});

//get a single workout
router.get("/:id", (req,res) => {
  res.json({ mssg: "get a single workout" });
});

// POST a new workout
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body   //things requesting from schema
    
    try {
      const workout = await Workout.create({title, load, reps})   //creating new document
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  })

// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a workout" });
});

// UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a workout" });
});
//exporting the routes
module.exports = router;
