/**
 * 
 * @param {String} hunText 
 */


function hunTextToEngText(hunText){

    const textInArray = hunText.split("");

    const transformText = textInArray.reduce( (acc,item)=>{
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
            case lowerLetter === "ú"|| lowerLetter === "ü" : letter = "u";
            break;
            default: item.replace(new RegExp(/W/,""))
        }

        acc += letter;
        return acc;
    },"");
    return transformText;
}

export default hunTextToEngText;