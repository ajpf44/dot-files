function reCall(){
    const url = `https://tungsten-branch-appendix.glitch.me/recall`
  
    const randomTime =  (Math.floor(Math.random()*2) +4) * 60 //in minutes

    setTimeout( async ()=>{
        const res = await fetch(url)
        console.log(
            `status: res.status`
            )
        reCall()
    }, randomTime * 1000 )
}

reCall()