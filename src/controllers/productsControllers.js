//import  productService from "../services/productServices.js";
import * as model from "../models/ProductModels.js";

export const getProducts = async (req,res) => {
    const {category} = req.query;
    const products = await model.getProducts();
    if (category) {
        const productsFiltered = products.filter((item) =>
        item.categoria.includes(category));
    
    res.json(productsFiltered);
    return;
    }
    res.json(products);
};

export const getProductById = async (req,res) => {
    
    const {id} =req.params;
    const product = await model.getProductById(id);
    if (!product) {
        res.status(404).json({error:"Producto no encontrado"});
        return;
    }
    res.json(product);
};

export const creatProduct = async (req,res) =>{
    
    if ( typeof req.body.name == undefined ){
        return res.status(422).json({error: "El nombre es obligatorio"});
    };
    
    const {name,precio,categoria} = req.body;

    const product =  await model.creatProduct(name,precio,categoria);

    res.status(201).json(product);
};

export const deleteProduct = async (req,res) => {
    
    const {id} =req.params;
    const product = await deleteId(id);
    if (!product) {
        res.status(404).json({error:"Producto no encontrado"});
        return;
    }
    res.json({product:"eliminado"});
};