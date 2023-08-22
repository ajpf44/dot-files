const putData = async(url)=>{
    const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: 'Alexandre',
            age: '24'
        })
    })
    console.log(res.status)
}

const url = `https://api-js-study.glitch.me/cad`
const data= 1;

putData(url)
logData()
async function logData (){
    const  res = await fetch('https://api-js-study.glitch.me/info')
    console.log( await res.json() )
}