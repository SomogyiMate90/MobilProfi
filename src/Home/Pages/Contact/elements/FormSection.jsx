import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../mainTheme";
import getDataForm from "../../../../Functions/Utils/getDataForm";
import LoadingComp from "../../../../Shared/Components/LoadingComp";
import dataToUpdateFirebaseDataBase from "./dataToUpdateFirebaseDataBase";

const FormSection = () =>{
    const theme = useContext(ThemeContext)
    const [render, setRender] = useState(1);
    const [renderStatusComp, setStatusComp] = useState("def")
    let statusComp;

    switch(renderStatusComp){
        case "def" : statusComp =  <span></span>;
        break;
        case "uploading" : statusComp = <LoadingComp displayText={"Adatok feltöltése megkezdődött"}/>;
        break;
        case "uploaded" : statusComp = <LoadingComp displayText={"Adatok feltöltése sikeres. Hamarossan keresni fogjuk..."}/>;
        break;
        default : statusComp =  <span></span>;
    }

    const handleSubmit = (event)=>{

        const fieldsetData = getDataForm(event,"oneGreatObj")
      
        dataToUpdateFirebaseDataBase(fieldsetData);

        setStatusComp("uploading");
    
        setTimeout(()=>{
            setStatusComp("uploaded");
            console.log("Az adatfeltöltés sikeres");
            setTimeout(()=>{
            setRender(render+1); // mezők ürítése
            setStatusComp("def")
           },1800)
        },1200)
    }

 


    return(
        <>
        <div key={render+10}>{statusComp}</div> 
        <section>
              <form key={render} onSubmit={(event)=>handleSubmit(event)} className={`row ${theme} mx-1`}>
                <fieldset className="contact-form-fieldset mx-auto col-12 col-lg-10">
                  <legend id="my-legend">Kapcsolat</legend>
                  <div className="mb-3">
                    <label htmlFor="customerName" className="form-label">
                      Név
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="customerName"
                      name="customerName"
                      placeholder="Minta János"
                      required
                      maxLength={20}
                      
                      
         
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="zipCode" className="form-label">
                      Irányítószám
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      id="zipCode"
                      name="zipCode"
                      placeholder="1165"
                      min={1000}
                      max={9999}
                      required
             
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="localAddres" className="form-label">
                      Város, utca, házszám
                    </label>
                    <input
                      className="form-control"                    
                      type="text"
                      id="localAddres"
                      name="localAddres"
                      placeholder="Budapest XVI. ker, Veres Péter út 1"
                      required
                      maxLength={60}
              
                    />
                  </div>
                  <div className="mb-3 d-flex flex-column">
                    <label htmlFor="description" className="form-label">
                      Munka leírása
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      cols="10"
                      rows="5"
                      placeholder="Miben segíthetünk? Telefonszám?"
                      required
                      maxLength={255}
                  
                    ></textarea>
                  </div>
                  <button
                    id="my-id-style"
                    type="submit"
                    className="btn btn-primary"
                  >
                    Üzenet küldése
                  </button>
                </fieldset>
              </form>
            </section>
            </>
    )



}

export default FormSection;