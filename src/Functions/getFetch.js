


function getFetch(url){


const responseData = fetch(url)
    .then(response=>{
        if(!response.ok){
            throw new Error(response.status)
        }
        else{
            const jsonData = response.json();
            return jsonData;
        }
    })
    .then(data=>{
        // console.log(data)
        return data
    })
    .catch(e=>{
        console.log('Hiba van. A hiba sáttusza:')
        console.log(e);
    })
    return responseData;
}

export default getFetch;