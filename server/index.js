import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';


const app=express();



app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/posts',postRoutes);
// connect to cloud atlas of mongoDB
const CONNECTION_URL = 'mongodb+srv://ayushmanpaul007:20LQwBHoH3cnntLd@cluster0.9qbk3l0.mongodb.net/?retryWrites=true&w=majority'

const PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on port: http://localhost:${PORT}`)))
.catch((error)=>console.log(error.message))

//mongoose.set('useFindAndModify',false)