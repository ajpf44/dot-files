async function reCall(){
    const url = `https://tungsten-branch-appendix.glitch.me/recall`
  
    const randomTime =  Math.floor(Math.random()*2) +2

    setTimeout(()=>{
        console.log(randomTime)
    }, randomTime * 1000)
}