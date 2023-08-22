async function reCall(){
    const url = `https://tungsten-branch-appendix.glitch.me/recall`
  
    const randomTime =  Math.floor(Math.random()*2) +3

    setTimeout(()=>{
        console.log(randomTime)
        reCall()
    }, randomTime * 1000)
}


reCall()