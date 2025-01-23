import MessageCanvas from "./MessageCanvas";
import Tbody from "./Tbody";
import Thead from "./Thead";

/**
 * 
 * @param {Array} parm0 
 * @returns 
 */
const Table = ({FiraBaseData,RefreshDatas}) =>{

    let tasks;
    let messages;

    if(!(FiraBaseData instanceof Array)){
        // console.log('A Table elem nem kapott még adatokat');
        return
    }
    else{
         [messages, tasks] = FiraBaseData;
      
    }

    return(
        <div className="sheet-panel">
            <MessageCanvas messagearray={messages} RefreshDatas={RefreshDatas}/>
            <table className="table table-striped table-hover">
                <Thead />
                <Tbody TaskArray={tasks} RefreshDatas={RefreshDatas}/>
            </table>
        </div>
    )



}
export default Table;