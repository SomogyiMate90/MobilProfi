import MyHelmetComp from "../../../Shared/Components/MyHelmetComp.jsx";
import metaAndOpengraphTag from "../../../Functions/metaAndOpengraphTag.js";
import WelcomeSection1 from "./elements/WelcomeSection1.jsx";
import WelcomeSection2Harmnika from "./elements/WelcomeSection2Harmnika.jsx";

const WelcomeComp = () => {

  const  metaTags  = metaAndOpengraphTag.welcomeComp;

  // console.log('metaTags');
  // console.log(metaTags);

  return (
    <>
    <MyHelmetComp CaughtData={metaTags}/>
    <main className="welcome-page container">
      <h1>Üdvözöljük a MobilProfi Szolgáltatásoknál!</h1>
      <div className="row">
       <WelcomeSection1/>
       <WelcomeSection2Harmnika/>
     
      </div>
    </main>
    </>
  );
};

export default WelcomeComp;
