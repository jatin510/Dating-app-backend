// Express 
const express = require('express');
const app = express();

// Mongoose:- DB connection
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://localhost/')
const db= mongoose.connection

db.on('error', (error) => {console.error(error)})
db.once('open', () => {console.log("Connected to DB")})


app.use(express.json())


// User Router
const userRouter = require('./routes/users')
app.use('/users', userRouter);

// Server running on port 3000
app.listen(3000, () =>{
    console.log("Seever is up and running")
})