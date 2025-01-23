/**
 * 
 * @param {event} event 
 */

function navBarCollapse(event){

    // Ha buborkozás van az oldalon egy esmény miatt akkor zárja be a navbart!

    if(event.bubbles){
        document.getElementById('navbarNav').classList.remove('show');
    }
    


}

export default navBarCollapse;