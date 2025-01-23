
/**
 * 
 * @param {*} arg 
 * @param {String} argToText 
 */

function vaccineFun(arg){

    const argToText = String(arg);

    const textWithOutSpecdialCaracter1 = argToText.replaceAll(new RegExp(/[^\w\sáÁéÉíÍóÓöÖúÚüÜűŰőŐ@\.\-]/g),"");

    return textWithOutSpecdialCaracter1;    
}

export default vaccineFun;