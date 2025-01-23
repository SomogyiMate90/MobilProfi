import { useContext } from "react";
import { ThemeContext } from "../../Home/mainTheme.js";

const Footer = () =>{

    const theme = useContext(ThemeContext)

    return(
        <footer className={`${theme} px-3 py-1 d-flex flex-column flex-md-row justify-content-evenly align-items-center`}>
            <div className="d-lg-flex flex-row gap-5 justify-content-evenly">
                <div className="text-center">
                    <p className="mb-1">
                        A weboldalt fejesztette: Somogyi Máté
                    </p>
                    </div>
                <div className="text-center">
                    <p className="mb-1 mx-xl-5">
                        Kapcsolat: 06/30-123-4567
                    </p>
                </div>
            </div>
            <div className="d-lg-flex felx-row gap-5 justify-content-evenly">
                <div className="text-center">
                    <p className="mb-1">
                        somogyimate713@gmail.com
                    </p>
                </div>
                <div className="text-center">
                    <p className="mb-1 mx-xl-5">
                        Egyéb text vagy ikon
                        {/* <a href="#">További munkáim</a>  */}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;



