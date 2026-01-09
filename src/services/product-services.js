import { collection, getDocs, } from "firebase/firestore";
import { db } from "../config/firebase";

export const getAllProducts = async () => {
    const collectionRef = collection(db, 'products');
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
    }));
};

// // Fetch one product by id
// export const getProductById = async (id) => {
//   const docRef = doc(db, 'products', id);
//   const snapshot = await getDoc(docRef);

//   if (!snapshot.exists()) {
//     return null;
//   }

//   return {
//     id: snapshot.id,
//     ...snapshot.data(),
//   };
// };