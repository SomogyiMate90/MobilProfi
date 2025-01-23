import MyHelmetComp from "../../../Shared/Components/MyHelmetComp";
import metaAndOpengraphTag from "../../../Functions/metaAndOpengraphTag";
import FirstSection from "./elements/FirstSection";
import FormSection from "./elements/FormSection";

const ContactComp = () => {

  
   

    
  
  
    const metTags = metaAndOpengraphTag.contact
  
    return (
      <>
      <MyHelmetComp CaughtData={metTags}/>
      <main className="contatc-page container align-content-center">

        <div className="row align-items-center m-xxl-auto col-xxl-10">
          <FirstSection />
          <div className="mx-auto col-xl-6 mb-2">
            <FormSection />
          </div>
        </div>
      </main>
      </>
    );
  };
  
  export default ContactComp;
  