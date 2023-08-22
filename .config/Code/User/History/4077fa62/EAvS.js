async function getData(){
    try{
        const url = new URL(`https://api-js-study.glitch.me`)

        const res = await fetch(url)
        
        console.log( await res.json())
    }catch(err){
        console.log('Error fetching the api: ' + err)
        console.log('Trying to fetch again')
        /* setTimeout(()=> getData(), 5000) */
    }
}

getData()
export {
    getData
}