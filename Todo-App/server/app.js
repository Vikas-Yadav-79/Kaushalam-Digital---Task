import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
import user from '../server/routes/user.js'
import todo from '../server/routes/todo.js'

app.use('/user', user)
app.use('/todo', todo)

app.use(cors({
    origin: process.env.FRONTEND_URL || 'https://kaushalam-digital-task-todo-list-7e2bqk9tb.vercel.app', // Use environment variable or fallback URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    credentials: true, // Allow cookies to be sent with requests
}));

export default app