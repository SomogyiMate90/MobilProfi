import { useContext, useState } from "react";
import * as layout from '../Shared/layouts/indexLayout.js'
import { ThemeContext } from "./mainTheme.js";
import { BrowserRouter } from "react-router-dom";
import ComponentSelector from "../Routes/ComponentSelector.jsx";
import navBarCollapse from "./navBarCollapse.js";

//Téma beállítás ok
const MainPG = () => {
  const theme = useContext(ThemeContext);
  const [actualTheme, setTheme] = useState(theme);
  const [isLog, setLog] = useState(false);

  // const navBarBubling = (event)=>navBarCollapse(event);


  return (
    <BrowserRouter>
      <ThemeContext.Provider value={actualTheme}>
        {/* <div onClick={navBarBubling} id="container-div" className={`${actualTheme} container-fluid p-0`}> */}
        <div onClick={(event)=>navBarCollapse(event)} id="container-div" className={`${actualTheme} container-fluid p-0`}>
          <div className={`page-default col-xxl-10  mx-auto ${actualTheme}`}>
            {/* <layout.Header setTheme={setTheme} LogValue={isLogin} setLogOut={setLogin} changeLoginKey={setKey}/> */}
            <layout.Header setTheme={setTheme} Logfun={{isLog, setLog}}/>
            <ComponentSelector useStatLog={[isLog, setLog]}/>
            

            <layout.Footer />
          </div>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default MainPG;
