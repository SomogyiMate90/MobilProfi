import handlePopUp from "../../../../Functions/handlePopUp";
import PopUpIframe from "../../../../Shared/Components/PopUpIframe";

const TdAddress = ({content,setClickedItem, addressFullArray})=>{

    const handleSelectAddressAndPlayTransform = (event,isMMobil=false) =>{

        if(!isMMobil){
        handlePopUp(event,"no-show","clicked-show",false);
            const targetTd = event.target;
            /**
             * @type {HTMLTableRowElement}
            */
           const targetTr = targetTd.parentElement;
           const allTd = targetTr.querySelectorAll('td');
           let selectedArray = [];
           allTd.forEach(td=>{
               const textObj = td.dataset;
               if(textObj.mytext){
                   selectedArray.push(textObj.mytext);
                }
            })
            console.log(selectedArray)
            setTimeout(()=>{
                setClickedItem([...selectedArray])
            },1200) // Legyen ideje lefutni a CSS mozgó tulajdonságnak
        }
        else if(isMMobil){
            handlePopUp(event,"clicked-show","no-show",true)
            const targetTd = event.target;
            /**
             * @type {HTMLTableRowElement}
            */
           const targetTr = targetTd.parentElement;
           const allTd = targetTr.querySelectorAll('td');
           let selectedArray = [];
           allTd.forEach(td=>{
               const textObj = td.dataset;
               if(textObj.mytext){
                   selectedArray.push(textObj.mytext);
                }
            })
            // console.log(selectedArray)
            setTimeout(()=>{
                setClickedItem([...selectedArray])
            },2000) // Legyen ideje lefutni a CSS mozgó tulajdonságnak

        }
       
        
    }

return(


    <td title="Egy kattintás rögzíti a térképet, kettő kattintás beemeli az adatokat az eseménykezelő adatlapba" data-mytext={content} className="popUp-parent"    key={`${Math.random()}-${content}`}
                // számítógép
                onMouseOver={(event)=>handlePopUp(event,"show","no-show",false)} 
                onMouseLeave={(event)=>handlePopUp(event,"no-show","show")}
                onClick={(event)=>handlePopUp(event,"clicked-show","show",false)}
                onDoubleClick={(event)=>handleSelectAddressAndPlayTransform(event)}
               
                // Érintő képrenyő
                onTouchStart={(event)=>handleSelectAddressAndPlayTransform(event,true)}
             
   
                >{content}
                    <div className="no-show">
                        <PopUpIframe Address={[addressFullArray.slice(0,2)]}/>
                    </div>

                </td>


)


}
export default TdAddress;