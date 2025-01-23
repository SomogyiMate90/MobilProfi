import { getAppdb } from "../../../../Firebase/indexFirbease";
import { addDoc, collection } from "firebase/firestore";


const dataToUpdateFirebaseDataBase = async (oneGreatObj) =>{
    const dataBase = getAppdb();
    const Cmessage =  collection(dataBase,"CustomersMessages");
    await addDoc(Cmessage,oneGreatObj);
    // console.log(addNewDoc);
    // console.log(oneGreatObj);
   
}

export default dataToUpdateFirebaseDataBase;