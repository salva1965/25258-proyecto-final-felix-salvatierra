import { getProducts } from "../models/products-datos.js";

 export const index = (req,res) => {
    const products = getProducts();
    res.json(products);
};
