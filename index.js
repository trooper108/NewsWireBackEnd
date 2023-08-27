const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('DataBase is Connectd');
})
.catch((err)=>{
    console.log(err)
})

const app = express();
app.use(express.json())

app.use(cors());

app.get('/',(req,res)=>{
    res.send('work');
});


const newsRoutes = require('./routes/news');
app.use(newsRoutes);


const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server started ${port}`);
});