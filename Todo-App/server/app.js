import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

// CORS configuration - Move this to the top
const corsOptions = {
    origin: 'https://kaushalam-digital-task-todo-list-7e2bqk9tb.vercel.app', // Default to your Vercel URL if env is not set
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow cookies to be sent with requests
};

// Enable CORS with the above configuration
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
import user from '../server/routes/user.js';
import todo from '../server/routes/todo.js';

app.use('/user', user);
app.use('/todo', todo);

// Pre-flight request handler (CORS pre-flight)
app.options('*', cors(corsOptions));

export default app;
