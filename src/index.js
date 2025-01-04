// import { connectDb } from "./db/connect_db.js";
import dotenv from 'dotenv';
import connectDb from './db/connectdb.js';
import express from 'express'
const app = express();
dotenv.config();

connectDb().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
}).catch(() => {
    console.log("MONGO db connection failed !!! ", err);
});