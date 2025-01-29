import { getAppdb } from "../../../../Firebase/indexFirbease";
import { addDoc, collection } from "firebase/firestore";


const dataToUpdateFirebaseDataBase = async (oneGreatObj) =>{

    try{
        const dataBase = getAppdb();
        const Cmessage =  collection(dataBase,"CustomersMessages");
        await addDoc(Cmessage,oneGreatObj);
        
    }
    catch(e){
        alert('Hálózati hiba történt!\n\n Kérem ismételje meg a kitöltés újra!')
    }
   
}

export default dataToUpdateFirebaseDataBase;