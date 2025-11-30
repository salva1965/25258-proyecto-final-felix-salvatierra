import { Router } from "express";
import { getProducts , getProductById , creatProduct  } from "../controllers/productsControllers.js";

const router =Router();



router.get("/api/products", getProducts);

router.get("/api/products/:id", getProductById);

router.post("/api/products", creatProduct );

//router.delete("/api/products/:id" , deleteProduct );

export default router;