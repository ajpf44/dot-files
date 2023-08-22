async function reCall(){
    const url = `https://tungsten-branch-appendix.glitch.me/recall`
  
    const randomTime =  (Math.floor(Math.random()*2) +4) * 60 //in minutes

    setTimeout(()=>{
        await fetch()
        reCall()
    }, randomTime * 1000 )
}


reCall()