const putData = async(url)=>{
    const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: {
            name: 'Alexandre',
            age: '24'
        }
    })

    console.log(res.status)
}

const url = `https://api-js-study.glitch.me/cad`
const data= 1;

putData(url)