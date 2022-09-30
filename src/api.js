import { collection, getDocs, query, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from './firebase/config';

// CREATE
export const createItem = async (obj) => {
    const colRef = collection(db, 'Camisetas');
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE
export const updateItem = async (id, obj) => {
    const colRef = collection(db, 'Camisetas');
    await updateDoc(doc(colRef, id), obj)
}

// READ
export const getItems = async () => {
    const colRef = collection(db, 'Camisetas');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}



// DELETE
export const deleteItem = async (id) => {
    const colRef = collection(db, 'Camisetas');
    await deleteDoc(doc(colRef, id));
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}