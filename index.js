import express from "express";

const app = express();
app.get("/", (req,res) => {
    res.send("hola yo");
})
import produtsRouter from "./src/routes/products-routes.js";

app.use("/api/productos",produtsRouter);

const PORT = 3000;

app.listen(PORT,() => console.log(`http://localhost:${PORT}`));
