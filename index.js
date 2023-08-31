import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from "./routes/ProductRoute.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(ProductRoute);

app.listen(5500, ()=>{
    console.log('Server up and running...');
});