
function startFirstWelcomePanel(){

    console.log("lefutott a defer script");


    const happenedAlrediDivKey = 'happanedDiv';
    const happanedAlrediDivValue = 'isRaned'

    const isRanedScript = localStorage.getItem(happenedAlrediDivKey);

    if(isRanedScript !== happanedAlrediDivValue){

        // console.log(isRanedScript)


        localStorage.setItem(happenedAlrediDivKey,happanedAlrediDivValue);
    
        const bodyEl = document.getElementById('body-element');
        
        const alertDiv = document.createElement('div');
    
        bodyEl.append(alertDiv);
    
        alertDiv.classList.add('alert-panel-of-first-use');
        const h1text = 'Figyelem!'
        const pText1 = 'Ez a weboldal egy webfejlesztői projektmunka';
        const pText2 = 'A weboldalon található cég a képzelet szüleménye.\nA folytatáshoz kattints a gombra';
    
        const newH1El = document.createElement('h1');
        const newP1El = document.createElement('p');
        const newP2El = document.createElement('p');
        const newBtn = document.createElement('button');

        newBtn.classList.add('btn')
        newBtn.classList.add('btn-primary')
    
        
        
        
        alertDiv.append(newH1El);
        alertDiv.append(newP1El);
        alertDiv.append(newP2El);
        alertDiv.append(newBtn);
        
        newH1El.innerText = h1text;
        newP1El.innerText = pText1;
        newP2El.innerText = pText2;
        newBtn.innerText = 'Megértettem';
    
        
    
        // console.log(alertDiv);
    
        newBtn.addEventListener('click',()=>{
    
            alertDiv.remove();
        })

    }



  
}

startFirstWelcomePanel();

