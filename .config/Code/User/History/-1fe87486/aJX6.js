const putData = async(url)=>{
    const res = await fetch(url, {
        method: 'post',
        mode: 'cors'
    })

    console.log(res.status)
}

putData()