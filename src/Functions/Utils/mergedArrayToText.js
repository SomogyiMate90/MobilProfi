
/**
 * 
 * @param {Array} array 
 * @param {string} caracter 
 */

function mergedArrayToText(array,caracter){

    const cathedText = array.reduce( (acc,item)=>{

        acc += `${caracter}${item}`;
        return acc;
    })

    return cathedText;
}

export default mergedArrayToText;