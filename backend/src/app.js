import express from"express";

const app = express(); // create an express app

app.use(express.json()); // use the json middleware to parse json bodies


import userRouter from './routes/user.routes.js';

app.use("/api/v1/users", userRouter); // use the user router for all /api/v1/users routes   

// example route: http://localhost:4000/api/users/register

export default app;