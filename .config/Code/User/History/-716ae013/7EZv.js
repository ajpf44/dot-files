async function reCall(){
    const url = `https://tungsten-branch-appendix.glitch.me/recall`
  
    const randomTime =  Math.floor(Math.random()*2) +4

    setTimeout(()=>{
        console.log(randomTime)
        reCall()
    }, randomTime * 1000)
}


reCall()