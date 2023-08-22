const putData = async(url, data)=>{
    const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data)
    })

    console.log(res.status)
}

const url = `https://api-js-study.glitch.me`
const data= {
    name: 'Alexandre',
    age: '24'
}

putData(url, data)