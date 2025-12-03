import { db } from "./firebase.js";
import { collection , getDocs , doc ,getDoc ,addDoc ,deleteDoc} from "firebase/firestore";
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

export const creatProduct = async (data) => {
    try {
        const newDoc = await addDoc(productsCollection, data);
        return { id: newDoc.id, ...data };
    } catch (error) {
        console.error(error);
    }
};
export const deleteProduct = async (id) => {
    try {
        const productID = doc(productsCollection, id);
        const snapshot = await getDoc(productID);

        if (!snapshot.exists()) {
            return false;
        }
        await deleteDoc(productID);
        return true;
    } catch (error) {
        console.error(error);
    }
};