async function getData(){
    try{
        const url = new URL(`https://api-js-study.glitch.me`)

        const res = await fetch(url)
        return await res.json()
    }catch(err){
        console.log('Error fetching the api: ' + err)
        console.log('Trying to fetch again')
        setTimeout(()=> getData(), 2000)
    }
}

export {
    getData
}