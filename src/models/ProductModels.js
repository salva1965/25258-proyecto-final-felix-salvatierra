import fs from "fs/promises";
import path from "path";

//let products = [];

const __dirname = import.meta.dirname
// console.log(__dirname, "products.json");

// fs.readFile(path.join(__dirname, "products.json"), "utf-8", (error, data) => {
//     if (error) {
//         return console.error(error);
//     }
//     products = JSON.parse(data);
//     console.log(products);
// });
import { db } from "./firebase.js";
import { collection , getDocs , doc ,getDoc} from "firebase/firestore";
const productsCollection = collection(db, "products");


export const getProducts = async () => {
    try {
        const snapshot = await getDocs(productsCollection);
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error(error);
    }
};
export const getProductById = async (id) => {
    try {
    const productID = doc(productsCollection, id);
    const snapshot = await getDoc(productID);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
    } catch (error) {
        console.error(error);
    }
    
};

// export const deleteId = async (id) => {
//     try {
//     const data = await fs.readFile(path.join(__dirname, "products.json"), "utf-8");
//     const products = JSON.parse(data);
//     const product = products.find(item => item.id == id);
    
//     return (product);
//     } catch (error) {
//         console.error(error);
//     }
// };
export const creatProduct =async (name,precio,categoria) => {
    const product = {
        id: Date.now(),
        name,
        precio,
        categoria
    };
    try {
    const data = await fs.readFile(path.join(__dirname, "products.json"), "utf-8");

    const products = JSON.parse(data);
    
    products.push(product);

    await fs.writeFile(path.join(__dirname, "products.json"), JSON.stringify(products));

    return product;
    
    } catch (error) {
        console.error(error);
    };
}
// export const getProducts = async () => {
//     try {
//         const data = await fs.readFile(path.join(__dirname, "products.json"), "utf-8");
//     const products = JSON.parse(data);
//     return products;
//     } catch (error) {
//         console.error(error);
//     }
    
// // };