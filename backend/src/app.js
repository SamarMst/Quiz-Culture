const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
dotenv.config();
const app = express();
app.use(cors());
app.use(morgan("dev"));

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.post('/', (req, res)=>{
    const {name} = req.body;
    
    res.send(`Welcome ${name}`);
})
mongoose.connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
    app.listen(PORT, (error) =>{
    if(!error)
        console.log(`Server is running on http://localhost:${PORT}`);
    else 
        console.log("Error occurred, server can't start", error);
    }
);
});

