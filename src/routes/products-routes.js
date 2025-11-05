import { Router } from "express";
const router = Router();
import { index } from "../controllers/products-controllers.js";


router.get("/",index );

export default router;