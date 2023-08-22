const putData = async(url, data)=>{
    const res = await fetch(url, {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify(data)
    })

    console.log(res.status)
}

const url = 
const data= {
    name: 'Alexandre',
    age: '24'
}
putData()