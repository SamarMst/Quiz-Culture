const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
dotenv.config();
const app = express();
app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require('path')
app.use('/static', express.static(path.join(__dirname,"..", 'Static Files')))

app.get('/file', (req, res)=>{
    res.sendFile(path.join(__dirname,'../sunflower.jpg'));
});




const PORT = process.env.PORT;


app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.get('/hello', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello GFG Learner!</h1>");
});

app.post('/', (req, res)=>{
    const {name} = req.body;
    
    res.send(`Welcome ${name}`);
})

app.listen(PORT, (error) =>{
    if(!error)
        console.log(`Server is running on http://localhost:${PORT}`);
    else 
        console.log("Error occurred, server can't start", error);
    }
);