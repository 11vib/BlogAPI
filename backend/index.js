import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import blogRoutes from '../Node_API/routes/blogRoutes.js';
import authorRoutes from '../Node_API/routes/authorRoutes.js';

dotenv.config();

const app = express();

const port = process.env.PORT;
const mongodb = process.env.MONGO;

app.use(express.json());

mongoose.connect(mongodb);
const db = mongoose.connection;
db.on('error',console.error.bind(console,'mongoose connection error'));
db.once('open',()=>{
    console.log('connected go mongodb');
})

app.use("/blog",blogRoutes);
app.use('/author',authorRoutes);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
