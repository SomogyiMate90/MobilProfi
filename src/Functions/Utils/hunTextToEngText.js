/**
 * 
 * @param {String} hunText 
 */


function hunTextToEngText(hunText){
    const cathedType = typeof hunText;
        
    if(cathedType !== 'string'){
        throw new Error (`A függvény nem szöveget, hanem "${cathedType}" tipusú argomentumot kapott`)  
    }
    else if(hunText === ""){
        return hunText;
    } 
        const textInArray = hunText.split("");
    
        const transformText = textInArray.reduce( (acc,item)=>{
    
    
            // console.log(item);
    
            let letter = item;
    
            const lowerLetter = item.toLowerCase();
    
            switch(true){
                case item === " " : letter = "-";
                break;
                case lowerLetter === "á" : letter = "a";
                break;
                case lowerLetter === "é" : letter = "e";
                break;
                case lowerLetter === "í" : letter = "i";
                break;
                case lowerLetter === "ó"|| lowerLetter === "ö" || lowerLetter === "ő" : letter = "o";
                break;
                case lowerLetter === "ú"|| lowerLetter === "ü" || lowerLetter === "ű" : letter = "u";
                break;
                default: letter =  item.replace(new RegExp(/W/,""))
            }
    
            acc += letter;
            return acc;
        },"");
    
        // console.log(transformText);
    
        return transformText;
}

export default hunTextToEngText;

// module.exports = {
//     hunTextToEngText
// }