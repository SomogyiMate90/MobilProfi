import { useContext } from "react";
import { ThemeContext } from "../../Home/mainTheme.js"


const LoadingComp = ({displayText}) =>{
    const theme = useContext(ThemeContext);

    return(
        <div className={`loading-comp ${theme}`}>
            <div className="content">
                <h1>{displayText}</h1>
            </div>
        </div>
    )
}

export default LoadingComp;