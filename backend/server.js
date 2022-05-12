import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';

//@routes
import userRoutes from './routes/userRoutes.js';
import exercisesRoutes from './routes/exerciseRoutes.js';
import workoutsRoutes from './routes/workoutRoutes.js';

//@ Config
import { dbConnect } from './config/db.js';

//@middleware
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

dbConnect();

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/exercises', exercisesRoutes);
app.use('/api/workouts', workoutsRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server start'));
