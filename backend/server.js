import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import colors from 'colors';

//@routes

import userRoutes from './routes/userRoutes.js';

//@ Config
import { dbConnect } from './config/db.js';

dotenv.config();

dbConnect();

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server start'));
