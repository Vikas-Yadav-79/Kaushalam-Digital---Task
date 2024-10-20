import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

// CORS configuration - Move this to the top

const corsOptions = {
    origin: (origin, callback) => {
        // Allow requests from your frontend domain
        const allowedOrigins = [
            'https://kaushalam-digital-task-todo-list.vercel.app',
            'https://kaushalam-digital-task-todo-list-7e2bqk9tb.vercel.app', // if you have multiple possible frontend URLs
        ];

        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true); // Allow request
        } else {
            callback(new Error('CORS policy blocked request'), false); // Block request
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow credentials (cookies)
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle pre-flight requests (OPTIONS)
app.options('*', cors(corsOptions));

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


export default app;
