/**
 * 
 * @param {String} Props 
 * @returns 
 */

const PopUpIframe = ({Address})=>{

const [zipCode,address] = Address[0];  // Vélhetően tömbként mentettem tömbe. Jelenleg jól működik
const adressString = `${zipCode} ${address}}`


const addressUrl = encodeURI(adressString);



const url = `https://www.google.com/maps?q=${addressUrl}&output=embed`
    return(
   
        <iframe title={`${adressString} helyszín`} key={url} src={url} 
            width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>

    )

}

export default PopUpIframe;