import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();


const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = [
            'https://kaushalam-digital-task-todo-list.vercel.app',
            'https://kaushalam-digital-task-todo-list-7e2bqk9tb.vercel.app', 
        ];

        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true); 
        } else {
            callback(new Error('CORS policy blocked request'), false); 
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, 
};

app.use(cors(corsOptions));

app.options('*', cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

import user from '../server/routes/user.js';
import todo from '../server/routes/todo.js';

app.use('/user', user);
app.use('/todo', todo);



export default app;
