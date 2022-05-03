import mongoose from 'mongoose';

export const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(
            'mongodb://localhost:27017/workout-app'
        );

        console.log(`Mongo DB connected ${connect.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}