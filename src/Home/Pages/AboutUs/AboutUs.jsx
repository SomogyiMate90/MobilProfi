import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import * as SharedComp from "../../../Shared/Components/indexShares.js"
import metaAndOpengraphTag from "../../../Functions/metaAndOpengraphTag.js";
import getFetch from "../../../Functions/getFetch.js";
import PortfoliComp from "./elements/PortfoliComp.jsx";



const AboutUs = () =>{
    const metaTags = metaAndOpengraphTag.aboutUs;
    const [eployesArray,setEployesArray] = useImmer([]);
   
    const everyData = async () =>{
        try{
            const getEmloyesArray = await getFetch('/assets/colleagues/emplojeyes.json');
            const getEmloyesDescription = await getFetch('/assets/colleagues/emploeyesMoreDescription.json');
            setEployesArray([getEmloyesArray,getEmloyesDescription])
            const badArray = eployesArray.some(item=>item ===undefined)
            if(badArray){
                throw new Error('Rosz adatlekérés')
            }
        }
        catch{
            setEployesArray([]);
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            everyData();
        },1000);
    },[])
    

    // console.log(eployesArray)

     

    let selectedComp;

    switch(true){
        case eployesArray.length === 0 : selectedComp = (<SharedComp.LoadingComp displayText="Töltés..."/>);
        break;
        case eployesArray.some(item=>item===undefined) : selectedComp = <SharedComp.FailedDataComp/>;
        break;
        case true : selectedComp = <PortfoliComp dataArray={eployesArray}/>
        break;
        default: selectedComp = <SharedComp.FailedDataComp/>;
    }

    

    // console.log(metaTags);
    
    return(
        <>
        <SharedComp.MyHelmetComp CaughtData={metaTags}/>
     
        <main className="about-us">
            <img src="/assets/img/GroupPic.jpg" alt="Csoprtkép" />
            {
                // fullfiled === false ? <span></span> : <h1>Munkatársak</h1>
            }
     
            {
                selectedComp
            }

        </main>
        </>
    )

}

export default AboutUs;