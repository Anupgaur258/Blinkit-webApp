import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config(); // Ensure this is at the top
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDb from './config/connectDB.js';

const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}));

app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined'));
app.use(helmet({
    crossOriginResourcePolicy: false
}));

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.json({
        message: "server is running on port " + PORT
    });
});

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log("server is running ", PORT)
    })
}); // Ensure this is called after dotenv.config()
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});