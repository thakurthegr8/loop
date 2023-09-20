import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";
import config from "..";

const app = initializeApp(config);

const db = getFirestore(app);

export default db;
