import { Router } from "express";
import { getProducts , getProductById , creatProduct , deleteProduct} from "../controllers/productsControllers.js";
import { login } from "../controllers/auth-controllers.js";
const router =Router();



router.get("/api/products", getProducts);

router.get("/api/products/:id", getProductById);

router.post("/api/products", creatProduct );

router.delete("/api/products/:id" , deleteProduct );

router.post("/api/products/login", login );

export default router;