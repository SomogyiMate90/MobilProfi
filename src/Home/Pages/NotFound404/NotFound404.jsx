import { useContext } from "react";
import { ThemeContext } from "../../mainTheme";


const NotFound404 = () =>{
    const theme = useContext(ThemeContext)

    return(
        <main className={`not-found-page ${theme} d-flex justify-content-center align-items-center`}>
            <h1>A keresett oldal nem létezik</h1>
        </main>
    )

}

export default NotFound404;