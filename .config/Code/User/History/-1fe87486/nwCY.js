const putData = async(url, data)=>{
    const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data)
    })

    console.log(res.status)
}

const url = `https://api-js-study.glitch.me/cad`
const data= 

putData(url, data)