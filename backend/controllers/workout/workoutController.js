import asyncHandler from 'express-async-handler';

import Workout from '../../models/workoutModel.js';

//@descr Add new workout
//@routes Post api/workouts
//@access private

export const addWorkout = asyncHandler(async (req, res) => {
    const { name, exercisesIds } = req.body;

    const workout = await Workout.create({
        name,
        exercises: exercisesIds,
    });

    res.json(workout);
});
