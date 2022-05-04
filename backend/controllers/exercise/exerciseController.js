import asyncHandler from 'express-async-handler';

import Exercise from '../../models/exerciseModel.js';

//@descr Add new exercise
//@routes Post api/exercise
//@access private

export const addExercise = asyncHandler(async (req, res) => {
    const { name, times, image } = req.body;

    const exercise = await Exercise.create({
        name,
        times,
        image,
    });

    res.json(exercise);
});
