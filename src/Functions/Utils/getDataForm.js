import mergedArrayToText from "./mergedArrayToText";
import vaccineFun from "./vaccineFun";
import { v4 as uuidv4 } from 'uuid';
/**
 * 
 * @param {Event} event 
 */
function getDataForm(event,instructions){
    event.preventDefault();
    const formData = new FormData(event.target);
    const formArray = Array.from(formData.entries());

  
    let returnedData;

    if(instructions==='oneGreatObj'){

        returnedData = formArray.reduce( (acc,item)=>{
            
            const [key, value] = item;  // mindig tömbnek kell írni a kibontásnál, mert egyébként is tömbként jön
            const sterilizedValue = vaccineFun(value)
            
        acc[key] = sterilizedValue;
        return acc    
        },{});
    }
    else if(instructions==='keyMergedArrayinObj'){

        let array =[];
        let key;

        formArray.forEach( (item,index)=>{

            const [k, value] = item;
            const sterilizedValue = vaccineFun(value);
        
            
            if(index === 0){
               item[1] === 'new-value' ? key = uuidv4() : key = item[1] ;

                return;
            }
            else{
                array.push(sterilizedValue);
            }
        });

        const mergedString = mergedArrayToText(array,"|")
        returnedData = {[key]:mergedString}
    }

    // console.log(returnedData);


    return returnedData;
}

export default getDataForm;