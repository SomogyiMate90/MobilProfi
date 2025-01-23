/**
 * 
 * @param {Event} event 
 * @type  {HTMLHtmlElement}
 * 
 */


function handlePopUp(event,addClassName,removeClassName,boolean=false){

    // utólagos dom manupiláció. useImmreReducerrel lehetett volna máskép megoldani

   
    const targetEl = event.target;

    // /**
    //  * @type {HTMLDivElement}
    //  */
    const popUpDivEl = targetEl.querySelector('div');
    // console.log(popUpDivEl);

    if(!(popUpDivEl instanceof HTMLDivElement)){
        return
    }
    if( (boolean === true) &&  (popUpDivEl !== null)){
       
        // Érintő képrenyős esemény hívásnál
        popUpDivEl.classList.remove(removeClassName);
        popUpDivEl.classList.add(addClassName);

        setTimeout(()=>{
            console.log('Letelt a ciklus')
            popUpDivEl.classList.remove(addClassName);
            popUpDivEl.classList.add(removeClassName);

        },5000)
        

        return
    }
    else{
        // Egér esemény hívásnál
        popUpDivEl.classList.remove(removeClassName);
        popUpDivEl.classList.add(addClassName);
    }
}

export default handlePopUp