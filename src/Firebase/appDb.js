import { getFireBaseApp } from "../indexFirbease";
import { getFirestore } from "firebase/firestore";



let appDb = null;

export default function getAppdb(){

    if(!appDb){
        appDb = getFirestore(getFireBaseApp());
    }

    return appDb;
}