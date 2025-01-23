import { Route, Routes } from "react-router";
import * as pages from "../Home/Pages/indexPages.js"


const ComponentSelector = ({useStatLog}) => {
  const [isLog, setLog] = useStatLog



  return (


   
        <Routes>
          <Route path="/" element={<pages.WelcomeComp />} />
          <Route path="/Rólunk" element={<pages.AboutUs />} />
          <Route path="/Rólunk/:url" element={<pages.Collages />} />
          <Route path="/Kapcsolat" element={<pages.ContactComp />} />
          <Route path="/Bejelentkezés" element={<pages.Login useStatLog={useStatLog} />} />
          <Route path="/Munkafüzet" element={<pages.SpreadSheet isLog={isLog} />} />;        
          <Route path="/*" element={<pages.NotFound404 />} />

          
        </Routes>
  



  );
};

export default ComponentSelector;
