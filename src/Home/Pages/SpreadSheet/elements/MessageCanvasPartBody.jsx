import { collection, deleteDoc, doc } from "firebase/firestore";
import { getAppdb } from "../../../../Firebase/indexFirbease";
import LoadingComp from "../../../../Shared/Components/LoadingComp";
import {  useState } from "react";

/**
 * 
 * @param {Array} messagearray 
 * @returns 
 */
const MessageCanvasPartBody = ({messagearray,RefreshDatas}) =>{

    const {event: refresh,SetEvent,setClickedItem} = RefreshDatas;
    

    const [redner, setRender] = useState(false)

    let loadComp =  <LoadingComp displayText="Üzenet törölve"/>;
    let notLoadComp = <span></span>

    let text = (<span></span>);

    /**
     * 
     * @param {Event} event 
     */
    const handleDeletemessage = async (event) =>{
        /**
         * @type {HTMLButtonElement}
         */
        const btnEl = event.target;
        const docKey = btnEl.dataset.dockey
        // console.log(docKey)

        const fireBaseDataBase = getAppdb();
        const msCollection = collection(fireBaseDataBase,"CustomersMessages");
        const docRef =  doc(msCollection,docKey)
        await deleteDoc(docRef)

        setRender(true)
        setTimeout(()=>{
        setRender(false)
        SetEvent(!refresh)
        },700)

    }

 

    if(!(messagearray instanceof Array)){
        return
    }
    else{

        text = messagearray.map((item,index)=>{

            const mainKeyArray = Object.keys(item);
            const StringMainKey = String(mainKeyArray)
            // console.log(StringMainKey);

            const miniObj = item[mainKeyArray];
            // console.log(miniObj)
            return(

                <section className="message"  key={index}>
                    <h5>{miniObj?.zipCode} {miniObj?.localAddres}</h5>
                    <h6>{miniObj?.customerName}</h6>
                    <p>{miniObj?.description}</p>
                    <button data-dockey={StringMainKey} onClick={(event)=>handleDeletemessage(event)} type="button" className="btn-close" aria-label="Törlés"></button>
                </section>
            )

        })


        }


    return(
        <>
        {redner === false ? notLoadComp  : loadComp}
        {text}
        </>
    )


}

export default MessageCanvasPartBody;