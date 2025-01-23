import { initializeApp } from "firebase/app";
import firbeasConfig from '../config/firebaseConfig.json';


let firBaseApp = null;



export default function getFireBaseApp(){

    if(!firBaseApp){
        firBaseApp = initializeApp(firbeasConfig)
    }


    return firBaseApp;
}