import cors from "cors";
import "dotenv/config";
import express from "express";
import productRouter from "./src/routes/productRouter.js";

const app=express();

app.use(cors());

app.use(express.json());

app.use(productRouter);

app.use((req,res,next) => {
    res.status(404).json({error:"Ruta no Definida"});
});

const PORT= process.env.PORT || 3005;

app.listen(PORT,() => console.log(`http://localhost:${PORT}`));