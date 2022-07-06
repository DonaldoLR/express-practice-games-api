require('dotenv').config();
const express = require('express'); 
const mongoose = require('mongoose'); 

const app = express(); 

app.use(express.json()); 
app.use((req,res, next) => {
    console.log(req.path, req.method); 
    next();
})

app.use('/', (req,res) => res.status(200).json({message: "connected"}))

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Connected to DB`)
    })
}).catch((error) => console.log(error))