import * as uti from '../../../../Functions/Utils/indexUtils.js';
import TdAddress from './TdAddress.jsx';

/**
 * 
 * @param {{key: String}} TaskArray 
 */

const Tbody = ({TaskArray, RefreshDatas})=>{

    const {event,SetEvent,setClickedItem} = RefreshDatas
  
      let i = 1;
      let timLeft = "";


    const taskKeys = Object.keys(TaskArray);
    const now = Date.now();

    const Contents = taskKeys.map(itemKey=>{
        i++;
        
       const contentString = TaskArray[itemKey];
        const arrayContent = uti.splitTextToArray(contentString,"|");
        const expirationDate = new Date(arrayContent[3]);

        if((expirationDate < now) && (arrayContent[5] !== 'Kész')){
            timLeft = 'expired'
         }
        else if(arrayContent[5]==='Kész'){
            timLeft = "finished"
         }

        return(
            <tr className={timLeft}             key={`${i}-tr`}>
                <td                             key={i}><b>{i}</b></td>
                <td data-mytext={itemKey} className="srsz"            key={itemKey}>{itemKey}</td>
                <td data-mytext={arrayContent[0]}                         key={`${i}-${arrayContent[0]}`}>{arrayContent[0]}</td>
                <TdAddress setClickedItem={setClickedItem} content={arrayContent[1]} addressFullArray={arrayContent.slice(0,2)}/>
                <td data-mytext={arrayContent[2]}                         key={`${i}-${arrayContent[2]}`}>{arrayContent[2]}</td>
                <td data-mytext={arrayContent[3]}                         key={`${i}-${arrayContent[3]}`}>{arrayContent[3]}</td>
                <td data-mytext={arrayContent[4]}                         key={`${i}-${arrayContent[4]}`}>{arrayContent[4]}</td>
                <td  data-mytext={arrayContent[5]}                        key={`${i}-${arrayContent[5]}`}>{arrayContent[5]}</td>
            </tr>
        )

    })

    return(
        <tbody>
            {Contents}
        </tbody>
    )


}

export default Tbody;