import { useContext } from "react";
import { ThemeContext } from "../../Home/mainTheme.js"


const LoadingComp = ({displayText='Töltés...'}) =>{
    const theme = useContext(ThemeContext);

   let arrayText = null;

    if(Array.isArray(displayText)){
        arrayText = displayText.map((item,index)=>{
            return(
                <span key={`main-span-${index}`}>
                <span key={index}>{String(item)}</span>
                <br key={`br-${index}`} />
                </span>
            )
        })
    }
    else if(typeof displayText !== "string"){
        arrayText='Töltés...';
        console.error('Egyszerű szöveget, vagy tömböt vár a Loading componens')    
    }

    

    return(
        <div className={`loading-comp ${theme}`}>
            <div className="content">
                    <h1>{arrayText || displayText}</h1>
            </div>
        </div>
    )
}

export default LoadingComp;